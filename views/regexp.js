var str1 ='abcd##ef##f';
var str2 = str1.replace(/##(.*)##/g,'<mark>$1</mark>');
console.log(str2);
