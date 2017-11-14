<template>
<table>
    <thead>
        <tr class="bg">
            <td v-for="(item,index) in title" :key='index'>{{item}}</td>
        </tr>
    </thead>
    <slot></slot>
</table>
</template>
<script>
    export default{
        props:{
            title:{
                required:true,
                type:Array
            }
        }
    }
</script>
<style scoped>
    .bg{
        background:rgba(0,160,92,1);
        color:#fff
    }
</style>

