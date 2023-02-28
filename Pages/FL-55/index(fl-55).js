/* Горизонтальная прокрутка для карусели с помощью мыши. */
document.querySelector(".carousel-first").addEventListener('wheel', function(event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {

/* modifier влияет на скорость прокрутки! Чем выше значение тем выше скорость */
      var modifier = 0.5; 
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


/* Горизонтальная прокрутка для карусели бесцветной с помощью мыши. */
document.querySelector(".carousel-second").addEventListener('wheel', function(event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {

/* modifier влияет на скорость прокрутки! Чем выше значение тем выше скорость */
      var modifier = 0.5; 
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


/* функции открытия и закрытия скрытого текста */

const checker1 = document.querySelector('#checker1')
const checker2 = document.querySelector('#checker2')
const checker3 = document.querySelector('#checker3')
const checker4 = document.querySelector('#checker4')

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

        shadowText.style.height = '462px';
        shadowText.style.marginBottom = '65px';
    }

    function closeText() {
        redDot.style.opacity = '0';
        redDot.style.visibility = 'hidden';
        color1.setAttribute ('fill', '#BABABA' );
        color2.setAttribute ('fill', '#BABABA' );
        color3.setAttribute ('fill', '#BABABA' );

        openArrow.style.rotate = '-90deg';

        shadowText.style.height = '0';
        shadowText.style.marginBottom = '0';
    }
}

checker2.onclick = () => {
    const redDot = document.querySelector('#red-dot2');
    const openArrow = document.querySelector('#open-arrow2');
    const shadowText = document.querySelector('#shadow-text2');
    const color1 = document.querySelector('#rect21');
    const color2 = document.querySelector('#rect22');
    const color3 = document.querySelector('#rect23');

    
    checker2.checked ? openText() : closeText();

    function openText() {
        redDot.style.opacity = '1';
        redDot.style.visibility = 'initial';
        color1.setAttribute ('fill', 'red' );
        color2.setAttribute ('fill', 'red' );
        color3.setAttribute ('fill', 'red' );

        openArrow.style.rotate = '0deg';

        shadowText.style.height = '';
        shadowText.style.marginBottom = '65px';

    }

    function closeText() {
        redDot.style.opacity = '0';
        redDot.style.visibility = 'hidden';
        color1.setAttribute ('fill', '#BABABA' );
        color2.setAttribute ('fill', '#BABABA' );
        color3.setAttribute ('fill', '#BABABA' );

        openArrow.style.rotate = '-90deg';

        shadowText.style.height = '0';
        shadowText.style.marginBottom = '0';
    }
}

checker3.onclick = () => {
    const redDot = document.querySelector('#red-dot3');
    const openArrow = document.querySelector('#open-arrow3');
    const shadowText = document.querySelector('#shadow-text3');
    const color1 = document.querySelector('#rect31');
    const color2 = document.querySelector('#rect32');
    const color3 = document.querySelector('#rect33');

    
    checker3.checked ? openText() : closeText();

    function openText() {
        redDot.style.opacity = '1';
        redDot.style.visibility = 'initial';
        color1.setAttribute ('fill', 'red' );
        color2.setAttribute ('fill', 'red' );
        color3.setAttribute ('fill', 'red' );

        openArrow.style.rotate = '0deg';

        shadowText.style.height = '';
        shadowText.style.marginBottom = '65px';

    }

    function closeText() {
        redDot.style.opacity = '0';
        redDot.style.visibility = 'hidden';
        color1.setAttribute ('fill', '#BABABA' );
        color2.setAttribute ('fill', '#BABABA' );
        color3.setAttribute ('fill', '#BABABA' );

        openArrow.style.rotate = '-90deg';

        shadowText.style.height = '0';
        shadowText.style.marginBottom = '0';
    }
}

checker4.onclick = () => {
    const redDot = document.querySelector('#red-dot4');
    const openArrow = document.querySelector('#open-arrow4');
    const shadowText = document.querySelector('#shadow-text4');
    const color1 = document.querySelector('#rect41');
    const color2 = document.querySelector('#rect42');
    const color3 = document.querySelector('#rect43');

    
    checker4.checked ? openText() : closeText();

    function openText() {
        redDot.style.opacity = '1';
        redDot.style.visibility = 'initial';
        color1.setAttribute ('fill', 'red' );
        color2.setAttribute ('fill', 'red' );
        color3.setAttribute ('fill', 'red' );

        openArrow.style.rotate = '0deg';

        shadowText.style.height = '';
        shadowText.style.marginBottom = '65px';

    }

    function closeText() {
        redDot.style.opacity = '0';
        redDot.style.visibility = 'hidden';
        color2.setAttribute ('fill', '#BABABA' );
        color1.setAttribute ('fill', '#BABABA' );
        color3.setAttribute ('fill', '#BABABA' );

        openArrow.style.rotate = '-90deg';

        shadowText.style.height = '0';
        shadowText.style.marginBottom = '0';
    }
}


// Пролистыватель до "О преимуществах" \\
document.querySelector("#nextPage").addEventListener('click', () => {
    window.scrollTo({
        top: 1110,
        behavior: 'smooth'
    })
});

// Данная функция пролистывает на самый верх, при попытке перейти на текущую страницу.

document.querySelector("#fl55").addEventListener('click', () => {
    window.scrollTo({
        top: 1,
        behavior: 'smooth'
    })
});



// Открытие модального окна при клике на кнопки "Заказать звонок"
const callBack = (open, open2, close) => {
    open.addEventListener('click', (e) => {
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
        pageYOffset < 100 ? delay() : setTimeout(delay, 350);


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
const openModalBtn = document.querySelector('.callMe');
const openModalBtn2 = document.querySelector('.call2');

callBack(openModalBtn, openModalBtn2, close);


//функция увеличения картинок по клику 

const gallery = document.querySelector('.carousel-first');
const gallery2 = document.querySelector('.carousel-second');
const boatImages = document.querySelector('.main-image');

gallery.addEventListener('click', function(e){
    let link = e.target.getAttribute('src');
    const modal = document.querySelector('.bigImage');
    let image = document.querySelector('.openedImg')

    if (e.target.tagName == 'IMG'){
        modal.style.backgroundColor = 'rgba(0, 0, 0, .4)';
        modal.style.visibility = 'initial';
        
        image.setAttribute('src', link);
        image.style.opacity = '1';
    };

    modal.addEventListener('click', (close) => {
        if (close.target != 'IMG') {
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            modal.style.visibility = 'hidden';
            image.style.opacity = '0';
        }
    });
});

gallery2.addEventListener('click', function(e){
    let link = e.target.getAttribute('src');
    const modal = document.querySelector('.bigImage');
    let image = document.querySelector('.openedImg')

    if (e.target.tagName == 'IMG'){
        modal.style.backgroundColor = 'rgba(0, 0, 0, .4)';
        modal.style.visibility = 'initial';
        
        image.setAttribute('src', link);
        image.style.opacity = '1';
    };

    modal.addEventListener('click', (close) => {
        if (close.target != 'IMG') {
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            modal.style.visibility = 'hidden';
            image.style.opacity = '0';
        }
    });
});

boatImages.addEventListener('click', function(e){
    let link = e.target.getAttribute('src');
    const modal = document.querySelector('.bigImage');
    let image = document.querySelector('.openedImg')

    if (e.target.tagName == 'IMG'){
        modal.style.backgroundColor = 'rgba(0, 0, 0, .4)';
        modal.style.visibility = 'initial';
        
        image.setAttribute('src', link);
        image.style.opacity = '1';
    };

    modal.addEventListener('click', (close) => {
        if (close.target != 'IMG') {
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            modal.style.visibility = 'hidden';
            image.style.opacity = '0';
        }
    });
});


// функция смены изображения 

const mainChoice = document.querySelector('.img-line');

mainChoice.addEventListener('mouseover', (e) => {
    let main = document.querySelector('.mainImage');
    let link = e.target.getAttribute('src')
    
    if (e.target.tagName == 'IMG') {
        main.setAttribute('src', link);
    }
    console.log(e.target.tagName)
});

