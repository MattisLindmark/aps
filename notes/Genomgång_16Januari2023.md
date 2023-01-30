## Viktiga KIH anteckningar! ##  
> * Display är najs, tex: (link: "Jag klarade mig")[(display: $tillbaka)]]  
> * NO VOICE: Jag tror det behövs en $NoVoice flagga. Så att man kan sätta "tillbaka" till samma ställe som triggade rösten.  
> * Pendeln-passagen. Det är svårt att nå dit. Se Sov. (pendel + hypnos > 3)
> * Personalrummet. Visits på kaffemaskinen gör att kaffet kan va slut utan att man klickat på maskinen.
> * Utrop: Replace link!
> * Wikipedia2 finns en bild, är den rätt och tillåten att använda?
> * FIXAT - uppspelning av ljud funkar dåligt. vakna i klassrummet tex.
> * Ljudeffeckt just före go-to fungerar ej längre (stop-ljud i headern avbryter).
> * Musiken i "rösten" och "fotsteg" etc kommer att dröjja kvar när man klarat sig om man inte byter vid nåt tillfälle...
> * Ska död alltid minskas på "sov" paragrafen? Nu minskar död tex inte om man lyssnar på rösten. Sätter man död - 1 i sov kanske det underlättar? Var länkas man till död = 0 slutet?
> * Nåt skumt med läsa APS foldern. Den ökade ej hypnos när jag varit i biblioteket?


> * I städsrkubben: sätt tillbaka till Städskrubben.
> * I korridoren där man går till bibblan, sätt tillbaka till den korridoren.
> * Inget tillbaka får vara på samma paragraf som en röst eller fotsteg kan triggas.

## Slut funderingar ## 
* mördarslut kommer man till via jordnötter etc.
* Egenslut kommer man till via Jag är less på det här. Men komma dit är inte lätt.
* Slutt där alla blir hyptnotiserade. Entry från: död6, Jag är less, Undra vem som.


### Löpande gjort ###  
Detta är inte komplett. Bara för komma ihåg:  
2021-01-17
* Sov paragrafen, börjat lägga in span för text fx.
* Sov - lagt till lite text och en "noll".
* Lagt in en transsion i Koffein-paragrafen.
* Paragrafen "jag undrar..." ändrade nån ] för att få bort ett error.
* fixat lite på dator -> wikipedia.
* fixat lite med när man pratar i högtalarna.


## **Node:** Du sover ## 

Innehåll: 

```
<visual-fx name="hypnos1"></visual-fx>Du sover, men börjar bli medveten om att det är det du gör, du minns inte hur du somnade men du ligger med huvudet vilande på skolbänken. 
(link:"Jag är medveten om att jag sover")[\
(if:$död is 5)[Hmmm, det här känns bekant... ]\
(if:$död is 4)[Inte igen, det här börjar bli sjukt konstigt. ]\
(if:$död is 3)[Måste vi gå igenom det här en gång till? ]Men vänta, är du i skolan? Man ska väl inte sova på lektionen? Skulle inte ni ha  någon slags inspirationsföreläsning med klassen idag? Är den redan slut, var den så tråkig så att du somnade?

[[Jag fortsätter sova->Fortsätt sova]]\
(if:(history: where its name contains "biblioteket")'s length is 1)[
[[Jag undrar vem det är som pratar med mig->Undrar vem det är som pratar med mig?]]]\
(if:(history: where its name contains "Undrar vem det är som pratar med mig?")'s length is 1 and  $hypnos is <3)[
[[Jag är  less på det här!->Jag är less på det här!]]]
[[Jag försöker vakna->klassrummet]]\
]
```

* Varför är det just bibliotekets history som påverkar?
* Hur ofta inträffar history vem pratar med mig och hypnos under 3? (det kräver alltså att man minskat hypnos ända till 1 eller 2. Samt aldrig resettat storyn med eftertexterna. Och att man klickat sig fram till "vem pratar med mig")

---
<br>

## **Node:** Undra vem det är som pratar med mig ##
I denna passage behövs ett förtydligande i valet mellan somna om eller vakna. 
Man har valt "somna om" många gånger här och där. Men denna gång leder det till att man vaknar och triggar ett av sluten.  
En enkel fix: oängtera att man ger upp. Dvs:  
> Du kan välja att **ge upp allt motstånd**, somna om en sista gång bla bla.  
följt av:
> Eller du kan välja att fortsätta kämpa, vakna och försöka hitta...

---
<br>

## **Node:** egenslut ##

Problem:
>`(link:"Jag lyfter $föremål")[Orden fastnar i munnen på...`
* I vissa lägen skriver den ut $föremål istället för föremålet, osäker var, varför.
* Allmänt för alla dessa eget slut: din/ditt en/ett blir fel beroende på vilket föremål man skrivit in.
### TO DO: ###
* Gå igenom alla varrianter man kan få för egenslut. Dvs: att dö, fly och vad det nu var. Så att det inte finns buggar i hur variablerna skrivs ut. Och annat.
* (dvs testa samtliga varrianter av slut som kan uppstå på Egenslut.)
---
<br>

