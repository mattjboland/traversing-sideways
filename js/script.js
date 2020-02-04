$(document).ready(function() {
	//sets <a> element within paragraph  to yellow  
	$("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); /* returns all the <a> child elements that are 
		within this paragraph*/
	});

	// Toggle the visibility of the paragraph when a button is clicked 
	$("button").click(function(){
		$(this).prev().slideToggle('slow');
    });
    
    $("img").click(function() {
		$(this).next().children("p").slideDown();
    });
    
    $(".card").click(function() {
		$(this).toggleClass("highlight");	 
    });
    
    $("#select_btn").click(function() {
		$(".card:not(.highlight)").hide();	 
    });
    
    $("#all_btn").click(function(){
		$(".card").show();	 
	});
});