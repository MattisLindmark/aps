/* === Ett försök att förstå proxy ===
var hej = {nisse: 'oj', pelle:'hej'};
var hejHandler = { 
    get(target, property) {
        console.log("Nu lästes det nåt.");
        return target[property];
    },
    set(target, property){
        console.log("Nu sattes nåt.");
        target[property] = value;
    }
};
const hejProxy = new Proxy(hej, hejHandler);

function testarProxy(){
    console.log(hejProxy);
    hejProxy.nisse = "Zappeli kapp!";
    console.log(hejProxy);
}
*/
class TextFX extends HTMLElement {
    connectedCallback() {
        var typ = "default_type";
        var target = "default_target";
        try{
            typ = this.attributes.typ.value;
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

customElements.define('text-fx', TextFX);


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
    
    let text = myElement.innerHTML;
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
        replacementStr +="<span class='"+typ+"' style='--rnd-value:"+Math.random()*3+"; --index-value:"+index+";'>"+element+"</span>";
//        replacementStr +="<span class='"+typ+"'>"+element+"</span>";
        replacementStr += "&nbsp;";
        }
    });
    myElement.innerHTML = replacementStr+"<br>";
    
}

/*
function SplitByBlank(myElement)
{
   // myElement = document.querySelector('hejsan');
    console.log("hej"+myElement.innerHTML);
    let text = myElement.innerHTML;
    let textArray = text.split(" ");
    let replacementStr= "";
    textArray.forEach(element => {
        let rnd = Math.random() * 3;
        replacementStr +="<div class='textFX' style='animation-delay:"+rnd+"s'>"+element+"</div>";
        replacementStr += "&nbsp;";
    });

    myElement.innerHTML = replacementStr+"<br>";

}
*/