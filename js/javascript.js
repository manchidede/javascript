function is_integer(i){
    if(Number.isInteger(i)==true){
        console.log("Input "+i+" is an integer");
    }
    else{console.log("Input "+i+" is not integer");}
    
}
var myinput="Chidiebele";
is_integer(myinput);

// Using foreach. Does operation in arrays. no return
var numbers=[5,2,4,1];
var sum=0;
function sum_all(input){
sum+=input;
}
numbers.forEach(sum_all);
console.log(sum);


//Temperature converter
function reset(){
    document.getElementById("cent").value=0;
    document.getElementById("fah").value=0;
}
function centconverter(){
    var centvalue = document.getElementById("cent").value;
    var result = (centvalue * 9)/5+32;
    document.getElementById("fah").value = result.toFixed(2);
}
function fahconverter(){
    var fahvalue = document.getElementById("fah").value;
    var result1 = ((fahvalue-32)*5)/9;
    document.getElementById("cent").value = result1.toFixed(2);
}

//Factorial Function

function factorial(x) {
    var fact = 1;
    for (var i=1; i <= x; i++) {
      fact = fact * i;
    }
    console.log(fact);
  }

  //Number 5
  function convert_to_coins(amount) {
    var denominations = [25, 10, 5, 2, 1];
    var curr_denom_index = 0;
    while (amount > 0) {
      while (amount < denominations[curr_denom_index]) {
        curr_denom_index++;
      }
      amount = amount - denominations[curr_denom_index];
      console.log(denominations[curr_denom_index]);
    }
  }


  //Higher order functions
function num_print(upto, filter){
    for(var i=0;i<=upto;i++){
    if(filter(i)){
    console.log(i);}}
    }
    
    function is_odd(n){
    return n % 2 != 0;}

    num_print(10,is_odd);
    /*answer
    1 
    3 
    5 
    7 
    9
    */

    //Closures Examples
    
    //Filter function returns an array
    var arrx=[1,2,3,4,5,6,7,8,9,10];
    function evenNumbers(params) {
        return params%2==0;
    }
    arrx.filter(evenNumbers);

    //Map function returns an array
    var arrx=[1,2,3,4,5,6,7,8,9,10];
    function squareF(elem) {
        return elem*elem;
    }
    arrx.map(squareF);

    //reduce function. Returns a value from the array. 
    //Operates with the previous returned data and the current one.
    var arrx=[1,2,3,4];
    function addF(prev,curr) {
        return prev+curr;
    }
    arrx.reduce(addF);
    //OR use inittal value
    arrx.reduce(addF,0);
    //result
    //This adds 
    //0+1
    //1+2
    //3+3
    //6+4
    //=10


    //arguments property of every function
    function args(){
        console.log(arguments);
    }
    args(4,2,5,4);
    //This returns the arguments with index {0:4,1:2,2:5,3:4}
    //Again
    function args(){
        for(var i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
    }//This lists the numbers one by one




    //Program to display text with highest lenght
    function max_str(arr) {
        return arr.reduce(function(prev, curr) {
          if (curr.length > prev.length) {
            return curr;
          } else {
            return prev;
          }
        }, "");
      }

      //using "this" keyword
      var y={radius:4,area:function(){return this.radius*this.radius;}};
      y.area();//This outputs 16


      //Constructor functions (used as objects)
      function Circle(r){
          this.radius=r;
          this.area=function(){return Math.PI * this.radius * this.radius;};
      }
      var x=new Circle(2);
      x.radius;//outputs 2
      x.area();//outputs the area 12.56
      console.log(x);//outputs Object { radius: 2, area: area() }


      //Prototype is used to add new objects in already created constructor function
      function Circle(r){
        this.radius=r;
        this.area=function(){return Math.PI * this.radius * this.radius;};
    }
    var y=new Circle(3);
    Circle.prototype.perimeter=function(){return this.radius+this.radius;};
    y.perimeter();//this outputs 6


    //Inheritance with prototype
    function Circle(r){
        this.radius=r;
        this.perimeter=2*Math.PI;
    }
    function Square(l){
        this.length=l;
    }

    Square.prototype=new Circle(3);//Inherits the perimeter from Circle object
    new Square(2).perimeter;//Displays the parameter



    //error handling
    isNaN(4) //this returns boolean false
    isNaN("s")//this returns true

    function sum(x,y,z){
        if(!isNaN(x)&&!isNaN(y)&&!isNaN(z)){
        return x+y+z;
    }
    if(isNaN(x)){
        throw Error("Non numeric input: "+x);
    }
    if(isNaN(y)){
        throw Error("Non numeric input: "+y);
    }
    if(isNaN(z)){
        throw Error("Non numeric input: "+z);
    }
}
//handle the error with try and catch statements
try{
    sum('gh',4,6);
}catch(error){
console.log(error);
}
console.log('Program continues');
sum(2,3,4);

//javascript DOM (Document object model) API
document.getElementById("photo").src='picture.png';
//accessing child nodes
document.getElementById('container').childNodes[1].src='foto,jpg';
document.getElementById('container').childNodes[2].src='foto2,jpg';
document.getElementById('container').firstChild.src='foto,jpg';
document.getElementById('container').lastChild.src='foto,jpg';
document.getElementById('container').previousSibling.src='foto,jpg';
//to get all image elements, you can do
document.getElementsByTagName('img');


//eventlisteners in Javascript
//event listeners follow the arguments addEventListener(event name,function to be executed);
function loadF(){
    alert('Page loaded');
}
window.addEventListener("load",loadF);
//Eventlisteners on buttons
function clickF(){
    alert('button clicked');
}
document.getElementById('button').onclick=clickF;
//or
document.getElementById('button').addEventListener("click",loadF);

//Bubbling and Propagation
function changebgcolor(event){
    this.style.backgroundColor="blue";
}
document.getElementById("button").onclick=changebgcolor;
window.onclick=changebgcolor;
//When objects event propagate back to the parent child which is the document.
//to stop the propagation at some point, use stopPropagation method
function changebgcolor(event){
    this.style.backgroundColor="blue";
    event.stopPropagation();
}

//you can use javascript to stop the default function of an object.
document.getElementById("link").addEventListener("click",function(event){
    console.log('this link will not click...');
    event.preventDefault();
});


//Event objects. There are
//Mouse events, form events, animation events, torch events, media events, transition events