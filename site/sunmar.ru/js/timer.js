document.addEventListener("DOMContentLoaded", function () {
	var e = function (e) {
		var t = e.o,
			o = e.r,
			r = e.m,
			d = e.l,
			l = e.d;
		(document.getElementById("days-number").innerHTML = l(t)),
			(document.getElementById("days-label").textContent = n(t, ["день", "дня", "дней"])),
			(document.getElementById("hours-number").innerHTML = l(o)),
			(document.getElementById("hours-label").textContent = n(o, ["час", "часа", "часов"])),
			(document.getElementById("minutes-number").innerHTML = l(r)),
			(document.getElementById("minutes-label").textContent = "мин"),
			(document.getElementById("seconds-number").innerHTML = l(d)),
			(document.getElementById("seconds-label").textContent = "сек");
	},
		t = function () {
			var t = new Date("2023-08-15T23:59:00+03:00"),
				n = new Date(),
				r = Math.floor((t - n) / 1e3),
				d = Math.floor(r / 3600 / 24),
				l = Math.floor(r / 3600) % 24,
				m = Math.floor(r / 60) % 60,
				a = Math.floor(r) % 60,
				u = function (e) {
					return e < 10 ? "0".concat(e) : e;
				};
			if (n >= t) return e({ o: 0, r: 0, m: 0, l: 0, d: u }), clearInterval(o), void $(".countdown").addClass("countdown-hidden");
			e({ o: d, r: l, m: m, l: a, d: u });
		},
		n = function (e, t) {
			return t[e % 100 > 4 && e % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][e % 10 < 5 ? e % 10 : 5]];
		};
	t();
	var o = setInterval(t, 1e3);
});
