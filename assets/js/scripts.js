// A $( document ).ready() block.
$( document ).ready(function() {

	// DropCap.js
	var dropcaps = document.querySelectorAll(".dropcap");
	window.Dropcap.layout(dropcaps, 2);

	// Responsive-Nav
	var nav = responsiveNav(".nav-collapse");

	// Round Reading Time
    $(".time").text(function (index, value) {
      return Math.round(parseFloat(value));
    });

    $(".project-item img").hover(function() {
        $(this).siblings(".project-label").addClass('hidden');
    }, function() {
        $(this).siblings(".project-label").removeClass('hidden');
    })
});


