//const url = "https://umeauniversity-my.sharepoint.com/:u:/g/personal/maslrk02_ad_umu_se/EQt-imastydEjZIFkT0uIQ0BO7_nv1NXPrjQycoD06XULw?download=1"

// MUSIK setup
var musicScores = [
    { name:"skugganhypno", value:"skuggan_hypnos_low.mp3"},
    { name:"skuggan0", value:"skuggan0.mp3"},
    { name:"skuggan1", value:"skuggan1_lvol.mp3"},
    { name:"skuggan2", value:"skuggan2.mp3"},
    { name:"skuggan3", value:"skuggan3.mp3"},
    { name:"skuggan4", value:"skuggan4.mp3"},
    { name:"skuggan5", value:"skuggan5.mp3"},
    { name:"test", value:"looptest.mp3"}

]
/*
const url = "lonlyspace.mp3";
const url2 = "testprat.mp3";
const url3 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3";
const url4 =  "../assets/music/skuggan_hypnos_low.mp3";
const url5 = "../assets/music/skuggan1_lvol.mp3";
*/
var music = new Audio();
music.loop = true;
const musicBaseUrl = "./assets/music/";
const musicBaseVolume = 0.3;
var musicVol = musicBaseVolume;
//const URLs = [url,url2,url3,url4,url5];
//music.src = URLs[0];
//musicIndex = 0;

// SoundFX setup
var FXsounds = [
    { name:"pling", value:"pling.mp3"},
    { name:"flepp", value:"messFlepp.ogg"},
    { name:"robot", value:"robot1.ogg"},
    { name:"snap", value:"177494__snapper4298__snap-3.wav"},
    { name:"papper", value:"paper.mp3"},
    { name:"pappersark", value:"papersheet.mp3"},
    { name: "eld", value:"PH_burning_loop.wav"},
    { name: "hypnosmeeter", value:"hypnos.mp3"},
    { name: "deathmeeter", value:"dod.mp3"},
    { name: "inventory", value:"pickup.mp3"},
    { name: "vakna", value:"vakna.mp3"},
    { name:"sov1", value:"sov1.mp3"},
    { name:"sov2", value:"sov2.mp3"},
    { name:"sov3", value:"sov3.mp3"},
    { name:"sov4", value:"sov4.mp3"},
    { name:"sov5", value:"sov5.mp3"},
    { name:"sov6", value:"sov6.mp3"},
    { name:"sov7", value:"sov7.mp3"},
    { name:"sov8", value:"sov8.mp3"},
    { name:"sov9", value:"sov9.mp3"},
    { name:"sov10", value:"sov10.mp3"},
    { name:"sov11", value:"sov11.mp3"},
    { name:"sov12", value:"sov12.mp3"},
    { name:"sov13", value:"sov13.mp3"},
    { name:"sov14", value:"sov14.mp3"},
    { name:"sov15", value:"sov15.mp3"},
    { name:"sov16", value:"sov16.mp3"},
    { name:"sov17", value:"sov17.mp3"},
    { name:"sov18", value:"sov18.mp3"},
    { name:"sov19", value:"sov19.mp3"},
    { name:"sov20", value:"sov20.mp3"},
    { name:"lyssna1", value:"lyssna1.mp3"},
    { name:"lyssna2", value:"lyssna2.mp3"},
    { name:"lyssna3", value:"lyssna3.mp3"},
    { name:"lyssna4", value:"lyssna4.mp3"},
    { name:"lyssna5", value:"lyssna5.mp3"},
    { name:"lyssna6", value:"lyssna6.mp3"},
    { name:"lyssna7", value:"lyssna7.mp3"},
    { name:"lyssna8", value:"lyssna8.mp3"},
    { name:"lyssna9", value:"lyssna9.mp3"},
    { name:"lyssna10", value:"lyssna10.mp3"},
    { name:"lyssna11", value:"lyssna11.mp3"},
    { name:"lyssna12", value:"lyssna12.mp3"},
    { name:"lyssna13", value:"lyssna13.mp3"},
    { name:"lyssna14", value:"lyssna14.mp3"},
    { name:"lyssna15", value:"lyssna15.mp3"},
    { name:"lyssna16", value:"lyssna16.mp3"},
    { name:"lyssna17", value:"lyssna17.mp3"},
    { name:"lyssna18", value:"lyssna18.mp3"},
    { name:"lyssna19", value:"lyssna19.mp3"},
    { name:"lyssna20", value:"lyssna20.mp3"},
    { name:"lyssna21", value:"lyssna21.mp3"},
    { name:"lyssna22", value:"lyssna22.mp3"},
    { name:"lyssna23", value:"lyssna23.mp3"},
    { name:"lyssna24", value:"lyssna24.mp3"},
    { name:"lyssna25", value:"lyssna25.mp3"},
    { name:"lyssna26", value:"lyssna26.mp3"},
    { name:"lyssna27", value:"lyssna27.mp3"},
    { name:"lyssna28", value:"lyssna28.mp3"},
    { name:"lyssna29", value:"lyssna29.mp3"},
    { name:"lyssna30", value:"lyssna30.mp3"}
]
const FXsoundsBaseUrl = "./assets/sound/"
var sounds = new Audio();

