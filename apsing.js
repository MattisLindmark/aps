
//const url = "https://umeauniversity-my.sharepoint.com/:u:/g/personal/maslrk02_ad_umu_se/EQt-imastydEjZIFkT0uIQ0BO7_nv1NXPrjQycoD06XULw?download=1"
const url = "lonlyspace.mp3";
const url2 = "testprat.mp3";
const url3 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3";

var music = new Audio();
const URLs = [url,url2,url3];
music.src = URLs[0];
musicIndex = 0;

music.onvolumechange = (event) => { console.log("Volym nu: "+music.volume);};

function playMusic()
{
    music.play();
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
    //musicVolume(orgV);
    music.play();
    await FadeAsync(true, 1000, orgV);
}



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
    alert('hejsan '+hej);
}

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

customElements.define('my-tag', MyTag);
