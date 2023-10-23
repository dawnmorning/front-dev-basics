var imageViewer = {
    // 이미지 배열
    _images: [
        "국화:Chrysanthemum.jpg",
        "사막:Desert.jpg",
        "수국:Hydrangeas.jpg",
        "해파리:Jellyfish.jpg",
        "코알라:Koala.jpg",
        "등대:Lighthouse.jpg",
        "펭귄:Penguins.jpg",
        "툴립:Tulips.jpg"
    ],

    // 이미지 정보를 선택
    chooseInfo: function () {
        var index = Math.floor(Math.random() * this._images.length);
        var info = this._images[index].split(":");
        return info;
    },

    // 이미지 변경
    changeImage: function () {
        var info = this.chooseInfo();
        var imageName = info[1];
        $('.image-viewer img').attr('src', '/ch07/images/' + imageName);
        console.log(info[1]);
    },

    // 슬라이드쇼를 위한 변수
    slideShow: null,

    // 슬라이드쇼 시작
    startSlideShow: function () {
        var self = this; // 현재 객체의 참조를 저장
        this.slideShow = setInterval(function () {
            self.changeImage();
        }, 2000);
    },

    stopSlideShow: function () {
        clearInterval(this.slideShow);
    },

    // 초기화 함수
    init: function () {
        var self = this; // 현재 객체의 참조를 저장

        // 버튼 클릭 이벤트
        $("#btn-change").click(function () {
            self.changeImage(); // 현재 객체의 메소드를 호출
        });

        $("#btn-slideshow").click(function () {
            var $this = $(this);
            if ($this.text() === '슬라이드쇼 시작') {
                self.startSlideShow();
                $this.text('슬라이드쇼 정지');
            } else {
                self.stopSlideShow();
                $this.text('슬라이드쇼 시작');
            }
        });
    }
}

$(function () {
    imageViewer.init();
});
