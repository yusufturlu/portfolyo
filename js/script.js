document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Hesap Makinesi Programları',
            description: 'Çeşitli program dilleri kulanarak oluşturduğum hesap makineleri çalışmaları',
            technologies: 'Python, Tkinter, Javascript',
            link: 'https://github.com/yusufturlu/calculator-Apps'
        }
        ,
        {
            title : 'Portfolyo' ,
            description : 'Kendi adıma yaptığım bir portfolyo çalışması' ,
            technologies : 'HTML, CSS, Javascript' ,
            link : 'https://github.com/yusufturlu/portfolyo'
        } 
        ,
        {
            title : 'Stok Takip Uygulaması' ,
            description : 'PHP ile yazmış olduğum bir stok takip uygulaması' ,
            technologies : 'HTML, CSS, PHP, SQL, phpMyAdmin' ,
            link : 'https://github.com/yusufturlu/web-stock-tracking-app '
        }
        ,
        {
            title : 'API ile Hava Durumu Uygulaması' ,
            description : 'Javascript ile bir API çekerek yazmış olduğum bir Hava Durumu Uygulaması' ,
            technologies : 'HTML, CSS, Javascript' ,
            link : 'https://github.com/yusufturlu/API-Weather'
        }
        ,
        {
            title:'Javascript Ders Notları',
            description:'Javascript ders notları ve  uygulamaları içeren bir depo',
            technologies:'HTML, CSS, Javascript',
            link:'https://github.com/yusufturlu/Js-Notes' 
        }
        ,
        {
            title:'İleri İnternet Programcılığı Dersi Notları',
            description:'İstanbul Gelişim Üniversitesi İleri İnternet Programcılığı dersi notları ve uygulamaları içeren bir depo',
            technologies:'PHP,phpMyAdmin,SQL',
            link:'https://github.com/yusufturlu/ITP-Advanced-Internet-Programming-Notes-'
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


