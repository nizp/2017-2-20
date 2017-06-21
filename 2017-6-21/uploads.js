class Uploads{
	constructor(){
		this.settings = {
			fileEle:null,
			btn:null,
			view:function(){},
			onsedend:function(){},
			onprogress:function(){},
			drag:null,
			ondraghover1:function(){},
			ondragup:function(){}
		}
		this.arr = []; //存数据
		this.num = 0;
	}
}

$.extend(Uploads.prototype,{
	
	init:function(opt){
		$.extend(this.settings,opt);
		
		//console.log(this.settings.btn)
		
		let _this = this;
		
		if(this.settings.fileEle){
			this.settings.fileEle.on('change',function(){

				_this.addData(this.files[0]);
				
				//保证选择相同的图片的时候都触发onchange事件。
				$(this).val('');

				//console.log(11111);
			
			});
		}
		
		if(this.settings.btn){
			this.settings.btn.click(function(){
				_this.send();
			});
		}
		
		
		
		$(document).on('dragover',function(ev){
			console.log(1);
			ev.preventDefault();
			return false;//阻止默认行为。
		});
		
		if(this.settings.drag){
			
			this.settings.ondraghover1(this);
			
			this.settings.drag.on('drop',function(ev){
				
				
				_this.settings.ondragup(ev.originalEvent.dataTransfer.files[0]);
				
				_this.addData(ev.originalEvent.dataTransfer.files[0]);
				
				
				return false;
				
			});

		}
		
		
	},
	hover:function(a,b){
		console.log(a);
		if(a){
			this.settings.drag.on('dragenter',function(){
				
				a();
			});
		}
		
		if(b){
			this.settings.drag.on('dragleave',function(){
				b();
			});
		}
	},
	addData:function(newData){
		
		if(!this.arr.some((e)=>e.name == newData.name)){
			this.arr.push(newData);
			this.settings.view(newData);  //调用view，让用户去渲染页面
		}
		
		console.log(this.arr);
	},
	
	send:function(){
		let _this = this;
		this.arr.forEach((e)=>{
			var formData = new FormData;
			formData.append('file',e);
			
			//console.log(e);
			
			$.ajax({
				url:_this.settings.url,
				type:'post',
				data:formData,
				//要传file数据需要下面2个参数,保证传输的信息是有效的。
				contentType:false,
				processData:false,
				success:function(data){
					_this.num ++;
					
					_this.settings.onprogress(_this.num,_this.arr.length);
					
					if(_this.num == _this.arr.length){
//						console.log(123);
						_this.arr.length = 0;
						_this.settings.onsedend();
						_this.num = 0;
					}
				}
			});
		});
	},
	
	fileReader:function(data,callback){
		
		/*
			 new FileReader() + fr.readAsDataURL(data);
			 
			 将把files[0]转成图片源码，通过onload中的ev.target.result
			 去取源码。
		*/
		
		var fr = new FileReader();
		
		fr.onload = function(ev){
			//把图片源码传给开发人员。
			callback && callback(ev.target.result);
		}
		
		fr.readAsDataURL(data);
		
	},
	
	removeData:function(name,callback){
		
		var i = this.arr.findIndex((e)=> e.name == name);
		
		this.arr.splice(i,1);
		
		callback && callback(this.arr);
		
		console.log(i)
		
	}
	
	
	
	
});



$.fn.extend({
	uploads:function(opt){
		var u = new Uploads;
		
//		u.fileReader = function(){}
		
		
		u.init(opt);
		
		return u;
	}
});
