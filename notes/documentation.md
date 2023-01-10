# Tillsnyggad dokumentation
>*senast uppdaterad: 2022-12-13*

><span style = "color:red">**OBS OBS OBS: Många av kod-delarna i detta dokument är inte kollad gällande slarvfel! Gäller speciellt taggar etc som står i löpande text. Rättar sånt efer hand**</span>
---
<br>

## Stoyrns Javascript
Stuff som ska stå i Storyns Javascript-ruta (i twine-editorn alltså). Förhoppningsvis kommer jag ihåg att uppdatera detta allt eftersom.  

```javascript
var script = document.createElement('script');
script.src = "apsing.js";

function setupGlobals()
{  
  	var _state = require('state');
	console.log('require state');
	console.log(_state.variables);
	window.statevar = _state.variables;
}

setTimeout(() => {
  console.log("Delayed statevarupdate for 1 second.");
  setupGlobals();
}, 1000)

setupGlobals();
document.head.appendChild(script)
```
**OBS** Det går bra att radera alla rader med console.log! De står kvar just nu i debugg-syfte.

---
<br>

## Inventory
**Visa inventory**<br>
Stoppa in `<write-inventory>` Header eller footer.  
Sätt classen till: "topLeft" för att få lodrät inventory.  
Sätt ID till "mainInventory" för att uppdateringsfunktionen ska veta vilket element som är inventory.  

Exempel i footer:  
```
<inventory class="topLeft">
<write-inventory id="mainInventory"></write-inventory>
</inventory>
```
**Uppdatera inventory**  
På platser där inventoryn behöver uppdateras, använd `<update-inventory>`  
Detta kan göras direkt i twine-texten eller via `(print:"<update-inventory>")`  
**Notera:** Sätt variabeln före taggen med uppdatera. Annars uppdaterar den med gamla värdet.
Exempel:  
```
(link: "ta affisch")[(set: $affisch to 1)(print: "<update-inventory>")]

(link: "ta nyckelknippa")[(set: $nyckelknippa to 1)<update-inventory>]

(link: "ficklampa")[(set: $ficklampa to 1)(print: "<write-inventory type='update'>")]

```
Samtliga dessa 3 alternativ fungerar i nuläget.  Säkrast är att använda alternativet längst upp med print och update-inventory taggen.  
  
  **Under huven**  
  Jag hade vissa problem med detta eftersom state-variabeln inte uppdaterades omedelbart. Därför uppdaterade den med gamla värde någon millisekund före den fick nya. Det är just nu (13-dec-2022) löst med en timeout på 200 ms i update-funktionen.  
  Om man använder (print:) macron uppstår ej detta problem eftersom den då kör klart "set" macron före den kör "print" macron.  
  Men samtliga metoder fungerar alltså för tillfället.

  **Mer under huven**  
  Inventoryn har en egen array (inventoryItemsList) i JS med namn, icon och värde. Den uppdateras från Harlowe-storyns _state-variabel.  
 * Varje gång `<update-inventory>` körs går scriptet igenom window.statevar, hittar entrys som motsvarar alla namn i listan och sätter värdet till vad den har i window.statevar (som alltså motsvarar harlows _state).  
 * Varje gång `<write-inventory>` körs går scriptet igenom listan och skapar HTML för att visa, eller inte visa, ikoner beroende på om de har värde 0 eller 1.  Om write-inventory anropas via update hittar den elementet med id mainInventory. I annat fall använder den sitt eget element för att veta vilken HTML den ska ersätta på sidan.  

>*En snyggare lösning* hade varit att, istället för skriva ut HTML igen bara ändra klasser på befintliga element. Gick dock inte eftersom det är svårt att få kontroll över vad Twine-motorn skriver ut här och där.
<br>
<br>
---
<br>

## Mätarna, score-bars
Sätt in mätarna i headern.
* Omge det hela med en `<span id="updatearea">` för att uppdatera-funktionen ska hitta elementet.
* Använd taggen `<score-bar type="a">` eller type=b. a= hypnos. b= död. Där scorebar ska ligga.
* Taggen `<score-bar type="update">` där uppdatering ska ske. Gärna med en (print:) macro.
* Taggen `<huvud>...</huvud>` runt alltihop för att flytta och låsa scorebar längst upp på sidan. Om man vill det.

Exempel: i header:
```
<huvud>\
<span  id="updatearea">\
<score-bar type="a">$hypnos</score-bar><score-bar type="b">$död</score-bar>\
</span>\
</huvud>\
```
**NOTERA:** Backslash \\ i slutet av varje rad tar bort radbryt. Använder det för att få mer överskådlig kod, allt kan skrivas på samma rad lika gärna.  
**NOTERA 2:** Tidigare fanns script-tagg som satte window.hypnos och död i headern. Dessa ska inte behövas längre. *(december 2022)*  
<br>

