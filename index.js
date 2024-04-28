// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);

// Sign-Up Petition
document.addEventListener('DOMContentLoaded', function () {
    let count = parseInt(localStorage.getItem('signatureCount')) || 0; // Retrieve signature count from local storage or default to 0

    // Display initial signature count
    updateSignatureCount(count);

    // Load signatures from local storage
    loadSignatures();

    // Function to update signature count display
    function updateSignatureCount(count) {
        const counter = document.getElementById('counter');
        counter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
    }

    // Function to add signature to the petition
    const addSignature = (name, hometown, email) => {
        // Validate input fields
        if (!validateInputs(name, hometown, email)) {
            return;
        }

        // Create a new paragraph element to display the signature
        const signatureParagraph = document.createElement('p');
        signatureParagraph.textContent = `${name} from ${hometown} ${email ? '(' + email + ')' : ''} supports this.`;

        // Find the signatures section on the page
        const signaturesSection = document.querySelector('#signatures');

        // Append the new signature paragraph to the signatures section
        signaturesSection.appendChild(signatureParagraph);

        // Limit the number of displayed signatures to 5
        limitSignatures(signaturesSection);

        // Increment signature count
        count++;

        // Save signature count to local storage
        localStorage.setItem('signatureCount', count);

        // Save signature to local storage
        saveSignature(`${name} from ${hometown} ${email ? '(' + email + ')' : ''}`);

        // Update signature count display
        updateSignatureCount(count);
    };

    // Function to validate input fields
    const validateInputs = (name, hometown, email) => {
        const nameInput = document.getElementById('name');
        const hometownInput = document.getElementById('hometown');

        let valid = true;

        if (name.trim().length < 2 || hometown.trim().length < 2) {
            nameInput.classList.add('error');
            hometownInput.classList.add('error');
            valid = false;
        } else {
            nameInput.classList.remove('error');
            hometownInput.classList.remove('error');
        }

        if (email && !validateEmail(email)) {
            alert('Please provide a valid email address.');
            return false;
        }

        return valid;
    };

    // Function to validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to load signatures from local storage
    function loadSignatures() {
        const signatures = JSON.parse(localStorage.getItem('signatures')) || [];
        const signaturesSection = document.querySelector('#signatures');

        signatures.forEach(signature => {
            const signatureParagraph = document.createElement('p');
            signatureParagraph.textContent = signature;
            signaturesSection.appendChild(signatureParagraph);
        });

        limitSignatures(signaturesSection);
    }

    // Function to save signature to local storage
    function saveSignature(signature) {
        const signatures = JSON.parse(localStorage.getItem('signatures')) || [];
        signatures.push(signature);
        localStorage.setItem('signatures', JSON.stringify(signatures));
    }

    // Function to limit the number of displayed signatures to 5
    function limitSignatures(signaturesSection) {
        const signatures = signaturesSection.querySelectorAll('p');
        if (signatures.length > 5) {
            for (let i = 0; i < signatures.length - 5; i++) {
                signaturesSection.removeChild(signatures[i]); // Remove the oldest signatures
            }
        }
    }

    // Query for the sign now button
    const signNowButton = document.getElementById('sign-now-button');

    // Remove the click event listener that calls addSignature()
    signNowButton.removeEventListener('click', addSignature);

    // Add click event listener for sign-up button
    signNowButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const hometown = document.getElementById('hometown').value;
        const email = document.getElementById('email').value;

        // Call addSignature function to save the signature if inputs are valid
        addSignature(name, hometown, email);

        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('hometown').value = '';
        document.getElementById('email').value = '';
    });
});


// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("sign-now-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  // Populate modal with personalized message and image animation
  var name = document.getElementById("name").value;
  var hometown = document.getElementById("hometown").value;
  var message = "Thank you, " + name + " from " + hometown + ", for signing the petition!";
  document.getElementById("modalMessage").innerHTML = message;
  // Add image animation (e.g., rescaling)
  var image = document.getElementById("animatedImage");
  image.style.transition = "transform 1s ease";
  image.style.transform = "scale(1.1)";
  // Close the modal after 5 seconds if the user does not press the "x" button
  setTimeout(closeModal, 5000);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  closeModal();
};

// Close the modal after 5 seconds if the user does not press the "x" button
setTimeout(function() {
  closeModal();
}, 5000);


// Add click event listener for sign-up button
signNowButton.addEventListener("click", () => {
  // Call addSignature function to save the signature if inputs are valid
  addSignature(name, hometown, email);
  // Trigger modal
  modal.style.display = "block";
  // Clear form fields
  document.getElementById("name").value = "";
  document.getElementById("hometown").value = "";
  document.getElementById("email").value = "";
});


// JavaScript to update the numbers based on progress
// Assuming your progress bar goes from 0 to 100
const progressIndicator = document.querySelector('.indicator');
const numbers = document.querySelectorAll('.numbers span');

const updateNumbers = () => {
  const progressWidth = (progressIndicator.offsetWidth / progressIndicator.parentNode.offsetWidth) * 100;
  const percentage = Math.round(progressWidth);
  numbers.forEach(number => {
    number.textContent = percentage;
  });
};

// Call the function initially
updateNumbers();


document.addEventListener("DOMContentLoaded", function() {
  const chartHeadings = document.querySelectorAll(".chart-heading");
  chartHeadings.forEach(heading => {
    heading.addEventListener("click", function() {
      const content = this.nextElementSibling;
      content.classList.toggle("hidden");
    });
  });
});

// JavaScript to handle modal functionality
document.addEventListener("DOMContentLoaded", function() {
  // Get the modal element
  var modal = document.getElementById("learn-more-modal");

  // Get the button that opens the modal
  var btn = document.getElementById("learn-more-button");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});
