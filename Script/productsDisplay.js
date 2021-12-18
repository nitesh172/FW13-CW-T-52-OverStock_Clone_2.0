var pageName = localStorage.getItem("productsPageName") || ""
var nn = pageName
console.log(nn)

var cart = JSON.parse(localStorage.getItem("Items")) || {}

document.getElementById("headingResult").textContent = nn
fetch(`https://overstockapi.herokuapp.com/products/subCategory=${nn}`)
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    var data = response
    console.log(data)
    if (data.length !== 0) {
      appendCard(data)
    } else {
      fetch(`https://overstockapi.herokuapp.com/products/mainSubCategory=${nn}`)
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          var data = response
          console.log(data)
          if (data.length !== 0) {
            appendCard(data)
          } else {
            fetch(`https://overstockapi.herokuapp.com/products/category=${nn}`)
              .then((response) => {
                return response.json()
              })
              .then((response) => {
                var data = response
                console.log(data)
                appendCard(data)
              })
          }
        })
    }
    setTimeout(function () {
      document.getElementById("loaderSS").style.display = "none"
      document.getElementById("compo").style.display = "block"
    }, 4000)
  })

var appendCard = (data) => {
  data.forEach((item) => {
    let productCardContainer = document.createElement("div")
    productCardContainer.setAttribute("class", "productCardContainer")
    let div = document.createElement("div")
    let productCardLink = document.createElement("a")
    productCardLink.setAttribute("class", "productCardLink")
    let productCard = document.createElement("div")
    productCard.setAttribute("class", "productCard")
    let productCardFrontMain = document.createElement("div")
    productCardFrontMain.setAttribute("class", "productCardFrontMain")
    let productCardInfoBannerContainer = document.createElement("div")
    productCardInfoBannerContainer.setAttribute(
      "class",
      "productCardInfoBannerContainer"
    )
    let tapcontainer = document.createElement("div")
    tapcontainer.setAttribute("class", "tap-container")
    let wishlistFavContainerNew = document.createElement("div")
    wishlistFavContainerNew.setAttribute("class", "wishlistFavContainerNew")
    let wishlistHeart = document.createElement("img")
    wishlistHeart.setAttribute(
      "src",
      "https://i.postimg.cc/W3cWM2Xg/Add-to-Wishlist.png"
    )
    wishlistHeart.setAttribute("class", "wishlistHeart")
    let wishlistCount = document.createElement("div")
    wishlistCount.setAttribute("class", "wishlistCount")
    wishlistCount.innerText = `${Math.floor(
      Math.random() * (110 - 250) + 250
    )} K`
    wishlistFavContainerNew.append(wishlistHeart, wishlistCount)
    tapcontainer.append(wishlistFavContainerNew)
    let div2 = document.createElement("div")
    productCardInfoBannerContainer.append(div2, tapcontainer)
    let productCardFrontImageContainer = document.createElement("div")
    productCardFrontImageContainer.setAttribute(
      "class",
      "productCardFrontImageContainer"
    )
    let productCardFrontImage = document.createElement("img")
    productCardFrontImage.setAttribute("class", "productCardFrontImage")
    productCardFrontImage.width = "320"
    productCardFrontImage.height = "320"
    productCardFrontImage.setAttribute("src", item.imageURL)
    productCardFrontImageContainer.append(productCardFrontImage)
    productCardFrontMain.append(
      productCardInfoBannerContainer,
      productCardFrontImageContainer
    )
    let productCardInfoBarContainerWithTitle = document.createElement("div")
    productCardInfoBarContainerWithTitle.setAttribute(
      "class",
      "productCardInfoBarContainerWithTitle"
    )
    let priceRatingTitle = document.createElement("div")
    priceRatingTitle.setAttribute("class", "priceRatingTitle")
    let productPricing = document.createElement("div")
    productPricing.setAttribute("class", "productPricing _2DfMCJ")
    let productPricingCurrent = document.createElement("div")
    productPricingCurrent.setAttribute(
      "class",
      "productPricingCurrent _3MUO5L wzKvpP"
    )
    productPricingCurrent.textContent = `INR ${item.price}`
    productPricing.append(productPricingCurrent)
    let ratingsWrapper = document.createElement("div")
    ratingsWrapper.setAttribute("class", "ratingsWrapper")
    let rate2 = 0
    let rate = Math.floor(item.rating)
    rate2 = item.rating - Math.floor(item.rating)
    console.log(rate2)
    for (var i = 0; i < rate; i++) {
      var ratingsStars = document.createElement("img")
      ratingsStars.setAttribute(
        "src",
        "https://i.postimg.cc/43bGzWp3/svgexport-16.png"
      )
      ratingsStars.setAttribute("class", "ratingsStars")
      ratingsWrapper.append(ratingsStars)
    }
    if (rate2 !== 0) {
      var ratingsStars2 = document.createElement("img")
      ratingsStars2.setAttribute(
        "src",
        "https://i.postimg.cc/kM2dXQfL/svgexport-18.png"
      )
      ratingsStars2.setAttribute("class", "ratingsStars")
      ratingsWrapper.append(ratingsStars2)
    }
    let productCardFrontTitle = document.createElement("p")
    productCardFrontTitle.setAttribute("class", "productCardFrontTitle")
    productCardFrontTitle.textContent = item.name
    priceRatingTitle.append(
      productPricing,
      ratingsWrapper,
      productCardFrontTitle
    )
    productCardInfoBarContainerWithTitle.append(priceRatingTitle)
    productCard.append(
      productCardFrontMain,
      productCardInfoBarContainerWithTitle
    )
    productCardLink.append(productCard)
    div.append(productCardLink)
    productCardContainer.append(div)
    productCardContainer.addEventListener("click", function (event) {
      event.preventDefault()
      localStorage.setItem("Items", JSON.stringify(item))
      window.open("Product.html")
    })

    document.getElementById("displayCard").append(productCardContainer)
  })
}
window.page = (name) => {
  var pageName = localStorage.getItem("pageName") || ""
  localStorage.setItem("pageName", name)
  console.log(name)
  window.location.href = "category.html"
}
import header from "/components/navbar.js"

