var str = prompt("Enter the string:"); 
var i, j;
var temp = new Array(26).fill(0); 
var n = str.length;
var result = "";

for (i = 0; i < n; i++) {
  temp[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
}


for (j = 0; j < 26; j++) {
  while (temp[j] > 0) {
    var letter = String.fromCharCode('a'.charCodeAt(0) + j);
    result += letter;
    temp[j]--;
  }
}

console.log(result);
