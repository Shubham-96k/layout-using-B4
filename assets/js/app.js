const cl = console.log;

const toggleicon = document.getElementById("toggle");


const onclick = eve => {
    eve.target.classList.toggle("fa-xmark");
    eve.target.classList.toggle("fa-bars");
}

$('#testimonialsOwlCarousel').owlCarousel({
    loop: true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i> Prev' , 'Next <i class="fa-solid fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('#testimonialsOwlCarousel2').owlCarousel({
    loop: true,
    margin:10,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

toggleicon.addEventListener("click", onclick);