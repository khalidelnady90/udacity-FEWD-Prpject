/**
 * Global Variables
*/
const sections = document.querySelectorAll('section'); //Select The Sections
const ulMenu = document.getElementById('navbar__list'); //Select The List Menu
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
*/

sections.forEach((el)=> {

  const s_datanav = el.getAttribute('data-nav');

// create list item
  const createLi = document.createElement('li');

  // create link item
  const sLink = document.createElement('a');

  // get the content of the link from section attribue 'data-nav'
  const textContent = document.createTextNode(s_datanav);

  // add class to the link
  sLink.classList.add('menu__link');

  // create event to scroll in to the viewport
  createLi.addEventListener('click', ()=>{
    el.scrollIntoView({behavior: "smooth"});
  })

  //append the text content to the link
  sLink.appendChild(textContent);

  //append the link to the list item
  createLi.appendChild(sLink);

  //append the list item to the document fragment
  fragment.appendChild(createLi);
})

//append the document fragment to the ul menu
ulMenu.appendChild(fragment);

// Sellect the section when near top of viewport
window.addEventListener('scroll', ()=> {
  sections.forEach((sect)=> {

    const view = sect.getBoundingClientRect();
    
    if (view.top >= -50 && view.top <= 200) {

      let secClassNam = sect.hasAttribute('class');

      // when the section not contain the active class value 
      if(secClassNam.value !== ('your-active-class')) {

        //set active class to the section
        sect.className = 'your-active-class';

      }

    } else { // remove the class 'your-active-class' from the section

      sect.className = '';

    }
  })
})



//scroll to top button
//Get the top button:
myBtn = document.getElementById("top");

// When the user scrolls down show the button
window.onscroll = () => {scrollFunction()};

let scrollFunction = () => {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    myBtn.style.display = "block";

  } else {

    myBtn.style.display = "none";

  }
}

// When the user clicks on the button, scroll to the top of the document
let topFunction = () => {

  document.body.scrollTop = 0; // For Safari

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
