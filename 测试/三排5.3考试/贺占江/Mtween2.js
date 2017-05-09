/*
 	t:已运动时间（需要计算）
 	b:起始位置（直接获取）
 	c:要运动距离（需要计算）
 	d:运动时间(传入)
 * */
var Tween = {
    linear: function (t, b, c, d){  //匀速
        return c*t/d + b;
    },
    easeIn: function(t, b, c, d){  //加速曲线
        return c*(t/=d)*t + b;
    },
    easeOut: function(t, b, c, d){  //减速曲线
        return -c *(t/=d)*(t-2) + b;
    },
    easeBoth: function(t, b, c, d){  //加速减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t + b;
        }
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInStrong: function(t, b, c, d){  //加加速曲线
        return c*(t/=d)*t*t*t + b;
    },
    easeOutStrong: function(t, b, c, d){  //减减速曲线
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t*t*t + b;
        }
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p/4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    elasticBoth: function(t, b, c, d, a, p){
        if (t === 0) {
            return b;
        }
        if ( (t /= d/2) == 2 ) {
            return b+c;
        }
        if (!p) {
            p = d*(0.3*1.5);
        }
        if ( !a || a < Math.abs(c) ) {
            a = c;
            var s = p/4;
        }
        else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        if (t < 1) {
            return - 0.5*(a*Math.pow(2,10*(t-=1)) *
                Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        }
        return a*Math.pow(2,-10*(t-=1)) *
            Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
    },
    backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    backOut: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 3.70158;  //回缩的距离
        }
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    backBoth: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        if ((t /= d/2 ) < 1) {
            return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        }
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
        return c - Tween['bounceOut'](d-t, 0, c, d) + b;
    },
    bounceOut: function(t, b, c, d){
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
        }
        return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
    },
    bounceBoth: function(t, b, c, d){
        if (t < d/2) {
            return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
        }
        return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
    }
}
/*
 	运动函数(时间版)
 		Mtween(obj,attrs,duration,fx,endFn)
 		参数：
 		obj:要运动的元素，object
 		attrs:要运动的多个样式,object，{left:400},即使只运动一个样式，也要写成对象形式
 		duration:运动持续时间，毫秒不带单位，number
 		fx:运动形式，string，linear匀速easeIn加速easeOut减速backIn回退渐入
 		endFn:回调函数，function
 		Mtween({
 			el:obj,
 			target:{
 				top:10,
 				left:10
 			},
 			time:duration,
 			
 			type:'linear',
 			callIn:function
 			callBack:function
 		})
 * */
function Mtween(init){
	init.type = init.type || 'linear';
	//运动开始的时间
	var old = new Date();
	//duration运动持续时间
	var d = init.time;
	//接收传入的要运动的属性和值
	var j = {};
	//遍历传入的对象，获取要运动的属性和值
	for(var attr in init.target){
		j[attr] = {}
		//起始位置
		j[attr].b = css(init.el,attr);
		//运动距离
		j[attr].c = init.target[attr] - j[attr].b;
	}
	clearInterval(init.el.timer);
	//一个定时器可以控制多个属性运动，方便定时器管理
	init.el.timer = setInterval(function(){
		//监测时间
		var New = new Date();
		//算出已过时间
		var t = New - old;
		//已经运动的时间等于设置的运动时间，就证明到目标点了
		if(t >= d){
			t = d;	
		}
		typeof init.callIn == 'function' && init.callIn.call(init.el);
		//遍历对象，操作多个属性运动
		for(var attr in j){
			var b = j[attr].b;
			var c = j[attr].c;
			//运动形式设置
			var v = Tween[init.type](t,b,c,d);
			css(init.el,attr,v);
		}
		if(t==d){
			clearInterval(init.el.timer);
			//回调函数，运动完要执行的代码，写在回调函数里传入
			typeof init.callBack == 'function' && init.callBack.call(init.el);
		}
	},20)			
}
/*
 	css
 * 		只写前2个参数是获取，写3个是设置
 * 	参数：
 * 		el:元素,obj
 * 		attr:属性,string
 * 		val:值，opacity:0-100
 * */
function css(el,attr,val){
	if(attr == 'scale'||attr == 'scaleX'||attr == 'scaleY'||attr == 'scaleZ'||attr == 'rotate'||attr == 'rotateX'||attr == 'rotateY'||attr == 'translateX'||attr == 'translateY'||attr == 'translateZ'||attr == 'skewX'||attr == 'skewY'){
		if(arguments.length==2){
			return cssTransform(el,attr);
		}
		return cssTransform(el,attr,val);
	}
	//typeof val == 'undefined'
	if(arguments.length==2){
		//获取
		var val = getComputedStyle(el)[attr];
		if(attr == 'opacity'){
			val = Math.round(val*100);
		}
		return parseFloat(val);
	}
	//设置
	if(attr == 'opacity'){
		el.style[attr] = val/100;
	}else{
		el.style[attr] = val+'px';
	}
}
/*
 	cssTransform
 		专门设置，获取transform的，设置不能写在css样式表里，只能用这个方法设置，不然无法获取
 		只写前2个参数是获取，写3个参数是设置
 		参数:
 			el：元素,obj
 			attr:属性，string
 			val:值
 * */
function cssTransform(el,attr,val){
	if(!el.transform){
		el.transform = {};
	}
	/*
	 el.transform = {
	 	scale:100
	 }
	 * */
	if(arguments.length==2){
		//获取
		if(typeof el.transform[attr]==='undefined'){
			//没设置过，设置默认值
			switch(attr){
				case 'scale':
				case 'scaleX':
				case 'scaleY':
				case 'scaleZ':
					el.transform[attr] = 100;
				break;
				default:
					el.transform[attr] = 0;
			}
		}
		return el.transform[attr];
	}
	//设置
	el.transform[attr] = val;
	var transformVal = '';
	for(var attr in el.transform){
		switch(attr){
			case 'scale':
			case 'scaleX':
			case 'scaleY':
			case 'scaleZ':
			transformVal +=	' '+attr+'('+(el.transform[attr]/100)+')';
			//div.style.transform = 'scale(2)'				
			break;
			case 'rotate':
			case 'rotateX':
			case 'rotateY':
			case 'skewX':
			case 'skewY':
			//div.style.transform = 'rotate(30deg)'	
				transformVal += ' '+attr+'('+el.transform[attr]+'deg)';
			break;
			default:
				transformVal += ' '+attr+'('+el.transform[attr]+'px)';
		}
	}
	el.style.transform = el.style.webkitTransform = transformVal;
}
