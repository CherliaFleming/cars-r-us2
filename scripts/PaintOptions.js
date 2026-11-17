import { setPaintChoice } from "./TransientState.js"

const handlePaintChoice = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
        setPaintChoice(parseInt(changeEvent.target.value))
    }
}

document.addEventListener("change", handlePaintChoice)

export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    let html = '<select id="paint">'
    html += '<option value="0">Select a paint color</option>'

    // Build one <option> per object in the array
    const arrayOfOptions = paints.map(
        (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
