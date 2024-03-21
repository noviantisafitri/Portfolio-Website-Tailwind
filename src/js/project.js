document.addEventListener('DOMContentLoaded', function () {
    // Array Object
    const projects = [
        { 
          title: "Java Project", 
          description: "This project was developed using the Java programming language.", 
          image: "src/assets/p_pgedung.png" 
        },
        { 
          title: "React Website", 
          description: "This website project utilizes the React Js framework for development.", 
          image: "src/assets/p_Insevent.png" 
        },
        { 
          title: "Online Store", 
          description: "This website project was created using both JavaScript and PHP programming languages.", 
          image: "src/assets/p_onlineStore.jpg" 
        },
        { 
          title: "Java Room Reservation", 
          description: "This project was developed using the Java programming language for room reservation purposes.", 
          image: "src/assets/p_peminjamanR.jpg" 
        }
      ];
      

    const projectsTitle = document.getElementById('projectsTitle');
    projectsTitle.textContent = "PROJECTS";

    const projectsGrid = document.getElementById('projectsGrid');
    // perulangan
    projects.forEach(project => {
        const projectCard = `
            <div class="col">
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="${project.image}" class="w-full h-48 object-cover object-center" alt="${project.title}">
                    <div class="p-4">
                        <h5 class="text-xl font-semibold mb-2">${project.title}</h5>
                        <p class="text-gray-700">${project.description}</p>
                    </div>
                </div>
            </div>
        `;
        projectsGrid.innerHTML += projectCard;
    });
});
