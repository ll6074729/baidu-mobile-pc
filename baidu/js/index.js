
// 获取ID
var aside = document.getElementById("aside");
var More = document.getElementById("More");
// 失去焦点
More.onmouseout =  function(){
    aside.style.display = 'none';
}
// 获得焦点
More.onmouseover =  function(){
    aside.style.display = 'block';
}
// 失去焦点
aside.onmouseout =  function(){
    this.style.display = 'none';
}
// 获得焦点
aside.onmouseover =  function(){
    this.style.display = 'block';
}
//设置
var set = document.getElementById("set");
var setPf = document.getElementById("set-pf");
var pf = document.getElementById("pf");

set.onmouseover = function(){
	setPf.style.display='block';

}
console.log("111");
setPf.onmouseout = function(){
	// console.log("aaa");
	setPf.style.display='none';
}
