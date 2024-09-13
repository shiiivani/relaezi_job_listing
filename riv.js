document.addEventListener("DOMContentLoaded", function () {
  const partyPopper = new rive.Rive({
    src: "./assets/animation/Party-popper.riv",
    canvas: document.getElementById("partyPopper"),
    autoplay: true,
    onLoad: () => {
      partyPopper.resizeDrawingSurfaceToCanvas();
    },
  });
});
