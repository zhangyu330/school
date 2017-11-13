<template>
<div class="container route">
    <p class="remind">*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后会即时替换！</p>
    <ul class="tab">
        <router-link :to="{name:'overall'}" :tag="'li'" class="filter-item">综合检索</router-link>
        <router-link :to="{name:'college'}" :tag="'li'" class="filter-item">高校检索</router-link>
        <router-link :to="{name:'major'}" :tag="'li'" class="filter-item">专业检索</router-link>
    </ul>
    <router-view></router-view>
</div>
</template>
<script>
    export default {
        // name:'app',
        data(){
            return {}
        }
    }
</script>
<style scoped>
    .container{
        font-size:16px;
        min-width:960px;
        max-width:96%;
        margin:0 auto;
    }
    .remind{
        color:red;
        font-size:14px;
        line-height:40px;
    }
    .tab{
        font-size:0;
        border-bottom:1px solid #ccc;
    }
    .tab li{
        display:inline-block;
        font-size:16px;
        padding:5px 5px;
    }
    .filter-item{
        font-size:0;
        display: inline-block;
        min-width: 70px;
        text-align: center;
        cursor: pointer;
    }
    .filter-item:hover,.router-link-active {
        background: #00A15C;
        color: #fff;
    }
</style>