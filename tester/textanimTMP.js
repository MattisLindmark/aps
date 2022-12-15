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

class MyTag extends HTMLElement {
    // constructor(){
    //     super();
    //     const template = document.createElement("template");
    //     console.log("from tagg construktor "+this);
    // }
    connectedCallback() {
        //console.log("tja"+this.innerHTML);
        //console.log(JSON.stringify(this));
        //this.innerHTML = `<p>Custom tagg här!</p> `;
        //this.style.color = "red";
        var typ = "default_type";
        var target = "default_target";
        try{
            typ = this.attributes.typ.value;
            target = this.attributes.target.value;
        }
        catch{
        }

        /*==== detta fungerar om man vill använda inner HTML.
        setTimeout(() => {
            SplitByBlank(this);
          }, 100)
          */
        SetupTextFX(typ,target);
    }
}

customElements.define('my-taggg', MyTag);


function SetupTextFX(typ,target)
{
    typ = (typ=="default_type")?"textFX":typ;
    target = (target=="default_target")?"hejsan":target;
//    let tmp = 'Typ och target är ${typ} och ${target}';
    let tmp = ['typ och target är ',typ,target].join(" ");
    console.log(tmp);

    myElement = document.querySelector(target);
    if (myElement == null){
        console.log ("TextFX called with invalid target.");
        return;
    }
    
    let text = myElement.innerHTML;
    let textArray = text.split(" ");
    let replacementStr= "";

    textArray.forEach(element => {
        let rnd = Math.random() * 3;
        replacementStr +="<div class='"+typ+"' style='animation-delay:"+rnd+"s'>"+element+"</div>";
        replacementStr += "&nbsp;";
    });
    myElement.innerHTML = replacementStr+"<br>";
    
}

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