function ajax(obj){
	
	var settings = {
		url:'',
		data:{},
		dataType:'json',
		success:function(){},
		error:function(){},
		method:'get'
	}
	
	for(var attr in obj){
		settings[attr] = obj[attr];
	}
	
	//xx=xxx&xxx=xxxx
	var arr = [];
	for(var i in settings.data){
		arr.push(i+'='+settings.data[i]); //['user=leo','pass=1234']
	}
	
	settings.data = arr.join('&');//user=leo&pass=1234
	
	var ajax = new XMLHttpRequest;
	
	if(settings.method.toLowerCase() === 'get'){
		ajax.open('get',settings.url+'?'+settings.data);
		ajax.send();
	}else{
		ajax.open('post',settings.url);
		ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		ajax.send(settings.data);
	}
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState === 4){
			if(ajax.status >= 200 && ajax.status <= 207){
				if(settings.dataType === 'json'){
					//settings.success(eval('('+ajax.responseText+')'));
					settings.success(new Function('','return'+ajax.responseText)())
				}else if(settings.dataType === 'xml'){
					settings.success(ajax.responseXML);
				}else{
					settings.success(ajax.responseText);
				}
			}else{
				settings.error({
					status:ajax.status,
					readyState:ajax.readyState
				});
			}
		}
	}	
}
