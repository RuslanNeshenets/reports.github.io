$(document).ready(function () {
	$('.laboratory a').click(function(event){
		let lab = $(this).attr('id');

		let display = $(`.${lab}`).attr('style');
		console.log(display);

		if(display!=='display: block;'){
			$('.labs > div').hide();
			$('.laboratory > a').css({'color':'#000', 'font-weight': 'normal',});

			$(this).css({'color':'red', 'font-weight': 'bold',});
			$(`.${lab}`).slideToggle(500);
		}
		event.preventDefault();
	});
});