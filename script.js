document.querySelectorAll("a").forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
})

})
})

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){
      section.classList.add("show");
    }
  });
});
