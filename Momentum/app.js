const title = document.querySelector(".hello:first-child h1");

 function handleTitleClick(){
  title.style.color="red";
 }

 function handleMouseEnter(){
  title.innerText="Mouse is here!";
 }

 function handleMouseLeave(){
  title.innerText="Mouse is gone!";
 }

 function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
 }

console.dir(title);

title.style.color="gray";

title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);