bagItemObjects;
onLoad();

function onLoad(){
  displayDeliverySummary();
}

function displayDeliverySummary(){
  let deliverysummaryElement = document.querySelector('.delivery-summary');
  let totalItem = 0;
  let totalMRP = 0;
  let totalDiscount = 0;
  let convenienceFee = 0;
  let finalPayment = 0;

  bagItemObjects.forEach(bagItem =>{
    totalItem++;
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
    convenienceFee = 99;
  });

  finalPayment = (totalMRP - totalDiscount + convenienceFee);
  
  deliverysummaryElement.innerHTML = `
  <div class="bag-details-container">
      <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
      <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">₹${totalMRP}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹${convenienceFee}</span>
      </div>
      <hr>
      <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹${finalPayment}</span>
      </div>
  </div>
  <button class="btn-place-order css-xjhrni">PROCEED TO PAYMENT</button>`;
}

// function loadBagItemObjects(){
//   bagItemObjects = bagItems.map(itemId =>{
//     for(let i = 0 ; i < items.length ; i++){
//       if(itemId == items[i].id){
//         return items[i];
//       }
//     }
// });
// }

// function displayBagItems(){
//   let containerElement = document.querySelector('.bag-items-container');
//   let innerHTML = '';
//   bagItemObjects.forEach(bagItem => {
//     innerHTML += generateItemHTML(bagItem);
//   });
//   containerElement.innerHTML = innerHTML;
// }

// function removeFromBag(itemId){
//   bagItems = bagItems.filter(bagItemId => bagItemId !== itemId);
//   localStorage.setItem('bagItems', JSON.stringify(bagItems));
//   loadBagItemObjects();
//   displayBagIcon();
//   displayBagItems();
//   displayBagSummary();
// }

