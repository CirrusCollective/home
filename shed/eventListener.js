// Implement a function that associates a string with a function.

// Implement a function that invokes the associated function, when given a string that matches a string associated with that function, is passed to it.

//third pass
var allEvents = [];
var trigger = function(triggeredEvent){
for (var i = 0; i < allEvents.length; i++) {
  if (triggeredEvent === allEvents[i].eventName) {
    allEvents[i].eventFunc();
    }
  }
}

var createEvent = function(eventName, eventFunc){
  var newEvent = {eventName:eventName, eventFunc:eventFunc};
  allEvents.push(newEvent);
}
createEvent("bang", function(){console.log("you got me!");})
trigger("bang");

// createEvent("onClick", )
//
// var evenListener = function(string, myFunc){
//   function myFunc(){
//     if string === string
//   }
// };
//
// eventListener("onClick",  )
//
// var action = {
// eventListener : alert();
// }
//
// action.eventListener // otherFunc()
//
// "string" funFunc
//
// // implement function that invokes funFunc
// var otherFunc = function(){
// funFunc();
// ]
//
// //when otherFunc is invoked with
// otherfunc("string")
