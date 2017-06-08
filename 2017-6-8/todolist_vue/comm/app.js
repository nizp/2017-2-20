let list = [
	{
		content:'早餐很辣',
		checked:false
	},
	{
		content:'早餐很辣2',
		checked:true
	}
];
const v = new Vue({
	el:'.todoapp',
	data:{
		list:list,
		val:''
	},
	methods:{
		keyup(){
			this.list.push({
				content:this.val,
				checked:false
			});
			this.val = '';
		}
	},
	computed:{
		allcheck:{
			get(){
				//先把选中的挑出来，
				//跟总数据对比，如果选中的length === 数据的length，说明全选
				console.log(1);
				return this.list.length === this.list.filter((e)=>{
					return e.checked;
				}).length;
			},
			set(newVal){
				console.log(2);
				this.list.forEach((e,i)=>{
					e.checked = newVal;
				});
			}
		}
	}
});