function View(){
  var html = `
    <h5><%=title%>一共有:<%=total%>条结果</h5>
    <ul>
      <%for(var i=0;i<subjects.length;i++){%>
        <li title="<%=subjects[i].title%>">
          <img width="128" height="182" src="<%=subjects[i].images.medium%>">
          <%if(subjects[i].title.length > 5){%>
            <p><%=subjects[i].title.replace(subjects[i].title.substring(5),'..')%></p>
          <%}else{%>
            <p><%=subjects[i].title%></p>
          <%}%>
          <p>评分:<%=subjects[i].rating.average%>分</p>
        </li>
      <%}%>
    </ul>
    <div>
      <%for(var i=0;i<len;i++){%>
        <a href="javascript:;"><%=(i+1)%></a>
      <%}%>
    </div>
  `;
  return html;
}