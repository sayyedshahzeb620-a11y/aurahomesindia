// AuraHome Luxury Animations


document.addEventListener("DOMContentLoaded",()=>{


// Fade in animation

const sections = document.querySelectorAll(
"section, .collection-card, .product-card, .review-card"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}


});


},{

threshold:0.15

});



sections.forEach(section=>{


section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s ease";


observer.observe(section);


});





// Header background on scroll


const header=document.querySelector(".header");



window.addEventListener("scroll",()=>{


if(window.scrollY>80){

header.style.background="rgba(7,7,7,0.95)";

header.style.backdropFilter="blur(15px)";

}

else{

header.style.background="linear-gradient(to bottom,rgba(0,0,0,.8),transparent)";

}


});






// Button luxury hover


const buttons=document.querySelectorAll("button");


buttons.forEach(button=>{


button.addEventListener("mouseenter",()=>{

button.style.letterSpacing="2px";

});


button.addEventListener("mouseleave",()=>{

button.style.letterSpacing="0";

});


});



});
