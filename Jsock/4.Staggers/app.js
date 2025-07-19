gsap.set(".box", {
    borderRadius: 0,
})

gsap.to(".box", {
    borderRadius: 100,
    duration:1,
    y: -100,
    ease:"power1",
    repeat: -1,
    yoyo: -1,
    stagger: {
        amount: 2,
        each: 0.5,
        from:0
    }
})