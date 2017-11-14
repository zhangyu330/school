<template>
  <div class="filter-box">
		<div class="seleted-wrap  clearfix">
			<div class="left-title">已选条件：</div>
			<div class="right-cont">
				<p class="selected-item" v-if="$store.getters.selected_range!='不限'">
                    {{$store.getters.selected_range}}
                    <span @click="clearRange" class="clear-selected">x</span>
                </p>
				<p class="selected-item" v-if="$store.getters.selected_area!='不限'">
                {{$store.getters.selected_area}}
                <span @click="clearArea" class="clear-selected">x</span>
                </p>
			</div>
		</div>
		<!-- 内容 -->
		<div class="content-box">
			<div class="major-range clearfix">
				<div class="left-title">专业层次：</div>
				<div class="right-cont">
					
				</div>
			</div>
			<school-range :school-range-list="$store.state.school_range_obj"></school-range>
			<school-area :school-area-list="$store.state.school_area_obj"></school-area>	
		</div>
    <div class="remind">*科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。</div>
        <tab-view class="tab_list" :title_="tab_title" :list_="tab_left_list"></tab-view>
        <tab-view class="tab_list" :title_="tab_title" :list_="tab_right_list"></tab-view>
        <div class="clearfix"></div>
        <!--<college-tab :college_tit="college_title" :college_detail="college_detail" ></college-tab>-->
  <div class="table">
        <table-wrap :title="title_tow">
          <table-row v-for="(x,i) in row_list" :row='x' :key="i"></table-row>
        </table-wrap>
  </div>
    </div>
    
	</div>
  
</template>
<script>
import school_range from '../components/school_range.vue'
import school_area from '../components/school_area.vue'
import tab_view from '../components/table_view.vue'
import table_row from '../components/table_row.vue'
import table_wrap from '../components/table_wrap.vue'
export default {
    data:function(){
        return {
            // selected_area_item:false,
            // selected_range_item:false
            tab_title:[],
            tab_left_list:[],
            tab_right_list:[],
            title_tow: [],
            row_list:[]
        }
    },
    created:function(){ // 实例化之后，数据绑定之前
    var vm = this
      this.$http.get('src/server/schollRange.json').then(function(res){
            //console.log(res)
            let range_data =res.data.list.map((value,index)=>{
                return index==0?{value:value,selected:true}:{value:value,selected:false}
            })
            vm.$store.commit('update_school_range',range_data)
      })
      this.$http.get('src/server/schoolArea.json').then(function(res){
        let area_data =  res.data.list.map((value,index)=>{
              return index==0?{value:value,selected:true}:{value:value,selected:false}
          })
          vm.$store.commit('update_school_area',area_data)
      })
      this.$http.get("./data/general.json").then(function(res){
            vm.tab_title=res.data.result.title;
            var tab_list=res.data.result.analysisData;
            var left_arr=[];
            tab_list.forEach((value,index)=>{
              if (index<tab_list.length/2) {
                left_arr[index]=value;
              }
            });
            vm.tab_left_list=left_arr;
            var right_arr=[];
            var s=0;
            tab_list.forEach((value,index)=>{
              if (index>=tab_list.length/2) {
                right_arr[s]=value;
                s++;
              }
            });
            
            // 根据大学数据
            vm.tab_right_list=right_arr;
            vm.college_title=res.data.result.title;
            vm.college_detail=res.data.result.rows;
          
      }) 
      this.$http.get('./data/overall.json').then(function(res){
          vm.title_tow = res.data.result.title
          vm.row_list = res.data.result.rows
          console.log(vm.row_list)
      })
		},
    components:{
        'school-range':school_range,
        'school-area':school_area,
        'tab-view':tab_view,
        'table-row':table_row,
        'table-wrap':table_wrap
    },
    methods:{
        clearRange:function(){
            this.$store.commit('clearRange')
        },
        clearArea:function(){
            this.$store.commit('clearArea')
        }
    }
}
</script>

<style>
.school-range{
  margin:5px 0;
}
.filter-box {
  width: 100%;
  margin: 10px auto;
}
.seleted-wrap{
  height:30px;
  text-indent:10px;
}
.major-range{
  height:35px;
}
.content-box {
  border: 1px solid #ccc;
  padding: 10px;
  line-height: 35px;
  margin-top: 10px;
  display:flex;
  flex-direction:column;
}

.left-title, .right-cont {
  float: left;
}

.right-cont {
  width: 90%;
}

.filter-item {
  display: inline-block;
  min-width: 70px;
  text-align: center;
  padding: 0 5px;
  cursor: pointer;
}

.filter-item.selected {
  background: #00A15C;
  color: #fff;
}

.filter-item:hover {
  background: #00A15C;
  color: #fff;
}

.selected-item {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 0 5px;
}

.clear-selected {
  cursor: pointer;
}
 .tab_list{
      float: left;
    }
.tab_list:nth-child(2){
  border-right:none;
}
    .wrap{
      padding: 5px;
      font-size: 15px;
      border: 1px solid #eee;
    }
    .select_title span{
      display: inline-block;
      padding: 5px;
    }
    .select_title div{
      display: inline-block;
    }
    .select_title div span{
      display: inline-block;
      padding: 5px;
    }
    .select_wrap>div{
      line-height: 1.3;
      margin-top: 5px;
    }
    .remind{
      color: #f00;
      padding:15px 0;
    }
    .tab_container table{
      float: left;
    }
    .clearfix{
      clear: both;
    }
    .table table{
      width:100%;
      text-align: center;
      line-height: 40px;
    }
    .table td{
      line-height: 40px;
    }
</style>