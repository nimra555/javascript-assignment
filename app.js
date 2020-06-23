//chap 21 to 25
//task1
var fInput=prompt("Enter your first name");
var lInput=prompt("Enter your last name");
var fullName = fInput + lInput;
alert("Hello! " + fullName);
//task2
var fav = prompt("enter your favourite mobile phone");
var f = fav.length;
document.write("My favourite phone is: " + fav);
document.write("<br>");
document.write("Lenght of string: " + f);
//task3
var string = "Pakistani";
var last = string.indexOf('n');
document.write("<br>");
document.write("String: " + string);
document.write("Index of 'n': " + last);
//task4
var string1 = "Hello World";
var last1 = string1.lastIndexOf('l');
document.write("<br>");
document.write("String: " + string1);
document.write("Last index of 'l': " + last1);
//task5
var string2 = "Pakistani";
var last2 = string2.charAt(3);
document.write("<br>");
document.write("String: " + string2);
document.write("Character at index 3: " + last2);
//task6 //check it
var fInput1=prompt("Enter your first name");
var lInput2=prompt("Enter your last name");
var fullString = string.concat(fInput1 + lInput2);
alert("Hello! " + fullString);
//task7
var rep = "Hyderabad";
rep1 = rep.replace("Hyder","Islam");
document.write("<br>");
document.write("City: " + rep);
document.write("After Replacement: " + rep1);
//task8
var message = "Ali and Sana are best friends.They play cricket and football together";
var msg = message.replace(/and/gi,"&");
document.write(msg);
//task9
var stringNum = "472";
var changeString = Number(stringNum);
document.write("Value: " + stringNum);
document.write("Typeof "  + typeof(stringNum));
document.write("Value: " + changeString);
document.write("Typeof "  + typeof(changeString));
//task10
var peanutString = "peanut";
var uppercasePeanut = peanutString.toUpperCase();
document.write("<br>");
document.write("User input: " + peanutString);
document.write("Uppercase "  + uppercasePeanut);
//tas11
var script = "javascript";
var p = script.slice(0,1);
var c = p.toUpperCase();
var a = script.slice(1);
var b = a.toLowerCase();
document.write("<br>");
document.write("User input: " + script);
document.write("Titlecase "  + c+b);
//task12
var stringNum1 = 35.36;
var changeString1 = stringNum1.toString();
var joinNum = changeString1.split(".").join("");
document.write("Number: " + stringNum1);
document.write("Result: " + joinNum);
//task13
var input = prompt("enter unsename");
        for(var z = 0;z<input.length;z++){
         if(input.charAt(z) === "@" || input.charAt(z) === "!" || input.charAt(z) === "," || input.charAt(z) === "." ){
          alert("enter a valid username");
          }        
        }  
//task14
var array = ["cake","apple pie","cookie","chips","patties"];
//var firstarray = "apple pie";
var program = prompt("enter items from 1 to 5");
var matchFound = "no";
for(var d = 0;d<array.length;d++){
   if(program===array[d]){
      alert("item found");
      matchFound = "yes";
   }
}
if(matchFound=="no"){alert("not found");}
//task16
var uni = "University of Karachi";
var uni1 = uni.split(" ");
document.write(uni);
document.write("<br>");
for(var i = 0 ; i < uni.length ; i++){
    document.write(uni[i] + "<br>"); 
}
//task17
var program = prompt("Enter country name");
var programLenght = program.length;
var proSlice = program.slice(programLenght-1);
document.write("<br>");
document.write("User input: " + program);
document.write("<br>");
document.write("Last Index of: " + proSlice);
//task 18

//chap26 to 30
//task1
var num = prompt("enter integer number");
document.write("number " + num);
var m = Math.round(num);
document.write("round off value  " + m);
var floor = Math.floor(num);
document.write("floor value: " + floor);
var ceil = Math.ceil(num);
document.write("ceil value " + ceil);
//task2
var minus = prompt("enter number in minus");
document.write("number " + minus);
var rou = Math.round(minus);
document.write("round off value  " + rou);
var flo = Math.floor(minus);
document.write("floor value: " + flo);
var ce = Math.ceil(minus);
document.write("ceil value " + ce);
//task3
var num = -3;
var absNum = Math.abs(num);
alert("Absolute value of " + num + " is " + absNum);

//task4
var random = Math.random();
var changerandom = (random*6)+1;
var changesix = Math.floor(changerandom);
document.write("Random dice value ",changesix);
//task5
var coin = Math.random();
var changing = (coin*1);
var round = Math.round(changing +1 );
document.write(round + " = " + "Head");
var tail = Math.random();
var tailno = (tail * 1);
var tailround = Math.round(tailno)    
document.write(tailround + " = " + "Tail");
//task6
var random1 = Math.random();
var changerandom1 = (random1*100)+1;
var changesix1 = Math.floor(changerandom1);
document.write("Random number between 1 and 100: ",changesix1);
//task7
var weight = prompt("enter your weight");
var weigh = parseInt(weight);
document.write("The weight of user is " + weigh + "kilograms");
//task8
var a = (Math.random() * 10) + 1;
var d = Math.floor(a);
var b = prompt("enter number");
if(d == b){alert("congrats");}
else{alert("better luck next time");}
      //   console.log("rand no", d);
      //   console.log("user input", b);
 //chap 31-34
 //task1
 var current = new Date();
 document.write(current);
