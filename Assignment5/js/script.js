$(function () {// your code goes here
var characters = [
    {
        name: 'Winona Ryder',
        description: 'Joyce Byers,Joyce is a very caring and strong-willed woman who works as a retail clerk at Melvald General Store in downtown Hawkins. ',
        age: 50,
        dob: "1971 - 10 - 29"
    },
    {
        name: 'David Harbour',
        description: 'Jim Hooper ,  Hopper has lived in Hawkins nearly all his life, having attended high school with Joyce and Bob',
        age: 45,
        dob: "1976 - 05 - 18"
    },
    {
        name: 'Finn wolfhard',
        description: 'Mike Wheeler,Mike is an intelligent and conscientious student who is committed to Lucas, Dustin and Will. ,',
        age: 19,
        dob: "2002 - 12 - 23"
    },
    {
        name: 'Millie Bobby Brown',
        description: ' Eleven,She is a telekinetic girl who is the sole match for the creatures of the Upside Down and Hopper adoptive daughter.',
        age: 18,
        dob: "2004 - 02 - 19"
    },
    {
        name: 'Gaten Matarazzo',
        description: 'His Character name is Dustin Henderson, Dustin is  the Bard and has arguably the most extensive knowledge of the game, particularly the monsters.',
        age: 19,
        dob: "2022 - 09 - 08"
    },
]

var results = [];
characters.forEach(function (character) {
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
    $tableBody.append($row);
}
$('thead').after($tableBody);



    var $search = $('#search'); // Get input
    var cache = []; // Create array
function filter() {
        var query = this.value.trim().toLowerCase(); // Get query
        if (query) { // If there’s a query
            cache.forEach(function(characters) { // Each cache entry
                var index = 0; // Set index to 0
                index = characters.name.indexOf(query); // Is text in there?
                if (index != -1) { // we found the string in their first name
                    characters.element.addClass("active"); // we will apply colours based on this class
                } else { // player first name doesn't have the query string, make sure it's not higlighted
                    characters.element.removeClass("active")
                }
            });
        } else { // if the search is empty, nobody should be highlighted
            $('tbody tr').removeClass("active");
        }
    }
  
    if ('oninput' in $search[0]) {
        // Use input event to call filter()
        $search.on('input', filter);
    } else { // Otherwise
        // Use keyup event to call filter()
        $search.on('keyup', filter);
    
    }
//Sorting
var compare = { // Declare object
    name: function(a, b) { // Add name() method
        a = a.replace(/^the /i, ''); // Remove The
    b = b.replace(/^the /i, ''); // Remove The
    if (a < b) { // If a less than b
        return -1; // Return -1
    } else { // Otherwise
    // If a greater than b return 1 otherwise return 0
    return a > b ? 1 : 0;
    }
    },
    date: function(a, b) { // Add a method called date
        a = new Date(a); // New object to hold date
        b = new Date(b); // New object to hold date
        return a - b; // Return a minus b
    }
    }
    $('.sortable').each(function() {
        var $table = $(this); // This table
        var $tbody = $table.find('tbody'); // Table body
        var $controls = $table.find('th'); // Table headers
        var rows = $tbody.find('tr').toArray(); // Array of rows
        $controls.on('click', function() { // Event handler
            var $header = $(this); // Get header
        
    var order = $header.data('sort'); // Get data typevar column; 
    if ($header.is('.ascending') || $header.is('.descending')) { // Toggle to other class
        $header.toggleClass('ascending descending');
        // Reverse the array
        $tbody.append(rows.reverse());
        } else {
            $header.addClass('ascending'); // Add class to header// Remove asc or desc from all other headers
$header.siblings().removeClass('ascending descending'); // If compare object has method of that name
if (compare.hasOwnProperty(order)) {
column = $controls.index(this); // Column’s index no
rows.sort(function(a, b) { // Call sort() on rows
    a = $(a).find('td').eq(column).text();// Text of column row a
    b = $(b).find('td').eq(column).text();// Text of column row b
    return compare[order](a, b); // Call compare method
});
$tbody.append(rows);}
}
        });
})

});