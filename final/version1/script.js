window.addEventListener('load', function () {
    'use strict';
    console.log("reading js");

   
    const openBtns = document.querySelectorAll('.open');
    console.log(openBtns);
    const closeBtns = document.querySelectorAll('.close');

    const sliderContent = document.querySelector('.a');
    const sliderWidth = sliderContent.offsetWidth;
    const cloned = sliderContent.cloneNode(true);
    cloned.className = "b";
    document.querySelector('.slider').appendChild(cloned);
    let root = document.querySelector(':root');
    const endLeftPos = `-${sliderWidth}px`;



    //slide effect/
        
    root.style.setProperty('--sliderwidth', endLeftPos);
    console.log(getComputedStyle(root).getPropertyValue('--sliderwidth'));
    document.querySelector('.slider').classList.add("animate");

    document.querySelector('.slider').addEventListener('mouseover', function(){
        document.querySelector('.animate').style.animationPlayState = 'paused';
    });

    document.querySelector('.slider').addEventListener('mouseout', function(){
        document.querySelector('.animate').style.animationPlayState = 'running';
    });

    

    for (const eachBtn of openBtns) {
        eachBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const thisBtn = this.id;
            console.log(thisBtn);
            document.getElementById(`ol-${thisBtn}`).className = `overlay showing`;
            // if (document.getElementById(`ol-${thisBtn}`).classList.contains('overlay')) {
            //     document.getElementById(`ol-${thisBtn}`).className = `overlay showing`;
            // }
        });
    }

    for (const eachBtn of closeBtns) {
        eachBtn.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.querySelector('.showing').className = 'overlay hidden';
        }
    });

});