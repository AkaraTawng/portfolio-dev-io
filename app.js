const skillBars = document.querySelectorAll('.fade-in');
const technologyFilterTags = document.querySelectorAll('#technology-filter-tags-container ul li button');
const technologyFilterAllTag = document.querySelector('#technology-all-tag');
const technologyFilterButtons = document.querySelectorAll('#technology-filter-tags-container button');

const typeFilterTags = document.querySelectorAll('#type-filter-tags-container button');
const typeFilterAllTag = document.querySelector('#type-all-tag');
const typeFilterButtons = document.querySelectorAll('#type-filter-tags-container button');

let projectItems = document.querySelectorAll('.project-item-flex-container');
let projectItemsTechnologyFilterTags = document.querySelectorAll(".project-item-filter-tags-list.technology");
let projectItemsTypeFilterTags = document.querySelectorAll(".project-item-filter-tags-list.type");
let tagCounter = document.querySelector('#tag-counter');
 
/* project counter */
let projectsArray = [];

/* add click event listener to every type filter button and call showHideProjects function on click */
typeFilterButtons.forEach(button => {
    button.addEventListener("click", (event) => {
       showHideProjects(event);
    });
});

/** show all projects function
 * add click event listener to type filter all tag
 * on click, add active to all project items
 * */ 
const showAllProjects = () => {

}

typeFilterAllTag.addEventListener('click', (event) => {
    showAllProjects(event);
});

const showHideProjects = (event) => {
    typeFilterButtons.forEach(button => {

        /* match the clicked button to the corresponding button in the typeFilterButtons nodelist */
        if(!button.classList.contains('active') && button === event.target){
            projectItems.forEach(project => {

                /* match the project for the clicked button */
                if(project.dataset.typeFilterTags === event.target.innerHTML) {

                    /* add matching product to projectsArray */
                    projectsArray.push(project.dataset.typeFilterTags)
                    
                    /* display project when matching tag clicked */
                    project.style.display = 'flex';
                };
            });
        }

        else if(button.classList.contains('active') && button === event.target) {
            projectItems.forEach(project => {
                if(project.dataset.typeFilterTags === button.innerHTML){

                    /* remove matching project from projectsArray */
                    let projectToRemove = projectsArray.indexOf(project.dataset.typeFilterTags);

                    if(projectToRemove !== -1){
                        projectsArray.splice(projectToRemove, 1);
                        /* hide project when matching tag unselected */
                        project.style.display = 'none';
                    };
                };
            });
        };
    });

    /* update tag counter to show number of currently visible projects and set default value when no projects are visible */
    projectsArray.length < 1 ? tagCounter.innerHTML = '(0)' : tagCounter.innerHTML = `(${projectsArray.length})`
};

// typeFilterButtons.forEach(button => {
//     button.addEventListener("click", (event) => {
//         projectFilter(event);
//     })
// })

// .getAttribute("data-technology-filter-tags").split(" ");

// console.log(projectItemsTechnologyFilterTags)

// const skillBarsObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         console.log(entry)
//     });
// }, {
//     // rootMargin: '400px'
// });

// skillBars.forEach(skillBar => {
//     skillBarsObserver.observe(skillBar);
// });

//add & remove active class for technology filter tags
// technologyFilterTags.forEach(technologyFilterTag => {
//     technologyFilterTag.onclick = function() {
//         if(technologyFilterAllTag.classList.contains('active')){
//             technologyFilterAllTag.classList.remove('active')
//             technologyFilterTag.classList.toggle('active')
//         }
           
//         else if (!technologyFilterAllTag.classList.contains('active') && technologyFilterTag.innerHTML === technologyFilterAllTag.innerHTML) {
//             technologyFilterTags.forEach(tag => {
//                 tag.classList.remove('active')
//             });

//             technologyFilterAllTag.classList.add('active');
//         }
        
//         else if (!technologyFilterAllTag.classList.contains('active')) {
//             technologyFilterTag.classList.toggle('active')
//         }; 
//     };
// });

//add & remove active class for type filter tags
typeFilterTags.forEach(typeFilterTag => {
    typeFilterTag.onclick = function() {
        if(typeFilterAllTag.classList.contains('active')){
            typeFilterAllTag.classList.remove('active')
            typeFilterTag.classList.toggle('active')
        }
           
        else if (!typeFilterAllTag.classList.contains('active') && typeFilterTag.innerHTML === typeFilterAllTag.innerHTML) {
            typeFilterTags.forEach(tag => {
                tag.classList.remove('active')
            });

            typeFilterAllTag.classList.add('active');
        }
        
        else if (!typeFilterAllTag.classList.contains('active')) {
            typeFilterTag.classList.toggle('active')
        }; 
    };
});




