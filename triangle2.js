function getElementValues(){
	var valueList = [
		document.getElementById("SIDE_A").value,
		document.getElementById("SIDE_B").value,
		document.getElementById("SIDE_C").value
	];
	main(valueList);
}

function main(valueList){
	var side = new Array(valueList.length);
	for(var i = 0; i < valueList.length; i++){
		if((valueList[i] == null) ||
		   (!isNumber(valueList[i]))
		){
			ans = display("入力は1~99999の整数のみです");
			return ans;
		}
		else{
			side[i] = Number(valueList[i])
		}
	}

	if(!isInteger(side)){
		ans = display("入力は1~99999の整数のみです");
		return ans;
	}

	if(!isTriangle(side)){
		ans = display("三角形が成立しません");
		return ans;
	}

	ans = display(getTriangleName(side));
	return ans;
}
//表示
function display(displayString){
	document.getElementById("DISPLAY").innerText = displayString;
	return displayString
}

//整数チェック
function isNumber(value){
	return value.match(/^([1-9]\d*)$/) ? true : false
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