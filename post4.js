

// Combine then render two arrays
let petsList1 = ['dog', 'cat', 'turtle', 'rabbit']
let petsList2 = ['tiger', 'giraffe', 'lion', 'bear']

let joinList = (listOne, listTwo) => [...listOne, ...listTwo]
let callJoinList = joinList(petsList1, petsList2)

const render = (currentElement) => {
    const mainSection = document.getElementById('main-section')
    mainSection.innerHTML = currentElement
}

render(callJoinList)









