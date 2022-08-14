<template>
<div class="box">
  <a-list size="small"  :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
          <span v-for="(elem, index) in item.itemList" :key="index" class="item">
              <a :href="elem.url" style="color:#222">{{elem.name}}</a>
          </span>
      </a-list-item>
    </template>
    <template #header>
      <div><h1>商品分类</h1></div>
    </template>
  </a-list>
</div>
</template>
<script setup>
const data = [
    {
        itemList : [
            { name :"水果", url : ""},
            { name :"蔬菜", url : ""},
            { name :"肉类", url : ""},
            { name :"生鲜", url : ""}
        ]
    },
    {
        itemList : [
            { name :"图书", url : ""},
            { name :"音乐", url : ""},
            { name :"软件", url : ""},
            { name :"办工", url : ""},
        ]
    },
    {
        itemList : [
            { name :"手机", url : ""},
            { name :"数码", url : ""},
            { name :"电脑", url : ""},
            { name :"电器", url : ""},
        ]
    },
    {
        itemList : [
            { name :"家居", url : ""},
            { name :"家具", url : ""},
            { name :"家装", url : ""},
            { name :"厨具", url : ""},
        ]
    },
    {
        itemList : [
            { name :"汽车", url : ""},
            { name :"房产", url : ""},
            { name :"健身", url : ""},
            { name :"娱乐", url : ""},
        ]
    },
    {
        itemList : [
            { name :"宠物", url : ""},
            { name :"运动", url : ""},
            { name :"户外", url : ""},
            { name :"室内", url : ""},
        ]
    },
    {
        itemList : [
            { name :"钟表", url : ""},
            { name :"首饰", url : ""},
            { name :"黄金", url : ""},
            { name :"白银", url : ""},
        ]
    },
    {
        itemList : [
            { name :"医药", url : ""},
            { name :"保健", url : ""},
            { name :"洗护", url : ""},
            { name :"计生", url : ""},
        ]
    }
];
</script>

<style scoped>
.box {
    border-radius: 15px;
    background-color: #efefef;
    padding: 10px;

}
.item {
    margin: 0px 20px;
    
}
</style>