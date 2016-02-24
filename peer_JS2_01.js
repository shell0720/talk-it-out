//step1

var value = 85;

//step2
if (value >= 86) {
	value = value +62;

}else{
	value = value-45;
}

//step3
var newString = "22";

value = value + newString;

//step4
var array = []; 

for (var i = 0; i< value.length; i++) {
	array[i] = value.charAt(i);
}

console.log("after step4: " + array +" value: " +value);
//step5
array.shift();
array.pop();

//step6
var newArray = 0;

for (i = array.length-1; i >=0; i--) {
    newArray += array[i];
}

//step7
value = parseInt(value);
newArray = parseInt(newArray);

console.log(value,newArray);

//step8
value = value + newArray;
console.log("step8: " + value);
//step9
if (value > 4040) {
	value = 2;
}else if(value ==60) {
	value = 98;
}else{
	value =1;
}
//step10
i = 11;
while (i > 0) {
	value +=1;
	i--;
}
//step11
function convert (val) {
	val.toString();
	if (val.length> 1) {
		val.slice(0); 
	}
	return val;
}
//step12
console.log("before step 12: " + value);
convert(value); 

//step13
console.log(value);
