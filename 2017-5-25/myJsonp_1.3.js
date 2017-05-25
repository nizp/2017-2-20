function jsonp(json){
		
		//为了函数名重复所以加了时间戳+随机数
		var fnName = 'fn'+ +new Date() + Math.random();
		
		//因为函数名不能有小数点，所以把小数点替换成空
		fnName = fnName.replace('.','');
		
		//存[key1=value1,key2=value2]
		var arr = [];
		
		/*
			{wd:'s',json:1,'cb':'fn3213321'} 
		*/
		
		json.data[json.callback] = fnName; //给json.data添加一个json.cb的属性值为fnName
		
		for(var attr in json.data){
			arr.push(attr+'='+json.data[attr]);
		}
		console.log(arr)
		
		json.data = arr.join('&');  //xx=xxx&xxx=xxxx&xx=sss;
		
		//console.log(json.data)
		
		var oS = document.createElement('script');
		
		//url+xx=xxx&xxx=xxxx&cb=fn32173872931
		
		oS.src = json.url+'?'+json.data;
		
		document.getElementsByTagName('head')[0].appendChild(oS);
		
		oS.remove();
	
		//当服务器请求成功之后会调用下面这个函数并且把数据传到data上
		//通过服务器调这个函数，就执行json.success把数据传出去
		window[fnName] = function (data){
			json.success(data);
		}
	}
	