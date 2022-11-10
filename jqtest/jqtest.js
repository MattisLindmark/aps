const hej = "hejsan";
/*
$(document).ready(function(){
    alert('Funkar');
});
*/
$(function(){
    $('h1').click(function(event) {
        $('#zapp').slideToggle();
    });

    $('bult').click(function(event){
        $('bult').slideToggle(1000);
    });

    $('whatever').click(function(event){
        $('whatever').animate({right: '250px', opacity: '0.5'}); //color anim kräver plugin från jq.
    });

});