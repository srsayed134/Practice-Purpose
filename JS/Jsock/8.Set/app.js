gsap.set(".box", {
    opacity: 0,
    background: "red",
})

gsap.to(".box", {
    opacity: 1,
    background: "blue",
    duration: 2,
    repeat: -1,
    y: 100,

})