function basicTeenager(age){
  if (age <= 19 && age >= 13){
    return ("You are a teenager!"); }
}

function teenager(age){
  if (age <= 19 && age >= 13){
    return ("You are a teenager!"); }
  else
    {return ("You are not a teenager."); }
  }

function ageChecker(age){
  if (age <= 19 && age >= 13){
    return ("You are a teenager!"); }
 else if (age <= 12){
   return ("You are a kid"); }
 else
  {return ("You are a grownup"); }
 }

function ternaryTeenager(age){
conditionToTest (age <= 19 && age >= 13) ? valueToBeReturnedIfTrue ("You are a teenager") : valueToBeReturnedIfFalse ("You are not a teenager")
}

function switchAge(age){
case "age <= 19 && age >= 13": console.log("You are a teenager");
break;
default: console.log("You have an age");
}
