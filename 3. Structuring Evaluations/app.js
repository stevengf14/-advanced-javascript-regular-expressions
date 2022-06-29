// ***************************************************************************************************************
// ************************************************ LIMIT STRINGS ************************************************
console.log("\n\n************************************************ LIMIT STRINGS ************************************************");

// \b => it's the limit
var expression1 = /\bcat\b/;

console.log(expression1.test("cats"));
console.log(expression1.test("cat"));

// ***************************************************************************************************************
// ********************************************** OPTIONAL PATTERNS **********************************************
console.log("\n\n********************************************** OPTIONAL PATTERNS **********************************************");

var expression1 = /chicken|fish|pork/;
console.log(expression1);

console.log(expression1.test("The client is eating chicken"));
console.log(expression1.test("The client is eating fish"));
console.log(expression1.test("The client is eating rice"));

// ***************************************************************************************************************
// ******************************************** INIT AND END PATTERNS ********************************************
console.log("\n\n******************************************** INIT AND END PATTERNS ********************************************");

var initExpression = /^Any/;
var endExpression = /JavaScript$/i;
var initEndExpression = /^Any|Javascript$/i; 

// ^ => Init
// $ => End

console.log(initExpression.test("Any hospital is good in Europe"));
console.log(endExpression.test("I love develop using javascript"));
console.log(initEndExpression.test("Any languaje is good, for example javascript"));