// Hårdkodat ljud som alltid ska höras vid inventory update, hypnos och death
// Obs- mappar mot namnen i arrayen ovan.
const FXsoundStatic = {
    pickup: 'inventory',
    death: 'deathmeeter',
    hypnos: 'hypnosmeeter',
}
var soundsStatic = new Audio();

//sounds.type = 'audio/mpeg; codecs="mp3"';

// == OBS angåengde inventoryList:
// name - ska stämma med variabelns namn. Icon ska stämma med filnamnet. Value hämtas och säts från värdet i twine storyn när den körs.
// tooltip: Vad som visas on mouse over. Om det ej är satt används name. Dvs sätt tooltip om beskrivningen som visas ska skilja från vad variabeln/name är.
// 
var inventoryList =[
    { name:"ficklampa", tooltip:"", icon:"icon_ficklampa.png", value: 0},
    { name:"nyckel", tooltip:"", icon:"icon_nyckel.png", value: 0},
    { name:"pendel", tooltip:"", icon:"icon_pendel.png",value: 0},
    { name:"jordnötter", tooltip:"", icon:"icon_jordnotter.png",value: 0},
    { name:"kniv", tooltip:"", icon:"icon_kniv.png",value: 0},
    { name:"affisch", tooltip:"", icon:"icon_affisch.png",value: 0},
    { name:"koffein", tooltip:"", icon:"icon_koffein.png",value: 0},
    { name:"nyckelknippa", tooltip:"passerkort", icon:"icon_nyckelkort.png",value: 0}
]

// === startup setup typ ===
//music.onvolumechange = (event) => { console.log("Volym nu: "+music.volume);};
//document.readystatechange = (event) => {console.log("Document DOM content loaded event");};
// window.onclick = (event) => { console.log("Window click event");};

//console.log("-----------Körs------");

// --- varför funkar state i story js men ej här?
//var _state = require('state');
//console.log(_state.variables);

window.hypnos = 0;
window.deaths = 0;
const hypnosMax = 5;
const deathMax = 5; // för att slippa hårdkopda längre ned.



/*  Kul försök men går ej sätta på statevar.

 setTimeout(() => {
     SetupCallback();
   }, 2000)
//SetupCallback();

function SetupCallback()
{
    const callbackB = function () {
        console.log('==== Observed object has changed!');
    };
    
    const observer = new MutationObserver(callbackB);       
    const target = document.querySelector('inventory');
    
    const config = { attributes: true, childList: true, subtree: true };
    
    observer.observe(target, config);

}
*/

//window.statevar.onValueChange = (event) => {console.log("----------------- State var cganged!");};
//window.tmptest.onStartup = (event) => { console.log("==== I AM IN ===");};
//window.hypnos.onChange = (event) => { console.log("==== I AM IN ===");};

