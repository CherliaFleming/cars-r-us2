const transientState = {
    paintId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId: 0
}

export const setPaintChoice = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setTechnologyChoice = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
    console.log(transientState)
}

export const setWheelChoice = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

export const placeOrder = async () => {
    // Don't save an order unless every option has been chosen
    if (
        transientState.paintId === 0 ||
        transientState.interiorId === 0 ||
        transientState.technologyId === 0 ||
        transientState.wheelId === 0
    ) {
        window.alert("Please choose a paint, interior, technology package, and wheels before placing an order.")
        return
    }

    // Build the new order object with a foreign key for each option type
    const newOrder = {
        paintId: transientState.paintId,
        interiorId: transientState.interiorId,
        technologyId: transientState.technologyId,
        wheelId: transientState.wheelId
    }

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newOrder)
    }

    await fetch("http://localhost:8088/orders", postOptions)

    // Reset transient state now that the order is saved permanently
    transientState.paintId = 0
    transientState.interiorId = 0
    transientState.technologyId = 0
    transientState.wheelId = 0

    // Tell the main module that state changed so it can re-render
    const customEvent = new CustomEvent("stateChanged")
    document.dispatchEvent(customEvent)
}
