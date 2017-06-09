/**
 * 数组API及常用高阶函数案例
 */

var Model = {
  list: [
    { name: "我是第一条", age: 19 }, 
    { name: "我是第二条", age: 19 }, 
    { name: "我是第三条", age: 19 }, 
    { name: "我是第四条", age: 19 }, 
    { name: "我是第五条", age: 20 }, 
    { name: "我是第六条", age: 19 }, 
    { name: "我是第七条", age: 20 },
    { name: "我是第八条", age: 19 }
  ]
}

var Actions = {

  getList: function () {
    var _list = []

    for (var i = 0; i < Model.list.length; i++) {
      var element = Model.list[i]
      // 只渲染19岁的数据
      if (element.age === 19) {
        _list.push("<li>" + element.name + "</li>")
      }
    }

    list.innerHTML = _list.join("")
  },

  addItem: function (item) {

    Model
      .list
      .push(item)
    // 类似 vue.js model -> view 的思维
    this.getList()
  }
}

Actions.getList()