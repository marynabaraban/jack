//SCROLL
$(document).ready(function(){
	$(".header__menu").on("click","a", function (event) {
		event.preventDefault();

		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

//BUTTON MORE
$('.btn__more').click(function() { 
	$(this).toggleClass('open') 
	$('p.text_more').toggle('slow') 
})

//BURGER MENU
function toggleNav() {
    var updateElement = document.getElementById("menu-icon");
 	updateElement.classList.toggle("open");
   
}

//SLIDER
