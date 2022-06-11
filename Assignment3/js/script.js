// WEB303 Assignment 3
// Jaskaran Singh
let getData =$.getJSON("data/glitchTeam.json").done(function(data){
    $.each(data.members,function(key,val){
console.log("data Key",key,"And data val:",val)
$('div#glitch-team').append(`<h4>${val.fullname}</h5
<h6>${val.position}</h6>
<p>${val.shortbio}</p>`)
    })
})
