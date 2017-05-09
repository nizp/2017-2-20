//获取元素 $("#box")
function $(obj){
	var subStr = obj.substring(0,5);
	if(subStr == 'name='){
		var nodes = document.getElementsByTagName(obj.substring(5));
		return nodes;
	}else{
		var firstChar = obj.charAt(0);
		switch(firstChar){
			case "#":
			return document.getElementById(obj.substring(1));
			break;
			case ".":
			return document.getElementsByClassName(obj.substring(1));
			break;
			default:
			return document.getElementsByTagName(obj);
			break;
		}
	}
}