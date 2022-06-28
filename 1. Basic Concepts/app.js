// **************************************************************************************************************
// ****************************************** FIRST REGULAR EXPRESSION ****************************************** 

var expression1 = new RegExp('abc');
var expression2 = /abc/;
var paragraph = /text1 \/n text2/;

// ***************************************************************************************************************
// ******************************************* TEST REGULAR EXPRESSION *******************************************
console.log("\n\n******************************************* TEST REGULAR EXPRESSION *******************************************");

console.log(expression1.test("abcdef"));
console.log(expression2.test("abcdef"));
console.log(paragraph.test("This is a text \n This is a number"));

console.log(expression1.test("ab1"));
console.log(expression2.test("ab1"));

// **************************************************************************************************************
// ****************************************** EVALUATING CHARACTER SET ******************************************
console.log("\n\n****************************************** EVALUATING CHARACTER SET ******************************************");

// [] represent a universe of data
var expression1 = /[0123456789]/;
var expression2 = /[0-9]/;
var expression3 = /[0-9a-zA-Z]/

console.log(expression1.test("The year is 1996"));
console.log(expression2.test("The year is 1996"));
console.log(expression3.test("The year is 1996"));

// *************************************************************************************************************
// ************************************************* SHORTCUTS *************************************************
console.log("\n\n************************************************* SHORTCUTS *************************************************");

/*
Grupos de caracteres
===

Grupo | Descripción
------|-----
\d  | Cualquier número  
\w  | Cualquier letra o número  
\s  | Cualquier espacio en blanco incluido tabs, salto de línea o similares  
\D  | Cualquier carácter que no sea un número  
\W  | Cualquier carácter que no sea alfanumérico  
\S  | Cualquier carácter que no sea un espacio en blanco  
.   | Cualquier carácter excepto nuevas líneas
*/

var expression1 = /\d\d-\d\d-\d\d\d\d/;
console.log(expression1.test('28-june-2022'));
console.log(expression1.test('28-06-2022'));

// *************************************************************************************************************
// ******************************************* MATCHES AND NEGATIONS *******************************************
console.log("\n\n******************************************* MATCHES AND NEGATIONS *******************************************");

var expression1 = /[\d]/;
console.log(expression1.test('28-06-2022'));

// ^ --> negation
var expression2 = /[^01]/;
console.log(expression2.test("1010100110110110"));

// **************************************************************************************************************
// ********************************************* SPECIAL CHARACTERS *********************************************
console.log("\n\n********************************************* SPECIAL CHARACTERS *********************************************");

// + => at least once 
// * => once, more than once, none

var expression1 = /\d+/;
console.log(expression1.test('abc'));

var expression2 = /\d*/;
console.log(expression2.test('abc'));

// *************************************************************************************************************
// ********************************************* OPTIONAL PATTERNS *********************************************
console.log("\n\n********************************************* OPTIONAL PATTERNS *********************************************");

// ? => optional character
var expression1 = /Hello Wor?ld/;
console.log(expression1.test('Hello Wold'));

// *************************************************************************************************************
// ********************************************* COUNTING PATTERNS *********************************************
console.log("\n\n********************************************* COUNTING PATTERNS *********************************************");

// {x, y} => x = min, y = max
var expression = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

console.log(expression.test('28-06-2022 11:45'));
console.log(expression.test('28-06-2022 22:12'));