document.querySelector("#navPut").innerHTML = header()
import footer from "/components/footer.js"
import mobileNav from "/components/mobilenav.js"

document.querySelector("#mobilePtn").innerHTML = mobileNav()
document.querySelector("#footerPut").innerHTML = footer()
responsivewatchSlider()

for(let i=0; i<13; i++){
  let sectionDiv = document.querySelectorAll(".section-div > div");
  sectionDiv[i].addEventListener("mouseover", function () {
    let dropDownContainer = document.querySelectorAll(".dropdown-content-part");
    dropDownContainer[i].style.display = "flex";
  });
  sectionDiv[i].addEventListener("mouseout", function () {
    let dropDownContainer = document.querySelectorAll(".dropdown-content-part");
    dropDownContainer[i].style.display = "none";
    dropDownContainer[i].addEventListener("mouseover", function () {
      dropDownContainer[i].style.display = "flex";
    });
    dropDownContainer[i].addEventListener("mouseout", function () {
      dropDownContainer[i].style.display = "none";
    });
  });
}

// let mains = document.querySelectorAll(".dropdown-content-part > div > div > div");
// for(let i=0; i<mains.length; i++){
//   mains[i].addEventListener("click",function(){
//     console.log(mains[i].textContent);
//     localStorage.setItem("Items",mains[i].textContent);
//     window.location.href = "productsDisplay.html";
//   })
// }

let sectionDiv = document.querySelectorAll(".section-div > div");
for(let i=0; i<sectionDiv.length; i++){
  sectionDiv[i].addEventListener("click",function(){
    console.log(sectionDiv[i].textContent);
    localStorage.setItem("pageName",sectionDiv[i].textContent);
    window.location.href = "category.html";
  })
}

// let blackDiv = document.querySelectorAll(".dark-div");
// for(let i=0; i<blackDiv.length; i++){
//   blackDiv[i].addEventListener("click",function(){
//     console.log(blackDiv[i].textContent);
//     localStorage.setItem("productsPageName",blackDiv[i].textContent);
//     window.location.href = "productsDisplay.html";
//   })
// }