const checker1 = document.querySelector('#checker1')
const checker2 = document.querySelector('#checker2')
const checker3 = document.querySelector('#checker3')
const checker4 = document.querySelector('#checker4')
 

/* функции открывающие скрытые текста + индикаторы */
checker1.onclick = () => {
    const redDot = document.querySelector('#red-dot1');
    const openArrow = document.querySelector('#open-arrow1');
    const shadowText = document.querySelector('#shadow-text1');
    const color1 = document.querySelector('#rect1');
    const color2 = document.querySelector('#rect2');
    const color3 = document.querySelector('#rect3');

    
    checker1.checked ? openText() : closeText();

    function openText() {
        redDot.style.opacity = '1';
        redDot.style.visibility = 'initial';
        color1.setAttribute ('fill', 'red' );
        color2.setAttribute ('fill', 'red' );
        color3.setAttribute ('fill', 'red' );

        openArrow.style.rotate = '0deg';

        shadowText.style.height = '452px';
    }

    function closeText() {
        redDot.style.opacity = '0';
        redDot.style.visibility = 'hidden';
        color1.setAttribute ('fill', '#5F5F5F' );
        color2.setAttribute ('fill', '#5F5F5F' );
        color3.setAttribute ('fill', '#5F5F5F' );

        openArrow.style.rotate = '-90deg';

        shadowText.style.height = '0';
    }
}

checker2.onclick = () => {
    const redDot = document.querySelector('#redDot2');
    const openArrow = document.querySelector('#open-arrow2');
    const shadowText = document.querySelector('#shadow-text2');
    const color1 = document.querySelector('#color21');
    const color2 = document.querySelector('#color22');
    const color3 = document.querySelector('#color23');

    
    checker2.checked ? openText() : closeText();

    function openText() {
        redDot.style.opacity = '1';
        redDot.style.visibility = 'initial';
        color1.setAttribute ('fill', 'red' );
        color2.setAttribute ('fill', 'red' );
        color3.setAttribute ('fill', 'red' );

        openArrow.style.rotate = '0deg';

        shadowText.style.height = '';

    }

    function closeText() {
        redDot.style.opacity = '0';
        redDot.style.visibility = 'hidden';
        color1.setAttribute ('fill', '#5F5F5F' );
        color2.setAttribute ('fill', '#5F5F5F' );
        color3.setAttribute ('fill', '#5F5F5F' );

        openArrow.style.rotate = '-90deg';

        shadowText.style.height = '0';
    }
}

checker3.onclick = () => {
    const redDot = document.querySelector('#redDot3');
    const openArrow = document.querySelector('#open-arrow3');
    const shadowText = document.querySelector('#shadow-text3');
    const color1 = document.querySelector('#color31');
    const color2 = document.querySelector('#color32');
    const color3 = document.querySelector('#color33');

    
    checker3.checked ? openText() : closeText();

    function openText() {
        redDot.style.opacity = '1';
        redDot.style.visibility = 'initial';
        color1.setAttribute ('fill', 'red' );
        color2.setAttribute ('fill', 'red' );
        color3.setAttribute ('fill', 'red' );

        openArrow.style.rotate = '0deg';

        shadowText.style.height = '';

    }

    function closeText() {
        redDot.style.opacity = '0';
        redDot.style.visibility = 'hidden';
        color1.setAttribute ('fill', '#5F5F5F' );
        color2.setAttribute ('fill', '#5F5F5F' );
        color3.setAttribute ('fill', '#5F5F5F' );

        openArrow.style.rotate = '-90deg';

        shadowText.style.height = '0';
    }
}

checker4.onclick = () => {
    const redDot = document.querySelector('#redDot4');
    const openArrow = document.querySelector('#open-arrow4');
    const shadowText = document.querySelector('#shadow-text4');
    const color1 = document.querySelector('#color41');
    const color2 = document.querySelector('#color42');
    const color3 = document.querySelector('#color43');

    
    checker4.checked ? openText() : closeText();

    function openText() {
        redDot.style.opacity = '1';
        redDot.style.visibility = 'initial';
        color1.setAttribute ('fill', 'red' );
        color2.setAttribute ('fill', 'red' );
        color3.setAttribute ('fill', 'red' );

        openArrow.style.rotate = '0deg';

        shadowText.style.height = '';

    }

    function closeText() {
        redDot.style.opacity = '0';
        redDot.style.visibility = 'hidden';
        color1.setAttribute ('fill', '#5F5F5F' );
        color2.setAttribute ('fill', '#5F5F5F' );
        color3.setAttribute ('fill', '#5F5F5F' );

        openArrow.style.rotate = '-90deg';

        shadowText.style.height = '0';
    }
}



