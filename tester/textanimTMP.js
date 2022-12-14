

class MyTag extends HTMLElement {
    connectedCallback() {
        //console.log("tja"+this.innerHTML);
        //console.log(JSON.stringify(this));
        //this.innerHTML = `<p>Custom tagg här!</p> `;
        //this.style.color = "red";
        var typ = "Undefined typ";
        try{
            typ = this.attributes.typ.value;
        }
        catch{
            typ = "inget värde satt";
        }
        //console.log("from tagg "+this.innerHTML);
        SplitByBlank(this);
    }
}

customElements.define('my-taggg', MyTag);

function test(myelement)
{
      console.log("hoj "+myelement.innerHTML);
      myelement.innerHTML = `<p>Custom tagg här!</p> `;
}

function SplitByBlank(myElement)
{
    myElement = document.querySelector('hejsan');
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