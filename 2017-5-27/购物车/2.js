const lis = document.getElementById('ul1').getElementsByTagName('li');
const ul2 = document.getElementById('ul2');

/*
	如果遇到缓存，在html后面加?加随机字符，保证当前的url与之前的url有差别
	
	jsonp请求只能是get方式的，因为它是通过url的方式请求的。
*/

//优先看看本地有没有数据，有数据走数据，没数据走[]

var arr = localStorage.getItem('shopping')? JSON.parse(localStorage.getItem('shopping')):[];
//如果本地有数据，先渲染一次视图
createView();

//当storage事件被触发的时候，做的事情
window.addEventListener('storage',function(){
	
	//本地有没有数据，有数据走数据，没数据走[]保证数据全删之后不会报错
	//获取本地的数据
	arr = localStorage.getItem('shopping')? JSON.parse(localStorage.getItem('shopping')):[];
	
	//拿到数据渲染视图
	createView();
	
});

/*
	当点击的时候，如果没有重复项，那么就添加一条数据到数组中并且设置本地数据，根据新的数据渲染视图 
*/
for(var i=0;i<lis.length;i++){
	lis[i].onclick = function(){
		if(!arr.includes(this.innerHTML)){
			arr.push(this.innerHTML);
			localStorage.setItem('shopping',JSON.stringify(arr));
			createView();
		}
	}
}

ul2.onclick = function(ev){
	if(ev.target.tagName === 'LI'){
		//找到li
		var li = ev.target;
//		console.log(arr);  [1,2,3,4]  1!=3  [1,2,4]

		/*
			filter小技巧：
				如要要排除谁，就在return后加  e!=谁
				
		*/
		arr = arr.filter((e)=>{
			return e != li.innerHTML
		});
		
		localStorage.setItem('shopping',JSON.stringify(arr));
		
		createView();//渲染当前页面
		
	}
}



//var lis2 = ul2.getElementsByTagName('li');

/*
	因为ul2的解构是字符串拼接出来的并且一次性操作ul2的innerHTML的，所以每次操作都会把之前的事件覆盖，所以，只要点击添加购物车中li的事件就没了
*/
//var lis2 = ul2.getElementsByTagName('li');
//for(var i=0;i<lis2.length;i++){
//	lis2[i].onclick = function(){
//		alert(1);
//	}
//}



function createView(){
	let html = '';
	
	arr.forEach((e,i)=>{
		html += `<li>${e}</li>`;
	});
	
	ul2.innerHTML = html;
//	var lis2 = ul2.getElementsByTagName('li');
//	for(var i=0;i<lis2.length;i++){
//		lis2[i].onclick = function(){
//			alert(1);
//		}
//	}
}

