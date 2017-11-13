<template>
    <div class="school-range clearfix">
        <div class="left-title">高校层次：</div>
        <div class="right-cont">
            <filter-item v-for="(value,index) in schoolRangeList"  :key="index" :index="index" :range-object="value" :catagory="'高校层次'"></filter-item>
        </div>
    </div>
</template>
<script>
import filter_item from './filter_item.vue'
    export default {
        props:{
            schoolRangeList:{
                type:Array,
                required:true
            }
        },
        components:{
            "filter-item":filter_item
        }
    }
</script>
<style scoped>
    
</style>