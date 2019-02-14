function getElementValues(){
	main([
		document.getElementById("SIDE_A").value,
		document.getElementById("SIDE_B").value,
		document.getElementById("SIDE_C").value
    ]);
}

function main(valueList){
    let side = [];

    for (let value of valueList) {
        if (value === null || !isNumber(value)) {
            return display("入力は1~99999の整数のみです");
        }

        side.push(parseInt(value, 10));
    }

	if(!isInteger(side)){
		return display("入力は1~99999の整数のみです");
	}

	if(!isTriangle(side)){
		return display("三角形が成立しません");
	}

	return display(getTriangleName(side));
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
	for(let value of side){
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
	return (side[0] + side[1] > side[2]);
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
