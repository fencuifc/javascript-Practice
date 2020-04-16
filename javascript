
"This"
This is refer to caller. if no caller, this will point to window object.
bind,call,apply
let obj = {num:2};
let addTothis = function(a){
	return this.num+a
};
addTothis.call(obj,3);
addTothis.apply(obj,[3]);
let bound = addTothis.bind(obj);
bound(1);//3
Array.prototype.slice.call(fakeArray)

addTothis function was called for object obj
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

primitive immutable (string, number) wrapper object,these objects have methods and properties 


chain function
const sumTwo= (number1,number2)=>{
  return number1+number2;
}
const sumMore = (...nums)=>{
  let sum=0;
  nums.forEach((item)=>{
    sum = sum + item;
  });
  return sum;
}
const chain = (...nums)=>{
  let sum=0;
  nums.forEach((item)=>{
    sum = sum + item;
  });
  return {
    value: sum,
    add: (...args) => chain(sum, ...args),
    subtract: (...args) => chain(sum, ...args.map(x => -x)),
    negate: () => chain(-sum)
  }
}//c.add

// test cases
const c1 = chain(1, 2, 3);//return {value,add:,subtract:,negate:}
console.log(c1);
const c2 = c1.add(4);//10
const c3 = c2.subtract(12);//-2
const c4 = c3.negate();//2
const results = [6, 10, -2, 2];
console.log(_.isEqual([c1, c2, c3, c4].map(res => res.value), results) ? 'CORRECT' : 'INCORRECT');
console.log(JSON.stringify([1]) == JSON.stringify([1]) ? 'CORRECT' : 'INCORRECT');
console.log([c1, c2, c3, c4].map(res => res.value));

class Chain {
	constructor(...nums){
		this.value = nums.reduce((total,value)=>{return total+value},0);
	}
	add(x){
		this.value = this.value + x;
		return this;
	}
	subtract(y){
		this.value = this.value - y;
		return this;
	}
	negate(){
		this.value = -this.value;
		return this;
	}
}
// test cases
const c1 = new Chain(1, 2, 3);
console.log(c1);
const c2 = c1.add(4);//10
console.log(c2);
const c3 = c2.subtract(12);//-2
console.log(c3);
const c4 = c3.negate();//2

prototype:
function user(name){
	this.name =  name;
}
user.prototype.login = function(){
	console.log("login" + this.name);
}
function admin(name){
	user.apply(this,[name]);
	console.log("admin"+this.name);
}
admin.prototype = Object.create(user.prototype);
var f = new user('fen');
f.login();
var a = new admin('c');
a.login();
