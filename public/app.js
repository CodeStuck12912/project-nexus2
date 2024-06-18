function openNav(){
    'use strict'
    const sidepanel = document.getElementById('mySidePanel');
    if(sidepanel){
        sidepanel.style.left = '0';
    }
    else{
        console.error('error: side panel not found');
    }
}

function closeNav(){
    'use strict'
    const sidepanel = document.getElementById('mySidePanel');
    if(sidepanel){
        sidepanel.style.left = '-320px';
    }
    else{
        console.error('error: side panel not found');
    }
}

function openSearch(){
    'use strict'
    const searchBar = document.getElementById('search-bar');
    if(searchBar){
        searchBar.style.height = '100%';
    }
    else{
        console.error('error: Search bar not found');
    }
}

function closeSearch(){
    'use strict'
    const searchBar = document.getElementById('search-bar');
    if(searchBar){
        searchBar.style.height = '0';
    }
    else{
        console.error('error: Search bar not found');
    }
}

function openSideBar(){
    'use strict'
    const sidebar = document.getElementById('right_side');
    if(sidebar){
        sidebar.style.right = '0';
    }
    else{
        console.error('error: Side bar not found');
    }
}

function closeSideBar(){
    'use strict'
    const sidebar = document.getElementById('right_side');
    if(sidebar){
        sidebar.style.right = '-500px';
    }
    else{
        console.error('error: Side bar not found');
    }
}







function open_img(evt, cityName){
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');

    for(i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }


    tablinks = document.getElementsByClassName('tablinks');
    for(i = 0; i < tablinks.length; i++)
    {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add('active');
}







$('.sliderlogo').slick({
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 5,
    sliderToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            sliderToScroll: 1,
            infinite: true,
            dots: false,

        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            sliderToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 430,
        settings: {
            slidesToShow: 1,
            sliderToScroll: 1,
            infinite: true,
            dots: false,
        }
    }
]
})


$('.team-slider').slick({
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            sliderToScroll: 1,
            infinite: true,
            dots: true,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            sliderToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            sliderToScroll: 1
        }
    }
]
})




document.addEventListener('DOMContentLoaded', function(){
    let accordionButtons = document.querySelectorAll('.accordion-button');
    let acoimg = document.querySelectorAll('.accordion-button img');

    accordionButtons.forEach((button, index) => {
        button.addEventListener('click', function(){
            let collapse = this.parentElement.nextElementSibling;

            accordionButtons.forEach((otherButton, otherIndex) => {
                if(otherButton !== button)
                {
                    let otherCollapse = otherButton.parentElement.nextElementSibling;
                    otherCollapse.style.maxHeight = null;

                    acoimg[otherIndex].src = '/plus.png';
                    acoimg[otherIndex].style.transform = 'rotate(0deg)';
                    otherButton.style.backgroundColor = '#fff';
                }
            });
            if(collapse.style.maxHeight)
            {
                collapse.style.maxHeight = null;
                acoimg[index].src = '/plus.png';
                acoimg[index].style.transform = "rotate(90deg)";
                button.style.backgroundColor = '';
            }
            else
            {
                collapse.style.maxHeight = collapse.scrollHeight + 'px';
                acoimg[index].src = '/menus.png';
                acoimg[index].style.transform = 'rotate(180deg)';
                button.style.backgroundColor = "#c1b0b5";
            }
        })
    })
})




const fom = document.getElementById('footer-form');
const footerMessage = document.getElementById('footer-message');


fom.addEventListener('submit', (event) => {
    event.preventDefault();
    footerMessage.innerHTML = '~ Form Submitted Successfully...';
    footerMessage.style.display = 'flex';
    fom.reset();
    setTimeout(() => {
        footerMessage.style.display = 'none';
    }, 3000);
})



window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById('backToTopBtn').style.display = 'block';
    }
    else{
        document.getElementById('backToTopBtn').style.display = 'none';
    }
}

function scrollToTop(){
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behaviour: 'smooth'
    })
}

document.getElementById('portfolio').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 2240);
})

document.getElementById('about').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 1550.625);
})

document.getElementById('services').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 3255);
})

document.getElementById('pricing').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 7181.25);
})

document.getElementById('team').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 6103.75);
})

document.getElementById('faq').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 8126.25);
})

document.getElementById('blogs').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 8681.875);
})