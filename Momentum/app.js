const title = document.querySelector(".hello:first-child h1");

 function handleTitleClick(){
   console.log("title was clicked!");
 }

console.dir(title);

title.style.color="gray";

title.addEventListener("click", handleTitleClick);