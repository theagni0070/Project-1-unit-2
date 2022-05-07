document.querySelector(".container>div>button").addEventListener("click",function(){
     document.querySelector("#bg-modal").style.display = "flex"
    console.log("clicked")
})

function clicked(){
    console.log("clicked")

}


display()
function display()
{
    var div1 = document.createElement("div")

    var inner_div1 = document.createElement("div")
    var h2 = document.createElement("h2")
    h2.innerText = "ITEMS IN SHOPPING BAG"
    inner_div1.append(h2)
    var inner_div2 = document.createElement("div")
    var btn1 = document.createElement("button")
    var logo_img = document.createElement("img")
    logo_img.src = "https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png"
    btn1.append(logo_img)

    var btn2 = document.createElement("button")
    btn2.innerText = "CheckOut"
    inner_div2.append(btn1,btn2)

    var inner_div3 = document.createElement("div")
    inner_div3.innerText = "Need it ASAP? Choose Pick Up In Store, and we'll typically have it ready for pickup within 4 hours."

    var inner_div4 = document.createElement("div")
    inner_div4.innerText = "YOUR SHIPPING AND PICKUP CHOICES"

    var inner_div9 = document.createElement("div")

    var inner_div5 = document.createElement("div")
    inner_div5.innerText = " 1 Item added for Shipping"

    var inner_div6 = document.createElement("div")
    inner_div6.innerText = "NEW! PICK UP IN STORE Get it ASAP! It's easy, fast & free."

    inner_div9.append(inner_div5,inner_div6)
    var inner_div7 = document.createElement("div")
    var inner_div7_h2_1 = document.createElement("h2")
    inner_div7_h2_1.innerText = "ITEM"
    var inner_div7_h2_2 = document.createElement("h2")
    inner_div7_h2_2.innerText = "PRICE"
    inner_div7.append(inner_div7_h2_1,inner_div7_h2_2)


    var inner_div8 = document.createElement("div")
    var inner_div8_h2_1 = document.createElement("h2")
    inner_div8_h2_1.innerText = "QTY"
    var inner_div8_h2_2 = document.createElement("h2")
    inner_div8_h2_2.innerText = "TOTAL PRICE"
    inner_div8.append(inner_div8_h2_1,inner_div8_h2_2)
    



}