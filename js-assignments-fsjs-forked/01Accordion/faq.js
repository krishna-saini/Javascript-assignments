const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accodian_body = document.querySelector('.accordian_body');

const faq = document.createElement('div');
faq.classList.add('faq');

// appending elements 
accodian_body.append(faq);


const faqs = [];
const h3 = document.createElement('h3');
const p = document.createElement('p');
p.classList.add('hidden');


//btn functionality


function showFaq() {
  for(let i =0; i<faqData.length;i++){
    h3.innerHTML = `${faqData[i].question}<button class='show_btn'>+</button>`
    p.innerText= faqData[i].answer;
    const header = document.createElement('div');
    header.classList.add('faq_header');
    header.append(h3.cloneNode(true), p.cloneNode(true));
    faq.append(header)
  }
}

showFaq();


const acc= document.querySelectorAll('.faq_header')
console.log(acc);
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    const para = document.querySelector(`this`)
    this.lastChild.classList.toggle('hidden'); 
})}


function createFaq() {
  
}

function btnStatusUpdate() {
  
}