$(function(){ // används ej, försöker få till globala variabler 20 nov 22

    console.log("--- jq fungerar---");
//    $('#muteBTN').click(muteAllSound);


//    if (!window.harlowe) {
        //window.harlowe = {"State": State};
//    }
    //console.log("var "+harlowe.State.variables['var']);
});
//===

// ==== Test av CSS variabler for scorebar
var r= document.querySelector(':root');
//var rs=getComputedStyle(r);

//=========

console.log("============== called ========");
//document.querySelector(('muteBTN')).addEventListener("click",muteAllSound());

var isMute = false;
function muteAllSound()
{
    isMute = !isMute;
    sounds.muted = isMute;
    music.muted = isMute;
    soundsStatic.muted = isMute;

    try{
        let btn = document.querySelector('.muteButton');
        if (isMute)
        {
            btn.style.backgroundColor = 'red';
        }
        else{
            btn.style.backgroundColor = 'green';
        }
    } catch{}

/*
    if (isMute)
    {
        sounds.volume = 0;
        music.muted = true;

//        musicVol = 0;
//        music.volume = musicVol;
//        music.mute
    }
    if (!isMute)
    {
        sounds.volume = 1;
        music.muted = false;
//        musicVol = musicBaseVolume;
//        music.volume = musicVol;
    }

*/

}
//*** Test wite PID. 2022-januari-17 - he går ju int å få å funka asså. */
/* Detta i footern:
<script>
setTimeout(() => {
  console.log("Delayed TEST catch Pid.");
  TestWritePID();
}, 200)
</script>
*/
function TestWritePID()
{

    let tmp = document.querySelector("tw-passage");
    let tmpv = "";
    try{
        tmpv = tmp.attributes.tags.value;
    } catch{
        tmpv = "nothing";
    }

    console.log("pid: "+tmpv);
}

