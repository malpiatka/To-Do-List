//changing color and text decoration
$("ul").on("click", ".check", function(event){
	$(this).parent().toggleClass("done")
	event.stopPropagation();
});


//click an x to delete todo element with fading out
$("ul").on("click", ".delete", function(event){
	$(this).parent().fadeOut(500, function(){
	$(this).remove();
	});
	event.stopPropagation();
});

//adding todo elements to list by click and enter
$("input[type='text']").ready(function() {
	$(".add").click(function(){
		let todoAdd = $("input[type='text']").val();
		$(this).val("");
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

