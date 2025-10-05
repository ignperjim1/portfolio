
// Custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

// Typing effect
const homeTitle = document.getElementById('home-title');
const text = "Welcome to My Portfolio";
let i = 0;
function type() { 
  if(i < text.length) { 
    homeTitle.textContent += text.charAt(i); 
    i++; 
    setTimeout(type, 100); 
  } 
}
type();

// Intersection Observer for fade-in
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      const children = entry.target.querySelectorAll('p, .portfolio-item, h1');
      children.forEach((child,i)=>{ 
        child.style.transitionDelay = `${i*0.2}s`; 
        child.style.opacity=1; 
        child.style.transform='translateY(0)'; 
      });
    }
  });
}, {threshold:0.2});
sections.forEach(section => observer.observe(section));

// Floating circles with parallax
const circles = [];
for(let i=0;i<25;i++){
  let circle = document.createElement('div');
  circle.classList.add('float-circle');
  circle.style.width=`${Math.random()*50+10}px`;
  circle.style.height=circle.style.width;
  circle.style.left=`${Math.random()*100}vw`;
  circle.style.top=`${Math.random()*100}vh`;
  circle.dataset.speed = 0.1 + Math.random()*0.6;
  circle.dataset.offsetX = Math.random()*50-25;
  circle.dataset.offsetY = Math.random()*50-25;
  document.body.appendChild(circle);
  circles.push(circle);
}

//smoother scroll handler using requestAnimationFrame
let latestKnownScrollY = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  latestKnownScrollY = window.pageYOffset;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateOnScroll(latestKnownScrollY);
      ticking = false;
    })
    ticking = true;
  }
});

function updateOnScroll(scrollTop) {
  circles.forEach(circle => {
    const speed = parseFloat(circle.dataset.speed);
    circle.style.transform = `translate3d(${scrollTop * speed + parseFloat(circle.dataset.offsetX)}px, ${scrollTop * speed + parseFloat(circle.dataset.offsetY)}px, 0)`;
  });
  sections.forEach((section, index) => {
    section.style.transform = `translate3d(0, ${Math.sin(scrollTop * 0.002 + index) * 10}px, 0) rotateX(${Math.sin(scrollTop * 0.002 + index) * 2}deg)`;
  });
}

  
