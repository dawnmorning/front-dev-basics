var images = [
			"국화:Chrysanthemum.jpg",
			"사막:Desert.jpg",
			"수국:Hydrangeas.jpg",
			"해파리:Jellyfish.jpg",
			"코알라:Koala.jpg",
			"등대:Lighthouse.jpg",
			"펭귄:Penguins.jpg",
			"툴립:Tulips.jpg"
		];
		var chooseInfo = function () {
			var index = Math.floor(Math.random() * images.length);
			var info = images[index].split(":");
			// return {index: index, info: info};
			return info
		}

		var changeImage = function () {
			var info = chooseInfo
			var imageName = info[1];
			$('.image-viewer img').attr('src', '/ch07/images/' + imageName);
			console.log(info[1]);
		}

		var slideShow;

		var startSlideShow = function () {
			slideShow = setInterval(function () {
				changeImage();
			}, 2000);
		};

		var stopSlideShow = function () {
			clearInterval(slideShow);
		};

		$(function () {
			$("#btn-change").click(function () {
				changeImage();
			});

			$("#btn-slideshow").click(function () {
				var $this = $(this);
				if ($this.text() === '슬라이드쇼 시작') {
					startSlideShow();
					$this.text('슬라이드쇼 정지');
				} else {
					stopSlideShow();
					$this.text('슬라이드쇼 시작');
				}
			});
		});