const restart = document.getElementById("AC");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const plus = document.getElementById("plus");
const divide = document.getElementById("divide");
const numberZero = document.getElementById("0");
const numberOne = document.getElementById("1");
const numberTwo = document.getElementById("2");
const numberThree = document.getElementById("3");
const numberFour = document.getElementById("4")
const numberFive = document.getElementById("5")
const numberSix = document.getElementById("6")
const numberSeven = document.getElementById("7")
const numberEight = document.getElementById("8")
const numberNine = document.getElementById("9")

let process = document.getElementById("process");
let result = document.getElementById("result");

let sum = 0;
let show = "";
let btnId = "";
let index = 1;
result.innerHTML = sum;
process.innerHTML = show;

function getId(btn){
	btnId = btn.id;
}

function onClickAC(){
	show = "";
	sum = 0;
	process.innerHTML = show;
	result.innerHTML = sum;
}

function onClickMinus(){
	show = show + "-";
	process.innerHTML = show;
	// result.innerHTML  = sum;
}

function onClickPlus(){
	show = show + "+";
	process.innerHTML = show;
	// result.innerHTML  = sum;
	console.log(btnId)
}

function onClickTimes(){
	show = show + "*";
	process.innerHTML = show;
	// result.innerHTML  = sum;
	console.log(btnId)
}

function onClickDivide(){
	show = show + "/";
	process.innerHTML = show;
	// result.innerHTML  = sum;
	console.log(btnId)
}

function onClickBtn(){
	// sum += parseInt(btnId);
	// console.log(typeof(parseInt(btnId)))
	show = show + btnId.toString();
	process.innerHTML = show;
	// result.innerHTML  = sum;
}


function onClickEqu(){
	let arr = [];
	let res = [];
	arr = show.split(/(?=-){1}/g);
	console.log(arr)
	arr.map((item)=>{
		res = item.split("+");
		console.log(item)
		console.log(res)
		// console.log(res.indexOf("+"))
		// 處理加法
		res.map((a)=>{
			index=1;
			let element = [];
			element = a.split(/([\*\/\.])/g);
			console.log(element)
			if(element.indexOf("*")===-1&&element.indexOf("+")===-1&&element.indexOf("/")===-1){
				sum += Number(element);
			}
			else if(element.indexOf("*")!==-1){
			 temp = item.split("*");
			 for(let i=0; i<temp.length; i++){
				index = index*Number(temp[i])
				console.log(index)	
			}
				sum += index
			}else if(element.indexOf("/")!==-1){
				temp = item.split("/");
				 for(let i=0; i<temp.length; i++){
				 	if(i===0){
				 		if(temp[i]!==0)
				 			index = temp[0];
				 	}else{
				 		if(temp[i]!==0){
							console.log(temp[i])	
					 		index = index/Number(temp[i])
							console.log(index)	
					 	}else{
					 		index = 0;
					 	}
				 	}
				 	
				}
				sum += index
			}
		})
	})
	result.innerHTML  = sum;
}

restart.addEventListener('click', onClickAC);
numberZero.addEventListener('click', onClickBtn);
numberOne.addEventListener('click', onClickBtn);
numberTwo.addEventListener('click', onClickBtn);
numberThree.addEventListener('click', onClickBtn);
numberFour.addEventListener('click', onClickBtn);
numberFive.addEventListener('click', onClickBtn);
numberSix.addEventListener('click', onClickBtn);
numberSeven.addEventListener('click', onClickBtn);
numberEight.addEventListener('click', onClickBtn);
numberNine.addEventListener('click', onClickBtn);
plus.addEventListener('click', onClickPlus);
minus.addEventListener('click', onClickMinus);
times.addEventListener('click', onClickTimes);
divide.addEventListener('click', onClickDivide);
equation.addEventListener('click', onClickEqu);