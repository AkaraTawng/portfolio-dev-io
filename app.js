const skillBars = document.querySelectorAll('.fade-in');
const technologyFilterTags = document.querySelectorAll('#technology-filter-tags-container ul li button');
const technologyFilterAllTag = document.querySelector('#technology-all-tag');

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

//add & remove active class for filter tags
technologyFilterTags.forEach(technologyFilterTag => {
    console.log(technologyFilterTag)
    technologyFilterTag.onclick = function() {
        if(technologyFilterAllTag.classList.contains('active')){
            technologyFilterAllTag.classList.remove('active')
            technologyFilterTag.classList.toggle('active')
        }
           
        else if (!technologyFilterAllTag.classList.contains('active') && technologyFilterTag.innerHTML === technologyFilterAllTag.innerHTML) {
            // console.log(technologyFilterTag, 'me')
            console.log('working')
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
