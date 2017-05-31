var btn = document.getElementById('btn');
btn.onclick = function(){
	document.getElementById('temp').innerHTML = View();
	var html = template('temp',data);
	document.getElementById('app').innerHTML = html;
};
