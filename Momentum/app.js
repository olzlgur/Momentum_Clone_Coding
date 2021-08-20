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
console.dir(title);

title.style.color="gray";

title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);