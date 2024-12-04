function showDetails(course) {
  const courseDetails = {
    "cabin-crew": {
      syllabus:
        "Syllabus: Customer service, safety procedures, grooming, and in-flight training.",
      eligibility: "Eligibility: 18-27 years, 10+2 pass, fluent in English.",
    },
    "ground-staff": {
      syllabus:
        "Syllabus: Airport operations, baggage handling, ticketing, and customer service.",
      eligibility:
        "Eligibility: 18-30 years, 10+2 pass, basic computer skills.",
    },
    "soft-skills": {
      syllabus:
        "Syllabus: Communication, teamwork, time management, and leadership training.",
      eligibility: "Eligibility: Open to all.",
    },
  };

  const details = courseDetails[course];
  const detailsDiv = document.getElementById("course-details");

  // Highlight the selected button
  const buttons = document.querySelectorAll(".course-list button");
  buttons.forEach((button) => {
    button.classList.remove("active");
    if (button.getAttribute("data-course") === course) {
      button.classList.add("active");
    }
  });
    
    



  if (details) {
    detailsDiv.innerHTML = `
            <h3>${course.replace("-", " ").toUpperCase()}</h3>
            <p>${details.syllabus}</p>
            <p>${details.eligibility}</p>
        `;
  } else {
    detailsDiv.innerHTML = "<p>Course details not available.</p>";
  }
}

// Automatically show details for the default course
window.onload = function () {
  const defaultCourse = "cabin-crew";
  showDetails(defaultCourse);

  // Ensure the default course button is highlighted
  const defaultButton = document.querySelector(
    `.course-list button[data-course="${defaultCourse}"]`
  );
  if (defaultButton) {
    defaultButton.classList.add("active");
  }
};
