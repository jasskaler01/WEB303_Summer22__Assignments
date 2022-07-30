// your code goes here
var characters=[
    {name:'Winona Ryder',
     description:'Joyce Byers,Joyce is a very caring and strong-willed woman who works as a retail clerk at Melvald General Store in downtown Hawkins. ',
    age:50,
dob:1971-10-29},
{name:'David Harbour',
     description:'Jim Hooper ,  Hopper has lived in Hawkins nearly all his life, having attended high school with Joyce and Bob',
    age:45,
dob:1976-05-18},
{name:'Finn wolfhard',
     description:'Mike Wheeler,Mike is an intelligent and conscientious student who is committed to Lucas, Dustin and Will. ,',
    age:19,
dob:2002-12-23},
{name:'Millie Bobby Brown',
     description:' Eleven,She is a telekinetic girl who is the sole match for the creatures of the Upside Down and Hopper adoptive daughter.',
    age:18,
dob:2004-02-19},
{name:'Gaten Matarazzo',
     description:'His Character name is Dustin Henderson, Dustin is  the Bard and has arguably the most extensive knowledge of the game, particularly the monsters.',
    age:19,
dob:2022-09-08},
]

var results = [];
characters.forEach(function(character) {
if (character.age) {
results.push(character); // Add to array
}
});
var $tableBody = $('<tbody></tbody>');
for (var i = 0; i < results.length; i++) {
var character = results[i]; // Store current charcater
var $row = $('<tr></tr>'); // Create row for them
$row.append($('<td></td>').text(character.name)); // Add name
$row.append($('<td></td>').text(character.description)); // Add desvription
$row.append($('<td></td>').text(character.age));
$row.append($('<td></td>').text(character.dob));
$tableBody.append( $row );
}
$('thead').after($tableBody); 
