document.addEventListener('DOMContentLoaded', () => {
	let catalogSlider = null;
	const mobileWidthMediaQuery = window.matchMedia('(max-width: 768px)');

	function sliderInit() {
		if (!catalogSlider) {
			catalogSlider = new Swiper(".swiper", {
				pagination: {
					el: ".swiper-pagination",
					clickable: false,
				},
				loop: true,
			});
		}
	}

	function sliderDestroy() {
		if (catalogSlider) {
			catalogSlider.destroy(true, true);
			catalogSlider = null;
		};
	};


	function breakpointMatcher(isMobile) {
		if (isMobile) {
			sliderInit();
		} else {
			sliderDestroy();
		};
	};
	breakpointMatcher(mobileWidthMediaQuery.matches);
	mobileWidthMediaQuery.addEventListener('change', (e) => breakpointMatcher(e.matches));
})