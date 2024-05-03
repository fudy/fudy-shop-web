<template>
    <a-layout-content class="my-layout-content">
        <div class="home">
            <a href="/" style="color:white">首页</a>
        </div>
        <div class="item-basic">
            <a-row type="flex" >
                <a-col flex="400px">
                   <a-image :width="400" :height="400" :src="mainImageSrc"></a-image> 
                   <a-list :grid="{ gutter: 24, column: 4}" :data-source="itemImages">
                       <template #renderItem="{ item, index }">
                            <a-list-item style="margin-top:10px;cursor: pointer" >
                                <img :width="80" :height="80" :src="item.src" :class="{'active':item.active}"
                                @mouseenter="(e) => mouseEnter(e,index)"
                                /> 
                            </a-list-item>
                       </template>
                   </a-list>
                </a-col>
                <a-col flex="500px">
                    <div class="item-box">
                        <h2>{{title}}</h2>
                        <div class="item-box-line" style="background-color:#fff2e8">
                            <a-row type="flex">
                                <a-col flex="100px"><span class="item-box-label">价格</span></a-col>
                                <a-col flex="350px"><h1 style="color:red">¥ {{price}}</h1></a-col>
                                <a-col flex="50px"><span class="item-box-label">销量</span></a-col>
                                <a-col flex="auto"><span class="item-box-label"><h4>{{salesVolume}}</h4></span></a-col>
                            </a-row>
                        </div>
                        <!-- sku -->
                        <div class="item-box-line" v-for="attr in attributes" :key="attr.name">
                            <a-row type="flex">
                                <a-col flex="100px"><span class="item-box-label">{{attr.name}}</span></a-col>
                                <a-col>
                                    <a-radio-group v-model:value="attr.selectedValue" button-style="solid" @change="(e)=>optionChange(e,attr)">
                                        <a-radio-button :value="option.key" v-for="option in attr.options" :key="option.key" 
                                        :disabled="option.disabled">
                                            {{option.value}}
                                        </a-radio-button>
                                    </a-radio-group>
                                </a-col>
                            </a-row>
                        </div>
                        <!-- 数量 -->
                        <div class="item-box-line">
                            <a-row type="flex">
                                <a-col flex="100px"><span class="item-box-label">数量</span></a-col>
                                <a-col><a-input-number v-model:value="amount" :min="1" :max="10000" /></a-col>
                            </a-row>
                        </div>
                        <div style="margin-top:40px;">
                            <a-space >
                                <a-button size="large" danger @click="buy">
                                    立即购买
                                </a-button>
                                <a-button type="primary" size="large" danger style="background-color:red">
                                    <template #icon>
                                    <ShoppingCartOutlined />
                                    </template>
                                    加入购物车
                                </a-button>
                            </a-space>
                        </div>
                    </div>   
                </a-col>
            </a-row>
        </div>
        <div class="item-detail">
            <a-tabs v-model:activeKey="activeKey" type="card">
                <a-tab-pane key="1" tab="商品详情">
                    <div v-html="itemDetailInfo" ></div>
                </a-tab-pane>
                <a-tab-pane key="2" tab="商品评价">
                    <ItemFeedbackList />
                </a-tab-pane>
            </a-tabs>
        </div>
    </a-layout-content>

