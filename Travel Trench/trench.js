var surrounding = document.getElementById("homePhoto") ;
var neonButton = document.getElementById("homeButton") ;


neonButton.addEventListener("mouseover" , function(){
    console.log("neonButton hovered . So dim the brightness of surroundings");
    surrounding.style.opacity = 0.5 ;
})

neonButton.addEventListener("mouseout" , function(){
    surrounding.style.opacity = 1 ;
})




//    scroller 

function update(){
    var YCoordinate = window.pageYOffset;
    var totalHeight = document.documentElement.scrollHeight ;
    var percentageScrolled = ( YCoordinate * 100 ) / totalHeight  + 25; 
    // console.log(percentageScrolled);
    scroller.style.width = percentageScrolled + "%" ;

}

var scroller = document.getElementById("display-scroll");

window.addEventListener("scroll" , update ) ;
