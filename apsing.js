
//const url = "https://umeauniversity-my.sharepoint.com/:u:/g/personal/maslrk02_ad_umu_se/EQt-imastydEjZIFkT0uIQ0BO7_nv1NXPrjQycoD06XULw?download=1"

// MUSIK setup
var musicScores = [
    { name:"skugganhypno", value:"skuggan_hypnos_low.mp3"},
    { name:"skuggan1", value:"skuggan1_lvol.mp3"},
    { name:"skuggan2", value:"skuggan2.mp3"},
    { name:"skuggan3", value:"skuggan3.mp3"},
    { name:"skuggan4", value:"skuggan4.mp3"},
    { name:"skuggan5", value:"skuggan5.mp3"}
]
/*
const url = "lonlyspace.mp3";
const url2 = "testprat.mp3";
const url3 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3";
const url4 =  "../assets/music/skuggan_hypnos_low.mp3";
const url5 = "../assets/music/skuggan1_lvol.mp3";
*/
var music = new Audio();
const musicBaseUrl = "./assets/music/";
//const URLs = [url,url2,url3,url4,url5];
//music.src = URLs[0];
//musicIndex = 0;

// SoundFX setup
var FXsounds = [
    { name:"pling", value:"pling.mp3"},
    { name:"flepp", value:"messFlepp.ogg"},
    { name:"robot", value:"robot1.ogg"},
    { name:"snap", value:"177494__snapper4298__snap-3.wav"}
]
const FXsoundsBaseUrl = "./assets/sound/"
var sounds = new Audio();


music.onvolumechange = (event) => { console.log("Volym nu: "+music.volume);};

function playSoundFX(name)
{
    sounds.pause();
    var surl = "none";
    try{
        surl = FXsounds.find(p => p.name ===name).value;
    } catch
    {
        surl = "none";
    }
    //    console.log("SoundFX function "+surl);
    if (surl != "none") {
        if (surl.includes("https://")) {
            sounds.src = surl;
        }
        else {
            sounds.src = FXsoundsBaseUrl + surl;
        }
        
        sounds.play();
    }
}

function playMusic(name)
{
    if (name == "stop"){
        music.pause();
        return;
    }

    var surl= "none";
    try{
        surl = musicScores.find(p => p.name ===name).value;
    } catch
    {
        surl = "none";
    }

    if (surl != "none") {
        if (surl.includes("https://")) {
            music.src = surl;
        }
        else {
            music.src = musicBaseUrl + surl;
        }
        music.play();
    }

    if (surl == "none")
        console.log("Could not find music named: "+name);

}

function stopMusic()
{
    music.pause();
}

function musicByt()
{
    fadeVolumeDown(doMusicByt);
}

async function AsyncmusicByt()
{
    orgV = music.volume;
    console.log("Start");
    await FadeAsync();
    console.log("end");
    musicIndex = (musicIndex+1)%URLs.length;
    music.src = URLs[musicIndex];
    updateDebuggInfo();
    //musicVolume(orgV);
    music.play();
    await FadeAsync(true, 1000, orgV);
}

function updateDebuggInfo()
{
    console.log("ojojoj "+URLs[musicIndex]);
    try{
        let tmp = document.getElementById('fileinfo');
        tmp.innerHTML="Fil: "+URLs[musicIndex];
    } catch{}
}


async function FadeAsync(isFadeUp=false, duration=800, targetVolume)  //TODO: Fixa så den kan fadea-upp till en tidigare volym, inte jämt till 1.
{
    if (!isFadeUp)
        targetVolume = 0;

    if (duration < 200 || duration > 10000)
        duration = 800; // millisekunder.
        
    nrOfLoops = duration/40;
    stepValue = 40/duration;
    stepValue *= (isFadeUp)?1:-1;
    // duration blir 20 steg med intervall på 40 millisekunder = 800 milli sek. 0.8 sek.
    v = music.volume;
    orgVolume = v;
    
    await new Promise((resolve,reject)=>{
        var timer = setInterval(function () {            
            if (nrOfLoops <= 0) {
                clearInterval(timer);
                resolve();
            }
            nrOfLoops --;
            musicVolume(v);
            v += stepValue;
        }, 40);
    });
}

function musicVolume(v)
{
    v = Math.min(Math.max(v,0), 1);
    music.volume = v;
}


