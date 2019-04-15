/* scripts slider-text 1.1 */

class SliderText {

    constructor (widthSlide, idSlider) {
        
        this.widthSlide = widthSlide;
        this.idSlider = '#' + idSlider;
        this.index = 1;

        this.box = document.querySelector(this.idSlider);
        this.boxSlides = document.querySelector(this.idSlider + ' .sliderText__wrapSliders');
        this.slides = document.querySelectorAll(this.idSlider + ' .sliderText__block');
        this.btnNext = document.querySelector(this.idSlider + ' .sliderText__wrapBtn--next');
        this.btnPrev = document.querySelector(this.idSlider + ' .sliderText__wrapBtn--prev');
        this.size = this.box.clientWidth;

        this.startSlide () // слайдер при старте

    }

    startSlide () { // выполним при запуске слайдера

        let countSlide = 0; 
        const size = this.size;
        const index = this.index;

        this.slides.forEach((item, i)=>{ // т.к. все блоки абосолютны - расположить в линию
            if(i !== 0)countSlide += this.widthSlide;
            item.style.left = countSlide + "px";
        });

        this.boxSlides.style.transform = 'translateX('+ (-index * size) +'px)'; // сдвиним блок из слайдами в лево

        this.btnNext.addEventListener('click', this.next.bind(null, this)); // клик по кнопке вперед
        this.btnPrev.addEventListener('click', this.prev.bind(null, this)) // клик по кнопке назад

    }

    carousel () {

        

    }

    next (box) { // кнопа вперед

        box.boxSlides.style.transition = "transform .3s ease-in-out";
        let max = box.slides.length;
        let size = box.size;
        let index = box.index;

        index >= max -1 ? false : index++; 
        box.index = index;

        box.boxSlides.style.transform = 'translateX('+ (-index * size) +'px)'; // сдвиним блок из слайдами в лево

        box.jump();

    }

    prev (box) { // кнопка назад    
        
        box.boxSlides.style.transition = "transform .3s ease-in-out";
        let size = box.size;
        let index = box.index;

        index <= 0 ? false : index--; 
        box.index = index;

        box.boxSlides.style.transform = 'translateX('+ (-index * size) +'px)'; // сдвиним блок из слайдами в лево

        box.jump();

    }

    jump () { // прижок слайдов

        let index = this.index;
        let size = this.size;
        let max = this.slides.length - 2;

        this.boxSlides.addEventListener('transitionend', () => {
            this.slides[index].id === 'slider1__lastCopy' ? index = 1 : index;
            this.slides[index].id === 'slider1__firstCopy' ? index = max : index;
            this.index = index;
            this.boxSlides.style.transition = 'none'; // отключим плавность перехода
            this.boxSlides.style.transform = 'translateX('+ (-index * size) +'px)'; // сдвинем слайд согласно индексу
        });

    }


}

const slideTop = new SliderText (400, 'slider1');


