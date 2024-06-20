document.getElementById('achievementsLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('biodata-form-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('biodata-form-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

//code to send data from pop up form
const form = document.getElementById('biodata-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    fullName: form.elements.fullName.value,
    dob: form.elements.dob.value,
    email: form.elements.email.value,
    phone: form.elements.phone.value,
    address: form.elements.address.value,
    regNumber: form.elements.regNumber.value,
    skills: form.elements.skills.value,
    achievements: form.elements.achievements.value,
    certifications: form.elements.Certifications.value
  };

  try {
    const response = await fetch('http://localhost:3000/achievements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Achievement data saved successfully!');
      form.reset();
    } else {
      const error = await response.json();
      alert(`Error saving achievement data: ${error.message}`);
    }
  } catch (error) {
    alert(`An error occurred: ${error.message}`);
  }
});

// to search friends  achievements 

document.getElementById('student-form').addEventListener('submit', async function(event) {
    event.preventDefault();


    try {
      
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('achievement-form-container').style.display = 'block';
        document.getElementById('overlay').style.display = 'none';
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

document.getElementById('closeButton').addEventListener('click', function() {
  document.getElementById('achievement-form-container').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
});

//sign or logot
const signOutButton = document.getElementById('signOutButton');
signOutButton.addEventListener('click', () => {
    // Remove the registration number from localStorage
    localStorage.removeItem('studentRegNo');
    console.log('Student signed out, registration number removed.');
alert('student sign out');
    // Optionally, redirect to the sign-in page
    window.location.href = 'login.html';  // Replace 'index.html' with your sign-in page URL
});
