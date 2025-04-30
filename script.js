let currentPDF = null;

function togglePDF(certType) {
  const pdfViewer = document.getElementById('pdfViewer');
  const iframe = document.getElementById('pdfFrame');
  
  const certPaths = {
    'Ducat': 'assets/Certificates/Harsh Aggarwal_Ducat.pdf',
    'IJIRT Confirmation': 'assets/Certificates/IJIRT Confirmation Letter.pdf',
    'IJIRT Certificate': 'assets/Certificates/IJIRT Certificates.pdf'
  };

  showLoader();

  if (currentPDF === certType) {
    pdfViewer.style.display = 'none';
    iframe.src = '';
    currentPDF = null;
  } else {
    iframe.src = certPaths[certType];
    pdfViewer.style.display = 'block';
    currentPDF = certType;

    iframe.onload = function() {
      hideLoader();
    };
  }
}

function showLoader() {
  document.querySelector('.loading-spinner').style.display = 'block';
}

function hideLoader() {
  document.querySelector('.loading-spinner').style.display = 'none';
}

document.querySelector('.pulse-button').addEventListener('click', function() {
  showLoader();

  setTimeout(function() {
    hideLoader();
  }, 3000);
});

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 250,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "shape": {
      "type": "polygon",
      "polygon": {
        "nb_sides": 6
      },
      "stroke": {
        "width": 0,
        "color": "#4B8BBE"
      }
    },
    "color": {
      "value": ["#4B8BBE", "#FFD43B"],
      "animation": {
        "enable": true,
        "speed": 1
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0.3
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#4B8BBE",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "background": {
    "color": "#f9f9f9",
    "image": "",
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    }
  },
  "retina_detect": true
});


document.addEventListener("DOMContentLoaded", function () {
  const texts = ["Harsh Aggarwal ", "Python Developer ", "AI Enthusiast ", "Tech Explorer "];
  const typingElement = document.getElementById("typing-text");
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let pause = 2000;

  function type() {
    const currentText = texts[index];

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
      typingElement.textContent = currentText.substring(0, charIndex++);
    }
    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(function() {
        isDeleting = true;
        type();
      }, pause);
    } else if (isDeleting && charIndex === 0) {
      index = (index + 1) % texts.length;
      isDeleting = false;
      setTimeout(type, 400);
    } else {
      setTimeout(type, typingSpeed);
    }
  }

  type();
});
