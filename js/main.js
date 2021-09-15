$(document).ready(function () {
	$('.laboratory a').click(function(event){
		let lab = $(this).attr('id');

		let display = $(`.${lab}`).attr('style');

		if(display!=='display: block;'){
			$('.labs > div').hide();
			$('.laboratory > a').css({'color':'#000', 'font-weight': 'normal',});

			$(this).css({'color':'red', 'font-weight': 'bold',});
			$(`.${lab}`).slideToggle(500);
		}
		event.preventDefault();
	});

	//Лаб №1
	$('.work__structure__1 a:nth-child(n+2)').click(function(event){
		let text = $(this).children().html();
		let img = $(this).children('img').attr('src');
		$('.work__info').html(`${text}<img src="${img}">`);
		if($('.work__info img').attr('src') != 'undefined'
			&& $('.work__info img').attr('src').length != 0){
			$('.work__info img').show();
		}
	});
});