function fadeVolumeDown(onDone)
{
    v = music.volume;
        orgVolume = v;
        var timer = setInterval(function () {
            if (v <= 0) {
                clearInterval(timer);
                onDone(orgVolume);
                return;
            }
            //music.volume = v;
            musicVolume(v);
            v -= 0.05;
        }, 40);
        
}

    function doMusicByt(orgVolume)
    {
        if (orgVolume== null || orgVolume > 1 || orgVolume < 0)
        orgVolume = 1;
        
        console.log("Music switch done");
        music.src = url2;
        
        musicVolume(orgVolume);
        music.play();
    }
    
    function musicJumpTime()
{
    music.currentTime = 5;
}


function testar(hej)
{
    console.log("Variabel: "+hej);
    //alert('hejsan '+hej);
}


class MyTag extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<p>Custom tagg här!</p> `;
        this.style.color = "red";
        var typ = "Undefined typ";
        try{
            typ = this.attributes.typ.value;
        }
        catch{
            typ = "inget värde satt";
        }
        testar("from tagg "+typ);
    }
}

class SoundFX extends HTMLElement {
    connectedCallback() {
        //this.innerHTML = 'Debugg ljud';
        // Nedan If-sats är ett hack för att undvika att ljudet laddas 2 ggr när den wrappar i en transision container.
        if (document.querySelector('tw-transition-container') != null) {
            return;
            //            this.innerHTML = 'is child ';
        }
        var name = "undefined";
        try {
            name = this.attributes.name.value;
        } catch {
            name = "undefined";
        }
        if (name.length > 0 && name != "undefined") {
            console.log("PlaySoundFX(name)" + name);
            playSoundFX(name);
        }
    }
}

class MusicPlay extends HTMLElement {
    connectedCallback() {
//        this.innerHTML = 'Debugg music';
        // Nedan If-sats är ett hack för att undvika att ljudet laddas 2 ggr när den wrappar i en transision container.
        if (document.querySelector('tw-transition-container') != null) {
            return;
            //            this.innerHTML = 'is child ';
        }
        var name = "undefined";
        try {
            name = this.attributes.name.value;
        } catch {
            name = "undefined";
        }
        if (name.length > 0 && name != "undefined") {
            console.log("PlayMusic" + name);
            playMusic(name);
        }
        console.log("Do not PlayMusic" + name);
    }
}


//customElements.define('soundfx',SoundFX);
customElements.define('my-tag', MyTag);
customElements.define('play-sound', SoundFX);
customElements.define('play-music', MusicPlay);

/*
function playMusicOld()
{
    var audio = document.createElement('audio');
    audio.src= 'https://umeauniversity-my.sharepoint.com/personal/maslrk02_ad_umu_se/Documents/DeladeSaker/publichtml/lonlyspace.mp3?ga=1';
    audio.loop = true;
    audio.play();
}
function stopMusicOld()
{
    var audio = document.getElementsByName('audio');
    audio.pause();
}
*/

//=================== Leftovers
/*
class SoundFX extends HTMLelement {
    connectedCallback() {
        this.innerHTML = 'Debugg ljud';
        var name = "undefined";
        try{
            name = this.attributes.name.value;
        } catch{
            name = "undefined";
        }
        if (name.length > 0 && name != "undefined"){
            console.log("PlaySoundFX(name)");
        }
    }   
}
*/
/*
async function FadeAsyncLerp(isFadeUp=false, duration=800, targetVolume)
{
    if (duration < 200 || duration > 10000)
    duration = 800; // millisekunder.
    
    nrOfLoops = duration/40;
    stepValue = 40/duration;
    stepValue *= (isFadeUp)?1:-1;
    // duration blir 20 steg med intervall på 40 millisekunder = 800 milli sek. 0.8 sek.
//    v = music.volume;
    v = targetVolume;
    orgVolume = v;

    await new Promise((resolve,reject)=>{
        var timer = setInterval(function () {            
            if (nrOfLoops <= 0) {
                clearInterval(timer);
                resolve();
            }
            nrOfLoops --;
            musicVolume(lerp(0,v,stepValue));
            v += stepValue;
        }, 40);
    });
}


function lerp (start, end, amt){
    return (1-amt)*start+amt*end
  }
*/