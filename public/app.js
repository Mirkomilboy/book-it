// =============== live chat open on click let's talk btn ===============
const letsTalk = document.querySelector(".letsTalk");
const liveChat = document.querySelector(".liveChat");
const closeLiveChat = document.querySelector(".closeLiveChat");

if(letsTalk) {
  letsTalk.addEventListener('click', function() {
    liveChat.classList.toggle('hidden');
    letsTalk.classList.toggle('hidden');
  });
}

if(closeLiveChat) {
  closeLiveChat.addEventListener('click', function() {
    liveChat.classList.toggle('hidden');
    letsTalk.classList.toggle('hidden');
  });
}

// =============== menu function on mobile ===============
const mobileMenu = document.querySelector('.mobileMenu');
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');
const mainLayout = document.querySelector('main');

if(menuBtn) {
  menuBtn.addEventListener('click', e => {
    mobileMenu.classList.toggle('!h-96')
    mainLayout.classList.toggle('pt-96')
  });
}


// =============== changing bg of nav on scroll ===============
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  document.querySelectorAll('.nav').forEach(function(element) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      element.style.cssText = "background: #F3F4FF; box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.3)";
      menuBtn.classList.add('!text-black')
    } else {
      element.style.cssText = "background: none; box-shadow: none";
      menuBtn.classList.remove('!text-black')
    }
  })
};


// =============== academy page tab ===============
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  if(tab) {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    });
  }
});

// =============== back to bop link ===============
const form1 = document.querySelector('.form1');
const form2 = document.querySelector('.form2');
const form3 = document.querySelector('.form3');
const form4 = document.querySelector('.form4');

const next1 = document.querySelector('.next1');
const next2 = document.querySelector('.next2');
const next3 = document.querySelector('.next3');

next1.addEventListener('click', function() {
  form1.classList.toggle('hidden');
  form2.classList.toggle('hidden');
  console.log('clicked');
})

next2.addEventListener('click', function() {
  form2.classList.toggle('hidden');
  form3.classList.toggle('hidden');
})

next3.addEventListener('click', function() {
  form3.classList.toggle('hidden');
  form4.classList.toggle('hidden');
})



// =============== back to bop link ===============
const toTopBtn = document.querySelector(".toTopBtn");

if(toTopBtn) {
  toTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}


// =============== owl carousel ===============
// carousel of people worked with
$(document).ready(function(){
  $('.owl-one').owlCarousel({
    loop:true,
    autoplay:true,
    dots:false,
    nav:true,
    responsive:{
      0: {
          items: 1.3
      },
      640: {
          items: 2
      },
      1024: {
          items: 3
      },
      1280: {
          items: 4
      },
      1536: {
          items: 5
      },
  }
})
});

// carousel of logos
$(document).ready(function(){
  $('.owl-two').owlCarousel({
    loop:true,
    autoplay:true,
    dots:false,
    margin: 20,
    responsive:{
      0: {
        items: 1.5
      },
      640: {
        items: 3
      },
      768: {
        items: 4
      },
      1024: {
        items: 5
      },
      1280: {
        items: 6
      }
  }
})
});


// ===============  ACCORDION  ==================== //
let buttons = document.querySelectorAll(".accordion");
let g;

buttons.forEach(button => button.addEventListener('click', e => {
  const parent = e.currentTarget.parentElement;
  const panel = parent.nextElementSibling

  parent.classList.toggle('active')

  if (parent.classList.contains('active')){
    button.textContent = "-"
    panel.style.maxHeight = panel.scrollHeight + "px";
  } else {
    button.textContent = "+"
    panel.style.maxHeight = null;
  }
}))


// =============== youtube video pop up on click ===============
var openmodal = document.querySelectorAll('.modal-open')
    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener('click', function(event){
    	event.preventDefault()
    	toggleModal()
      })
    }

    const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', toggleModal)

    var closemodal = document.querySelectorAll('.modal-close')
    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener('click', toggleModal)
    }

    document.onkeydown = function(evt) {
      evt = evt || window.event
      var isEscape = false
      if ("key" in evt) {
    	isEscape = (evt.key === "Escape" || evt.key === "Esc")
      } else {
    	isEscape = (evt.keyCode === 27)
      }
      if (isEscape && document.body.classList.contains('modal-active')) {
    	toggleModal()
      }
    };


    function toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    }