import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
    //source is entire viewport 
    source: document.scrollingElement,
    //block = y scrolling / inline = x scrolling
    orientation: "block", 
    //range. starting and ending points
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});

//attach scrollTrackingTimeline to scrollTracker 

scrollTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    },
    {
        duration: 1,
        ScrollTimeline: scrollTrackingTimeline,
    }
    );