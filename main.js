{
  const el = document.getElementById("background-image");
  const windowHeight = window.screen.height;
  const elHeight = el.offsetHeight;

  if (elHeight > windowHeight) {
    const walk = elHeight - windowHeight;

    gsap.to(el, {
      y: -walk,
      duration: walk / 20,
      onComplete: () => {
        console.log("complete");
      },
      ease: "none",
      repeat: -1,
      yoyo: true
    });
  }
}
