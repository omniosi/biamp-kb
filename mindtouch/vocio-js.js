if (window.location.search.toLowerCase() == "?view=documents") { document.location = "http://support.biamp.com/Vocia/Documents"; }
if (window.location.search.toLowerCase() == "?view=downloads") { document.location = "http://support.biamp.com/Vocia/Software-Firmware"; }

$('.section-contents-wrapper').each(function(){
$(this).css('height', $(this).height());
});

$('.collapsible_item').each(function(){
$(this).click(function(e){
$('#' + $(this).attr('id') + '-contents').slideToggle(1000, 'swing');
$(this).toggleClass("shift_collapse");
});
$('#' + $(this).attr('id') + '-contents').slideUp(0);
});


$('.dw-hierarchy').css( 'display', 'none');
$('h1').css( 'display', 'none');
$('.mt-content-container').css('padding', '17px 0 17px 0');
$('.mt-content-container').css('width', '778px');
