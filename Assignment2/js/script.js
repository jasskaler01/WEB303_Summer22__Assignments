// WEB303 Assignment 2
//Jaskaran Singh

$(function(){
    $("#content-wrapper").on('click',function(){
$("#content").slideToggle("slow")
    })
    $("#prospect").on('click',function(){
        openProspect();
       
    });
    $("#convert").on('click',function(){
        openConvert();
    });
    $("#retain").on('click',function(){
        openRetain();
    });
    var xhr = new XMLHttpRequest();
function openProspect() {
     xhr.open("GET", "prospect.html");
     xhr.onload = function () {
      if (xhr.status === 200) {
        let el = document.getElementById("content");
      //  el.style.display = "block";
        el.innerHTML = xhr.responseText;
      }
    };
  
    xhr.send();
    
  }
  function openConvert() {
    xhr.open("GET", "convert.html");
    xhr.onload = function () {
     if (xhr.status === 200) {
       let el = document.getElementById("content");
     //  el.style.display = "block";
       el.innerHTML = xhr.responseText;
     }
   };
 
   xhr.send();
   
 }
 function openRetain() {
    xhr.open("GET", "retain.html");
    xhr.onload = function () {
     if (xhr.status === 200) {
       let el = document.getElementById("content");
      // el.style.display = "block";
       el.innerHTML = xhr.responseText;
      
     }
   };
 
   xhr.send();
   
 }
 
});