'use strict';
// Navigation and enhancements. Core content and links also work without JavaScript.
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menu.hidden = false;
function closeMenu(){menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape' && menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
window.matchMedia('(min-width: 761px)').addEventListener('change',closeMenu);

// Motion follows the operating system unless a visitor chooses a preference.
const motionButton=document.querySelector('#motion-toggle');
const systemMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let savedMotion=null;
try{savedMotion=localStorage.getItem('gm-reduced-motion');}catch{}
function setMotion(reduced){document.documentElement.classList.toggle('motion-off',reduced);motionButton.setAttribute('aria-pressed',String(reduced));motionButton.textContent=reduced?'Motion reduced':'Reduce motion';}
setMotion(savedMotion===null?systemMotion.matches:savedMotion==='true');
motionButton.hidden=false;
motionButton.addEventListener('click',()=>{const reduced=motionButton.getAttribute('aria-pressed')!=='true';setMotion(reduced);savedMotion=String(reduced);try{localStorage.setItem('gm-reduced-motion',savedMotion);}catch{}});
systemMotion.addEventListener('change',e=>{if(savedMotion===null)setMotion(e.matches);});
if('IntersectionObserver' in window){
 const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');reveal.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(element=>reveal.observe(element));
 const sections=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navigation.querySelectorAll('a').forEach(a=>{const active=a.hash==='#'+entry.target.id;a.classList.toggle('current',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}),{rootMargin:'-15% 0px -60% 0px',threshold:0});
 document.querySelectorAll('main section[id]').forEach(section=>sections.observe(section));
}
// Publication search combines with the selected year.
const search=document.querySelector('#paper-search');
const papers=Array.from(document.querySelectorAll('.paper'));
let selectedYear='all';
document.querySelector('.publication-controls').hidden=false;
function filterPublications(){
 const query=search.value.trim().toLocaleLowerCase();let count=0;
 papers.forEach(paper=>{paper.hidden=!((selectedYear==='all'||paper.dataset.year===selectedYear)&&paper.textContent.toLocaleLowerCase().includes(query));if(!paper.hidden)count++;});
 document.querySelector('.result-count').textContent=count+' publication'+(count===1?'':'');
 document.querySelector('.empty-results').hidden=count!==0;
}
document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{selectedYear=button.dataset.year;document.querySelectorAll('.filters button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));filterPublications();}));
search.addEventListener('input',filterPublications);
const copyButton=document.querySelector('#copy-email');copyButton.hidden=false;
copyButton.addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('mustafaredwan1996@gmail.com');status.textContent='Email copied.';}catch{status.textContent='Please select and copy the email address above.';}});
document.querySelector('#year').textContent=new Date().getFullYear();
