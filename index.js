/*function varsha()
{
  var randomNumber1 = Math.floor((Math.random()*6)+1);
  var k= "images/dice"+randomNumber1+".png"
  return k;
}*/
// var l =varsha();
// document.querySelector("img")[0]=setAttribute("src",l);
var randomNumber1 = Math.floor((Math.random()*6)+1);
var source = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",source);
var randomNumber2 = Math.floor((Math.random()*6)+1);
var source2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",source2);

if (randomNumber1==randomNumber2)
{
  document.getElementById("winner").innerHTML="DRAW";
}
else if (randomNumber1 > randomNumber2)
{
    document.getElementById("winner").innerHTML="Mamatha Reddy IS WINNER";
}
else if (randomNumber1 < randomNumber2)
{
  document.getElementById("winner").innerHTML="Charan IS WINNER";
}
