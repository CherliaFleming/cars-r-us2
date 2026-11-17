import { placeOrder } from "./TransientState.js"

const handlePlaceOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "placeOrder") {
        placeOrder()
    }
}

document.addEventListener("click", handlePlaceOrderClick)

export const PlaceOrderButton = () => {
    return `<button id="placeOrder">Place Car Order</button>`
}
