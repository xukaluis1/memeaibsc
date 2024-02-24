const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () =>{
	menu.classList.toggle('menu-open');
});


const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
	faq.addEventListener("click",() => {
		faq.classList.toggle("active")
	})
})