//  Task 2
var d = new Date().toString();
 var dMonth = d.slice(3,7);
 document.write("Current month : " + dMonth);

// Task 3
var d = new Date().toString();
var dDay = d.slice(0,3);
document.write("Today is " + dDay);

// task 4
var d = new Date().toString();
var dDay = d.slice(0,3);
if(dDay === "Sat" || dDay === "Sun"){
    alert("It's  Fun Day");
}
//Task 5
var d = new Date().toString();
var dDate = d.slice(8,10);
if(dDate >= 1 && dDate <= 15){
    document.write("First fifteen days of the month");
}
else{
    document.write("Last fifteen days of the month");
}

// Task 6
var d = new Date();
var dMs = d.getTime();
var dMin = dMs / (1000*60)
document.write("Current Date : " + d);
document.write("<br>");
document.write("elapsed milliseconds since january 1, 1970 : " + dMs);
document.write("<br>");
document.write("elapsed minutes since january 1, 1970 : " + dMin);

// Task 7
var d = new Date().getHours();
if(d >= 1 && d <= 12){
    alert("It's AM")
}
else{
    alert("It's PM")       
}
// Task 8
var d = new Date("december 31, 2020");
document.write("Later Date: " + d);

// Task 9
var d = new Date();
var d1 = new Date("april 25, 2020");
var totalDays = (d - d1) / (1000 * 60 * 60 * 24);
document.write(Math.floor(totalDays) + " days has passed since Ramadan 1st, 2020");

// Task 10
var refDate = new Date();
var checkDate = new Date("january 01, 2020");
var diff = refDate - checkDate;
document.write("on reference date " + refDate, diff + " has passed since beginning of 2020");
// Task 11                   
var d = new Date();
var setHours = d.getHours();
document.write("current date : " + d);
document.write("<br>");
document.write("1 hour ago, it was " + setHours);

// Task 12
var d = new Date();
var d1 = new Date("june 21, 1020");
alert("current date : " + d);
alert("100 years back, it was: " + d1);

// Task 13
var age = +prompt("Enter your age");
document.write("current date : " + d);
document.write("<br>");
document.write("1 hour ago, it was " + setHours); 
var d = new Date().getFullYear();
var birthYear = d - age;
document.write("your age is " + age);
document.write("<br>");
document.write("your birth year is " + birthYear);

// Chap 35-38
// task 1
function date(){
    var d = new Date;
    document.write(d);
}
date();

// task 2
function fName(){
    var name1 = prompt("enter your first name");
    var name2 = prompt("enter your last name");
    var fullName = name1 + " " + name2;
    alert("welcome " + fullName);
}
fName();

// task 3
function sum(){
    var num1 = +prompt("enter first number");
    var num2 = +prompt("enter last number");
    var add = num1  + num2;
    alert("sum of num1 & num2 is: " + add);
}
sum();
// task4
function operation(num1,opr,num2){
   // var num1 = +prompt("Enter first number");
   // var num2 = +prompt("Enter second number");
//    var opr = prompt("Enter operator");
  if(opr === "+"){
      return num1 + num2;
  }
  else if(opr === "-"){
      return num1 - num2;
  }
  else if(opr === "x"){
      return num1 * num2;
  }
  else if(opr === "/"){
      return num1 / num2;
  }
  else if(opr === "%"){
      return num1 % num2;
  }
  else{
      return NaN;
  }
}
var ans = alert(operation(10,'-',5));
//task5
function square(num){
   alert(Math.pow(num,2));
}
square(10);
//task6
function factorial(num){       
    var answer = 1;
    if(num === 0 || num === 1){
        return answer;
    }
    if(num > 1){
    for(var i = 0 ; i > 1 ; i--){
        return answer = answer * i;
    }
}
}
alert(factorial(3));

//task7
function count(){
    var start = +prompt("Enter first number");
    var end= +prompt("Enter last number");
    for(var i = start ; i<=end;i++){
        document.write(start[i] + "<br>")
    }
}
count();

// task 8

// // task 9
function calcArea(width , height){
        alert("Area is " + width * height)
}
calcArea(2,3);

function calcArea(){
        // alert("Area is " + width * height)
        return  width * height;
}
alert(calcArea(width = 6 , height = 5)); 
//task10
//task11
//task12
//task13
function text(first,second){
     var counter = 0;
     for(var i = 0;i<first.length; i++){
       if(first.slice(i,i+1)=== second){
          ++counter;
         }
     }
     alert(counter);
     }
text("JSResources.com",'o');