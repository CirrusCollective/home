// var palindrome = 'RACECAR'
var reverseThis = 'DESSERTS'
var storage = [];

var func = function(str) {
    // make the terminating case; when length is zero
    if(str.length === 0){
        // return out of recursion
      storage.join('');
    }
    // if the original argument was a string
    if(typeof str === 'string') {
        // split it into an array and set equal to variable
        var splitStr = str.split('')
        // restart the function with the new array
        func(splitStr);
    } else {
        // otherwise, push the last element into storage array
        storage.push(str[str.length-1])
        // console.log('storage after adding last indexed element', storage);
        // remove the last element from the array
        str.pop();
        // console.log('the str after pop', str)
        // console.log('this is the pop temp',temp)
        //restart function with the shortened array
        func(str)
    }
    // return the joined storage array
    return storage;
}

console.log('log of invokation', func(reverseThis));
