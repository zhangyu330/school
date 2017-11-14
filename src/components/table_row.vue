<template>
  <tbody>
        <tr>
            <td v-for="(item,index) in item_row" :key="index" class="bg"><span v-if="index==0" class="show" @click="table_show">{{toggle}}</span>{{item}}</td>
        </tr>
        <tr>
        <td colspan="9">
            <table class="inner-table" v-show="active">
                <tr>
                    <td>高校地区</td>
                    <td>高校名称</td>
                    <td>专业(类)</td>
                    <td>类中所含专业</td>
                    <td>选考科目范围</td>
                </tr>
                <tr v-for="(item,index) in item_table" :key="index">
                    <td>{{item.proince}}</td>
                    <td>{{item.collegeName}}</td>
                    <td>{{item.majorName}}</td>
                    <td>{{item.remark.join('、')}}</td>
                    <td>{{item.subjectRangeNames.join('、')}}</td> 
                </tr>
            </table>
        </td>
        </tr>
    </tbody>
</template>
<script>
export default {
    props:['row'],
    data(){
        return {
            item_row:[],
            item_table:[],
            active:false,
            toggle:'+'
        }
    },
    created:function(){
        let len = this.row.length;
        this.item_row = this.row.slice(0,len-1);
        // this.item_table = this.row.slice(len-1)
        this.item_table = this.row[9]
        console.log(this.item_row)
        console.log(this.item_table)
    },
    methods:{
        table_show:function(){
            this.active=!this.active
            if(this.active){
                this.toggle = '-'
            }else{
                this.toggle = '+'
            }
        }
    }
}
</script>
<style scpoed>
    tr,td{
        border:1px solid #ccc;
    }
    .bg{
        position: relative;
    }
    .show{
        position: absolute;
        width:15px;
        height:15px;
        line-height:15px;
        text-align:center;
        /*padding:0 5px;*/
        background:rgba(0,160,92,1);
        color:#fff;
        left:15px;
        top:15px;
    }
    .inner-table{
        background:#f4f4f4;
        font-size:14px;
    }
    .inner-table tr, .inner-table td{
        border:1px solid #ccc;
    }
</style>

