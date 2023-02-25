const skillBars = document.querySelectorAll('.fade-in');


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