
const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

//function to display slider
let n = 0 // this is for first slider image

function changeSlide() {
    //using for loop
    /* select all images and add style
     but display none
     afterwards using n now loop through images
     as show below
    
    */
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = none;        
    }
    /* now select first image and display it
        block means display image
    */ 
    imgs[n].style.display = 'block';
}
// call function to display images 
changeSlide();

 /* now adding the prev and next buttons code
    add prov first
    - add event listener and arrow function
    - use if statement to check state of slider selecteed
    - if n > 0 meaning image next image is displayed
      -prev btn brings back image
      - else compares length of images and reduces by one 
      - call function 
 */
// prev
prev_btn.addEventListener('click', (e) => {
    if( n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    } 
    changeSlide();
})
 
 