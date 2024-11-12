import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/jira", (req, res) => {
  res.render("jira.ejs");
});

app.get("/console", (req, res) => {
  res.render("console.ejs");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});

//This bottom code was supposed to be to emulate the look and feel of a console within the online page.
//Decided to not use it but thought it was cool.

// var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
//   lineNumbers: true,
//   theme: 'abbott'
// });

// var timer = null;
// let slideIndex = 0;

// //Call initial functions to reset page to intro slide
// currentSlide(slideIndex);
// highlightDot(slideIndex);
// // numberKC();

// //Event listener on window scroll
// $(document).on("scroll", function() {
//   clearTimeout(timer);

//   timer = setTimeout(function() {
//     closeMenu();
//     scrollEvent();
//   }, 100);
// });

// //Event listener on nav links to close dropdown
// $(".nav-link").on("click", closeMenu);

// //Show and hide hamburger and nav menu
// function mobileMenu() {
//   $(".hamburger").toggleClass("active");
//   $(".nav-menu").toggleClass("active");
// }

// //
// function closeMenu() {
//   if ($(".hamburger").hasClass("active")){
//     $(".hamburger").removeClass("active");
//     $(".nav-menu").removeClass("active");
//   }
// }

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   let slides = $("section");

//   slides[n].scrollIntoView();
// }

// function highlightDot(n) {
//   n += 1;
//   let i;
//   if ($(".dot").hasClass("on"))
//     $(".dot").removeClass("on");

//   $(".dot:nth-child(" + n + ")").addClass("on");
// }

// function scrollEvent() {
//   let verticalPos = parseInt(window.scrollY);
//   switch(true) {
//     case verticalPos < 369:
//       highlightDot(0);
//       break;
//     case (verticalPos > 369 && verticalPos < 1106):
//       highlightDot(1);
//       break;
//     case (verticalPos > 1106 && verticalPos < 1844):
//       highlightDot(2);
//       break;
//     default:
//       highlightDot(3);
//   }
// }

// // function numberKC() {
// //   let i;
// //   let kanbanColumns = document.getElementsByClassName("kanban-column");

// //   for(i = 0; i < kanbanColumns.length; i++) {
// //     // kanbanColumns[i].classList.add("kc" + i);
// //     let count = kanbanColumns[i].getElementsByClassName("kanban-ticket").length;
// //     kanbanColumns[i].querySelector('.number-of-tickets').textContent = count;
// //   };
// // }
