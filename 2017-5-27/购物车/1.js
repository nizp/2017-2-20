const lis = document.getElementById('ul1').getElementsByTagName('li');
const ul2 = document.getElementById('ul2');

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

function createView(){
	let html = '';
	
	arr.forEach((e,i)=>{
		html += `<li>${e}</li>`;
	});
	
	ul2.innerHTML = html;
}

