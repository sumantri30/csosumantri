const sideNav = document.querySelectorAll(".sidenav");
M.SideNav.init(sideNav);

const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 600,
  interval: 3000,
});

const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

const materialbox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialbox);
