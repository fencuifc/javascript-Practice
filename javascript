
"This"
This is refer to caller. if no caller, this will point to window object.
bind,call,apply
ES5:
var sum = {
	num1:1,
	fun1:function(){
		return this.num1;//1
	},
	fun2:{
		num2:this.num1,//undefined
		fun21:function(){
			return this.num2;//undefied
		}
	},
	fun3:function(x){//2
		var num1 = this.num1;//1
		return function fun31(y){//x=3
			return num1+x+y;//6
		}
	},
	fun4:function(x){
		var xx=x;
		new promise();
		setTimeout(()=>{
			console.log(this.num1+x+xx);//1+2+2
			return this.num1+x+xx;//1+2+2
		},1000)
	},
	fun5:function(x){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				//console.log(this.num1+x);//1
				resolve(this.num1);//1
			},1000)
		})
	}
}

"Closure" variable and methods private in the scope. 'function in function'
"high order function":a function accepts or returns another function
"declaration fuction"->"expression function": defined in different periods. declaration @parsing time, expression @run time
