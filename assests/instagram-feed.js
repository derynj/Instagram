
	var token = '3028289372.d36dbce.625454b33666461c887a03630ae98d7e',
	num_photos = 10;
				
	$.ajax({
		url: 'https://api.instagram.com/v1/users/self/media/recent',
		dataType: 'jsonp',
		type: 'GET',
		data: {access_token: token, count: num_photos},
		success: function(data){
			console.log(data);
			for( x in data.data ){
				$('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>');
			}
		},
		error: function(data){
			console.log(data);
		}
	});
	
	
	var page = 2;

$(window).scroll(function() {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
      console.log(++page);
      $("body").append('<div class="big-box"><h1>Page ' + page + '</h1></div>');
      
    }
});

 