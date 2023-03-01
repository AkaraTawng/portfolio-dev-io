const skillBars = document.querySelectorAll('.fade-in');
const technologyFilterTags = document.querySelectorAll('#technology-filter-tags-container ul li button');
const technologyFilterAllTag = document.querySelector('#technology-all-tag');
const typeFilterTags = document.querySelectorAll('#type-filter-tags-container ul li button');
const typeFilterAllTag = document.querySelector('#type-all-tag');

const skillBarsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
    });
}, {
    // rootMargin: '400px'
});

skillBars.forEach(skillBar => {
    skillBarsObserver.observe(skillBar);
});

//add & remove active class for technology filter tags
technologyFilterTags.forEach(technologyFilterTag => {
    console.log(technologyFilterTag)
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
    console.log(typeFilterTag)
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
