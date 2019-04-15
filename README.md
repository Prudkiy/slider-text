Слайдер, версия 1.1

Слайдер должен лежать в оболчке, так же укажите индификатор в корне оболчки.

МАКЕТ HTML ( не изменяйте название класов )

<div class="sliderText" id="slider1">

        <div class="sliderText__wrapSliders">

                <div class="sliderText__block">
                   
                </div>

                <div class="sliderText__block">
                    
                </div>

        </div>

        <div class="sliderText__wrapBtn">
        
            <div class="sliderText__wrapBtn sliderText__wrapBtn--prev">prev</div>
            <div class="sliderText__wrapBtn sliderText__wrapBtn--next">next</div>
            
        </div>
       
</div>


СТИЛИ

Стили написаны с использованием sass. Укажите в переменных ширину и высоту блока слейдера, а так же высоту кнопок навигации

СКРИПТЫ

В коде javascript при создании обьекта "слайдер" укажите в параметре ширину слайдера и его индификатор

const slideTop = new SliderText (400, 'slider1');

/* ПРИЯТНОГО ИСПОЛЬЗОВАНИЯ */


