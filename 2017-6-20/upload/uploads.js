class Uploads{
	constructor(){
		this.settings = {
			fileEle:null,
			btn:null,
			view:function(){},
			onsedend:function(){}
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
		
	}
	
	
	
	
});



$.fn.extend({
	uploads:function(opt){
		var u = new Uploads;
		
		u.init(opt);
		
		return u;
	}
});
