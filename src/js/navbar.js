document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Object
    const idCounts = {};

    sections.forEach(section => {
        const id = section.getAttribute('id');
        if (idCounts[id] === undefined) {
            idCounts[id] = 0;
        } else {
            idCounts[id]++;
            section.setAttribute('id', id + '-' + idCounts[id]);
        }
    });

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});



// Function
function Menu(e) {
    let list = document.querySelector('ul');
    let nav = document.querySelector('nav');
    // Pengkondisian
    if (e.name === 'menu') {
        e.name = "close";
        list.classList.add('bg-primary'); 
        list.classList.add('top-[80px]');
        list.classList.add('opacity-100');
        list.style.textAlign = "center"; 
        list.style.zIndex = "999"; 
    } else {
        e.name = "menu";
        list.classList.remove('bg-primary'); 
        list.classList.remove('top-[80px]');
        list.classList.remove('opacity-100');
        list.style.textAlign = "center"; 
        list.style.zIndex = "1";
    }
}

