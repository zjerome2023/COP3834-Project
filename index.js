/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById('theme-button')
// Step 2: Write the callback function
const toggleDarkMode = () => {
    // This section will run whenever the button is clicked
    document.body.classList.toggle("dark-mode");

}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener('click', toggleDarkMode);

/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/

const form = document.getElementById('rsvp-form');
let rsvpButton = document.getElementById('rsvp-button')
let count = 3;

const addParticipant = (event, person) => {    
    let newParticipant = document.createElement('p');
    newParticipant.textContent = `🎟️ ${person.name} has joined the party!`;
    
    const participants = document.getElementById('participants');
    participants.appendChild(newParticipant);

    let rsvpNumber = document.getElementById('rsvp-count');
    rsvpNumber.remove();
    count = count + 1;

    let newCount = document.createElement('p');
    newCount.id = "rsvp-count"
    newCount.textContent = "⭐" + count + " people have RSVP'd to this event!";
    participants.appendChild(newCount)
    
    event.preventDefault; // no refresh when submit
}

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function

const validateForm = () => {

  let containsErrors = false;
 
    var rsvpInputs = document.getElementById("rsvp-form").elements;

    let person = {
        name: rsvpInputs[0].value,
        email: rsvpInputs[1].value,
        nintendoID: rsvpInputs[2].value
    }

  // TODO: Loop through all inputs
  for(let i=0; i<rsvpInputs.length; i++) {
        console.log("looping");
     // TODO: Inside loop, validate the value of each input
    if (rsvpInputs[i].value.length < 2){
        console.log("error");
        containsErrors = true;
        rsvpInputs[i].classList.add("error");
    }
    else {
         console.log("no error")
        rsvpInputs[i].classList.remove("error");
    }
  }

  // TODO: If no errors, call addParticipant() and clear fields
    if (containsErrors == false) {
        addParticipant(event, person);
        for(let i=0; i<rsvpInputs.length; i++){
            rsvpInputs[i].value = "";
        }
        toggleModal(person)
    }
}
 // declaration

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener('click', validateForm);

/*** Scroll Animations ***
  
  Purpose:
  - Use this starter code to add scroll animations to your website.

  When To Modify:
  - [ ] Project 8 (REQUIRED FEATURE)
  - [ ] Any time after
***/

// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelectorAll('.revealable');

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            revealableContainers[i].classList.add('active');
        }
        // If the container is not within range, hide it by removing the 'active' class
        else { 
            revealableContainers[i].classList.remove('active');
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener('scroll', reveal);

/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementById("success-modal"); // TODO
    let text = document.getElementById("modal-text");
    // TODO: Update modal display to flex
    modal.style.display = "flex";

    // TODO: Update modal text to personalized message
    text.textContent = `Thank you for signing up for Splatoon Party, ${person.name}! We can't wait to see you there!`

    // Set modal timeout to 5 seconds
    setTimeout(() => {
        modal.style.display = "none";
    }, 5000);
}

// TODO: animation variables and animateImage() function
const animateImage = () => {
    if(rotateFactor === 0){
        rotateFactor = -10;
    } else {
        rotateFactor = 0;
    }
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}

let rotateFactor = 0;
let modalImage = document.getElementById("modal-img")

let intervalId = setInterval(animateImage, 500);
setTimeout(() => {
    modal.style.display = 'none';
    clearInterval(intervalId);
}, 5000);
