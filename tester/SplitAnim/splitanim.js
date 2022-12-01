//import ('https://unpkg.com/splitting/dist/splitting.min.js');

//console.log('Connected.');
//Splitting({ target: '#target', by: 'chars'});

function DoSplit(){
    Splitting();
    Splitting({target: '#target', by: 'chars'});




}
}

/*
(if: (history: where its name contains "biblioteket")'s length is >= 1)
[
    (set: $percentage to (random: 100))
    (if: $percentage > 70)
    [
        (go-to: "fotsteg")
    ]
]


(if: (history: where its name contains "biblioteket")'s length is >= 1)
[
    (set: $chans to 70)
    (if: (history: where its name contains "fotsteg")'s length is >= 1)
    [ 
        (set: chans to 90)
    ]

    (set: $percentage to (random: 100))

    (if: $percentage > $chans)
    [
        (go-to: "fotsteg")
    ]       
]

*/