function playSoundFX(name, type, targetAudioObject)
{
    if (targetAudioObject == null)
    {
        console.log("======== AUDIO DEFAULTS");
        targetAudioObject = sounds;
    }

    targetAudioObject.pause();
    targetAudioObject.loop = false;
    var surl = "none";
    try{
        surl = FXsounds.find(p => p.name ===name).value;
    } catch
    {
        surl = "none";
    }
    //    console.log("SoundFX function "+surl);
    if (surl == "none") {
        return;
    }

    if (surl.includes("https://")) {
        targetAudioObject.src = surl;
    }
    else {
        targetAudioObject.src = FXsoundsBaseUrl + surl;
    }

    if (type.toLowerCase() == "loop"){
        targetAudioObject.loop = true;
    }
    console.log("Playing now "+surl);
    targetAudioObject.play();
    
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
         if (music.src.includes(surl)){
            return;
         }

        if (surl.includes("https://")) {
            surl = surl;
        }
        else {
            surl = musicBaseUrl + surl;
        }
        fastFadeAndStop(music, ()=>{music.src = surl;music.volume=musicVol;music.play()});
        
//        setTimeout(()=>{music.play()},1000);
        //music.play();
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

function fastFadeAndStop(ao, onDone)
{
    orginalVolym = ao.volume;
    v = orginalVolym;
    var zapper = setInterval(() => {
        if (v <= 0) {
            ao.volume = 0;
            ao.pause();
            ao.volume = orginalVolym;
            clearInterval(zapper);
            onDone();
        } else {
            ao.volume = v;
            v -= 0.01;
            v = v.toFixed(4);
           // console.log("wtf" + v);
           // v = Math.min(Math.max(v, 0), 1);
        }
    }, 10);
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

var count = 0;
var lastElement = undefined;
// BRA SIDA: https://web.dev/custom-elements-v1/
class MyTag extends HTMLElement {
    constructor() {
        super();
        this.test23 = "hej";
       // this.setAttribute(flagga,false);
    }
    connectedCallback() {
//        let moveMe = this;
//        moveMe.attributes.name.value = 'undefined'; // <-- Före elementet flyttas till story (med appendChild). För att undvika att hypnos-effekten triggas igen i en loop. Alternativ vore att ignorera callbacks för story element, osäker om det skulle funka dock.
        // let moveTo = document.querySelector("tw-story");
        // if (moveTo != null)
        //     moveTo.prepend(moveMe);
        
        if (this.test23 != "hej"){
            return;
        }

        this.test23 = "Nejje!";


        console.log("==== viktigt ===="+this.test23);
        // SKAPA ett separat element kanske?
        // if (document.querySelector("myTaggStuff") == null)
        // {
        //     document.createElement("myTaggStuff");
        // }
        // var elementet = document.querySelector("myTaggStuff");

        this.innerHTML += "<p>Custom tagg här! "+count+"</p>";
        count++;
        this.style.color = "red";
        var typ = "Undefined typ";
        try{
            typ = this.attributes.typ.value;
        }
        catch{
            typ = "inget värde satt";
        }

        console.log("Min tagg anrop"+this);
        testar("from tagg "+typ);
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
       this.innerHTML = "changed";
      }
}

class SoundFX extends HTMLElement {
    constructor() {
        super();
        this.isDirty = false;
       // this.setAttribute(flagga,false);
    }
    connectedCallback() {
   
        // Nedan If-sats är ett hack för att undvika att ljudet laddas 2 ggr när den wrappar i en transision container.
        // if (document.querySelector('tw-transition-container') != null) {
        //     return;
        // }

        if (this.isDirty){
            return; 
        }
        this.isDirty = true;

        var name = "undefined";
        var type = "undefined";

        name = (this.attributes.name != null)?this.attributes.name.value:"undefined";
        type = (this.attributes.type != null)?this.attributes.type.value:"undefined";
        
        if (name.length > 0 && name != "undefined") {
            console.log("PlaySoundFX(name)" + name);           
            playSoundFX(name, type);
        }
    }
}

class MusicPlay extends HTMLElement {
    constructor() {
        super();
        this.isDirty = false;
       // this.setAttribute(flagga,false);
    }
    connectedCallback() {
//        this.innerHTML = 'Debugg music';
        // Nedan If-sats är ett hack för att undvika att ljudet laddas 2 ggr när den wrappar i en transision container.
        //  if (document.querySelector('tw-transition-container') != null) {
        //      return;
        //      //            this.innerHTML = 'is child ';
        //  }
        if (this.isDirty){
            return;
        }

        var name = "undefined";
        try {
            name = this.attributes.name.value;
        } catch {
            name = "undefined";
        }
        if (name.length > 0 && name != "undefined") {
            //console.log("PlayMusic" + name);
            this.isDirty = true;            
            playMusic(name);
        }else{
         console.log("Dit not PlayMusic" + name);
        }
    }
}

class VisualFX extends HTMLElement {
    connectedCallback() {
        // Get the values
        var name = "undefined";
        try {
            name = this.attributes.name.value;
        } catch {
            name = "undefined";
        }
        //------

        if (document.querySelector('tw-transition-container') == null) {     // null = andra laddningen efter transition. Truel = 1a laddningen då den wrappar allt.
            //this.style.animationPlayState = 'running';
           // this.innerHTML = "<div class='centerVFX'><div class='circles fixed'></div></div>";
            return;
        }
        else {
            if (name.length > 0 && name != "undefined") {
                //console.log("VisualFX" + name);            
                HandleVisualFX(this, name);
                //this.style.animationPlayState = 'paused';
            } else {
                console.log("Did not show visualFX" + name);
            }
        }
    }
}

class ScoreBar extends HTMLElement {
    connectedCallback(){

        if (document.querySelector('tw-transition-container') == null) {          
            console.log("");//return;
        }

        //this.innerHTML = 'Debugg score-bar';
        var typ = "undefined";
        var value = -1;
        try {
            typ = this.attributes.type.value;
            value = this.attributes.value.value;
        } catch {
            if (typ == null)
             typ = "undefined1";
            if (value == null)
             value = -1;
        }

//        if (document.querySelector('tw-transition-container') != null)
//            return;

        if (typ.length > 0)
        {
           // console.log("Values = "+typ+" and "+value+" and inne html: "+this.innerHTML);
            HandleScorebar(this, typ, value);
        }


    }

}

class TypeWriter extends HTMLElement {
    connectedCallback(){
        if (document.querySelector('tw-transition-container') == null) {          
            return;
        }

        let speed = 20;
        try {
            speed = parseInt(this.attributes.speed.value);
        } catch {
            if (speed == null)
             speed = 20;
        }

        HandleTypeWrite(this,speed);
    }

}

class WriteInventory extends HTMLElement {
    connectedCallback(){
        let typ = "undefined";
        try {
            typ = this.attributes.type.value;
        } catch {
            typ = "undefined";
        }
        
// XXX - remove update kanske. hanteras i handle.
//        updateInventoryList();

        if (document.querySelector('tw-transition-container') == null && typ != 'update') {          
            return;
        }
        HandleWriteInventory(this,typ);
    }
}

class UpdateInventory extends HTMLElement {
    connectedCallback(){

/* Om jag vid senare tillfälle vill koppla typ-värde till inventory update.
        let typ = "undefined";
        try {
            typ = this.attributes.type.value;
        } catch {
            typ = "undefined";
        }      
        */
        console.log("Uppdaterar inventory");
        if (document.querySelector('tw-transition-container') != null){// && typ != 'update') {          
            return;
        }
        let typ = "update";
//        window.statevar.
        setTimeout(() => {
            HandleWriteInventory(this,typ);
            console.log("Uppdaterar inventory delay");
          }, 100)
        
//        HandleWriteInventory(this,typ);
    }

}

class TextFX extends HTMLElement {
    connectedCallback() {
        var typ = "default_type";
        var target = "default_target";
        try{
            typ = this.attributes.type.value;
            target = this.attributes.target.value;
        }
        catch{
        }

        /*==== detta fungerar om man vill använda inner HTML. 
        // (anledningen till att det ej funkar är om JavaScriptet anropas i headern, då har ej This lästs in typ.)
        setTimeout(() => {
            SplitByBlank(this);
          }, 100)
          */
        SetupTextFX(this,typ,target);
    }
}


//customElements.define('soundfx',SoundFX);
customElements.define('my-tag', MyTag);
customElements.define('play-sound', SoundFX);
customElements.define('play-music', MusicPlay);
customElements.define('visual-fx', VisualFX);
customElements.define('score-bar',ScoreBar);
customElements.define('type-write',TypeWriter);
customElements.define('write-inventory',WriteInventory);
customElements.define('update-inventory',UpdateInventory);
customElements.define('text-fx', TextFX);

function HandleWriteInventory(myElement, typ)
{
    updateInventoryList();
    
    if (typ == "update"){
        myElement = document.getElementById("mainInventory");
    }
    if (myElement == null){
        console.log("To update inventory there needs to be an inventory with ID mainInventory");
        return;
    }
    printInventory(myElement);
}

function HandleTypeWrite(myElement, speed){
    
    var string = myElement.innerHTML;
    string = string.replace(/<br>/g, "¤");
    myElement.innerHTML = "";

    if (string == null || string == "")
        return;
    
	var str = string.split("");
	var el = myElement;//document.getElementById('writehere');
	(function animate() {
        let char = str.shift();
        if (char == "¤")
           char = "<br>";
	str.length > 0 ? el.innerHTML += char : clearTimeout(running);
    let rnd = Math.floor(Math.random() * 30) + 10; 
	var running = setTimeout(animate, rnd);
	})();
}

function HandleVisualFX(myElement, myName)
{
    if (myName == "hypnos1")
    {
        var contentEndloop = '<div class="circles endloopa"></div><div class="circles endloopb"></div>';
        var content = '<div class="circles one"></div><div class="circles three"></div><div class="circles five"></div><div class="circles seven"></div><div class="circles nine"></div>';
//        var content = '<div class="circles two"></div><div class="circles four"></div><div class="circles six"></div><div class="circles eight"></div>';
        content += contentEndloop;
//        myElement.innerHTML = "<VFXBgrBox><div>"+content+"</div></VFXBgrBox>";
        myElement.innerHTML = "<div class='centerVFX'>"+content+"</div>";

        let moveMe = myElement;
        moveMe.attributes.name.value = 'undefined'; // <-- Före elementet flyttas till story (med appendChild). För att undvika att hypnos-effekten triggas igen i en loop. Alternativ vore att ignorera callbacks för story element, osäker om det skulle funka dock.
        let moveTo = document.querySelector("tw-story");
        if (moveTo != null)
            moveTo.prepend(moveMe);

    }
}

function SetupTextFX(callerElement, typ,target)
{
    var tmptmp = callerElement.innerHTML;
    typ = (typ=="default_type")?"textFX":typ;
    target = (target=="default_target")?"self":target;
//    let tmp = 'Typ och target är ${typ} och ${target}';
//    let tmp = ['typ och target är ',typ,target].join(" ");
//    console.log(tmp);

    myElement = document.querySelector(target);
    
    if (myElement == null){
        myElement = document.querySelector("#"+target);
        if (myElement != null)
            console.log("TARGETS HTML IS: "+myElement.innerHTML);
    }
    
    if (target == "self" && myElement == null)
    {
        myElement = callerElement;
        console.log("Self is triggeredd "+tmptmp);
    }
    
    if (myElement == null){
        console.log ("TextFX called with invalid target.");
        return;
    }
    
    let text = myElement.innerText;  // OBS <- 22 jan 2023 Inner text löser google trasnalte problemet. Den tar inte med taggarna google lägger till. Men vilka problem kan uppstå nu? 
    text = text.replace(/<br>/g, " ¤ ");
    let textArray = text.split(" ");
    let replacementStr= "";
let index = 0;
    textArray.forEach(element => {
        index++;
        let rnd = Math.random() * 3;
        if (element == "¤"){
            replacementStr +="<br>";
        }
        else{        
//        replacementStr +="<span class='"+typ+"' style='animation-delay:"+rnd+"s'>"+element+"</span>";
        replacementStr +="<span class='"+typ+"' style='--rnd-value:"+rnd+"; --index-value:"+index+";'>"+element+"</span>";
//        replacementStr +="<span class='"+typ+"'>"+element+"</span>";
        replacementStr += " ";
        }
    });
    myElement.innerHTML = replacementStr;//+"<br>";
    
}

function HandleScorebar(myElement, myType, myValue)
{  

let _hypnocount = 0;//((window.hypnos/5)*100).toFixed(0); // TODO: Se över hur window.variablerna används. Om dom används.
let _deathcount = 0;//((window.deaths/5)*100).toFixed(0);

let tmpstate = null;
if (typeof window.statevar.hypnos !== 'undefined'){
    tmpstate = window.statevar;
    _hypnocount = ((tmpstate.hypnos/hypnosMax)*100).toFixed(0);
    _deathcount = ((tmpstate.död/deathMax)*100).toFixed(0); // FIXME: Kan vara problem här. XXX när den är 5 och delas på 5 blir den ju noll. Vilket ej stämmer när Death räknas omvänt.

    let oldDeath = r.style.getPropertyValue('--death-var');
    let oldHypno = r.style.getPropertyValue('--hypno-var');

    r.style.setProperty('--death-var', (_deathcount)+'%'); // <============== Här modifieras CSS var för hypnos och deathcont! Sätt 100-_deathcount för att få bakvänt som tidigare.
    r.style.setProperty('--hypno-var', _hypnocount+'%');

    // aningen rå lösning för att trigga ljudeffekter när scorebar ändras, jämför CSS styles gamla med nya.    
    if (oldDeath != "" || oldHypno != ""){ // undvik spela ljud vid restart 1a gången typ.
        if (oldDeath != r.style.getPropertyValue('--death-var')){
             playSoundFX(FXsoundStatic.death, "abcd", soundsStatic);
        }
        if (oldHypno != r.style.getPropertyValue('--hypno-var')){
              playSoundFX(FXsoundStatic.hypnos, "abcd", soundsStatic);
        }
    }
} else
{
    console.log("WARNING: is NOT Using state var");
}

if (myType == "a" || myType == "A") // to lower vore najs
{
//    myElement.innerHTML = ' <borderbar> <scorebar style="width:'+_procent+'%">'+_procent+'%</scorebar></borderbar>';
        myElement.innerHTML = ' <borderbar><scorebar class="hypno">'+((_hypnocount*hypnosMax)/100)+'</scorebar></borderbar>';
}
if (myType == "b" || myType == "B") // to lower vore najs
{
//    myElement.innerHTML = ' <borderbar> <scorebar class="death" style="width:'+_deathcount+'%">'+((_deathcount*5)/100).toFixed(0)+'ggr</scorebar></borderbar>';    
      myElement.innerHTML = ' <borderbar><scorebar class="death">'+((_deathcount*deathMax)/100).toFixed(0)+'</scorebar></borderbar>';

}

// December 06 VIKTIGT: Har upptäckt att det funkar utan speciell update. Antagligen att göra med uppdaterade CSS variabler istället för utskrivna värden kanske?
/*
    if (myType == "update") // December 06 VIKTIGT: Har upptäckt att det funkar utan speciell update. Antagligen att göra med uppdaterade CSS variabler istället för utskrivna värden kanske?
    {
        let e = document.getElementById('updatearea');
        let tmp = e.innerHTML;
        console.log("Score bar update is called. "+tmp);
//        e.innerHTML = tmp;
    }
    if (myType == "updateb")
    {
        let tmpstate = window.statevar;
        console.log(tmpstate.hypnos);
        
        console.log("Update B, this is what i got "+myElement.innerHTML);
        
    }
*/  

}


function updateInventoryList(){
    let allStateVars = window.statevar;
    let entr = Object.entries(window.statevar);//allStateVars);

//    console.log("HÄR: ");
//    console.log(JSON.stringify(window.statevar));

    entr.forEach(element => {
        let itm = inventoryList.find(p => p.name === element[0]);
        if (itm != null){
            if (itm.value != element[1]){ // bör inträffa när tex ett objekt lagts till.    <----------------------- HANDELING SOUNDFX ON PICUP. REFACTOR?
                playSoundFX(FXsoundStatic.pickup, "abcd", soundsStatic);
            }
            itm.value = element[1];
        }
    });

    // inventoryList.forEach(element => {
    //     console.log(element.name +" har värde "+element.value);        
    // });
}

function printInventory(myElement)
{

    let contentHTML = "";
    let aktiva = inventoryList.filter(p => p.value > 0);
    aktiva.forEach(element => {
//        console.log(element.name +" Ska vara över 0 "+element.value);
        let tooltip = (element.tooltip.length>1)?element.tooltip:element.name;
        contentHTML += "<div class='symbol'><img src='./assets/icons/"+element.icon+"'><div class='tooltip'>"+tooltip+"</div></div>"
    });
    myElement.innerHTML = contentHTML;
}

// function updateInventory()
// {
//     var $invItems = $(".symbols");
//     $j_object.each( function(i) { doSomethingHere(); } );
// }

//================================== UTILS ============

function remove_tags(html) {
    html = html.replace(/<br>/g, "$br$");
    html = html.replace(/(?:\r\n|\r|\n)/g, '$br$');
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    html = tmp.textContent || tmp.innerText;
    html = html.replace(/\$br\$/g, "<br>");
    return html;
}

function debuggWriteCaption(){
try{
    let d = document.querySelector('tw-passagedata');
    console.log('Debugg: Found '+d.attributes.name.value);

}catch{    
    console.log('Debugg: no passage-data found.');
}
}

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


        try{ 
            var str = JSON.stringify( window.statevar);
            var tmpobj = JSON.parse(str);
            console.log(tmpobj.hypnos);
        }
        catch{
            console.log("Json did not work.");
            console.log(window.statevar);
        }



*/




