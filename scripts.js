'use strict'

const imgArr = [
  './images/image-product-1.jpg',
  './images/image-product-2.jpg',
  './images/image-product-3.jpg',
  './images/image-product-4.jpg',
];

const cartAndImageParentEl = document.querySelector('.header_cart_N_image');
const figureOnCartEl = document.querySelector('.figure');
const itemsImagesbox = document.getElementById('.itemsInfo__innerbox');
const cartItselfEl = document.getElementById('cart__for_items');


const mainImageBoxEl = document.querySelector('.section__main-img');
const iconDeleteEl = document.querySelector('.icon_delete');

const imagesModalEl = document.querySelector('.images__modal');
const closeModalPopup = document.querySelector('.close_Modal_popup');
const OverlayBackground = document.querySelector('.overlay');
const modalImgBoxEl = document.querySelector('.modal-img__box img');
const modal_imgEl = document.querySelectorAll('.modal_img');

// cart__for_items;
const leftscrollbarEl = document.querySelector('.prev_icon_parent');
const rightscrollbarEl = document.querySelector('.next_icon_parent');
const totalItemsInfoEl = document.querySelector('.totalItemsInfo');

// remove hidden class on modal
function removeHidden() {  
  imagesModalEl.classList.remove('hidden')
 OverlayBackground.classList.remove('hidden');

}

// add hidden class on modal when close button is clicked
function addHidden() {
    imagesModalEl.classList.add('hidden');
    OverlayBackground.classList.add('hidden');

}

// left and right scroll bar activation

let x = 0;

cartItselfEl.addEventListener('click', () => {
  //  const iteminfo = document.querySelector('.totalItemsInfo');
  totalItemsInfoEl.classList.toggle('hidden')
  totalItemsInfoEl.innerHTML = ''
  
   const iteminfo = `
             <!-- Inner cart info -->
          <div class="totalItems">
            <p class="cart">Cart</p>

            <div class="itemsInfo__innerbox">
              <img class=".hidden" src="./images/image-product-1-thumbnail.jpg" alt="">
              <img class="hidden" src="./images/image-product-1-thumbnail.jpg" alt="">
              <img class="hidden" src="./images/image-product-1-thumbnail.jpg" alt="">
              <img class="hidden" src="./images/image-product-1-thumbnail.jpg" alt="">
              
              <p class="text_word">Fall Limited Edition Sneakers</p>

              <img class="icon_delete" src="./images/icon-delete.svg" alt="">

            </div>

              <span class="items">
                $125.00 x 2 <span class="boldertext"> 250</span>
              </span>
            <button class="button">Checkout</button>
          </div>
   `;
   totalItemsInfoEl.insertAdjacentHTML('afterbegin', iteminfo)
   
})
mainImageBoxEl.addEventListener('click', removeHidden)
closeModalPopup.addEventListener('click', addHidden);
iconDeleteEl.addEventListener('click', () => {
  totalItemsInfoEl.style.display = 'none'
})


// side scroll bar
// cart display selecteddata info before n after
// cart info number on cart
//mobile responsiveness n hamburger
