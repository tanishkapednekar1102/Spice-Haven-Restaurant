// =============================
// SPICE HAVEN RESTAURANT
// Shopping Cart
// =============================

let quantity = [1, 1, 1, 1, 1, 1];

let cart = [];

let discount = 0;


// =============================
// QUANTITY BUTTONS
// =============================

function increaseQty(index){

    quantity[index]++;

    document.getElementById("qty"+index).innerHTML=quantity[index];

}

function decreaseQty(index){

    if(quantity[index]>1){

        quantity[index]--;

        document.getElementById("qty"+index).innerHTML=quantity[index];

    }

}



// =============================
// ADD TO CART
// =============================

function addToCart(name,price,index){

    let qty=quantity[index];

    let total=price*qty;

    cart.push({

        food:name,

        price:price,

        qty:qty,

        total:total

    });

    updateCart();

}



// =============================
// UPDATE CART
// =============================

function updateCart(){

    let body=document.getElementById("cartBody");

    body.innerHTML="";

    let subtotal=0;

    cart.forEach((item,i)=>{

        subtotal+=item.total;

        body.innerHTML+=`

<tr>

<td>${item.food}</td>

<td>₹${item.price}</td>

<td>${item.qty}</td>

<td>₹${item.total}</td>

<td>

<button class="remove-btn"

onclick="removeItem(${i})">

Remove

</button>

</td>

</tr>

`;

    });

    let gst=subtotal*0.05;

    let grand=subtotal+gst-discount;

    document.getElementById("subtotal").innerHTML="₹"+subtotal.toFixed(2);

    document.getElementById("gst").innerHTML="₹"+gst.toFixed(2);

    document.getElementById("discount").innerHTML="₹"+discount.toFixed(2);

    document.getElementById("grandTotal").innerHTML="₹"+grand.toFixed(2);

}



// =============================
// REMOVE ITEM
// =============================

function removeItem(index){

    cart.splice(index,1);

    updateCart();

}
// =============================
// APPLY COUPON
// Coupon Code : SAVE10
// =============================

function applyCoupon(){

    let code=document.getElementById("couponCode").value;

    let subtotal=cart.reduce((sum,item)=>sum+item.total,0);

    if(code.toUpperCase()=="SAVE10"){

        discount=subtotal*0.10;

        alert("🎉 Coupon Applied Successfully!");

    }

    else{

        discount=0;

        alert("❌ Invalid Coupon Code");

    }

    updateCart();

}



// =============================
// PAYMENT
// =============================

function payNow(){

    if(cart.length==0){

        alert("🛒 Your cart is empty!");

        return;

    }

    let popup=document.getElementById("paymentPopup");

    popup.style.display="flex";

}



// =============================
// CLOSE PAYMENT
// =============================

function closePayment(){

    document.getElementById("paymentPopup").style.display="none";

    cart=[];

    discount=0;

    document.getElementById("couponCode").value="";

    updateCart();

}



// =============================
// BOOK TABLE
// =============================

document.getElementById("bookTableBtn").onclick=function(){

    document.getElementById("bookingPopup").style.display="flex";

}



// =============================
// CLOSE BOOKING
// =============================

function closeBooking(){

    document.getElementById("bookingPopup").style.display="none";

}



// =============================
// CONFIRM BOOKING
// =============================

function confirmBooking(){

    let name=document.getElementById("customerName").value;

    let phone=document.getElementById("customerPhone").value;

    let guests=document.getElementById("guestCount").value;

    let date=document.getElementById("bookingDate").value;

    let time=document.getElementById("bookingTime").value;

    if(name=="" || phone=="" || guests=="" || date=="" || time==""){

        alert("Please fill all booking details.");

        return;

    }

    alert(

"🍽 Booking Confirmed\n\n"

+

"Customer : "+name+

"\nGuests : "+guests+

"\nDate : "+date+

"\nTime : "+time+

"\n\nThank You!"

);

    document.getElementById("bookingPopup").style.display="none";

}



// =============================
// CONTACT FORM
// =============================

document.getElementById("contactForm").addEventListener("submit",function(e){

    e.preventDefault();

    alert("✅ Thank You!\n\nYour message has been sent successfully.");

    this.reset();

});
// =============================
// STAR RATING
// =============================

let selectedRating = 5;

function setRating(rating){

    selectedRating = rating;

    let stars = document.querySelectorAll(".rating span");

    stars.forEach((star,index)=>{

        if(index < rating){

            star.innerHTML="⭐";

        }
        else{

            star.innerHTML="☆";

        }

    });

}



// =============================
// ADD REVIEW
// =============================

function submitReview(){

    let name=document.getElementById("reviewName").value;

    let review=document.getElementById("reviewText").value;

    if(name=="" || review==""){

        alert("Please enter your name and review.");

        return;

    }

    let stars="";

    for(let i=0;i<selectedRating;i++){

        stars+="⭐";

    }

    let card=`

<div class="review-card">

<h3>${name}</h3>

<p class="stars">${stars}</p>

<p>${review}</p>

</div>

`;

    document.querySelector(".review-container").innerHTML+=card;

    document.getElementById("reviewName").value="";

    document.getElementById("reviewText").value="";

    alert("⭐ Thank you for your review!");

}



// =============================
// SEARCH FOOD
// =============================

function searchFood(){

    let input=document.getElementById("search").value.toLowerCase();

    let cards=document.querySelectorAll(".menu-card");

    cards.forEach(card=>{

        let name=card.querySelector("h3").innerHTML.toLowerCase();

        if(name.includes(input)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

}



// =============================
// FAVORITE BUTTON
// =============================

function toggleFavourite(btn){

    if(btn.innerHTML=="🤍"){

        btn.innerHTML="❤️";

    }

    else{

        btn.innerHTML="🤍";

    }

}



// =============================
// CART COUNT
// =============================

function updateCart(){

    let body=document.getElementById("cartBody");

    body.innerHTML="";

    let subtotal=0;

    cart.forEach((item,index)=>{

        subtotal+=item.total;

        body.innerHTML+=`

<tr>

<td>${item.food}</td>

<td>₹${item.price}</td>

<td>${item.qty}</td>

<td>₹${item.total}</td>

<td>

<button class="remove-btn"

onclick="removeItem(${index})">

Remove

</button>

</td>

</tr>

`;

    });

    let gst=subtotal*0.05;

    let grand=subtotal+gst-discount;

    document.getElementById("subtotal").innerHTML="₹"+subtotal.toFixed(2);

    document.getElementById("gst").innerHTML="₹"+gst.toFixed(2);

    document.getElementById("discount").innerHTML="₹"+discount.toFixed(2);

    document.getElementById("grandTotal").innerHTML="₹"+grand.toFixed(2);

    let count=cart.length;

    let cartTitle=document.querySelector("#cart .section-title");

    cartTitle.innerHTML="🛒 Your Cart ("+count+")";

}



// =============================
// LIVE DATE
// =============================

function updateTime(){

    let now=new Date();

    console.log(now.toLocaleString());

}

setInterval(updateTime,1000);



// =============================
// WELCOME MESSAGE
// =============================

window.onload=function(){

    alert("🍽 Welcome to Spice Haven Restaurant!\n\nEnjoy Delicious Food ❤️");

}