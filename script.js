
function introanimation(){
    gsap.set('.section',{
        display: 'none'
    })
    gsap.set('.section1',{
        display: 'none'
    })
    gsap.set('.page7',{
        display: 'none'
    })
    gsap.set('nav menu',{
        opacity: 0,        
    })

    gsap.set('.hero-footer',{
        display: 'none',
        opacity:0,
    })
    gsap.set('.eye-h1 .img',{
        width: 0,
    })    
    gsap.set('.page1-clone',{
        scale: .8,
        borderRadius: '10px'
    })


    var tl = gsap.timeline()
    
    tl.from('.intro .back-cover-1',{
        left: '-100%',
        duration: 2,
        ease: "expo.out"
    },'anime')

    tl.from('.intro .back-cover-2',{
        left: '100%',
        duration: 2,
        ease: "expo.out"
    },'anime')


    tl.to('.page1-clone',{
        scale: 1,
        borderRadius: '0px',
        duration: .6,
    })

    tl.to('.hero-footer2',{
        display: 'none',
        opacity: 0,
        duration: .5,
    })
    
    tl.to('nav menu',{
        opacity: 1,
        duration: .3,
    },'anime2')

    tl.to('.hero-footer',{
        display: 'flex',
        opacity:1,
        duration: .3
    },'anime2')

    tl.to('.page1-clone',{
        display: 'none'
    },"anime3")

    tl.to('.section',{
        display: 'flex'
    },"anime3")
    tl.to('.section1',{
        display: 'block'
    },"anime3")

    if (window.innerWidth > 700) {
        tl.to('.page7',{
            display: 'flex'
        })
        tl.to('.eye-h1 .img',{
            width: '10vw',
            opacity:1,
            delay: 1,
        })
    }
    else{
        tl.to('.eye-h1 .img',{
            width: '18vw',
            opacity:1,
            delay: 1,
        })
    }

    let counter = 0
    
    let intervalId = setInterval(() => {
        if (counter <= 99) {
            counter++;
            document.querySelector('.hero-footer2 .loading-persentage')
            .innerHTML = counter + "%";
        }
        else{
            clearInterval(intervalId)
        }
    }, 10);

}

function page4animations(){
    window.addEventListener('mousemove', function(e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
    
        let deltaX = mouseX - window.innerWidth / 2;
        let deltaY = mouseY - window.innerHeight / 2;
    
        var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    
        document.querySelectorAll('.eye-ball .line')
            .forEach(elem => {
                elem.style.transform = `rotate(${angle}deg)`;
            });
    });
    
    
    document.querySelectorAll('.page4')
        .forEach(elem => {
            elem.addEventListener('mousemove', function(dets) {
                gsap.to(this.querySelectorAll('.eye-ball'), {
                    x: gsap.utils.mapRange(0, window.innerWidth, -10, 10, dets.clientX),
                    y: gsap.utils.mapRange(0, window.innerHeight, -10, 10, dets.clientY),
                    ease: 'power4.easeOut',
                    duration: 0.5,
                });
            });
        });
    
        document.querySelector('.video-con')
        .addEventListener('mousemove', function(dets) {
            gsap.to(this.querySelector('.curser'), {
                x: dets.clientX,
                y: dets.clientY,
                duration: 0.5,
            });
        });
     
    
    let counter = 0
    
    document.querySelectorAll('.eye-ball')
    .forEach(elem =>{
        elem.addEventListener('click', function(){
            document.querySelector('.video-con').style.display = 'block'
        })
    })
    document.querySelector('.video-con')
    .addEventListener('click', function(){
        document.querySelector('.video-con').style.display = 'none'
    })
    
}

function projectanimations(){
    gsap.set('.project-name span',{y:100})

    document.querySelectorAll('.project')
    .forEach(elem => {
        elem.addEventListener('mousemove',function(){
            const name = elem.getAttribute('data-name');
            if (name === 'FYDE') {
                gsap.to('#FYDE span',{
                    y: 0,
                    stagger: .01,
                    ease: 'power4.easeOut',
                    duration: 0.3,
                })
            }
            if (name === 'VISE') {
                gsap.to('#VISE span',{
                    y: 0,
                    stagger: .01,
                    ease: 'power4.easeOut',
                    duration: 0.3,
                })
            }
            if (name === 'TRAWA') {
                gsap.to('#TRAWA span',{
                    y: 0,
                    stagger: .01,
                    ease: 'power4.easeOut',
                    duration: 0.3,
                })
            }
            if (name === 'PREMIUMBLEND') {
                gsap.to('#PREMIUMBLEND span',{
                    y: 0,
                    stagger: .01,
                    ease: 'power4.easeOut',
                    duration: 0.3,
                })
            }
        })
        elem.addEventListener('mouseleave',function(){
            const name = elem.getAttribute('data-name');
            if (name === 'FYDE') {
                gsap.to('#FYDE span',{
                    y: 100,
                    stagger: .01,
                    ease: 'power4.easeOut',
                    duration: 0.3,
                })
            }
            if (name === 'VISE') {
                gsap.to('#VISE span',{
                    y: 100,
                    stagger: .01,
                    ease: 'power4.easeOut',
                    duration: 0.3,
                })
            }
            if (name === 'TRAWA') {
                gsap.to('#TRAWA span',{
                    y: 100,
                    stagger: .01,
                    ease: 'power4.easeOut',
                    duration: 0.3,
                })
            }
            if (name === 'PREMIUMBLEND') {
                gsap.to('#PREMIUMBLEND span',{
                    y: 100,
                    stagger: .01,
                    ease: 'power4.easeOut',
                    duration: 0.3,
                })
            }
        })

    });

}




introanimation()
projectanimations()
page4animations()
