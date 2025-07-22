// gsap.from(".box1", {
//     y: -200,
//     duration: 1,
//     repeat: -1,
//     yoyo: true,
// })

gsap.fromTo(".box2", {
    y: 200,
    opacity: 0
}, {
    opacity: 1,
    y: -200,
    duration: 2,
    repeat: -1,
    ease: "linear",
    yoyo: true,
    borderRadius: 0
})