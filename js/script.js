//changing color and text decoration -long version

$("li").click(function(){
	if ($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
		color: "black",
		textDecoration: "none"
		});
	}
	else
	$(this).css({
		color: "gray",
		textDecoration: "line-through"
	});
});


