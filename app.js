function cartCalculation(product, perProductPrice, isIncrease) {
    const productQuantity = document.getElementById(product);
    if (isIncrease) productQuantity.value++;
    else {
        if (productQuantity.value <= 0) return;
        else {
            productQuantity.value--;
        }
    }
    const productPrice = document.getElementById(product + "Price");
    productPrice.innerText = perProductPrice * Number(productQuantity.value);
    const prices = document.getElementsByClassName("prices");
    let totalPrice = 0;
    [...prices].forEach((price) => {
        totalPrice += Number(price.innerHTML);
    });
    document.getElementById("subTotal").innerHTML = totalPrice;
    document.getElementById("tax").innerHTML = (totalPrice * 0.05).toFixed(2);
    document.getElementById("total").innerHTML = totalPrice;
}
 