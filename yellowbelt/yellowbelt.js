function changetoplants(){
    // tatget the image
    var image = document.querySelector(".succulents")
    // change the src to the other image
    image.src = "./images/assets/succulents-2.jpg"
}

function changeback(){
    var image = document.querySelector(".succulents")
    image.src = "./images/assets/succulents-1.jpg"
}

function goaway(element){
    var bottomheader = document.querySelector(".bottomheader")
    bottomheader.remove();
}