import "./styles.css";
import anime from "animejs";

anime({
  targets: ".red-ball",
  translateX: 600,
  duration: 2000,
  delay: 1000,
  easing: "linear",
});

anime({
  targets: ".blue-ball",
  translateX: -550,
  duration: 2000,
  delay: 1000,
  easing: "linear",
});
