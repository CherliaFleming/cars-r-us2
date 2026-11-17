import { PaintOptions } from "./PaintOptions.js"
import { InteriorOptions } from "./InteriorOptions.js"
import { TechnologyOptions } from "./TechnologyOptions.js"
import { WheelOptions } from "./WheelOptions.js"
import { PlaceOrderButton } from "./PlaceOrderButton.js"
import { Orders } from "./Orders.js"

const container = document.querySelector("#container")

const render = async () => {
    const paintOptionsHTML = await PaintOptions()
    const interiorOptionsHTML = await InteriorOptions()
    const technologyOptionsHTML = await TechnologyOptions()
    const wheelOptionsHTML = await WheelOptions()
    const placeOrderButtonHTML = PlaceOrderButton()
    const ordersHTML = await Orders()

    const composedHTML = `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${paintOptionsHTML}
            </section>

            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${interiorOptionsHTML}
            </section>

            <section class="choices__technologies options">
                <h2>Technologies</h2>
                ${technologyOptionsHTML}
            </section>

            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${placeOrderButtonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${ordersHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

// Re-render all the HTML whenever state changes (e.g. a new order is placed)
document.addEventListener("stateChanged", () => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()
