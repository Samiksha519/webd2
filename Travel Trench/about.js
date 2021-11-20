console.log("You are in about section now") ;


function update(){
    var YCoordinate = window.pageYOffset;
    var totalHeight = document.documentElement.scrollHeight ;
    var percentageScrolled = (( YCoordinate * 100 ) / totalHeight)  + 52    ; 
    // console.log(percentageScrolled);
    scroller.style.width = percentageScrolled + "%" ;

}

var scroller = document.getElementById("display-scroll");

window.addEventListener("scroll" , update ) ;
