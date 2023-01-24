function DoTheRightThing()
{
    var allabilder = document.querySelectorAll(".bild");
    //document.querySelector("bildpanel").classList.add("bildpanel");

    let bp = document.querySelector(".bildpanel");

    allabilder.forEach(element => {
        //element.classList.add("bildpanel");
        bp.appendChild(element);
    });

    //    x.classList.add("bildpanel");
    
    console.log("tjosan");
    
}

// Kanske göra nåt liknande som för den där andra... ajh. agh. <-- Senare kommentar: vad betyder det där?

const synth = window.speechSynthesis;
const voices = synth.getVoices();

function testaVoice(text)
{
    let volume = 1;
    let pitch = 1;
    let rate = 1;
    let spokenText = text;
   
    if (Array.isArray(spokenText)) {
		spokenText = spokenText.join(".");
	}
	
    let speech = new SpeechSynthesisUtterance(spokenText);

    speech.voice = voices[0];
	speech.pitch = pitch;
	speech.rate = rate;
	speech.volume = volume;
	speech.lang = "sv";//en-US";
	synth.speak(speech);
}

function stopSpeaking() {
	if (synth) {
		synth.pause();
		synth.cancel();
	}
}