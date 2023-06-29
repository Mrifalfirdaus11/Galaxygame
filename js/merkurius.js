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
    },5);
}
}
// inisialisasi fungsi bg berjalan
setBackgroundMoving();

// box1
function setBoxMoving(){
     var box = document.getElementById('box'),
        dino = document.getElementById('dino');

    setTimeout(function() {

        box.style.marginLeft = (parseInt(box.style.marginLeft.replace('px','')) -1) + 'px';

        if(parseInt(box.style.marginLeft.replace('px',''))< -100){
            box.style.marginLeft = '1100px';
        }

        if(dino.offsetTop + 85 >= box.offsetTop &&
            dino.offsetLeft + 50 >= box.offsetLeft &&
            dino.offsetTop + 85 <= box.offsetTop + 85 &&
            dino.offsetLeft <= box.offsetLeft + 50){
                alert('GAME OVER, Score anda :' + document.getElementById('score').innerHTML);
                dino.setAttribute('class','freeze');
                isMoving = false;
            }
            // else{
                
            //     setBoxMoving();
            // }

    // panggil fungsi terus menerus (recursive)
    setBoxMoving();     
    },5);
}
// inisialisasi box bergerak
setBoxMoving();

// box2
function setBoxxMoving(){
    var boxx = document.getElementById('box2'),
       dino = document.getElementById('dino');

   setTimeout(function() {

       boxx.style.marginLeft = (parseInt(boxx.style.marginLeft.replace('px','')) -1) + 'px';

       if(parseInt(boxx.style.marginLeft.replace('px',''))< -100){
           boxx.style.marginLeft = '1100px';
       }

       if(dino.offsetTop + 85 >= boxx.offsetTop &&
           dino.offsetLeft + 50 >= boxx.offsetLeft &&
           dino.offsetTop + 85 <= boxx.offsetTop + 85 &&
           dino.offsetLeft <= boxx.offsetLeft + 50){
               alert('GAME OVER, Score anda :' + document.getElementById('score').innerHTML);
            // Swal.fire({
            //   title: 'Custom width, padding, color, background.',
            //   width: 600,
            //   padding: '3em',
            //   color: '#716add',
            //   background: '#fff url(/images/trees.png)',
            //   backdrop: `
            //     rgba(0,0,123,0.4)
            //     url("/images/nyan-cat.gif")
            //     left top
            //     no-repeat
            //   `
            // })
               dino.setAttribute('class','freeze');
               isMoving = false;
           }
           // else{
               
           //     setBoxMoving();
           // }

   // panggil fungsi terus menerus (recursive)
   setBoxxMoving();     
   },5);
}
// inisialisasi box bergerak
setBoxxMoving();

window.addEventListener('keyup', function(e){

    // untuk mendeteksi tombol jump
    // console.log(e.keyCode);
    if(e.keyCode ==38){
        // setting alien nya loncat
        document.getElementById('dino').style.marginTop = "175px";
        document.getElementById('dino').setAttribute('class','freezee');
        
        // kembalikan alien ke darat
        setTimeout(function() {
            document.getElementById('dino').style.marginTop = "353px";
            document.getElementById('dino').setAttribute('class','');
        
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