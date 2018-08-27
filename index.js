// Write your code in this file!
function scuberGreetingForFeet(someNumber) {
  let response;
  if (someNumber <= 400) {
    response = 'This one is on me!';
  } else if (someNumber > 2000 && someNumber <= 2500) {
    response = 'I will gladly take your thirty bucks.';
  } else if (someNumber > 2500) {
    response = 'No can do.';
  }
  return response;
}


function ternaryCheckCity(city) {
  let response;
  city === 'NYC' ? response = "Ok, sounds good." : response = "No go.";
  return response;
}

function switchOnCharmFromTip(tip){
  let response;
  if (tip === 'generous') {
    return "Thank you so much.";
  } else if (tip === 'not as generous') {
    return "Thank you.";
  } else  {
    return "Bye.";
  }
  return response;
}