## Node: Klassrummet ##
* blurtime räcker med 2.5s
* Många varrianter beroende på vad död står på. Behöver testas.
* Pendel och pendla, vad är grejjen med dessa variabler? (påverkar detta hur lätt man når sov slutet där man hypnotiserar sören? se nedan)

---
<br>

## Node: Sov ##
Här behövs en ordentlig genomgång av vad alla död1 död2 död6 etc leder till och gör.
* Om död är noll ska man hamna på död7. Död7 verkar inte finnas.
* Koffein: Detta funkar alltså som extraliv, men man återvaknar i korridoren, så det ger väl inte så mycket då egentligen?
> * Har lagt till ett "noll" för att sista raden ska synas.  
> OBS: Det finns en show-footer 0 i sov. Så det är viktigt att footern visas sen.

<br>

## Död 1 etc ## 
* död7 finns inte.
* kortare blurr.
---
## Nod: Korridoren ##

---
## Nod: vänster ##
```
... diverse före ...

(if:$personalrum is 0)[(set: $personalrum to (random:0,1))\
(if:$personalrum is 0)[[Gå till personalrummet->personalrummet]]]\
(if:$personalrum is 1)[[[Gå till personalrummet->personalrumsöverraskning]]]\
(if:$personalrum is 2)[[Gå till personalrummet->personalrummet]]
[[Ta trappan ned till källaren->källaren]]
[[Jag går tillbaka->korridoren]]
```
* Personalrumsöverraskning är där man får veta att sören är jornötsalergiker.
* Finns ganska stor risk att man bara går till personalrummet en gång och därför aldrig får veta att han är allergisk.
* Vad används $personalrum 2 till?
* Sitter hakarna rätt? Varför inte haka in random och sen låta övriga printa baserat på sin if-sats bara?

---
## Nod: Fiket ##
Här råkar man troligtvis ut för rösten. Lägst chans är 25% vilket är var fjärde gång. Det är oftare än man kan tro.
* System = 1, är det högtalarsystemet? Kan behövas en indikation på att det klickar till men eftersom man stängt av högtalarsystemet hörs ingen röst. typ. Dvs feedback på att man stängt av systemet.
---
## Nod: Källaren och Källare 1##
* Var blir källare 1 så man kommer till den andra sortens källare?
* Diverse med rädslor. Utan ficklampa + alla rädslor -> källarröst.
* Tänder lampan -> ficklampa.
* OBS: Kolla upp så att källaren alltid sätts till källare 1 när det är dit man ska. Eventuellt säkra med att sätta $källare till 1 i början av källare 1.

### Ficklampa ###
* Man lyser, hittar sören och får antingen brottas eller ropa.
* Brottas verkar leda till att man hypnotiseras.
* Ropa verkar leda till att man knockas men blir kvar i källaren.

### Nod: brottas ###
* Kolla igenom denna paragraf, stämmer if-satserna med samtliga typer av kläder?

### Nod: Ropa ###
* Här sätts källare till 1. Man får pendel.

### Nod: Källare1 ###
* Det var fel satta ] så inget syntes om man lyste med ficklampan och hade pendeln redan (åtgärdat i min version).

---
## Personalrummet ##
Först några småsaker:
* Kolla koffein mot ifall man har eller inte har druckit koffein.
* Aha, det är för att man ska kunna dricka 2 ggr eftersom man vaknar av kaffet. Men när man vaknar av kaffet hamnar man ändå i början... så vad ger det?
* Om man har koffein 1 så är kaffet slut, istället för att räkna antalet visits. (visits ökar väl varje besök i rummet? inte bara när man tar kaffe? kaffet borde inte ta slut om man inte druckit nåt av det.)

---
## Matsalen ##
> Har spaltat upp den en aning i twine för övrblick.  
> Har ändrat last room till matsal om man hör rösten. - Har inte alls ändrat detta. OM man går tillbaka till en plats där rösten kan triggas igen kan man få den 2 ggr i rad.

* Även här, 25% chans kan vara för mycket.
* Här återvänder man till korridoren om man lyckas undvika rösten.
* har aldrig förstått det där med sallad. Jag äter sallad till all mat alltid! Mat utan sallad är som saft utan vatten.

---
## Koffein ##  
* Förtydliga texten. Flytta "Smaken av kaffe" till först typ, så man direkt förstår ungefär vad som har hänt.

---
## Biblioteket ##  
* Varför kollar den av mot History contains death? Och inte mot död-variablen direkt? (där man kan gå till Molly moon)
* Var sätts tillbaka? Här finns en röst, jag hamnar i korridoren efter rösten. typ.
---

## Nod: Jag försöker väcka hela skolan ##
* stämmer Jag/du formuleringarna där?
---
## APS ##
Behöver ses över.
* Många klicka vidare.
* Embedda video
* Bild å stuff.

### Wikipedia sidorna ###
* Bilder
<br>
<br>
<br>
<br>
<br>
<br>

## Fundering: Hur når man olika slut? ##

* Sov -> if pendel och hypnos \< 4 nåt man slutet där man hypnotiserar sören. Är det därför man sätter hypnos först efter man fått pendeln i klassrummet? Vad är tanken med det?
* 


