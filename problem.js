function cubeNumber(number){
 if(typeof number!=='number'){
    return 'Please input valid number'
 }else{
    var totalProduct =Math.pow(number,3)
    return totalProduct
 }
}
var result =cubeNumber('');
console.log(result)

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please input valid strings';
    }else if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}

var result = matchFinder('Peter Parker',"pen")
console.log(result)


