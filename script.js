//main cal div
var cal = document.createElement('div');
cal.setAttribute('class','calculator');
document.body.append(cal);

//displaydiv
var caldisdiv = document.createElement('div');
caldisdiv.setAttribute('class','calculator_display');
document.body.append(caldisdiv);


//displayText
var caldis = document.createElement('input');
caldis.setAttribute('type','text');
caldis.setAttribute('id','disp');
document.body.append(caldis);

//keysdiv
var calkey = document.createElement('div');
calkey.setAttribute('class','calculator_keys');
document.body.append(calkey);

cal.append(caldisdiv,calkey);
caldisdiv.append(caldis);

// buttons
//+
var add = document.createElement('button');
add.setAttribute('onclick',"show('+')");
add.innerHTML="+";
document.body.append(add);

//-
var sub = document.createElement('button');
sub.innerHTML="-";
sub.setAttribute('onclick',"show('-')");
document.body.append(sub);

//*
var mul = document.createElement('button');
mul.innerHTML="*";
mul.setAttribute('onclick',"show('*')");
document.body.append(mul);

///
var divison = document.createElement('button');
divison.innerHTML="/";
divison.setAttribute('onclick',"show('/')");
document.body.append(divison);

//1.
var one = document.createElement('button');
one.innerHTML="1";
one.setAttribute('onclick',"show('1')");
document.body.append(one);

//2.
var two = document.createElement('button');
two.innerHTML="2";
two.setAttribute('onclick',"show('2')");
document.body.append(two);


//3.*
var three = document.createElement('button');
three.innerHTML="3";
three.setAttribute('onclick',"show('3')");
document.body.append(three);

//4..
var four = document.createElement('button');
four.innerHTML="4";
four.setAttribute('onclick',"show('4')");
document.body.append(four);

//5
var five = document.createElement('button');
five.innerHTML="5";
five.setAttribute('onclick',"show('5')");
document.body.append(five);

//6
var six = document.createElement('button');
six.innerHTML="6";
six.setAttribute('onclick',"show('6')");
document.body.append(six);

//7
var seven = document.createElement('button');
seven.innerHTML="7";
seven.setAttribute('onclick',"show('7')");
document.body.append(seven);

//8
var eight = document.createElement('button');
eight.innerHTML="8";
eight.setAttribute('onclick',"show('8')");
document.body.append(eight);

//9
var nine = document.createElement('button');
nine.innerHTML="9";
nine.setAttribute('onclick',"show('9')");
document.body.append(nine);

//.
var dot = document.createElement('button');
dot.innerHTML=".";
dot.setAttribute('onclick',"show('.')");
document.body.append(dot);

//=.
var equals = document.createElement('button');
equals.innerHTML="=";
equals.setAttribute('class','size');
//functioncall
equals.setAttribute('onclick',"equal()");
document.body.append(equals);

//clear
var c = document.createElement('button');
c.innerHTML="c";
//directcall
c.setAttribute('onclick','document.getElementById("disp").value=" "');
document.body.append(c);

var zero = document.createElement('button');
zero.innerHTML="0";
// zero.setAttribute('value','0');
zero.setAttribute('onclick',"show('0')");
document.body.append(zero);

calkey.append(add,sub,mul,divison,one,two,three,equals,four,five,six,seven,eight,nine,dot,c,zero);

//display screen
function show(val)
{
var a = document.getElementById("disp").value+=val;
return a;
}

//equal function
function equal(){
    let x=document.getElementById("disp").value;
    let y=eval(x);
    document.getElementById("disp").value=y;
}

// function clear(){
//     document.getElementById('disp').value=" ";
// }
