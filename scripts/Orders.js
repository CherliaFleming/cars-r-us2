export const Orders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel")
    const allOrders = await response.json()

    // Skip any order that is missing an option (e.g. saved before choices were made)
    const orders = allOrders.filter(
        (order) => order.paint && order.interior && order.technology && order.wheel
    )

    if (orders.length === 0) {
        return `<p class="noOrders">No orders yet. Build your car above!</p>`
    }

    const ordersHTML = orders.map(
        (order, index) => {
            // Add up the price of every chosen option
            const orderPrice = order.paint.price
                + order.interior.price
                + order.technology.price
                + order.wheel.price

            // Format the number as currency, e.g. 3962 -> $3,962.00
            const formattedPrice = orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })

            return `<div class="customOrder">
                <span class="customOrder__number">Order #${index + 1}</span>
                <span class="customOrder__details">
                    ${order.paint.color} · ${order.interior.material} · ${order.technology.package} · ${order.wheel.style}
                </span>
                <span class="customOrder__price">${formattedPrice}</span>
            </div>`
        }
    )

    return ordersHTML.join("")
}
