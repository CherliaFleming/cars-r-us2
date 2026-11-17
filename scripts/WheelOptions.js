import { setWheelChoice } from "./TransientState.js"

const handleWheelChoice = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
        setWheelChoice(parseInt(changeEvent.target.value))
    }
}

document.addEventListener("change", handleWheelChoice)

export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    let html = '<select id="wheel">'
    html += '<option value="0">Select a wheel package</option>'

    // Build one <option> per object in the array
    const arrayOfOptions = wheels.map(
        (wheel) => {
            return `<option value="${wheel.id}">${wheel.style}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
