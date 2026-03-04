var landing = {
	init: function() {
		this.getPrice();
		this.formSubmit();
	}, 
	getPrice: function() {
		$('.new__price').each(function () {
			var p = parseInt($(this).text());
	        var currency = $(this).text().replace(/[0-9]/g, '');
			p = p * 100 / 50;
			p2 = Math.ceil(p);
			$(this).closest('.price').find('.old__price').text(p2 + ' ' + currency);
		});

		$('.card__2 .new__price').each(function () {
			var p = parseInt($(this).text());
	        var currency = $(this).text().replace(/[0-9]/g, '');
			p = p * 100 / 30;
			p2 = Math.ceil(p);
			$(this).closest('.price').find('.old__price').text(p2 + ' ' + currency);
		});
	},
	formSubmit: function () {
		$(".card__form").submit(function(event) {
			var size = $(this).find('.card__select').val();
            var color = $(this).find('.card__color-btn.active').data("color");

            if ( color === undefined ) {
                color = "black"
            }

			if ( size !== undefined ) {
				$(this).find('input[name=comment]').val('Size: ' + size + ', color: ' + color);
			}
		});
	}
}

$(document).ready(function() {
	landing.init();
});