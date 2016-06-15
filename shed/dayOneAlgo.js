var hello = 'racecar';
var firstReverse = function(str) {
   var strSplit = str.split('');
   var revStr = [];
   for(var i = 0; i < strSplit.length; i++) {
    revStr.unshift(strSplit[i]);
   }
   return revStr.join('');
}
firstReverse(hello);

var word = "racecar";
var isPalindrome = function(string){
   var splitStr = string.split('');
   var revStr = [];
   for(var i = splitStr.length; i >= 0; i--){
      revStr.push(string[i]);
   }
   if(string === revStr.join('')){
      return true;
   }else {
      return false;
   }
};

console.log(isPalindrome(firstReverse(hello)));
