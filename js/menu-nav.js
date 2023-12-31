
const menuLinks = document.querySelectorAll('.menu-nav a[href^="#"], .menu-footer a[href^="#"] ');
const menuLinksMob = document.querySelectorAll('.menu-nav-mobile a[href^="#"]');
const buttonEmail = document.querySelector(".e-mail");


function getDistanceFromTheTop(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop
};


function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    smoothScrollTo(0, distanceFromTheTop, 800)
};


menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});

menuLinksMob.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});


buttonEmail.addEventListener("click", alertEmail)
function alertEmail(){
  alert("E-mail: bmariano2902@outlook.com")
}






function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== "undefined" ? duration : 400;
  
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  }