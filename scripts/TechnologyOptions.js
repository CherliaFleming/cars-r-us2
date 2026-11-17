import { setTechnologyChoice } from "./TransientState.js"

const handleTechnologyChoice = (changeEvent) => {
    if (changeEvent.target.id === "technology") {
        setTechnologyChoice(parseInt(changeEvent.target.value))
    }
}

document.addEventListener("change", handleTechnologyChoice)

export const TechnologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    let html = '<select id="technology">'
    html += '<option value="0">Select a technology package</option>'

    // Build one <option> per object in the array
    const arrayOfOptions = technologies.map(
        (technology) => {
            return `<option value="${technology.id}">${technology.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
