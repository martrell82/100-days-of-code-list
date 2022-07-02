function addSpeakers() {
    const mainSection = document.getElementById('main-section')

    const speakers = [
        {name: 'Kenneth', city: 'Los Angeles', topic: 'Health'},
        {name: 'Tiffany', city: 'Paris', topic: 'Science'},
        {name: 'Bobby', city: 'Seattle', topic: 'Art'}
    ]

    let renderSpeakers = speakers.map((i) => 
            `<ul>
                <li>ID: ${i.id} </li>
                <li>Name: ${i.name}</li>
                <li>Email: ${i.email}</li>     
            </ul>`
    )

    const blockSection = document.getElementById('block-section')
    const blockDiv = document.createElement('div')
    
    blockSection.appendChild(blockDiv)
    blockDiv.innerHTML = renderSpeakers
}
addSpeakers()



//console.log(output)