// Get the toggle button and navigation menu
const toggleBtn = document.getElementById('toggle');
const navMenu = document.getElementById('nav');

// Add event listener to toggle button
toggleBtn.addEventListener('click', function() {
  // Toggle the 'right-full' and 'right-0' classes on the navigation menu
  navMenu.classList.toggle('-right-full');
  navMenu.classList.toggle('right-0');
});


// get the navbar links
const navLinks = document.querySelectorAll('#nav a');

// add click event listeners to each link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // prevent default link behavior

    const targetId = link.getAttribute('href'); // get the target ID from the link's href attribute
    const targetSection = document.querySelector(targetId); // get the target section element

    // scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


const header = document.getElementById("navbar");

  // add an event listener for the scroll event
  window.addEventListener("scroll", function() {
    // if the user has scrolled past the header, add a class to make it sticky
    if (window.pageYOffset > header.offsetTop) {
      header.classList.add("stayPut");
    } else {
      header.classList.remove("stayPut");
    }
    // if the user has scrolled more than 50 pixels, change the background color
    if (window.pageYOffset > 50) {
      header.classList.add("bgColor");
    } else {
      header.classList.remove("bgColor");
    }
  });


  window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // const contact_service = "service_iv0qow2";
        // const contact_form = "template_q8dew5f";
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
       

        emailjs.sendForm('service_iv0qow2', 'template_q8dew5f', this)
            .then(function() {
                console.log('SUCCESS!');
                alert("Message sent successfully");
                document.getElementById('contactForm').reset(); // reset the form
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}


  