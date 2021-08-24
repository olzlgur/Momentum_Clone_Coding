const h1 = document.querySelector(".hello:first-child h1");

 function handleTitleClick(){
  h1.style.color="red";
 }

 function handleMouseEnter(){
  h1.innerText="Mouse is here!";
 }

 function handleMouseLeave(){
  h1.innerText="Mouse is gone!";
 }

 function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
 }

 function handleWindowCopy(){
    alert("copier!");
 }

 function handleWindowOffLine(){
    alert("SOS no WIFI");
 }

 function handleWindowOnLine(){
    alert("OnLine");
 }
console.dir(h1);


h1.style.color="gray";

h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offLine", handleWindowOffLine);
window.addEventListener("onLine", handleWindowOnLine);