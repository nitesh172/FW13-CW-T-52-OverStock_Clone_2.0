var cart = JSON.parse(localStorage.getItem("CartOverStock")) || []
let displayItems = () => {
  console.log(cart[0])
  let totalPrice = 0
  for (let j = 0; j < cart.length; j++) {
    totalPrice += cart[j].price * cart[j].qty
  }
  let discount = totalPrice * 0.1
  let subTotal = totalPrice - discount
  totalPrice = (Math.round(totalPrice * 100) / 100).toLocaleString()
  discount = (Math.round(discount * 100) / 100).toLocaleString()
  subTotal = (Math.round(subTotal * 100) / 100).toLocaleString()

  document.getElementById("itemValue1").textContent = `(${cart.length}) Item:`
  document.getElementById("itemValue2").textContent = `(${cart.length}) Item:`
  document.getElementById("itemTotalValue1").textContent = `INR ${totalPrice}`
  document.getElementById("itemTotalValue2").textContent = `INR ${totalPrice}`
  document.getElementById(
    "itemDiscountValue1"
  ).textContent = `- INR ${discount}`
  document.getElementById(
    "itemDiscountValue2"
  ).textContent = `- INR ${discount}`
  document.getElementById("itemSubTotalValue1").textContent = `INR ${subTotal}`
  document.getElementById("itemSubTotalValue2").textContent = `INR ${subTotal}`
  document.getElementById("itemFinalValue1").textContent = `INR ${subTotal}`
  document.getElementById("itemFinalValue2").textContent = `INR ${subTotal}`
  document.getElementById("checkOutBtn1").addEventListener("click", () => {
    window.location.href = "signup.html"
  })
  document.getElementById("checkOutBtn2").addEventListener("click", () => {
    window.location.href = "signup.html"
  })

  cart.forEach((item, index) => {
    var oe = document.createElement("div")
    oe.setAttribute("class", "oe")
    var og = document.createElement("div")
    og.setAttribute("class", "og")
    var ou = document.createElement("div")
    ou.setAttribute("class", "ou")
    var ow = document.createElement("img")
    ow.setAttribute("class", "ow")
    ow.setAttribute("src", item.imageURL)
    ou.append(ow)
    var oy = document.createElement("div")
    oy.setAttribute("class", "oy pr")
    var pa = document.createElement("div")
    pa.setAttribute("class", "pa pr")
    var a = document.createElement("a")
    a.textContent = item.name
    pa.append(a)
    var pf = document.createElement("div")
    pf.setAttribute("class", "pf")
    var pj = document.createElement("div")
    var n = item.price
    var oldPrice = n - n * 0.1
    pj.setAttribute("class", "ph pj")
    var pp = document.createElement("div")
    pp.setAttribute("class", "ph pp")
    n = (Math.round(n * 100) / 100).toLocaleString()
    oldPrice = (Math.round(oldPrice * 100) / 100).toLocaleString()
    pj.textContent = `INR ${oldPrice}`
    pp.textContent = `Sale INR ${n}`
    var jv = document.createElement("div")
    jv.textContent = "10% Savings"
    pf.append(pj, pp, jv)
    var oi = document.createElement("div")
    oi.setAttribute("class", "oi")
    var iw = document.createElement("div")
    iw.setAttribute("class", "cl-form-control cl-form-control-margin iw")
    var label = document.createElement("label")
    label.setAttribute("class", "cl-form-label")
    label.textContent = "Qty"
    var select = document.createElement("select")
    select.setAttribute("disabled", "")
    var option = document.createElement("option")
    option.setAttribute("label", item.qty)
    select.append(option)
    iw.append(label, select)
    var ok = document.createElement("div")
    ok.setAttribute("class", "ok")
    var om = document.createElement("a")
    om.setAttribute("class", "om")
    om.textContent = "Remove"
    om.addEventListener("click", function () {
      console.log("hello")
      console.log(index)
      removeItem(index)
    })
    var om1 = document.createElement("a")
    om1.setAttribute("href", "")
    om1.textContent = "Save For Later"
    om1.setAttribute("class", "om")
    ok.append(om, om1)
    oi.append(iw, ok)
    oy.append(pa, pf, oi)
    og.append(ou, oy)
    oe.append(og)
    document.getElementById("productContainer").append(oe)
  })
  setTimeout(function () {
    document.getElementById("loaderSS").style.display = "none"
    document.getElementById("compo").style.display = "block"
  }, 4000)
}

displayItems()

function removeItem(index) {
  console.log(index)
  cart.splice(index, 1)
  localStorage.setItem("CartOverStock", JSON.stringify(cart))
  if (cart.length === 0) {
    window.location.href = "productsDisplay.html"
  } else {
    window.location.href = "index.html"
  }
  displayItems()
}
import footer from "/components/footer.js"

document.querySelector("#footerPut").innerHTML = footer()