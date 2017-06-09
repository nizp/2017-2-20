
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

/**
 * 操作器
 * */
var Operator = {

	getItemHtml: function (item) {
		return "<li>"+ item.name +"</li>"
	}

}

/**
 * 谓词库
 * */
var Predict = {

	// 利用curry对比较的值可变
	isAgeEq: function (number) {
		return function (item) {
			return item.age === number
		}
	}
}


/**
 * 操作库
 * */
var Actions = {

	// 得到列表
	// 在函数编程中, 函数不仅能赋值, 还可以像变量似的, 进行传递
	getList: function () {

		ul.innerHTML = Model.list
								.filter(Predict.isAgeEq(19)) // 1: 过滤得到 19岁年龄的 数组
								.map(Operator.getItemHtml) // 2: 生成新的数组, 里面每一个值, 都是拼接的html标签
								.join("") // 3: 变成统一的html字符串
	},

	// 增加一条数据
	addItem: function (item) {
		Model
			.list
			.push(item)

		this.getList()
	}
}

// lodash , underscore 函数式写法, 很常用的工具库, 告诉你怎么去写一个函数


Actions.getList()