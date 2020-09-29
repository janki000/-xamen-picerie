const tl = gsap.timeline({defaults: {ease: 'linear'},
repeat:-2,
yoyo:true
})
/*Animation d'aliments*/
  .to('.pomme', {scale: 1.2, duration: 0.5, delay: '25%'})
.to('.pizza', {scale: 1.2, duration: 0.5, delay: '25%'})
.to('.letu', {scale: 1.2, duration: 0.5, delay: '25%'})
.to('.fraise', {scale: 1.2, duration: 0.5,delay: '25%'})
.to('.burger', {scale: 1.2, duration: 0.5, delay: '25%'})
.to('.md', {scale: 1.2, duration: 0.5,delay: '25%'})
.to('.cpoulet', {scale: 1.2, duration: 0.5, delay: '25%'})
.to('.raisin', {scale: 1.2, duration: 0.5, delay: '25%'})
.to('.pommev', {scale: 1.2, duration: 0.5, delay: '25%'})

/*Animation d'aliments inversée*/
.to('.pommev', {scale: 1, duration: 0.5, delay: '25%'})
.to('.raisin', {scale: 1, duration: 0.5, delay: '25%'})
.to('.cpoulet', {scale: 1, duration: 0.5, delay: '25%'})
.to('.md', {scale: 1, duration: 0.5, delay: '25%'})
.to('.burger', {scale: 1, duration: 0.5, delay: '25%'})
.to('.fraise', {scale: 1, duration: 0.5, delay: '25%'})
.to('.letu', {scale: 1, duration: 0.5, delay: '25%'})
.to('.pizza', {scale: 1, duration: 0.5, delay: '25%'})
.to('.pomme', {scale: 1, duration: 0.5,delay: '25%'})

/*animation pour le crayon*/
gsap.registerPlugin(ScrollTrigger);


const t2 = gsap.timeline({defaults: {ease: 'linear'},
})
.to('.crayon', { 
  x: '2900px',
  rotation:-35,
  scrollTrigger: {
    scrub: 0.3,
    start: 'top 83%',
    end: 'bottom 10%',
    trigger: '.form',
  }
})
.to('.form', {
  backgroundColor:'#fdf1ec',
  scrollTrigger: {
    scrub: 0.3,
    start: 'top 83%',
    end: 'bottom 100%',
    trigger: '.form',
  }
})


/*Chercher bouton Ajouter*/

const btn = document.querySelector('.btnAjouter');
btn.addEventListener('click', function(){ 
  new personne();
})


