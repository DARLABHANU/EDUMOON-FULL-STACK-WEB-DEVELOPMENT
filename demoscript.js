
document.getElementById('studentSignUpClose').addEventListener('click', function() {
    document.getElementById('studentSignUpModal').style.display = 'none';
  });

  
  // Function to show admin signup modal and hide admin signin modal
  
  
  // Function to close student signup modal
  document.getElementById('studentSignUpClose').addEventListener('click', function() {
    document.getElementById('studentSignUpModal').style.display = 'none';
  });
  
  // Function to close admin signup modal
 
  
  document.addEventListener('DOMContentLoaded', function() {
    const studentRegisterForm = document.getElementById('studentRegisterForm');

    studentRegisterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            studentName: document.getElementById('studentName').value,
            studentRegNo: document.getElementById('studentRegNoSignUp').value,
            studentBranch: document.getElementById('studentBranch').value,
            Aadhar: document.getElementById('Aadhar').value
        };

        fetch('/api/register-student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Student registered successfully!');
                // Optionally, redirect the user to another page
            } else {
                alert('Error registering student: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while registering the student. Please try again later.');
        });
    });
});




//code to display the form
window.addEventListener('click', function(event) {
    if (event.target.className === 'modal') {
      document.getElementById('studentModal').style.display = 'none';
      document.getElementById('adminModal').style.display = 'none';
      document.getElementById('studentSignUpModal').style.display = 'none';
      document.getElementById('adminSignUpModal').style.display = 'none';
    }
  });
  document.getElementById('studentClose').addEventListener('click', function() {
    document.getElementById('studentModal').style.display = 'none';
  });
 
  
 document.addEventListener('DOMContentLoaded', function() {
  const studentSignInForm = document.getElementById('student-form');

  studentSignInForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const regNumber = document.getElementById('reg-number').value;

    try {
      const response = await fetch('http://localhost:3000/api/register-marks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ regNumber })
      });

      const data = await response.json();
      if (data.success) {
        console.log('Success:', data);
        alert('Success');
        // Optionally, display a success message or redirect to another page
      } else {
        console.error('Error:', data.message);
        // Handle error, display error message to the user, etc.
      }
    } catch (error) {
      console.error('Error:', error);
     
      // Handle error, display error message to the user, etc.
    }
  });
});

  

document.getElementById('frontend').addEventListener('click', function() {
  var marksContainer = document.getElementById('marks-container');
  marksContainer.style.display = 'block';
});



//js for the marks entering form
const form = document.getElementById('marksForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const regNumber = document.getElementById('regNumber').value;
  const subject1 = document.getElementById('subject1').value;
  const subject2 = document.getElementById('subject2').value;
  const subject3 = document.getElementById('subject3').value;
  const subject4 = document.getElementById('subject4').value;
  const subject5 = document.getElementById('subject5').value;
  const subject6 = document.getElementById('subject6').value;

  try {
    const response = await fetch('http://localhost:3000/api/marks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        regNumber,
        subject1,
        subject2,
        subject3,
        subject4,
        subject5,
        subject6
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
      
      // Reset the form
      form.reset();
    } else {
      const data = await response.json();
      console.error(data.message);
      
    }
  } catch (error) {
    console.error('Error registering marks:', error);
    alert('An error occurred while registering marks. Please try again later.');
  }
});

// code to cearch data
  
