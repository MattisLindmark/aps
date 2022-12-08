

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
    { name:"snap", value:"177494__snapper4298__snap-3.wav"},
    { name:"papper", value:"paper.mp3"},
    { name:"pappersark", value:"papersheet.mp3"},
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

var inventoryList =[
    { name:"ficklampa ", icon:"icon_ficklampa.png", value: 0},
    { name:"nyckel", icon:"icon_nyckel.png", value: 0},
    { name:"pendel", icon:"icon_pendel.png",value: 0},
    { name:"jordnötter", icon:"icon_jordnotter.png",value: 0},
    { name:"kniv", icon:"icon_kniv.png",value: 0},
    { name:"affisch", icon:"icon_affisch.png",value: 0},
    { name:"koffein", icon:"icon_koffein.png",value: 0},
    { name:"nyckelknippa", icon:"icon_nyckelknippa.png",value: 0}
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

$(function(){ // används ej, försöker få till globala variabler 20 nov 22
    console.log("--- jq fungerar---");

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
            surl = surl;
        }
        else {
            surl = musicBaseUrl + surl;
        }
        fastFadeAndStop(music, ()=>{music.src = surl;music.volume=0.5;music.play()});
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
            //console.log("PlayMusic" + name);            
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
        if (document.querySelector('tw-transition-container') != null) {          
            return;
        }
        
        let typ = "undefined";
        try {
            typ = this.attributes.type.value;
        } catch {
             typ = "undefined";
        }

        HandleWriteInventory(this,typ);


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
        myElement.innerHTML = "<div class='centerVFX'>"+content+"</div>";

        let moveMe = myElement;
        moveMe.attributes.name.value = 'undefined'; // <-- Före elementet flyttas till story (med appendChild). För att undvika att hypnos-effekten triggas igen i en loop. Alternativ vore att ignorera callbacks för story element, osäker om det skulle funka dock.
        let moveTo = document.querySelector("tw-story");
        if (moveTo != null)
            moveTo.appendChild(moveMe);

    }
}

