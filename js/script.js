//changing color and text decoration -long version
/*
$("ul").on("click", "li", function () {
	if ($(this).css("color") === "rgb(128, 128, 128)") {
		$(this).css({
			color: "black",
			textDecoration: "none"
		});
	} else
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
});
*/

//changing color and text decoration -short version
	$("ul").on("click", "li",function(){
		$(this).toggleClass("done")
		});


//click an x to delete todo element with fading out
$("ul").on("click", ".delete", function(event){
	$(this).parent().fadeOut(500, function(){
	$(this).remove();
	});
	event.stopPropagation();
});


//adding todo elements to list
$("input[type='text']").keypress(function (event) {
	if (event.which === 13) {
		let todoAdd = $(this).val();
		$(this).val("");
		$("ul").append("<li><span class='check'><i class='fas fa-check'></i></span>" + todoAdd + "<span class='delete'><i class='fas fa-times'></i></span></li>");
	}
});
/* 
//not working ??
$("ul").on("click", ".add", function(){
	let todoAdd = $(this).val();
	$("ul").append("<li><span class='check'><i class='fas fa-check'></i></span>"+todoAdd+"<span class='delete'><i class='fas fa-times'></i></span></li>");
});
*/
//adding todo elements to list by click and enter
/*
//click not working
$("input[type='text']").ready(function() {
	$(".add").click(function(){
		let todoAdd = $(this).val();
		$("ul").append("<li><span class='check'><i class='fas fa-check'></i></span>"+todoAdd+"<span class='delete'><i class='fas fa-times'></i></span></li>");
		});
		$("input[type='text']").keypress(function(event){
			if(event.which === 13){
				let todoAdd = $(this).val();
				$(this).val("");
				$("ul").append("<li><span class='check'><i class='fas fa-check'></i></span>"+todoAdd+"<span class='delete'><i class='fas fa-times'></i></span></li>");
			}
	});
});
*/
