<template>
	
	<div border='1' class="college_table_list">
		<head>
			
			<div class="rows">
				<span v-for="(x,index) in college_tit">{{x}}</span>
			</div>
		</head>

			<div  class="rows" v-for='(x,index) in college_detail'>
				<span v-for="(v,ind) in x" v-if="typeof v!='object'" @click="show_flag(ind)" :class="{college_name:ind==0}" >{{v | notobj}}
				</span>
				<div class="inner_cont" v-for="(v,ind) in x" v-show="flag+'ind'" v-if="typeof v=='object'">
					<table cellpadding="3" border="1" class="tab_inner">
						<tr v-for="i in v">
							<td class="provice">{{i.province}}</td>
							<td class="sub_college_name">{{i.collegeName}}</td>
							<td class="major_name">{{i.majorName}}</td>
							<td class="remark">{{i.remark | stringify}}</td>
							<td class="subject_rangeNames">{{i.subjectRangeNames | stringify}}</td>
						</tr>
					</table>
				</div>
			</div>
	</div>

</template>

<script>

	export default {
		name:"college_tab",
		props:["college_tit","college_detail"],
		mouted:function(){
			console.log(this.college_detail);
		},
		data:function(){
			return {
				flag:false
			}
		},
		methods:{
			show_flag:function(index){
				if (index==0) {

				}
			}
		},
		filters:{
			notobj:function(data){
				if (typeof data !=="object") {
					return data;
				}
			},
			object:function(data){
				if (typeof data =="object") {
					return data;
				}	
			},
			stringify:function(data){
				return data.join(" ");
			}
		},
		computed:{

			// college_data:function(){
			// 	var _this=this;
			// 	var college_arr=[];
			// 	console.log(this.college_detail);
			// 	this.college_detail.forEach((value,index)=>{
			// 		var s=0;
			// 		var arr=college_arr[index]=[];
			// 		value.forEach((item,ind)=>{
			// 			if (typeof item != "object") {
			// 				arr[s]=item;
			// 				s++;
			// 			}
			// 		})
					
			// 	})
			// 	return college_arr; 
			// }
		}

	}

</script>
<style scoped>
	.college_table_list{
		text-align: center;
		width: 100%;
		margin-top: 30px;
	}
	.rows{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.rows span{
		width: 11.1%;
		box-sizing: border-box;
		margin: 0;

		height:50px;
		line-height: 50px;
		border:1px solid #ccc;
	}
	.college_table_list head{
		background:rgba(0, 160, 92, 1);
		color:#fff; 
	}

	.college_table_list span{
		
	}
	.inner_cont{
		width: 100%;
	}
	.tab_inner{
		border-collapse: collapse;
		width: 100%;
		background: #eee;
	}
	.tab_inner td{
		height: 50px;
	}
	.college_name{
		color: rgba(0, 160, 92, 1);
		cursor: pointer;
	}
	.provice{
		width: 100px;
	}
	.sub_college_name{
		width: 150px;
	}
	.subject_rangeNames{
		width: 100px;
	}
	/*.college_name:before {
		content: "<span class='flag'>+</span>";
	}*/
</style>