function HandleScorebar(myElement, myType, myValue)
{
    //console.log(window);

    //myElement.innerHTML = window.hypnos;
    /*
    if (myValue < 0)
    {
        myValue = parseInt(this.innerHTML);
    }
*/
    
let _hypnocount = ((window.hypnos/5)*100).toFixed(0); // TODO: Se över hur window.variablerna används. Om dom används.
let _deathcount = ((window.deaths/5)*100).toFixed(0);

let tmpstate = null;
if (typeof window.statevar.hypnos !== 'undefined'){
    tmpstate = window.statevar; 
    console.log("Using state var");
   // console.log(tmpstate.hypnos);   
    _hypnocount = ((tmpstate.hypnos/hypnosMax)*100).toFixed(0);
    _deathcount = ((tmpstate.död/deathMax)*100).toFixed(0); // FIXME: Kan vara problem här. XXX när den är 5 och delas på 5 blir den ju noll. Vilket ej stämmer när Death räknas omvänt.
    console.log("----------------"+_deathcount );
    r.style.setProperty('--death-var', (100-_deathcount)+'%'); // <============== Här modifieras CSS var för hypnos och deathcont!
    r.style.setProperty('--hypno-var', _hypnocount+'%');
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
    
    if (myType == "update") // December 06 VIKTIGT: Har upptäckt att det funkar utan speciell update. Antagligen att göra med uppdaterade CSS variabler istället för utskrivna värden kanske?
    {
        let e = document.getElementById('updatearea');
        let tmp = e.innerHTML;
        console.log("Score bar update is called. "+tmp);
//        e.innerHTML = tmp;
    }
// XXX delete from inventory from scorebar
    if (myType == "updateinventory") // December 06 VIKTIGT: Har upptäckt att det funkar utan speciell update. Antagligen att göra med uppdaterade CSS variabler istället för utskrivna värden kanske?
    {
        let e = document.getElementById('inventoryUpdate');
        let tmp = e.innerHTML;
        console.log('ficklampa is '+window.statevar.ficklampa);
        console.log('Jordnötter is '+window.statevar.jordnötter);
        
        let strTmp = window.statevar.ficklampa?'inherit':'none';
        let strTmpN = window.statevar.jordnötter?'inherit':'none';
        r.style.setProperty('--inv-ficklampa',strTmp);
        r.style.setProperty('--inv-notter',strTmpN);

        let tokig = "Här ska uppdaterad inventory hamna";//'<inventory id="inventoryUpdate">(if:$ficklampa is 1)[<div class="symbol"><img src="assets/icons/icon_flampa.png"><div class="tooltip">Den är lysande!</div></div>](if:$jordnötter is 1)[<div class="symbol">🥜<div class="tooltip">jordnötter</div></div>](if:$pendel is 1)[<div class="symbol"><img src="assets/icons/icon_pendel.png"><div class="tooltip">Hypnotisörens pendel</div></div>](if:$kniv is 1)[<div class="symbol"><img src="assets/icons/icon_kniv.png"><div class="tooltip">kökskniv</div></div>](if:$nyckelknippa is 1)[<div class="symbol">🗝️<div class="tooltip">nyckelknippa</div></div>](if:$affisch is 1)[<div class="symbol"><img src="assets/icons/icon_affisch.png"><div class="tooltip">Affisch</div></div>](if:$nyckel is 1)[<div class="symbol">🗝️<div class="tooltip">Nyckel</div></div>](if:$koffein is 1)[<div class="symbol">☕<div class="tooltip">Du är <br>coffeinstinn!</div></div>\]</inventory>';
/*
<inventory id="inventoryUpdate">(if:$ficklampa is 1)[<div class="symbol"><img src="assets/icons/icon_flampa.png"><div class="tooltip">Den är lysande!</div></div>](if:$jordnötter is 1)[<div class="symbol">🥜<div class="tooltip">jordnötter</div></div>](if:$pendel is 1)[<div class="symbol"><img src="assets/icons/icon_pendel.png"><div class="tooltip">Hypnotisörens pendel</div></div>](if:$kniv is 1)[<div class="symbol"><img src="assets/icons/icon_kniv.png"><div class="tooltip">kökskniv</div></div>](if:$nyckelknippa is 1)[<div class="symbol">🗝️<div class="tooltip">nyckelknippa</div></div>](if:$affisch is 1)[<div class="symbol"><img src="assets/icons/icon_affisch.png"><div class="tooltip">Affisch</div></div>](if:$nyckel is 1)[<div class="symbol">🗝️<div class="tooltip">Nyckel</div></div>](if:$koffein is 1)[<div class="symbol">☕<div class="tooltip">Du är <br>coffeinstinn!</div></div>\]</inventory>
*/              
        console.log("InventoryUpdate on Score-bar is called with: "+tmp);
        //printInventory();
        //e.innerText = tokig;
    }

    
    if (myType == "updateb")
    {
        let tmpstate = window.statevar;
        console.log(tmpstate.hypnos);
        
        console.log("Update B, this is what i got "+myElement.innerHTML);
        
    }


}

function printInventoryOld()
{
    let allStateVars = window.statevar;
    let keys = Object.keys(allStateVars);    

    keys.forEach(element => {
        //console.log('Statevar loop: '+element);
        if (element == 'ficklampa'){
            console.log('Hittade ficklampan, den har värde:'+allStateVars[element]); // <-- gud så stört. jag har ju elementet men kan ej få ut värdet typ!
        }
        if (element == 'kniv'){
            console.log('Hittade kniv, den har värde:'+allStateVars[element]);
        }
    });
}

function printInventory_EntryTEST()//printInventoryEntryMethod()
{
    let allStateVars = window.statevar;
    let entr = Object.entries(allStateVars);
    console.log('söker entry ficklampan');
    entr.forEach(element => {
        if (element[1] === 0 || element[1] === 1){
            console.log(element[0] + 'värde:'+element[1]);}
        if (element[0] == 'ficklampa'){
            console.log('Hittade entry ficklampan, den har värde:'+element[1]);
        }        
    });
}

function updateInventoryList(){
    let allStateVars = window.statevar;
    let entr = Object.entries(allStateVars);
    
    entr.forEach(element => {
        let itm = inventoryList.find(p => p.name === element[0]);
        if (itm != null)
            itm.value = element[1];
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
        contentHTML += "<div class='symbol'><img src='/assets/icons/"+element.icon+"'><div class='tooltip'>"+element.name+"</div></div>"
    });
    myElement.innerHTML = contentHTML;
}

function setupInventoryHTML()
{
    console.log("setting upp inventory HTML.");
//    document.querySelector("tw-story");
    var inventoryArea = document.querySelector('inventory');
    if (inventoryArea == null){
        console.log("Can't setup inventory, Missing inventory-element om page.");
        return;
    }
    let content;
    inventoryList.forEach(element => {
        content += "<div class='invItem'>"+element.name+"</div>";
    });
    inventoryArea.innerHTML = content;
}

function updateInventory()
{
    var $invItems = $(".symbols");
    $j_object.each( function(i) { doSomethingHere(); } );
}

/*
affisch: 0
allergi:0
bruten:0
död:5
ficklampa:0
hypnos:0
jordnötter:0
kniv:0
koffein:0
källare:0
köksbrand:1
nyckel:0
pendel:0
personalrum:0
populära:0
rösten:0
sovtid:10
städare:0
nyckelknippa:0
*/

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

// class TMP extends HTMLElement {
//     connectedCallback(){
//         if (document.querySelector('tw-transition-container') == null) {          
//             return;
//         }

//         let speed = 20;
//         try {
//             speed = parseInt(this.attributes.speed.value);
//         } catch {
//             if (speed == null)
//              speed = 20;
//         }

//         HandleTypeWrite(this,speed);
//     }

// }

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

