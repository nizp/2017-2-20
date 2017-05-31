function Modle(val,num){
  $.ajax({
    url:'http://api.douban.com/v2/movie/search?callback=?',
    dataType:'jsonp',
    data:{
      q:val,
      start:num,
      count:12
    },
    success:function(data){
    
      data.len = Math.ceil(data.total/data.count);
      //console.log(data);
      var html = template('temp',data);
      $('#app').html(html);
    }
  });
}