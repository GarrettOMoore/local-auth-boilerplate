console.log("Hello world");

let modals;
let imgs;

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn;

// Get the <span> element that closes the modal
var spans;

// click event to open modal 

document.addEventListener('DOMContentLoaded', function() {
    imgs = document.querySelectorAll(".results-img-box");
    modals = document.querySelectorAll(".modal");
    spans = document.querySelectorAll('.close');

    imgs.forEach( (img,i) => {
        img.addEventListener('click', function(e){
            console.log(e.target)
            let mod = document.getElementById(`myModal${i}`)
            mod.style.display = 'block';
        })
    })
    
    spans.forEach( (span, i) => {
        span.addEventListener('click', function(e) {
            let mod = document.getElementById(`myModal${i}`)
            mod.style.display = 'none';
        })
    })

    // imgs.
    // for (var i = 0; i < btn.length; i++) {
    //     btn[i].addEventListener('click', function(e) {
    //      let mod = document.querySelector(`myModal${i}`)
    //      console.log("I exist",mod)
    //         // mod.style.display = "block"; 
    //     })
    // };
})


// close modal
// span.onclick = function() {
//     // imgs.forEach( (img,i) => {
//     //     img.addEventListener('click', function(e){
//     //         console.log(e.target)
//     //         let mod = document.getElementById(`myModal${i}`);
//     //         // console.log(mod)
//     //         console.log(mod.style)
//     //         mod.style.display = 'none';
//     //     })
//     // })

// }

// close modal on window click
// window.onclick = function(event) {
//     if (event.target == mod) {
//         imgs.forEach( (img,i) => {
//             img.addEventListener('click', function(e){
//                 console.log(e.target)
//                 let mod = document.getElementById(`myModal${i}`);
//                 // console.log(mod)
//                 console.log(mod.style)
//                 mod.style.display = 'none';
//             })
//         })
//     }
// }
