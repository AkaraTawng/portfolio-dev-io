const skillBars = document.querySelectorAll('.fade-in');
const technologyFilterTags = document.querySelectorAll('#technology-filter-tags-container ul li button');
const technologyFilterAllTag = document.querySelector('#technology-all-tag');
const typeFilterTags = document.querySelectorAll('#type-filter-tags-container button');
const typeFilterAllTag = document.querySelector('#type-all-tag');
const technologyFilterButtons = document.querySelectorAll('#technology-filter-tags-container button');
const typeFilterButtons = document.querySelectorAll('#type-filter-tags-container button');

let projectItems = document.querySelectorAll('.project-item-flex-container');
let projectItemsTechnologyFilterTags = document.querySelectorAll(".project-item-filter-tags-list.technology");

let projectItemsTypeFilterTags = document.querySelectorAll(".project-item-filter-tags-list.type");
let tagCounter = document.querySelector('#tag-counter');



/* technology data attribute array converter */

 
/* project counter */
let projectsArray = [];

 projectItems.forEach(project => {
    // projectArray.push(project);
    tagCounter.innerHTML = `(${projectsArray.length})`;
 });

typeFilterButtons.forEach(button => {
    if(typeFilterAllTag.classList.contains('active')) { 
        projectItems.forEach(project => {
            project.style.display = 'flex';
        }) 

       
        
    }


    button.addEventListener("click", (event) => {
        /* check of project (item) is in projectsArray - show if is, hide is not. Run on each button clik before adding or removing any more projects. */
        /* event.target = the clicked button */
       
        
            /* add projects to array when tag clicked */
            if(!button.classList.contains('active') && button === event.target) {
                projectItems.forEach(project => {
                    if(project.dataset.typeFilterTags === button.innerHTML){
                        projectsArray.push(project.dataset.typeFilterTags);

                        /* display project when matching tag clicked */
                        project.style.display = 'flex'
                    }
                })
                // console.log(projectsArray);
            }

            /* remove project from array when tag is un-clicked - active class is removed */
            else if(button.classList.contains('active') && button === event.target) {
               
                projectItems.forEach(project => {
                    if(project.dataset.typeFilterTags === button.innerHTML){
                        let projectToRemove = projectsArray.indexOf(project.dataset.typeFilterTags)
                        if(projectToRemove !== -1) {
                            /* remove project from array when matching tag selected */
                            projectsArray.splice(projectToRemove, 1);

                            /* hide project when matching tag unselected */
                            project.style.display = 'none'
                        }
                    }
                })
                // console.log(projectsArray);
            }
    })
})


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
technologyFilterTags.forEach(technologyFilterTag => {
    technologyFilterTag.onclick = function() {
        if(technologyFilterAllTag.classList.contains('active')){
            technologyFilterAllTag.classList.remove('active')
            technologyFilterTag.classList.toggle('active')
        }
           
        else if (!technologyFilterAllTag.classList.contains('active') && technologyFilterTag.innerHTML === technologyFilterAllTag.innerHTML) {
            technologyFilterTags.forEach(tag => {
                tag.classList.remove('active')
            });

            technologyFilterAllTag.classList.add('active');
        }
        
        else if (!technologyFilterAllTag.classList.contains('active')) {
            technologyFilterTag.classList.toggle('active')
        }; 
    };
});

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
