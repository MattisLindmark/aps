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

// Kanske göra nåt liknande som för den där andra... ajh. agh.