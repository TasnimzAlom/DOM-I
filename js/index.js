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
    "h1": "DOM Is Awesome",
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
    "address": "123 Way 456 Street",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// SELECTORS
const navbar = document.querySelector("nav");
const links = document.querySelectorAll("a");
const images = document.querySelectorAll("img");
const h1s = document.querySelector("h1");
const h4s = document.querySelectorAll("h4")
const button = document.querySelector("button");
const paras = document.querySelectorAll("p");


// NAV
const nav1 = Object.values(siteContent["nav"]);
for (let i = 0; i < nav1.length - 1; i++) {
  links[i].textContent = nav1[i];
}

links.forEach(Link => Link.style.color = "green");

// HERO STUFF
h1s.innerHTML = "DOM<br> Is<br> Awesome";
button.textContent = siteContent["cta"]["button"];

// IMAGES
images[1].src = siteContent["cta"]["img-src"];
images[2].src = siteContent["main-content"]["middle-img-src"];

// FEATURES
h4s[0].textContent = siteContent["main-content"]["features-h4"];
paras[0].textContent = siteContent["main-content"]["features-content"];

// ABOUT
h4s[1].textContent = siteContent["main-content"]["about-h4"];
paras[1].textContent = siteContent["main-content"]["about-content"];

// SERVICES
h4s[2].textContent = siteContent["main-content"]["services-h4"];
paras[2].textContent = siteContent["main-content"]["services-content"];

// PRODUCTS
h4s[3].textContent = siteContent["main-content"]["product-h4"];
paras[3].textContent = siteContent["main-content"]["product-content"];

// VISION
h4s[4].textContent = siteContent["main-content"]["vision-h4"];
paras[4].textContent = siteContent["main-content"]["vision-content"];


// CONTACTS AREA
h4s[5].textContent = siteContent["contact"]["contact-h4"];
paras[5].textContent = siteContent["contact"]["address"];
paras[6].textContent = siteContent["contact"]["phone"];
paras[7].textContent = siteContent["contact"]["email"];
paras[8].textContent = siteContent["footer"]["copyright"];

// PREPEND to beginning of navbar
const LearnMore = document.createElement("a");
LearnMore.textContent = "Learn More";
LearnMore.href = "#";
LearnMore.style.color = "green";
navbar.prepend(LearnMore);  

// APPEND to end of navbar
const shop = document.createElement("a");
shop.textContent = "Shop";
shop.href = "#";
shop.style.color = "green";
navbar.appendChild(shop);




// STRETCH
h1s.style.fontSize = "7rem";
h1s.style.color = "green";
button.style.fontSize = "1.5rem";




