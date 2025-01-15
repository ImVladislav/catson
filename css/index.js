// aos
AOS.init({
    once: true
})

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section_links");
    const navLinks = document.querySelectorAll(".menu-list a");

    window.addEventListener("scroll", () => {
        let current = ""; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 5) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});

// copy address
const copybtns = document.querySelectorAll(".copy_address");

copybtns.forEach(copybtn => {
    
copybtn.addEventListener("click", function () {
    let parent = copybtn.parentElement;
    let textSpan = parent.querySelector('span'); 
    let icon = parent.querySelector('.icon'); 
    let intervalId;
    let addressText = parent.querySelector(".value").getAttribute('data-set');
    textSpan.innerHTML = 'Copied';

    icon.classList.add('active') 
    icon.innerHTML = `
     <i class="bi bi-clipboard-check text-white"></i>
    ` 

    if (intervalId) {
        clearInterval(intervalId);
    }
 

    navigator.clipboard.writeText(addressText);
});
})

//    faq
const faq_btns = document.querySelectorAll('.faq_btn');
faq_btns.forEach(faq_btn => {
    faq_btn.addEventListener('click',() => {
        const faq = faq_btn.parentElement
        faq.classList.toggle('active')
    })
})



// sky

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.15
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.49,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.25,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.333,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.9,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });



  