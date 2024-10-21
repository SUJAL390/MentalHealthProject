document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const trackingForm = document.getElementById("tracking-form");
    const  notesContainer = document.getElementById("notes-container");
    const tipsContainer = document.getElementById("tips-container");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Add your actual login logic here
      // For now, let's simulate a successful login
      const isValidLogin = username === "sujal" && password === "sujal";
  
      if (isValidLogin) {
        // Redirect to the dashboard after a successful login
        window.location.href = "index.html";
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
  
  
    if (trackingForm && notesContainer && tipsContainer) {
      trackingForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        // Retrieve values from form elements (date, mood, etc.)
        const date = document.getElementById("date").value;
        const mood = document.getElementById("mood").value;
  
        // Display tips based on the selected mood
        displayNotesandTips(mood);
        // Update this part to store the data or display it as needed
        console.log("Date:", date);
        console.log("Mood:", mood);
  
        // Add logic to display tips based on the selected mood
        // You can update the 'tips' textarea accordingly
      });
    }
    function displayNotesandTips(selectedMood) {
      // Define tips for different moods
      const moodNotes = "Your custom notes for this mood..."
      const moodTips = {
        happy: "Tips for a happy mood...",
        sad: "Tips for a sad mood...",
        relaxed: "Tips for a relaxed mood...",
        // Add more moods and corresponding tips
        // ...
      };
      notesContainer.textContent = "Notes: " + moodNotes;
      // Display the tips in the tipsContainer
      tipsContainer.textContent = "Tips: " + (moodTips[selectedMood] || "No tips available for this mood.");
    }
  });