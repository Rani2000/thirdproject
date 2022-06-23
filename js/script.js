// logo-slider here

$('.logo-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 596,
			settings: {
				slidesToShow: 1,
				centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
				slidesToScroll: 1
			}
		}
	]
});

// third-section starts here

$('.big').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
	responsive: [
		{
			breakpoint: 1360,
			settings: {
				slidesToShow: 2,
				centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
				slidesToScroll: 1
			}
		}
	]
});

// testimonial slider here

$('.testimonial').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1050,
			settings: {
				slidesToShow: 1,
				centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
				slidesToScroll: 1
			}
		}
	]
});

// scroll-to-top animation

const heroSection = document.querySelector(".header");
const footerElem = document.querySelector(".footer-bottom");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<i class='fa-solid fa-arrow-up-long scrollTop'></i>`;

footerElem.after(scroollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scroollElement.addEventListener("click", scrollTop);

var preloader=document.getElementById("loading");
function myFunction(){
	preloader.style.display="none";
}