$(function(){
var $mainMenuItems = $("#main-menu ul").children("li"),
totalMainMenuItems= $mainMenuItems.length,
openedIndex = 2,

init = function(){
bindEvents();
if (validIndex(openedIndex))
animateItem($mainMenuItems.eq(openedIndex),true,700);



},

bindEvents = function(){
    $mainMenuItems.children(".images").click(function(){
        var newIndex = $(this).parent().index();
        $item = $mainMenuItems.eq(newIndex);
        
        checkAndAnimateItem(newIndex);
        
        });
        $(".button").hover(function(){
$(this).addClass("hovered");
        },
        function(){
$(this).removeClass("hovered");
        }
        
        );
        $(".button").click(function(){
var newIndex = $(this).index();
checkAndAnimateItem(newIndex);
       

});
},
validIndex = function(indexTocheck){
return (indexTocheck>= 0) && (indexTocheck < totalMainMenuItems)
},
animateItem = function($item, toOpen, speed){
    var $colorImage = $item.find(".color");
    itemParam = toOpen ? {width: "420px"}: {width:"140px"},
colorImageParam = toOpen ? { left: "0px"}: {left: "140px"};    
   

$colorImage.animate(colorImageParam,speed);//pour image couleur
    $item.animate(itemParam,speed);// pour la descri
};

checkAndAnimateItem = function(indexTocheckAnimate){
    if(openedIndex === indexTocheckAnimate){
        animateItem($mainMenuItems.eq(indexTocheckAnimate) ,false, 250);
        openedIndex = -1;
    
    }
    else
    {
    if(validIndex(indexTocheckAnimate))
    {
        animateItem($mainMenuItems.eq(openedIndex), false, 250);
        openedIndex = indexTocheckAnimate;
        animateItem($mainMenuItems.eq(indexTocheckAnimate), true, 250);
    
    }
    
    }
};


init(); //lancez la fonction


});