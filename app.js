// const skillBars = document.querySelectorAll('.fade-in');
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
const bioContainer = document.querySelector('#bio-container');
const nameContactContainer = document.querySelector('#name-contact-container');

const tagCounterHeader = document.querySelector('#project-tags h1');

const filterByHeader = document.querySelector('#project-tags h2');

const typeOfWebsiteContainer = document.querySelector('#type-filter-tags-container');

const evenProjectItems = document.querySelectorAll('.project-even');

const oddProjectItems = document.querySelectorAll('.project-odd');

const experienceItemHeaderInfoAsi = document.querySelector('.experience-item-header-info.asi');

const jobExperienceDescriptionPoints = document.querySelectorAll('.experience-job-description-points-container li');

const hobbyItemsImagesEven = document.querySelectorAll('.hobby-item-image-even');

const hobbyItemImagesOdd = document.querySelector('.hobby-item-image-odd');

const hobbyItemsTextContentEven = document.querySelectorAll('.hobby-item-text-content-even');

const hobbyItemTextContentOdd = document.querySelector('.hobby-item-text-content-odd');

const blogTitleTextContent = document.querySelector('#title-text-flex-container').children;

/* convert blogTitleTextContent HTMLCollection to array */
const blogTitleTextContentArray = Array.from(blogTitleTextContent);

const blogImage = document.querySelectorAll('.blog img');

const blogPostShortDescription = document.querySelectorAll('#blog p');

/* convert blogPostShortDescriptions nodelist to array */
const blogPostShortDescriptionArray = Array.from(blogPostShortDescription);

const workExperienceImagesNodelist = document.querySelectorAll('.experience-flex-container img');

/* convert workExperiencesImagesNodelist to array */
const workExperienceImagesArray = Array.from(workExperienceImagesNodelist);

const experienceItemHeaderInfoNodelist = document.querySelectorAll('.experience-item-header-info');

/* convert experinceItemHeaderInfoNodelist to array */
const experienceItemHeaderInfoArray = Array.from(experienceItemHeaderInfoNodelist);

const skillBarsNodelist = document.querySelectorAll('.skillbars');

/* convert skillsBarsNodelist to array */
const skillBarsArray = Array.from(skillBarsNodelist);

const list = document.querySelectorAll('.list');

/* project counter */
let projectsArray = [];

   /* add click event listener to every type filter button and call showHideProjects function on click */
typeFilterButtons.forEach(button => {
    button.addEventListener("click", (event) => {
       showHideProjects(event);
    });
});

const showAllProjects = () => {
    projectItems.forEach(item => {
        item.style.display = 'flex';
    })
};

const hideAllProjects = () => {
    projectItems.forEach(item => {
        item.style.display = 'none';
        projectsArray = [];
    })
}

/* show all projects by default  on initial page load */
if(typeFilterAllTag.classList.contains('active')){
    showAllProjects();
    
    /* display tag counter as 9 on initial page load */
    tagCounter.innerHTML = '(9)'
}; 

/* show all projects when all type tag clicked */
typeFilterAllTag.addEventListener('click', () => {
    showAllProjects();

    /* display tag counter as 9 when all tag clicked */
    tagCounter.innerHTML = '(9)'; 
});

const showHideProjects = (event) => {
    /* when other type tag selected, and therefore all tag unselected, initially hide all projects except for project(s) matching selected tag */
    if(typeFilterAllTag.classList.contains('active')){
        hideAllProjects()
    }

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


/* animations */

/* fade in up animation on page load */
setTimeout(() => {
    nameContactContainer.style.opacity = 1;
    nameContactContainer.classList.add('animate__fadeInUp')
}, 1000);

setTimeout(() => {
    nameContactContainer.style.opacity = 1;
    bioContainer.classList.add('animate__fadeInUp')
}, 1400);


/* scroll animations */

/* tag counter slide in left */
const tagCounterHeaderObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.classList.add('animate__slideInLeft'); 
        tagCounterHeaderObserver.unobserve(tagCounterHeader);
        };
    });
}, {
    threshold: 0.5
});

tagCounterHeaderObserver.observe(tagCounterHeader);

/* filter by slide in left */
const filterByHeaderObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__slideInLeft');
            entry.target.style.opacity = 1;
            filterByHeaderObserver.unobserve(entry.target);
        };
    });
}, {
    threshold: 0.5
});

filterByHeaderObserver.observe(filterByHeader);


/* type of website filter tags slide in up */
const typeOfWebsiteContainerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__slideInUp');
            entry.target.style.opacity = 1;
            typeOfWebsiteContainerObserver.unobserve(entry.target);
        };
    });
});

