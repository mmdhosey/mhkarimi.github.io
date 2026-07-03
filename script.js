function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}

/* TYPE TEXT */
const text = "Mohammad Karimi";
let i = 0;

function type(){
if(i < text.length){
document.getElementById("type").innerHTML += text.charAt(i);
i++;
setTimeout(type,100);
}
}
type();

/* CURSOR */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

/* GSAP */
gsap.from(".subtitle",{opacity:0,y:30,duration:1,delay:1});

gsap.utils.toArray(".card").forEach(card=>{
gsap.from(card,{
scrollTrigger:{
trigger:card,
start:"top 85%"
},
opacity:0,
y:60,
duration:1
});
});

/* REVEAL TEXT */
gsap.from(".reveal",{
scrollTrigger:{
trigger:".reveal",
start:"top 80%"
},
opacity:0,
y:50,
duration:1
});
