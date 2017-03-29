// Definitions
var i = 0;

var colors = ["#CCCCCC","#333333","#990099", "#DB324D", "#6969B3", "#41D3BD", "#6D326D" ];

var apiEndpoint = "http://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

var successCallback = function (data) {
	console.log(data);
  $("#quote").html("<h4>" + "<i style='float:left; margin-right: 10px;' class='fa fa-quote-left'></i>" + data[0].content + "</h4>");
	$("#author").html("<p>– " + data[0].title + "</p>");
}
$(document).ready(function (){
$(document).ready(function (){
	$.ajaxSetup({cache: false})
	// ajax!
	$("#quote").fadeOut();
	$.getJSON( apiEndpoint, successCallback);
	$("#quote").fadeIn();
	$('.btn-primary').css("background-color", colors[i]);
	$('body').css("background-color", colors[i]);
	i++;
});

$("#next").click(function (){
	$.ajaxSetup({cache: false})
	// ajax!
	$("#quote").fadeOut(500);
	$("#author").fadeOut(500);
	$.getJSON( apiEndpoint, successCallback);
	$("#quote").fadeIn(700);
	$("#author").fadeIn(700);
})

$("#next").click(function(){                  
  $('.btn-primary').css("background-color", colors[i]);
	$('body').css("background-color", colors[i]);
	i++;
	if (colors[i] == null)
		i = 0;
});

$("#tweet").click(function(){                  
  var link = "https://twitter.com/intent/tweet?text=" + 		$("#quote").text();
	console.log(link);

	window.open(link);
});
});