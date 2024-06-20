// Define Kitchenware, Sportswear, and Furniture elements once
const Kitchenware = document.getElementById('Kitchenware');
const Sportswear = document.getElementById('Sportswear');
const Furniture = document.getElementById('Furniture');

// Initialize total price variables
let totalPrice = 0;
let discount = 0;

// Function to append product details to a category and update total price
function appendProductDetails(categoryElement, productElement) {
    const productName = productElement.querySelector('p').innerText;
    const productPriceText = productElement.querySelector('.card-actions p').innerText;
    const productPrice = parseFloat(productPriceText.replace('TK', '')); // Extract numeric price

    categoryElement.innerHTML += `<div>${productName} - ${productPriceText}</div>`;
    
    // Update total price
    totalPrice += productPrice;
    updateTotalPrice();
}

// Function to update total price and apply discount
function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    const discountElement = document.getElementById('discount');
    const finalPriceElement = document.getElementById('finalPrice');
    const makePurchaseButton = document.getElementById('makePurchaseBtn');

    // Check if total price is greater than 200 to apply discount
    if (totalPrice > 200) {
        discount = totalPrice * 0.2; // 20% discount
    } else {
        discount = 0; // No discount if total price is 200 or less
    }

    // Calculate final price after discount
    const finalPrice = totalPrice - discount;

    // Update UI with formatted values
    totalPriceElement.innerText = `${totalPrice.toFixed(2)} TK`;
    discountElement.innerText = `${discount.toFixed(2)} TK`;
    finalPriceElement.innerText = `${finalPrice.toFixed(2)} TK`;

    // Enable/disable Make Purchase button based on total price
    if (totalPrice > 0) {
        makePurchaseButton.disabled = false;
    } else {
        makePurchaseButton.disabled = true;
    }
}

// Apply Coupon Code button logic
document.getElementById('applyCouponBtn').addEventListener('click', function() {
    const couponCodeInput = document.getElementById('couponCodeInput').value.trim();
    const applyButton = document.getElementById('applyCouponBtn');

    if (couponCodeInput === 'SELL200') {
        applyButton.disabled = true; // Disable Apply button after correct code entered
    } else {
        applyButton.disabled = false; // Enable Apply button if code is incorrect
    }
});

// Kitchenware events
document.getElementById('K-Accessories1').addEventListener('click', function() {
    const KAccessories1 = document.getElementById('K-Accessories1');
    appendProductDetails(Kitchenware, KAccessories1);
});

document.getElementById('K-Accessories2').addEventListener('click', function() {
    const KAccessories2 = document.getElementById('K-Accessories2');
    appendProductDetails(Kitchenware, KAccessories2);
});

document.getElementById('Home-Cooker').addEventListener('click', function() {
    const HomeCooker = document.getElementById('Home-Cooker');
    appendProductDetails(Kitchenware, HomeCooker);
});

// Sportswear events
document.getElementById('SportsBackCap').addEventListener('click', function() {
    const SportsBackCap = document.getElementById('SportsBackCap');
    appendProductDetails(Sportswear, SportsBackCap);
});

document.getElementById('FullJerseySet').addEventListener('click', function() {
    const FullJerseySet = document.getElementById('FullJerseySet');
    appendProductDetails(Sportswear, FullJerseySet);
});

document.getElementById('SportsCates').addEventListener('click', function() {
    const SportsCates = document.getElementById('SportsCates');
    appendProductDetails(Sportswear, SportsCates);
});

// Furniture events
document.getElementById('SingleRelaxChair').addEventListener('click', function() {
    const SingleRelaxChair = document.getElementById('SingleRelaxChair');
    appendProductDetails(Furniture, SingleRelaxChair);
});

document.getElementById('ChildrenPlay').addEventListener('click', function() {
    const ChildrenPlay = document.getElementById('ChildrenPlay');
    appendProductDetails(Furniture, ChildrenPlay);
});

document.getElementById('FlexibleSofa').addEventListener('click', function() {
    const FlexibleSofa = document.getElementById('FlexibleSofa');
    appendProductDetails(Furniture, FlexibleSofa);
});






// Function to open purchase confirmation popup
function openPurchasePopup() {
    const purchasePopup = document.getElementById('purchasePopup');
    purchasePopup.classList.add('open-popup');
}

// Function to close purchase confirmation popup
function closePurchasePopup() {
    const purchasePopup = document.getElementById('purchasePopup');
    purchasePopup.classList.remove('open-popup');
}

// Function to open your main popup
let popup = document.getElementById("popup");
function openPopup() {
    popup.classList.add("open-popup");
}

// Function to close your main popup
function closePopup() {
    popup.classList.remove("open-popup");
}
