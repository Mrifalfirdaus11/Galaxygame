var isMoving = true;
function setBackgroundMoving() {
    if(isMoving == true){
    setTimeout(function() {
        // background berjalan
        var bg = document.getElementById('board');
        bg.style.backgroundPosition = (parseInt(
            bg.style.backgroundPosition.replace('px',''))-1) + 'px';
            // update live score
            document.getElementById('score').innerHTML =
            parseInt(document.getElementById('score').innerHTML) +1;
            // panggil fungsi terus menerus (recursive)
            setBackgroundMoving();
    },4);
}
}
// inisialisasi fungsi bg berjalan
setBackgroundMoving();

// box1
function setbaturedMoving(){
     var batured = document.getElementById('batured'),
        alienred = document.getElementById('alienred');

    setTimeout(function() {

        batured.style.marginLeft = (parseInt(batured.style.marginLeft.replace('px','')) -1) + 'px';

        if(parseInt(batured.style.marginLeft.replace('px',''))< -100){
            batured.style.marginLeft = '1100px';
        }

        if(alienred.offsetTop + 85 >= batured.offsetTop &&
          alienred.offsetLeft + 50 >= batured.offsetLeft &&
            alienred.offsetTop + 85 <= batured.offsetTop + 85 &&
            alienred.offsetLeft <= batured.offsetLeft + 50){
                alert('GAME OVER, Score anda :' + document.getElementById('score').innerHTML);
                alienred.setAttribute('class','freeze');
                isMoving = false;
            }
            // else{
                
            //     setBoxMoving();
            // }

    // panggil fungsi terus menerus (recursive)
    setbaturedMoving();     
    },3);
}
// inisialisasi box bergerak
setbaturedMoving();

// box2
function setskeletonredMoving(){
    var skeletonred = document.getElementById('skeletonred'),
       alienred = document.getElementById('alienred');

   setTimeout(function() {

       skeletonred.style.marginLeft = (parseInt(skeletonred.style.marginLeft.replace('px','')) -1) + 'px';

       if(parseInt(skeletonred.style.marginLeft.replace('px',''))< -100){
           skeletonred.style.marginLeft = '1100px';
       }

       if(alienred.offsetTop + 85 >= skeletonred.offsetTop &&
           alienred.offsetLeft + 50 >= skeletonred.offsetLeft &&
           alienred.offsetTop + 85 <= skeletonred.offsetTop + 85 &&
           alienred.offsetLeft <= skeletonred.offsetLeft + 50){
               alert('GAME OVER, Score anda :' + document.getElementById('score').innerHTML);
               alienred.setAttribute('class','freeze');
               isMoving = false;
           }
           // else{
               
           //     setBoxMoving();
           // }

   // panggil fungsi terus menerus (recursive)
   setskeletonredMoving();     
   },3);
}
// inisialisasi box bergerak
setskeletonredMoving();

// KOTAKREDD
function setkotakredMoving(){
  var kotakred = document.getElementById('kotakred'),
     alienred = document.getElementById('alienred');

 setTimeout(function() {

     kotakred.style.marginLeft = (parseInt(kotakred.style.marginLeft.replace('px','')) -1) + 'px';

     if(parseInt(kotakred.style.marginLeft.replace('px',''))< -100){
         kotakred.style.marginLeft = '1100px';
     }

     if(alienred.offsetTop + 85 >= kotakred.offsetTop &&
         alienred.offsetLeft + 50 >= kotakred.offsetLeft &&
         alienred.offsetTop + 85 <= kotakred.offsetTop + 85 &&
         alienred.offsetLeft <= kotakred.offsetLeft + 50){
             alert('GAME OVER, Score anda :' + document.getElementById('score').innerHTML);
             alienred.setAttribute('class','freeze');
             isMoving = false;
         }
         // else{
             
         //     setBoxMoving();
         // }

 // panggil fungsi terus menerus (recursive)
 setkotakredMoving();     
 },3);
}
// inisialisasi box bergerak
setkotakredMoving();

// KOTAKREDD
function setkotakreddMoving(){
  var kotakredd = document.getElementById('kotakredd'),
     alienred = document.getElementById('alienred');

 setTimeout(function() {

     kotakredd.style.marginLeft = (parseInt(kotakredd.style.marginLeft.replace('px','')) -1) + 'px';

     if(parseInt(kotakredd.style.marginLeft.replace('px',''))< -100){
         kotakredd.style.marginLeft = '1100px';
     }

     if(alienred.offsetTop + 85 >= kotakredd.offsetTop &&
         alienred.offsetLeft + 50 >= kotakredd.offsetLeft &&
         alienred.offsetTop + 85 <= kotakredd.offsetTop + 85 &&
         alienred.offsetLeft <= kotakredd.offsetLeft + 50){
             alert('GAME OVER, Score anda :' + document.getElementById('score').innerHTML);
             alienred.setAttribute('class','freeze');
             isMoving = false;
         }
         // else{
             
         //     setBoxMoving();
         // }

 // panggil fungsi terus menerus (recursive)
 setkotakreddMoving();     
 },3);
}
// inisialisasi box bergerak
setkotakreddMoving();

// KOTAKREDDD
function setkotakredddMoving(){
  var kotakreddd = document.getElementById('kotakreddd'),
     alienred = document.getElementById('alienred');

 setTimeout(function() {

     kotakreddd.style.marginLeft = (parseInt(kotakreddd.style.marginLeft.replace('px','')) -1) + 'px';

     if(parseInt(kotakreddd.style.marginLeft.replace('px',''))< -100){
         kotakreddd.style.marginLeft = '1100px';
     }

     if(alienred.offsetTop + 85 >= kotakreddd.offsetTop &&
         alienred.offsetLeft + 50 >= kotakreddd.offsetLeft &&
         alienred.offsetTop + 85 <= kotakreddd.offsetTop + 85 &&
         alienred.offsetLeft <= kotakreddd.offsetLeft + 50){
             alert('GAME OVER, Score anda :' + document.getElementById('score').innerHTML);
             alienred.setAttribute('class','freeze');
             isMoving = false;
         }
         // else{
             
         //     setBoxMoving();
         // }

 // panggil fungsi terus menerus (recursive)
 setkotakredddMoving();     
 },3);
}
// inisialisasi box bergerak
setkotakredddMoving();



window.addEventListener('keyup', function(e){

    // untuk mendeteksi tombol jump
    // console.log(e.keyCode);
    if(e.keyCode ==38){
        // setting alien nya loncat
        document.getElementById('alienred').style.marginTop = "175px";
        document.getElementById('alienred').setAttribute('class','freezee');
        
        // kembalikan alien ke darat
        setTimeout(function() {
            document.getElementById('alienred').style.marginTop = "353px";
            document.getElementById('alienred').setAttribute('class','');
        
        },1000);
    }
});




function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanTikus();
    setTimeout(() => {
      selesai = true;
    }, 10000);
  }
  
  function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    papanSkor.textContent = skor;
  }
  
  tikus.forEach(t => {
    t.addEventListener('click', pukul);
  });




// MAPPPP

// Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
    
    // Scroll Reveal Animation
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    })
    
    sr.reveal(`.section-title, .section-subtitle, .section-description, .brand-image, .tesitmonial, .newsletter 
  .logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links`, {interval:100,})
  
  sr.reveal(`.about-imageContent, .menu-items`, {origin: 'left'})
  sr.reveal(`.about-details, .time-table`, {origin: 'right'})