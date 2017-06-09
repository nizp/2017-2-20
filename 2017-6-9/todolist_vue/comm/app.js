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
		list2:[],
		val:'',
		all:false,
		active:false,
		completed:false
	},
	methods:{
		keyup(){
			if(!this.val)return;
			this.list.push({
				content:this.val,
				checked:false
			});
			this.list2 = this.list.concat();
			this.val = '';
		},
		remove(index){
			this.list.splice(index,1);
			this.list2 = this.list.concat();
			// console.log(val);
		}
	},
	computed:{
		changeView:{
			get(){},
			set(newVal){
				this.all = false;
				this.active = false;
				this.completed = false;
				this[newVal] = true;
				/*
					要重新渲染视图
					改变this.list
					
					all [1,2,3,4]
					active [1,2]
				 */
				this.list = this.list2.concat();
				console.log(newVal)
				switch (newVal) {
					case 'all':
						this.list = this.list2.concat();
					break;
					case 'active':
						this.list = this.list.filter((e)=>{
							return !e.checked
						});
					break;
					case 'completed':
						this.list = this.list.filter((e)=>{
							return e.checked
						});
					break;
					default:
						this.list = this.list2.concat();
					break;
				}
			}
		},
		len(){
			return this.list.filter((e)=>{
				return !e.checked;
			}).length;
		},
		allcheck:{
			get(){
				//先把选中的挑出来，
				//跟总数据对比，如果选中的length === 数据的length，说明全选
				// console.log(1);
				if(!this.list.length)return false;
				
				return this.list.length === this.list.filter((e)=>{
					return e.checked;
				}).length;
			},
			set(newVal){
				// console.log(2);
				this.list.forEach((e,i)=>{
					e.checked = newVal;
				});
			}
		}
	}
});
v.list2 = list.concat();
v.all = true;
function hashs(){
  var hash = window.location.hash;
  if(hash){
    hash = hash.substring(2);
  }else{
    hash = 'all';
  }
  //触发set
  v.changeView = hash;
}
window.onhashchange = hashs;
	