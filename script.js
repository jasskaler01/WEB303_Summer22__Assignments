/*
	WEB 303 Assignment 1 - jQuery
	{Jaskaran singh}
*/
$(document).ready(function() {
    $("#price").keyup(function() {
        let getPrice = $("#price").val();
        let tax = getPrice * 0.13;
		

		
	$("#tax").text("$" + tax.toFixed(2));
	let totalPrice =+ getPrice +tax
	
	
	$("#add-price").click(function(){
		let ul = $("#price-list")
	if(getPrice > 0){
		$(ul).html("<li>" + totalPrice + "<li>").show();
	}
 console.log("Get Price = ", getPrice ,"Total price" , totalPrice)
})
});

});