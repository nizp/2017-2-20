function ajax(json){
		//默认配置
		var settings = {
			url:'',
			method:'get',
			success:function(){},
			fail:function(){},
			data:{},
			dataType:'json'//返回的数据格式，默认为json
		}
		//有配置走配置，没配置走默认
		for(var attr in json){
			settings[attr] = json[attr];
		}
		
		//将一个对象转成字符串  user=momo&sex=男&id=2
		var arr = [];
		for(var i in settings.data){
			arr.push(i+'='+settings.data[i]);
		}
		
		settings.data = arr.join('&');
		
		var ajax = new XMLHttpRequest();
		
		//如果请求方式是get，在open下的第二个参数就要拼接字段
		//else就是post。要设置请求头信息并且把字段拼接到send中
		if(settings.method.toLowerCase() === 'get'){
			ajax.open(settings.method,settings.url+'?'+settings.data,true);
			ajax.send();
		}else{
			ajax.open(settings.method,settings.url,true);
			ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			ajax.send(settings.data);
		}

		ajax.onload = function(){
			//当请求成功的时候执行settings.success，失败的时候执行settings.fail
			if(ajax.status >= 200 && ajax.status <= 207){
				
				//如果传入json，那么就返回对象格式的数据
				if(settings.dataType === 'json'){
					settings.success(eval('('+ajax.responseText+')'));
				}else if(settings.dataType === 'xml'){
					//如果传入的是xml，那么返回xml格式的数据
					settings.success(ajax.responseXML);
				}else{
					//如果传入的既不是json也不是xml，那么返回json格式（字符串）的数据
					settings.success(ajax.responseText);
				}
			}else{
				settings.fail(ajax.status);
			}
		}
	}