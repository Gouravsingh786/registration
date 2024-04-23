document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Prevent the form from being submitted by default
    event.preventDefault();
    
    // Validate each input field
    var firstName = document.getElementById("first_name").value.trim();
    var middleName = document.getElementById("middle_name").value.trim();
    var lastName = document.getElementById("last_name").value.trim();
    var dateOfBirth = document.getElementById("date_of_birth").value.trim();
    var genderMale = document.getElementById("male").checked;
    var genderFemale = document.getElementById("female").checked;
    var email = document.getElementById("email").value.trim();
    var aadharCard = document.getElementById("aadhar_card").value.trim();
    
    // Check if any field is empty
    if (firstName === "" || lastName === "" || dateOfBirth === "" || !(genderMale || genderFemale) || email === "" || aadharCard === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    // If all fields are filled, submit the form
    this.submit();

    window.location.href = "new.html";
});
