const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {

        // Toggle active state on the question
        question.classList.toggle("active");

        // Find the answer belonging to this question
        const answer = question.nextElementSibling;

        // Toggle the answer
        answer.classList.toggle("open");
    });
});