typeOfWebsiteContainerObserver.observe(typeOfWebsiteContainer);

/* even project items slide in left */
const evenProjectsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.classList.add('animate__slideInLeft');
            evenProjectsObserver.unobserve(entry.target);
        };  
       
    });
});

evenProjectItems.forEach(item => evenProjectsObserver.observe(item));

/* odd project items slide in right */
const oddProjectsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__slideInRight');
            entry.target.style.opacity = 1;
            oddProjectsObserver.unobserve(entry.target);
        };
      
    });
});

oddProjectItems.forEach(item => oddProjectsObserver.observe(item));

/* asi header info slide in up */
const experienceItemHeaderInfoAsiObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.classList.add('animate__slideInUp')
            experienceItemHeaderInfoAsiObserver.unobserve(experienceItemHeaderInfoAsi);
        };
    });
});

experienceItemHeaderInfoAsiObserver.observe(experienceItemHeaderInfoAsi);

const workExperienceImagesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__flipInX');
            entry.target.style.opacity = 1;
            workExperienceImagesObserver.unobserve(entry);
        };
    });
}, {
    threshold: 0
});

workExperienceImagesArray.forEach(item => workExperienceImagesObserver.observe(item));

/* all job description points slide in up */
const jobExperienceDescriptionPointsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
             entry.target.style.opacity = 1;
            entry.target.classList.add('animate__slideInUp');
           
            
            jobExperienceDescriptionPointsObserver.unobserve(entry.target);
        };
    });
});

jobExperienceDescriptionPoints.forEach(jobDescriptionPoint => jobExperienceDescriptionPointsObserver.observe(jobDescriptionPoint));

/* hobby images even intersection observer*/
const hobbyImagesEvenObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__slideInLeft');
            hobbyImagesEvenObserver.unobserve(entry.target);
        };
    });
});

hobbyItemsImagesEven.forEach(item => hobbyImagesEvenObserver.observe(item));



/* hobby text content even intersection observer*/
const hobbyItemsTextContentEvenObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__flipInX');
        };
    });
});

hobbyItemsTextContentEven.forEach(item => hobbyItemsTextContentEvenObserver.observe(item));


/* hobby images odd intersection observer*/
const hobbyImagesOddObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__slideInRight')
            hobbyImagesOddObserver.unobserve(hobbyItemImagesOdd);
        };
    });
});

hobbyImagesOddObserver.observe(hobbyItemImagesOdd);

/* hobby text content odd intersection observer*/
const hobbyItemTextContentOddObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__flipInX')
            hobbyItemTextContentOddObserver.unobserve(hobbyItemTextContentOdd);
        };
    });
});

hobbyItemTextContentOddObserver.observe(hobbyItemTextContentOdd);



/* blog title text content intersection observer scroll animation */

const blogTitleTextContentObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__fadeInUp')
            blogTitleTextContentObserver.unobserve(blogTitleTextContentArray);
        };
    });
});

blogTitleTextContentArray.forEach(item => blogTitleTextContentObserver.observe(item));

const blogImageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__flipInY');
            entry.target.style.opacity = 1;
            blogImageObserver.unobserve(blogImage);
        };
    });
}, {
    threshold: 0.5
});

blogImage.forEach(item => {
    blogImageObserver.observe(item);
});



const blogPostShortDescriptionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__fadeInUp')
            blogPostShortDescriptionObserver.unobserve(blogPostShortDescriptionArray);
        };
    });
});

blogPostShortDescriptionArray.forEach(item => blogPostShortDescriptionObserver.observe(item));


const experienceItemHeaderInfoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__fadeInUp');
            experienceItemHeaderInfoObserver.unobserve(entry);
        };
    });
});

experienceItemHeaderInfoArray.forEach(item => experienceItemHeaderInfoObserver.observe(item)
);



/* skillbars intersection observer */

const skillBarsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
            if(entry.isIntersecting){
                if(entry.target.classList.contains('html')){
                entry.target.style.width = '80%';
            } else if(entry.target.classList.contains('css')){
                entry.target.style.width = '80%';
            } else if(entry.target.classList.contains('js')){
                entry.target.style.width = '50%';
            } else if(entry.target.classList.contains('react')){
                entry.target.style.width = '50%';
            }
        };
    });
}, {
    threshold: 1
});

skillBarsArray.forEach(item => skillBarsObserver.observe(item));

/* mobile nav active class toggle function */
function activeLink(){
    list.forEach(item => 
        item.classList.remove('active'));
        this.classList.add('active');
}
list.forEach(item => {
    item.addEventListener('click', activeLink);
});









