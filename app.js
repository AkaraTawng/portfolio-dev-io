const skillBars = document.querySelectorAll('.fade-in');
const technologyFilterTags = document.querySelectorAll('#technology-filter-tags-container ul li button');
const technologyFilterAllTag = document.querySelector('#technology-all-tag');
const typeFilterTags = document.querySelectorAll('#type-filter-tags-container ul li button');
const typeFilterAllTag = document.querySelector('#type-all-tag');
const technologyFilterButtons = document.querySelectorAll('#technology-filter-tags-container button');
const typeFilterButtons = document.querySelectorAll('#type-filter-tags-container button');

let projectItems = document.querySelectorAll('.project-item-flex-container');
let projectItemsTechnologyFilterTags = document.querySelectorAll(".project-item-filter-tags-list.technology");

let projectItemsTypeFilterTags = document.querySelectorAll(".project-item-filter-tags-list.type");



/* technology data attribute array converter */

 let buttonArray = [];

 projectItems.forEach(project => {
    buttonArray.push(project);
 });

 console.log(buttonArray.length)
const projectFilter = () => {
    // console.log(typeFilterButtons.innerHTML)
    typeFilterButtons.forEach(button => {
        if(button.classList.contains('active')){
            // console.log(button.innerHTML)
        }
    })
    projectItemsTypeFilterTags.forEach(projectItem => {

        // console.log(projectItem.dataset.typeFilterTags)
    })
}
   
     /* function prints previous value on click, not current value.
        buttonArray doesn't start with All as function is only called on click so when you click the next button it logs the value 
     */
    // // technologyFilterButtons.forEach((button) => {
    //     // console.log(button)
      
    //     // if(technologyFilterAllTag.classList.contains('active')){
    //     //     buttonArray.push(button.innerHTML);
    //     //     console.log(buttonArray)
    //     // } 
    //     // else if(button.classList.contains('active')){
    //     //     if(buttonArray.includes(button.innerHTML)){
    //     //         return;
    //     //     } 
    //         /* add item to array when active class present */
    //         // buttonArray.push(button.innerHTML);
    //         // console.log(buttonArray)

    //         /* remove item from array when active class not present */

    //     }

    //     // if(!button.classList.contains('active')){
    //     //     buttonArray.splice(index, 1);
    //     // }
    // )};

//     projectItemsTechnologyFilterTags.forEach(projectItem => {
//     let projectItemDataFilterTags = projectItem.getAttribute("data-technology-filter-tags").split(" ");
// })
// }

// technologyFilterButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         projectFilter();
//     })
// })

typeFilterButtons.forEach(button => {
    button.addEventListener("click", () => {
        projectFilter();
    })
})

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
