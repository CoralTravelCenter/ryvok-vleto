document.addEventListener("DOMContentLoaded", (function () {
	var e = function (e) {
		$(".group-filters > .buttonlike[data-group='".concat(e, "']")).trigger("click")
	},
		t = $(".js-accord-item");
	$(".post-hero-accordion__item-2");
	$(t).on("mouseenter", (function (e) {
		e.target;
		var o = e.currentTarget;
		$(t).removeClass("js-opened"), $(o).addClass("js-opened")
	})), $(t).click((function () {
		switch (this.dataset.target) {
			case "Turkey":
				e("Турция");
				break;
			case "Egypt":
				e("Египет");
				break;
			case "OAE":
				e("ОАЭ");
				break;
			case "Bahrein":
				e("Бахрейн")
		}
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#hotels-set").offset().top
		}, 200)
	}))
}));