var num = prompt("Enter a number:"); 
var temp = num;
var rev = 0;

while (temp > 0) {
    var d = temp % 10;
    rev = rev * 10 + d;
    temp = Math.floor(temp / 10); 
}

console.log("The reversed number is " + rev);
