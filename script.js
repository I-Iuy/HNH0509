let isFirefox = typeof InstallTrigger !== 'undefined';
const words = "Hoàng Ngọc Hà";

let ANGLE = 360;
const ANIMATION_DURATION = 4000;

const animation = () => {
  ANGLE -= 1; // Incremento do ângulo
  document.querySelectorAll(".spiral *").forEach((el, i) => {
    
    const translateY = Math.sin(ANGLE * (Math.PI / 120)) * 100;
    const scale = Math.cos(ANGLE * (Math.PI / 120)) * 0.5 + 0.5;
    
    const offset = parseInt(el.dataset.offset);
    const delay = i * (ANIMATION_DURATION / 16) - offset;

    setTimeout(() => {
      el.style.transform = `translateY(${translateY}px) scale(${scale})`;
    }, delay);
  });

  requestAnimationFrame(animation);
};

const characters = words.split("").forEach((char, i) => {
  const createElement = (offset) => {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.setAttribute("data-offset", offset);
    div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;
    return div;
  };

  document.querySelector("#spiral").append(createElement(0));
  document.querySelector("#spiral2").append(createElement((isFirefox ? 1 : -1) * (ANIMATION_DURATION / 2)));
});

// Chuyển trang set 5s
setTimeout(() => {
  const destination = localStorage.getItem('destination') || 'intro'; 
  localStorage.removeItem('destination'); 

  if (destination === 'intro') {
    window.location.href = "Intro.content/intro.html"; 
  } else if (destination === 'main') {
    window.location.href = "Main.content/main.html";
  }
}, 8000);