</template>
<script setup>
    import ItemFeedbackList from '@/components/item/ItemFeedbackList.vue';
    import { ShoppingCartOutlined } from '@ant-design/icons-vue';
    import { onMounted,reactive,ref, toRaw} from 'vue';
    import {invokeGetItem} from '@/api/item';
    import { useRoute, useRouter } from 'vue-router';
    import {useOrdersStore} from '@/stores/order';
    const ordersStore = useOrdersStore();
    const route = useRoute();
    const router = useRouter();
    const activeStyle = reactive("border:2px solid red")
    const amount = ref("1");
    const type = ref("");
    const activeKey = ref("1");
    const salesVolume = ref("");
    
    const item = reactive({});

    const price = ref(); //商品价格
    const itemImages = ref([]); //商品图片列表
    const mainImageSrc = ref(""); //商品主图
    const title = ref(""); //商品标题
    const attributes = ref([]); //商品规格属性
    const itemDetailInfo = ref("");


    const generateOrderId = () => {
        return new Date().getTime(); //先mock，后面从服务器获取
    }

    const buy = () => {
        const sku = findSelectedSKU();
        const price = sku?.price
        const image = sku?.image
        const skuKeyValue = sku?.optionValues?.[0]
        const formState = {
            itemId: route.query.id,
            amount: amount.value,
            sku: skuKeyValue,
            price: price,
            image: image,
            title: title.value
        }
        const orderId = generateOrderId();
        ordersStore.addOrder(orderId, formState);
        router.push({
            path:'/confirm-order',
            query: { orderId: orderId }
        })
    }

    const init = function(item) {
        itemDetailInfo.value = item.desc;
        salesVolume.value = item.salesVolume;
        //init price
        if (item.maxPrice) {
            price.value = item.minPrice + " - " + item.maxPrice;
        } else {
            price.value = item.minPrice + " 起";
        }
        
        //init attribute list
        if (item.attributeList) {
            item.attributeList.forEach(attr => {
                attributes.value.push({
                    name: attr.name,
                    options : attr.options,
                    selectedValue: null
                });
            })
        }
        title.value = item.title;
        if(item.imageList && item.imageList.length>0) {
            item.imageList.forEach(img => {
                itemImages.value.push({src:img, active:false});
            })
            itemImages.value[0].active = true; //默认第一个图为选中状态
            mainImageSrc.value = itemImages.value[0].src; //默认列表中第一个为主图
        }
    }
    

    const mouseEnter = function (e,index) {
        itemImages.value.forEach(element => {
            element.active = false;
        });
        itemImages.value[index].active = true;
        mainImageSrc.value = itemImages.value[index].src;
    }

    /** 获取已经选择的商品属性的列表 */
    const getSelectedOptions = function() {
        let result = [];
        attributes.value.forEach(attr => {
            if(attr.selectedValue) {
                result.push(attr.selectedValue);
            } else {
                result.push(null);
            }
        });
        return result;
    }

    /** 是否匹配上skuList里面的记录 
    */
    const match = function(sku, attrIndex, optionValue) {
        const selectedOptions = getSelectedOptions();
        for(let i=0; i<sku.optionValues.length; i++) {
            const opt = sku.optionValues[i];
            const selectedOpt = selectedOptions[i];
            if(selectedOpt && selectedOpt != opt) { //该属性已经选中，且不匹配sku
                return false;
            }
            if(i==attrIndex && optionValue != opt) { //该属性值和sku不匹配
                return false;
            }  
        }
        return true;
    }

    /** 
     * 判断一个选项是否需要置灰，返回true则置灰 
     * attrIndex 这个选项属于第几个属性
     * optionValue 这个选项的值
     * */
    const shouldOptionDisabled = function(attrIndex, optionValue){
        for(let i=0; i<item.skuList.length; i++) {
            if(match(item.skuList[i],attrIndex,optionValue)) {
                //任意一个匹配，则不置灰
                return false;
            }
        }
        return true;
    }

    /** 修改商品属性对应的选项的可用状态（是否置灰） */
    const changeOptionDisabledStatus = function(attribute) {
        for(let i=0; i<attributes.value.length; i++) {
            if(attribute && attributes.value[i].name == attribute.name) { //当前选择的选项对应的属性所对应的所有选项都不用处理
                    continue;
            }
            let options = attributes.value[i].options;
            for(let j=0; j<options.length; j++) {
                if (shouldOptionDisabled(i, options[j].key)) {
                    options[j].disabled = true;
                } else {
                    options[j].disabled = false;
                }
            }
        }
    }

    /** 按顺序清除序号在当前属性的其他已选择属性的值 */
    const clearSelectedAttr = function(attribute) {
        let clearSelected = false;
        attributes.value.forEach(attr => {
            if (clearSelected) {
                attr.selectedValue = null;
            }
            if (attr.name == attribute.name ) {
                clearSelected = true;
            }
        })
    }

    /**
     * 比较2个数组里的元素是否相同,arr1和arr2不能为空
     */
    const matchArray = function (arr1, arr2) {
        if (!arr1 || !arr2) {
            return false;
        }
        return arr1.toString() == arr2.toString();
    }

    /** 找到选中的SKU */
    const findSelectedSKU = function () {
        let selectedOptions = getSelectedOptions();
        for(let i=0; i<item.value.skuList.length; i++) {
            if(matchArray(item.value.skuList[i].optionValues,selectedOptions)) {
                return item.value.skuList[i];
            }
        }
        return null;
    }

    /** 用户选择属性的选项后触发的事件 */
    const optionChange = function (e, attribute) {
        changeOptionDisabledStatus(attribute);
        const sku = findSelectedSKU();
        if (sku) {
            //价格的联动
            price.value = sku.price;
            //图片的联动
            mainImageSrc.value = sku.image;
            //清除选中的图片的红框
            itemImages.value.forEach(element => {
                element.active = false;
            });
        }
    }

    const getItem = function(itemId) {
        invokeGetItem ({itemId:itemId}, (result)=> {
        if(result && result.success) {
            item.value = result.data;
            init(result.data);
        }
    }, (e)=> {
        console.log(e);
    });
    }

    onMounted(()=> {
        changeOptionDisabledStatus(); 
        getItem(route.query.id);
    });

</script>
<style scoped>
.home {
      background-color: rgb(61, 61, 85);
      height : 30px;
      text-align:left;
      font-size: 12px;
      font-weight: 100;
      line-height: 30px;
      padding-left : 30px;
}
.my-layout-content {
  background-color: #ffffff;
}
.item-basic {
    margin: 30px;
    min-width: 1100px;
}
.item-detail {
    margin-bottom: 300px;
    margin-left: 30px;
    text-align: left;
}
.active {
    border:2px solid red
}
.item-box {
    text-align: left;
    margin-left:20px;
    padding: 5px;
    width:600px;
    height:500px
}
.item-box-line {
    padding:10px;
}
.item-box-label {
    line-height:35px;
}
</style>