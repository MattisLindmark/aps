    const hej = "hejsan";
    var music = new Audio();
    const url = "../assets/music/skuggan_hypnos_low.mp3";
    const url2 = "testprat.mp3";
    const url3 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3";
    music.src = url;

 //   const $aud = $(audioElement);

/*
$(document).ready(function(){
    alert('Funkar');
});
*/


$(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('id','groda');
    audioElement.setAttribute('src', "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3");
    var $audio = $(audioElement);    
    //console.log(""+audioElement.id);
    
    $('h1').click(function(event) {
        $('#zapp').slideToggle();
    });
    
    $('bult').click(function(event){
        $('bult').slideToggle(1000);
        $audio.animate({volume: 0.1}, 1000,()=>{bytaudio(audioElement)});
//        $(audioElement).animate({volume: 0.1}, 1000);


    });

    $('#byt').click(function(event){
        //alert("byter");
        bytaudio(audioElement);
    })
    
    $('whatever').click(function(event){
        $('whatever').animate({right: '250px', opacity: '0.5'}); //color anim kräver plugin från jq.
    });

    $('music').click(function(event){
        //$(audioElement).play();
        audioElement.play();
        //audioElement.play();
        //$audioElement.animate({volume: 0.1}, 1000);
    })
    
});

function bytaudio(audioElement) {
    audioElement.pause();
    audioElement.src = url; //.setAttribute('src', url);
    audioElement.play();
}

function playMusic()
{
    music.play();
//    var a = document.getElementById('groda');
//    a.play();
}
