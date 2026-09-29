# FAQ Accordion

 A simple and responsive **FAQ Accordion** built using **HTML5, CSS3, and JavaScript**.

 This project demonstrates how to create an interactive FAQ section where users can click on questions to expand or collapse their answers.

 ## 📌 Features

 - 8+ frequently asked questions
- Expandable and collapsible answers
- Smooth opening and closing animation
- Clear active state for selected questions
- Multiple answers can remain open at the same time
- Responsive design for mobile, tablet, and desktop
- Uses semantic `<button>` elements for FAQ questions
- Simple DOM event handling
- Uses `classList.toggle()` for interactive behavior

 ## 🛠️ Technologies Used

 - **HTML5** – Structure of the FAQ section
- **CSS3** – Styling, animations, and responsive design
- **JavaScript** – DOM manipulation and click events

 ## 📂 Project Structure

```
faq-accordion/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

 ## 🚀 Getting Started

 ### 1\. Clone the repository

```
git clone https://github.com/your-username/faq-accordion.git
```

 ### 2\. Open the project

 Navigate to the project folder:

```
cd faq-accordion
```

 ### 3\. Run the project

 Open `index.html` in your web browser.

 No additional dependencies or installation are required.

 ## 💡 How It Works

 Each FAQ question is represented by a button:

```
<button class="faq-question">
    What is HTML?
    <span class="icon">+</span>
</button>
```

 The answer is placed immediately after the button:

```
<div class="faq-answer">
    <p>
        HTML stands for HyperText Markup Language.
    </p>
</div>
```

 JavaScript listens for clicks on all FAQ buttons:

```
questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("active");

        const answer = question.nextElementSibling;

        answer.classList.toggle("open");
    });
});
```

 When a question is clicked:

 - The `active` class is toggled on the question.
- The `open` class is toggled on its answer.
- CSS controls the visual appearance and animation.
- Multiple FAQ answers can remain open simultaneously.

 ## 🎯 Learning Objectives

 This project is designed to practice:

 - DOM selection
- DOM events
- `addEventListener()`
- `classList.toggle()`
- `nextElementSibling`
- CSS transitions
- Responsive web design
- Semantic HTML
- Building simple interactive UI components

 ## 📱 Responsive Design

 The FAQ accordion is designed to work across different screen sizes:

 - 💻 Desktop
- 📱 Mobile
- 📲 Tablet

 CSS media queries are used to adjust typography, spacing, and layout on smaller screens.

 ## 🔮 Possible Improvements

 Some features that could be added in the future:

 - Allow only one FAQ answer to remain open at a time
- Add keyboard accessibility improvements
- Add ARIA attributes such as `aria-expanded`
- Add search functionality
- Add FAQ categories
- Add a dark mode
- Store the selected FAQ state using `localStorage`

 ## 📄 License

 This project is open-source and available for learning and educational purposes.

