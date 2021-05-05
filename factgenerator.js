'use strict'

function getFact() {
    let randomNumber = Math.random() * facts.length
    let randomNumberFloor = Math.floor(randomNumber)
    let fact = facts[randomNumberFloor].fact
    let name = facts[randomNumberFloor].name

    return {
        fact: fact,
        name: name
    }
}

function factLoader() {
    let fact = getFact()

    factText.textContent = fact.fact
    factName.textContent = fact.name
}

let facts = [
    {
        'fact': 'Kanoners!',
        'name': 'Bosse'
    },
    {
        'fact': 'Hoppsan!',
        'name': 'Kalle'
    },
    {
        'fact': 'Ojsan!',
        'name': 'Lisa'
    },
    {
        'fact': 'Hahahaha!',
        'name': 'Elin'
    },
    {
        'fact': 'Bomber å granater!',
        'name': 'Kapten Haddock'
    },
    {
        'fact': 'Flygfän och spritsmugglare!',
        'name': 'Kapten Haddock'
    }
]

/* GET ELEMENT FOR QUOTES */
let app = document.getElementById('factbox')

/* CREATE ELEMENTS */

let fact = document.createElement('p')
fact.setAttribute('class', 'fakta')

let factText = document.createElement('p')

let factName = document.createElement('p')

/* LOAD ON DOC.LOAD */
window.onload =  factLoader()

/* APPEND THE ELEMENTS */
app.appendChild(fact)
fact.appendChild(factText)
fact.appendChild(factName)