gsap.set(".box", {
    opacity: 0,
    // background: "yellow",
});

gsap.to(".box", {
    opacity: 1,
    background: "crimson",
    duration: 0.5,
    x: 200,
    repeat: -1,
    yoyo: true,
})