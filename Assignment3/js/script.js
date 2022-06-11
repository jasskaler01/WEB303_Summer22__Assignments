// WEB303 Assignment 3
// Jaskaran Singh
$(function(){
/*let getData =$.getJSON("data/glitchTeam.json").done(function(data){
    $.each(data.members,function(key,val){
console.log("data Key",key,"And data val:",val)
$('div#glitch-team').append(`<h4>${val.fullname}</h5
<h6>${val.position}</h6>
<p>${val.shortbio}</p>`)
    })
})*/
$(function usingAjax(){
$.ajax({
    url:"data/glitchTeam.json",
    beforeSend:function(){
        let LoadingTeam = $("<h1>Loading Team .......</h1>");
        $('div#glitch-team').append(LoadingTeam); 
    },
    error:function(){},
    success:function(data){
        $('div#glitch-team').empty(5000);
        $.each(data.members,function(key,val){
            console.log("data Key",key,"And data val:",val)
            $('div#glitch-team').append(`<h4>${val.fullname}</h5
            <h6>${val.position}</h6>
            <p>${val.shortbio}</p>`)
                })
       
    }
})})})