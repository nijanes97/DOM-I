const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM </br> Is </br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navTop = document.querySelectorAll('a');
navTop[0].textContent = siteContent["nav"]['nav-item-1'];
navTop[1].textContent = siteContent["nav"]['nav-item-2'];
navTop[2].textContent = siteContent["nav"]['nav-item-3'];
navTop[3].textContent = siteContent["nav"]['nav-item-4'];
navTop[4].textContent = siteContent["nav"]['nav-item-5'];
navTop[5].textContent = siteContent["nav"]['nav-item-6'];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctah1 = document.querySelector('h1');
ctah1.innerHTML = siteContent["cta"]["h1"];

let ctaP =  document.querySelector('button');
ctaP.textContent = siteContent["cta"]["button"];

const h4Cont = document.querySelectorAll('h4');
h4Cont[0].textContent = siteContent['main-content']['features-h4'];
h4Cont[1].textContent = siteContent['main-content']['about-h4'];
h4Cont[2].textContent = siteContent['main-content']['services-h4'];
h4Cont[3].textContent = siteContent['main-content']['product-h4'];
h4Cont[4].textContent = siteContent['main-content']['vision-h4'];
h4Cont[5].textContent = siteContent['contact']['contact-h4'];
const txtCont = document.querySelectorAll('p');
txtCont[0].textContent = siteContent['main-content']['features-content'];
txtCont[1].textContent = siteContent['main-content']['about-content'];
txtCont[2].textContent = siteContent['main-content']['services-content'];
txtCont[3].textContent = siteContent['main-content']['product-content'];
txtCont[4].textContent = siteContent['main-content']['vision-content'];
txtCont[5].innerHTML = siteContent['contact']['address'];
txtCont[6].textContent = siteContent['contact']['phone'];
txtCont[7].textContent = siteContent['contact']['email'];
txtCont[8].textContent = siteContent['footer']['copyright'];

let mainImg = document.getElementById('middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let addNav1 = document.createElement("A");
let addNav1Txt = document.createTextNode("Our Team");
addNav1.setAttribute("href", "#");
addNav1.appendChild(addNav1Txt);

let addNav2 = document.createElement("A");
let addNav2Txt = document.createTextNode("Why Us?");
addNav2.setAttribute("href", "#");
addNav2.appendChild(addNav2Txt);

document.querySelector('nav').appendChild(addNav1);
document.querySelector('nav').appendChild(addNav2);