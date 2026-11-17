import { setInteriorChoice } from "./TransientState.js"

const handleInteriorChoice = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        setInteriorChoice(parseInt(changeEvent.target.value))
    }
}

document.addEventListener("change", handleInteriorChoice)

export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    let html = '<select id="interior">'
    html += '<option value="0">Select an interior</option>'

    // Build one <option> per object in the array
    const arrayOfOptions = interiors.map(
        (interior) => {
            return `<option value="${interior.id}">${interior.material}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
