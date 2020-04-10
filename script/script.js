window.addEventListener('DOMContentLoaded', ()=>{
    attachEvents();

    let navOffset = $('nav').offset().top;


    $(window).scroll(()=>{
        let scrollPos = $(window).scrollTop();
        //console.log(scrollPos);

        let stickNav = $('nav');
        stickMenu(stickNav);

        let stickyMenu = $('second');
        stickMenu(stickyMenu);

        function stickMenu(stick){
            if(scrollPos >= navOffset){
                stick.addClass("fixed");
            }
        }

        let linkOne = $("#biography").offset().top;
        if(scrollPos >= linkOne){
            $(".t1").addClass('appear');
        }else{
            $(".t1").removeClass('appear');
        }
    })

});

attachEvents = ()=>{

    //ES6 Syntax
    $('a').click((e)=>{
        let myTarget = $(e.target.hash);
        myTarget = myTarget.length && myTarget 
        console.log(myTarget);

        let targetOffset = myTarget.offset().top;
	       	$('html,body').animate({scrollTop: targetOffset}, 1000);
    })
}


const images = [
  "maeda.png",
  "maeda1.jpg",
  "maeda2.jpg",
  "maeda3.jpg",
  "maeda4.jpg",
  "maeda-robotdraw.jpg",
  "maeda-petals.jpg"
];

let imgSwitch = 0;

document.addEventListener("DOMContentLoaded",()=>{loadImages();
})

loadImages = () => {
let imageNumber = 0;
let columns = document.getElementsByClassName("column");
for(let i = 0; i < images.length; i++){
    let newImage = document.createElement('img');
    newImage.className = "images";
    newImage.id = i;
    newImage.src = "./allAssets/"+images[i];

    columns[imageNumber].appendChild(newImage);
    imageNumber++;

    if(imageNumber > columns.length-1){
        imageNumber = 0;
     }

     newImage.addEventListener('click', (sth)=>{
        newPop(sth.target.id);
        imgSwitch = sth.target.id;
     })
    }
}