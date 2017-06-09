let list = [
	// {
	// 	content:'早餐很辣',
	// 	checked:false
	// },
	// {
	// 	content:'早餐很辣2',
	// 	checked:true
	// }
];
/*
	***vue对于操作数据只可以使用下面几个方法直接操作框架中的数据
		push()
		pop()
		shift()
		unshift()
		splice()
		sort()
		reverse()
*/
var list2 = list.concat();
const v = new Vue({
	el:'.todoapp',
	data:{
		list:list,
		val:'',
		isSelected:'all'
	},
	methods:{
		clear(){
			this.list = this.list.filter((e)=>{
				return !e.checked;
			});
		},
		keyup(){
			if(!this.val)return;
			this.list.push({
				content:this.val,
				checked:false
			});
			this.val = '';
		},
		remove(index){
			this.list.splice(index,1);
		}
	},
	computed:{
		changeView(){
			/*
				一个计算属性：打算使用这个属性，值为数组（过滤之后的数组）
				
				让isSelected去控制changeView，返回一个过滤后的数组
				
				
				var arr = [1,2,3,4];
				this.list = [1,2];
				
				存一份，使用另一份
				使用this.list
				存this.list2
				
				使用changeView
				存this.list
				
				changeView当数据发生变化的时候就会被触发
				只要改变isSelected 就会触发changeView
				
				isSelected  = 'all';
				changeView => [1,2,3,4]
				
				isSelected  = 'active';
				changeView => [1,2]
				
				isSelected  = 'computed';
				changeView => [3,4]
			*/
			
			switch (this.isSelected) {
				case 'all':
					return this.list;
				break;
				case 'active':
					return this.list.filter((e)=>{
						return !e.checked;
					});
				break;
				case 'completed':
				return this.list.filter((e)=>{
					return e.checked;
				});
				break;
				default:
					return this.list;
				break;
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

function hashs(){
	let hash = window.location.hash;
	if(hash){
		hash = hash.slice(2)
	}else{
		hash = 'all';
	}
	v.isSelected = hash;
}
window.onhashchange = hashs;


	