/* Горизонтальная прокрутка для карусели с помощью мыши. */
document.querySelector(".carousel").addEventListener('wheel', function(event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {

/* modifier влияет на скорость прокрутки! Чем выше значение тем выше скорость */
      var modifier = 0.3; 
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
      var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
      var modifier = this.clientHeight;
    }
    if (event.deltaY != 0) {
      this.scrollLeft += modifier * event.deltaY;
      event.preventDefault();
    }
  });


/* Скролл функция */

window.onscroll = () => {
    let scrolled = window.pageYOffset;
    let target = -3400

    if (scrolled < 3389) {
        stepOneH.style.display = 'none';
        stepOneC.style.display = 'block';
        stepOneD.style.display = 'none';
    } 
    
    if (3389 < scrolled) {
        stepOneH.style.display = 'block';
    } 
    
    if (scrolled > 3400) {
        myBarRed.style.height = String(target + scrolled);
        stepOneC.style.display = 'none';
        stepOneH.style.display = 'none';
        stepOneD.style.display = 'block';
    } else if (scrolled < 3400) {
        myBarRed.style.height = '';
    }

    if (scrolled > 3590) {
        stepTwoC.style.display = 'none';
        stepTwoD.style.display = 'block';
    }

    if (scrolled < 3590) {
        stepTwoC.style.display = 'block';
        stepTwoD.style.display = 'none';
    }

    if (scrolled < 3750) {
        stepThreeC.style.display = 'block';
        stepThreeD.style.display = 'none';
    }

    if (scrolled > 3750) {
        stepThreeC.style.display = 'none';
        stepThreeD.style.display = 'block';
    }

    if (scrolled > 3920) {
        stepFourC.style.display = 'none';
        stepFourD.style.display = 'block';
    }

    if (scrolled < 3920) {
        stepFourC.style.display = 'block';
        stepFourD.style.display = 'none';
    }

    if (scrolled > 4090) {
        stepFiveC.style.display = 'none';
        stepFiveD.style.display = 'block';
        boatBuilded.style.fill = 'red';
    }

    if (scrolled < 4090) {
        stepFiveC.style.display = 'block';
        stepFiveD.style.display = 'none';
        boatBuilded.style.fill = '#DEDEDE';
    }

    if (scrolled > 4270) {
        stepSixC.style.display = 'none';
        stepSixD.style.display = 'block';
    }

    if (scrolled < 4270) {
        stepSixC.style.display = 'block';
        stepSixD.style.display = 'none';
    }

    console.log(scrolled)
};


const callBack = (open, open2, close) => {
    open.addEventListener('click', (e) => {
        e.target ? e.preventDefault(): '' ;

        close.style.opacity = '0.4';
        close.style.visibility = 'initial';
        callBackModal.style.opacity = '1';
        callBackModal.style.visibility = 'initial';
        document.body.style.overflow = 'hidden';
    });

    open2.addEventListener('click', (e) => {
        e.target ? e.preventDefault(): '' ;

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        function delay() {
            close.style.opacity = '0.4';
            close.style.visibility = 'initial';
            callBackModal.style.opacity = '1';
            callBackModal.style.visibility = 'initial';
            document.body.style.overflow = 'hidden';
        }
        setTimeout (delay, 650);

    });

    close.addEventListener('click', (e) => {
        if (e.target === close) {
            close.style.opacity = '0';
            close.style.visibility = 'hidden';
            callBackModal.style.opacity = '0';
            callBackModal.style.visibility = 'hidden';
            document.body.style.overflow = 'initial';
        }
   });
};

const close = document.querySelector('.popup-modal');
const openModalBtn = document.querySelector('.call');
const openModalBtn2 = document.querySelector('.call2');

callBack(openModalBtn, openModalBtn2, close);

