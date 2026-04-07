document.getElementById("enterBtn")?.addEventListener("click", ()=>{
  document.body.style.opacity = "0";
  setTimeout(()=>{
    window.location.href = "explore.html";
  }, 500);
});