const datas = 
[  
  { image: "../images/Card 1.png",
    imageHover: "../images/backround image.png", 
    name: "Professional Art Printing Data More",
    description:      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",    technologies: ["html", "bootstrap", "Ruby"],
    live: "https://god-logic.github.io/My-Portfolio-Website/",
    source: "https://github.com/God-Logic/My-Portfolio-Website",
  },
  {
    image: "../images/Card 2.png", 
    imageHover: "../images/backround image.png",
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ["html", "bootstrap", "Ruby"],
    live: "https://god-logic.github.io/My-Portfolio-Website/",
    source: "https://github.com/God-Logic/My-Portfolio-Website",
  },
  {
    image: "../images/Card 3.png",
    imageHover: "../images/backround image.png",
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ["html", "bootstrap", "Ruby"],
    live: "https://god-logic.github.io/My-Portfolio-Website/",
    source: "https://github.com/God-Logic/My-Portfolio-Website",
  },
  {
    image: "../images/Card 1.png",
    imageHover: "../images/backround image.png",
    name: "Professional Art Printing Data More",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ["html", "bootstrap", "Ruby"],
    live: "https://god-logic.github.io/My-Portfolio-Website/",
    source: "https://github.com/God-Logic/My-Portfolio-Website",
  },
  {
    image: "../images/Card 2.png",
    imageHover: "../images/backround image.png",
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ["html", "bootstrap", "Ruby"],
   
  },
  {
    image: "../images/Card 2.png",
    imageHover: "../images/backround image.png",
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ["html", "bootstrap", "Ruby"],
   
  }
]
window.onload = () => {
  const menu = document.querySelector('.hamburger-menu');
  const close = document.querySelector('.close-icon');
  const workLink = document.querySelector('.work-link');
  const aboutLink = document.querySelector('.about-link');
  const contactLink = document.querySelector('.contact');
  menu.onclick = () => {
    document.querySelector('.mobile-menu').classList.remove('hide-menu');
    document.querySelector('.mobile-menu').classList.add('show-menu');
  };
  close.onclick = () => {
    document.querySelector('.mobile-menu').classList.add('hide-menu');
  };
  workLink.onclick = () => {
    document.querySelector('.mobile-menu').classList.add('hide-menu');
  };
  aboutLink.onclick = () => {
    document.querySelector('.mobile-menu').classList.add('hide-menu');
  };
  contactLink.onclick = () => {
    document.querySelector('.mobile-menu').classList.add('hide-menu');
  };
  

  const card = (data) => {
    return `<div class="alt-card" style="background-repeat:no-repeat;background-size:cover;">
    <h2>${data.name}</h2>
    <p>${data.description}</p>
    <ul>
      <li>${data.technologies[0]}</li>
      <li>${data.technologies[1]}</li>
      <li>${data.technologies[2]}</li>
    </ul>
    <button class="see-project">See Project</button>
  </div>`
  }

 
const container = document.querySelector(".middle-part");
container.innerHTML = datas.map(data => card(data)).join("");
   const altCards = document.querySelectorAll('.alt-card')
   
   container.addEventListener('click', (event) => {
    if (event.target.matches('.see-project')) {
      openPopup();
    }
  })

    altCards.forEach((altCard,i) => {

      altCard.onmouseover = () => {   
       console.log(button);
        button.style.opacity = '1';
      }
      
      altCard.onmouseout = () => {     
        console.log(`url('${datas[0].image}')`);
        altCard.style.backgroundImage = `url('${datas[i].image}')`;
        button.style.opacity = "0";
      }
      
    })
  
   

   const button = document.querySelector(".see-project")
   const popup = document.querySelector("#popup");
   const openPopup = () => {
    popup.style.display = 'block';
  };
   button.onclick = () => {
   popup.style.display = "block"
   }
   const popclose = document.querySelector(".popclose");
   popclose.onclick = () => {
    popup.style.display = "none"
   }

};

