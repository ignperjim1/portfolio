
// Custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => { cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; });

// Typing effect
const homeTitle = document.getElementById('home-title');
const text = "Welcome to My Portfolio";
let i = 0;
function type() { if(i < text.length) { homeTitle.textContent += text.charAt(i); i++; setTimeout(type, 100); } }
type();

// Intersection Observer for fade-in
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      const children = entry.target.querySelectorAll('p, .portfolio-item, h1');
      children.forEach((child,i)=>{ child.style.transitionDelay = `${i*0.2}s`; child.style.opacity=1; child.style.transform='translateY(0)'; });
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
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  circles.forEach(c => {
    const speed = parseFloat(c.dataset.speed);
    c.style.transform = `translate(${scrollTop*speed + parseFloat(c.dataset.offsetX)}px, ${scrollTop*speed + parseFloat(c.dataset.offsetY)}px)`;
  });
  sections.forEach((section,index) => {
    section.style.transform=`translateY(${Math.sin(scrollTop*0.002+index)*10}px) rotateX(${Math.sin(scrollTop*0.002+index)*2}deg)`;
  });
});
