// AuraHome Luxury Animations


document.addEventListener("DOMContentLoaded",()=>{


/* =========================
   Scroll Reveal
========================= */


const revealElements = document.querySelectorAll(
"section, .card, .product, .review"
);



const revealObserver = new IntersectionObserver((entries)=>{


entries.forEach((entry)=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},{
threshold:0.15
});



revealElements.forEach((element)=>{


element.classList.add("hidden");

revealObserver.observe(element);


});







/* =========================
   Header Scroll Effect
========================= */


const header = document.querySelector(".header");



window.addEventListener("scroll",()=>{


if(window.scrollY > 80){


header.style.top="10px";

header.style.background="rgba(7,7,7,.92)";

header.style.boxShadow="0 20px 50px rgba(0,0,0,.5)";


}


else{


header.style.top="25px";

header.style.background="rgba(255,255,255,.05)";

header.style.boxShadow="none";


}


});







/* =========================
   Button Animation
========================= */


const buttons=document.querySelectorAll("button");



buttons.forEach(button=>{


button.addEventListener("mouseenter",()=>{


button.style.letterSpacing="2px";


});



button.addEventListener("mouseleave",()=>{


button.style.letterSpacing="0";


});


});







/* =========================
   Smooth Navigation
========================= */


document.querySelectorAll("a").forEach(link=>{


link.addEventListener("click",(e)=>{


const target=link.getAttribute("href");


if(target.startsWith("#")){


e.preventDefault();


document.querySelector(target)?.scrollIntoView({

behavior:"smooth"

});


}


});


});



});
