document.addEventListener("DOMContentLoaded", function () {
  const skillAssessmentForm = document.getElementById("skillAssessmentForm");
  const assessmentResults = document.getElementById("assessmentResults");
  const careerSuggestionsList = document.getElementById("careerSuggestionsList");

  if (skillAssessmentForm) {
    skillAssessmentForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      const experience = document.getElementById("experience").value;
      const education = document.getElementById("education").value;
      const skills = document.getElementById("skills").value;
      const interests = document.getElementById("interests").value;

      assessmentResults.classList.remove("hidden");
      careerSuggestionsList.innerHTML = "<li>Loading suggestions from AI...</li>";

      try {
        const response = await fetch("http://localhost:3000/api/career-suggestions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ experience, education, skills, interests }),
        });

        const data = await response.json();

        if (data.suggestions) {
          const lines = data.suggestions.split("\n").filter(line => line.trim() !== "");
          careerSuggestionsList.innerHTML = lines.map(line => `<li>${line}</li>`).join('');
        } else {
          careerSuggestionsList.innerHTML = "<li>No suggestions received.</li>";
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        careerSuggestionsList.innerHTML = "<li>Error getting suggestions. Please try again later.</li>";
      }
    });
  }
});
