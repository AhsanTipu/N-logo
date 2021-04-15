function price(){
   var a= document.getElementById('price').style.display="block";
   a.className="+active"
    document.getElementById('price1').style.display="none";
    document.getElementById('price2').style.display="none";
    document.getElementById('price3').style.display="none";
}
function price1(){
    document.getElementById('price').style.display="none";
    document.getElementById('price1').style.display="block";
    document.getElementById('price2').style.display="none";
    document.getElementById('price3').style.display="none";
}
function price2(){
    document.getElementById('price').style.display="none";
    document.getElementById('price1').style.display="none";
    document.getElementById('price2').style.display="block";
    document.getElementById('price3').style.display="none";
}
function price3(){
    document.getElementById('price').style.display="none";
    document.getElementById('price1').style.display="none";
    document.getElementById('price2').style.display="none";
    document.getElementById('price3').style.display="block";
}