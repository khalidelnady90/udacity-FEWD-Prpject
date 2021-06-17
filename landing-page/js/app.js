
/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section'); //Select The Sections
const ulMenu = document.getElementById('navbar__list'); //Select The List Menu
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

sections.forEach((el)=> {
  const s_datanav = el.getAttribute('data-nav');
  const createLi = document.createElement('li');
  const sLink = document.createElement('a');
  const textContent = document.createTextNode(s_datanav);

  sLink.classList.add('menu__link');

  createLi.addEventListener('click', ()=>{
    el.scrollIntoView({behavior: "smooth"});
  })

  sLink.appendChild(textContent);
  createLi.appendChild(sLink);
  fragment.appendChild(createLi);
})

ulMenu.appendChild(fragment);

// Sellect the section when near top of viewport
window.addEventListener('scroll', ()=> {
  sections.forEach((sec)=> {
    const rect = sec.getBoundingClientRect();
    if (rect.top >= -50 && rect.top <= 200) {
      if(!sec.classList.contains('your-active-class')) {
        //then add the active class to the section
        sec.classList.add('your-active-class');

      }
    }else { //check if the section out the viewport then remove the class 'your-active-class'
      sec.classList.remove('your-active-class');
    }
  })
})
 


//scroll to top button
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}