**Uppdatera mätarna**  
Där mätarna ska uppdateras, använd: `<score-bar type="update">`. Använd Print: macron för detta, så den säkert hinner uppdatera i rätt följd.
Exempel:
```
(link: "Titta på pendeln")[(set: $hypnos to it + 1)(print: "<score-bar type='update'>")]

(link: "Set hypnos till 4")[(set: $hypnos to 4)(print: "<score-bar type='update'>Oj oj, du känner dig hypnotiserad!</score-bar>")]

(link: "Minska död")[(set: $död to it-1)(print: "<score-bar type='update'>Ett steg närmare döden!</score-bar>")]

```
**Under huven**  
Score-bar använder css-variabler som uppdateras baserat på window.statevar. Skriver ned mer här senare, om jag ids.  
Java-scriptet räknar om hur stor del som ska synas utifrån att maxvärdet för båda är 5.
<br>

>**Toppen eller botten**  
Gjorde en temporär (eller permanent) CSS klass för att testa lägga scorebar på botten. Sätt class="botten" i huvud-taggen så ska den hamna i botten istället. `<huvud class="botten">`
<br>  

>**BUGG-KOLL**  
När man har låst score-bar uppe eller nere i skärm ligger den ovanpå allt. Det gör att text och länkar kan hamna under och ej gå att nå även om man scrollar. Speciellt om man lägger score-bar i botten. Jag har justerat marginaler för att undvika detta, men nåt vi får testa i olika skärmupplösningar.  
<br>
En annan "bugg" är att död-siffran ej syns när värdet är 5 (dvs start-värdet (tror jag)). Försöker se hur detta kan åtgärdas. Det har nåt att göra med att död mätaren går åt "fel" håll.
<br>
<br>
---
<br>

## Text-FX
Det går nu att lägga till några text-effekter med taggen text-fx följt av typ.
* Taggen är `<text-fx type="cssTypen" target="ID eller element">`
* type måste överensstämma med någon lämplig CSS klass, kan vara flera.
* Target kan användas för att rikta effekten på innehållet mellan antingen egna element eller div/span med unikt ID.
* Target fångar enast upp första elementet/IDt av den typen på sidan.
* Utelämna target för att påverka texten mellan de egna text-fx taggarna.

**Typer att använda**
* textFXfade - fade ut och in i slump ordning.
* textFXfall - orden faller ned.
* freeze - läggs till textFXfade för att fadea ut och stanna dolda.
* inOrder - läggs till för att falla eller fadea i ordning, ej slump.

**exempel:**
```html
<text-fx type="textFXfade">Orden i denna text fadear in och ut i slumpmässig ordning.</text-fx>

<text-fx type="textFXfade freeze">Orden i denna text fadear ut i slumpmässig ordning och förblir gömda.</text-fx>

<text-fx type="textFXfade freeze inOrder">Orden i denna text fadear ut i följd och förblir gömda.</text-fx>

<text-fx type="textFXfall inOrder">Orden i denna text faller i följd.</text-fx>

<text-fx type="textFXfall">Orden i denna text faller i slumpmässig ordning.</text-fx>
```

**Exempel med target:**
```html
<span id="mittUnikaID">Denna text påverkas av text-fx taggen nedan.</span>
Denna text påverkas inte av någonting.
<HeltEgenTagg> Denna text påverkas av en annan effekt nedan.</HeltEgenTagg>
<text-fx type="textFXfade" target="mittUnikaID">
<text-fx type="textFXfall inOrder" target="HeltEgenTagg">

```

**Under Huven**  
Taggen skickar typ och target, saknas typ sätts den till textFX (som inte finns). Saknas Target sätts den till self.
Sciptet plockar in texten från elementet (som antingen är target eller egna elmentet).
Scriptet delar upp orden, gör lite trix med `<br>` taggar etc.
Orden lopas igenom och får en `<span>` av klassen typ. Den skickar också in css variabler för random värde och index (ordning) som kan användas i CSS klassen, se nedan.
Texten i elementet ersätts med nya varrianten där varje ord är inkapslat i ett span.
Sedan är det upp till CSS klassen vad som händer.

**För att skapa ytterligare effekter:**  
* Skapa en lämplig CSS klass med lite trix.
* Använd klassens namn som type.
* Se aps-visualfx.css hur textFXfade och textFXfall är gjorda.

> CSS variabler som genereras:  
--rnd-value - Ett slumpmässigt värde (just nu mellan 0 och 3, kan ändas senare).  
--index-value - vilket nummer i ordningen ordet har. börjar på 1.

**exempel css klass**  
```
.testTextFx{
  opacity: var(--rnd-value);
  color: hsl(calc(10*var(--index-value)), 100%, 50%);
  display: inline-block;
}
```
Används så här:
```
<text-fx type="testTextFx">Orden i denna text får statisk slumpmässig opacitet och ett färgvärde som ändras beroende på var i ordningen orset står.</text-fx> <br>
```

>**ToDo**
>* Lägg till möjlighet att påverka hastighet av olika slag?
>* Möjlighet att påverka totala fördröjningen innan den startar.
>* Behövs möjlighet att dela upp i bokstäver istället för hela ord?



---
<br>

## Ljud och musik
Inget har förändrats i hur ljud och musik spelas. Skriver in i denna dokumentation senare.

## Visual FX
Inget av detta har ändrats senaste tiden. Skriver in i denna dockumentation senare.