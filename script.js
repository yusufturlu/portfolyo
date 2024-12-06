document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Kahve Sitesi',
            description: 'Kahve hakkında kullanıcıya bilgi veren, türlerini ve hangi kahvenin ne olduğu açıklayan ayrıca kullanıcıya kahve önerisinde bulunan dinamik bir web sitesi çalışması',
            technologies: 'HTML, CSS, Python, Flask, SQLite ',
            link: '#'
        },
        {
            title: 'Hesap Makinesi Programları',
            description: 'Çeşitli program dilleri kullanarak oluşturduğum hesap makineleri çalışmaları',
            technologies: 'Python, Tkinter, C#, Javascript',
            link: 'https://github.com/josepyt/calculatorApps'
        }
        ,
        {
            title : 'Portfolyo' ,
            description : 'Kendi adıma yaptığım bir portfolyo çalışması' ,
            technologies : 'HTML, CSS, Javascript, PHP , SQL , phpMyAdmin' ,
            link : 'https://github.com/josepyt/-portfolio'
        }
    ];

    const projectsContainer = document.querySelector('.project-cards');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p id=tecnology-3><strong>Teknolojiler:</strong> ${project.technologies}</p>
            <a href="${project.link}" target="_blank" class="project-link">GitHub Linki</a>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);


            const scrollDuration = 800; 
            const startPosition = window.pageYOffset;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = easeInOutQuad(timeElapsed, startPosition, distance, scrollDuration);
                window.scrollTo(0, run);
                if (timeElapsed < scrollDuration) requestAnimationFrame(animation);
            }

            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        });
    });
});


document.getElementById('submit').addEventListener('click' , () => {
    document.getElementById('message').style.display = 'block';
}) ;   



const resetText = (text) => {
    setTimeout(() => {
        text.textContent = '';
    }, 3200);
};


document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault()
    const message = document.getElementById('message') ;
    resetText(message)  ;
})


document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      window.scrollBy(0, 100); 
    } else {
      window.scrollBy(0, -100);
    } 
});


const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

scrollTopBtn.onclick = function() {
  document.body.scrollTop = 0; // Safari için yazdım
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE ve Opera için yazdım
};


