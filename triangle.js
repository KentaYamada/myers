function main(){

	//浮動小数点16桁以上対策（0.99999999999999999 が文字列として処理され変換の過程で1に丸められる
	if((!isNumber(document.getElementById("SIDE_A").value)) || 
	   (!isNumber(document.getElementById("SIDE_B").value)) ||
	   (!isNumber(document.getElementById("SIDE_C").value))
	  ){
		display("入力は1~99999の整数のみです");
		return;
	}

	var side = [
		Number(document.getElementById("SIDE_A").value),
		Number(document.getElementById("SIDE_B").value),
		Number(document.getElementById("SIDE_C").value)
	];

	if(!isInteger(side)){
		display("入力は1~99999の整数のみです");
		return;
	}

	if(!isTriangle(side)){
		display("三角形が成立しません");
		return;
	}

	display(getTriangleName(side));
}
//表示
function display(displayString){
	document.getElementById("DISPLAY").innerText = displayString;
}

function isNumber(value){
	return value.match(/^[1-9]\d*|0{1,5}$/) ? true : false
}

//数字のみか確認
function isInteger(side){
	for(var value of side){
		if((value < 1)     ||
		   (value > 99999) ||
		   (isNaN(value))  ||
		   (Math.round(value) !== value)
		 ){
			 return false;	
		}
	}
	return true;
}


//三角形が成立するか
function isTriangle(side){
	side = side.sort(function(a, b){
		return a - b;
	});
	return (side[0] + side[1] > side[2]) ? true : false;
}

//三角形確認
function getTriangleName(side){
	
	if((side[0] === side[1]) && (side[0] === side[2])){
		return "正三角形";
	}

	if((side[0] !== side[1]) &&
	   (side[1] !== side[2]) &&
	   (side[2] !== side[0])
	){
		return "不等辺三角形";
	}
	else{
		return "二等辺三角形";
	}
}