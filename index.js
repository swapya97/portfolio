/*============================================================ Typing animation ======================================================================*/
var typed = new Typed(".typing", {
  strings: ["", "Web Developer", " ", "Frontend Developer"],
  typeSpeed: 120,
  BackSpeed: 50,
  loop: true,
});
/*============================================================ Aside ======================================================================*/
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;

allSection = document.querySelectorAll("section");
totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

document.querySelector(".hire-me").addEventListener("click",function(){
    showSection(this)
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
/*============================================================ Send Email ======================================================================*/



function sendEmail() {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "swapnilakulwar97@gmail.com",
    Password : "2C5835E2BCC488953AE9D832566E4E49A6CB",
    To : 'swapnilakulwar16@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
    message =>{
      if(message=="ok"){
        alert("your mail has been send. Thankyou for connecting.")
      }
      else{
        console.error(message);
        alert("There is error at sending message. Sorry for inconvenience, Contact directly on phone or emailId ");
      }
    }
  );
      
}
// 2C5835E2BCC488953AE9D832566E4E49A6CB