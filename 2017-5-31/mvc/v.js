function View(){
	var html = `<h1><%=title%></h1>
		<ul>
			<%for(var i=0;i<list.length;i++){%>
				<%if(list[i] === '陈晓凤'){%>
					<li class="red"><%=list[i]%></li>
				<%}else{%>
					<li><%=list[i]%></li>
				<%}%>
			<%}%>
		</ul>`;
	
	return html;
}

//function View(){
//	var html = `<h1><%=title%></h1>
//		<ul>
//			<%for(var i=0;i<list.length;i++){%>
//				<%if(i%2){%>
//					<li><%=list[i-1]%>和<%=list[i]%>有特殊关系,谁用谁知道!</li>
//				<%}%>
//			<%}%>
//		</ul>`;
//	
//	return html;
//}


