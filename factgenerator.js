'use strict'

function getFact() {
    let randomNumber = Math.random() * facts.length
    let randomNumberFloor = Math.floor(randomNumber)
    let p1 = facts[randomNumberFloor].p1
    let p2 = facts[randomNumberFloor].p2

    return {
        p1: p1,
        p2: p2
    }
}

function factLoader() {
    let p1 = getFact()

    factText.textContent = p1.p1
    factName.textContent = p1.p2
}

let facts = [
    {
        'p1': 'Enligt myterna fick soldaten Feidippides uppdraget att meddela Aten att de hade segrat vid slaget vid Maraton.',
        'p2': 'Han spurtade hela sträckan och förmedlade budskapet. Sedan dog han på grund av den långa spurten.'
    },
    {
        'p1': 'Från början var friidrotten en amatörsport. Detta innebar helt enkelt att man inte fick utöva sporten på proffsnivå utan att riskera att bli avstängd.',
        'p2': 'Dessa regler upphävdes inte förrän år 1982'
    },
    {
        'p1': 'Det Svenska friidrottsförbundet är det femte äldsta nationella friidrottsförbundet i världen.',
        'p2': 'Förbundet var med och skapade den internationella organisationen "World Athletics" och en svensk var deras första ordförande.'
    },
    {
        'p1': '"Gång" är en gren som främst ingår på internationella friidrottstävlingar. Distanserna är vanligtvis 20 eller 50 km, och en av de viktigaste reglerna är att man alltid måste ha minst en fot i marken. Detta bedöms dock med blotta ögat, inte med kamera.',
        'p2': 'Sverige har ett eget gångförbund separat från Svenska Friidrottsförbundet. Det kallas Svenska gång- och vandrarförbundet.'
    }
]

/* GET ELEMENT FOR QUOTES */
let app = document.getElementById('factbox')

/* CREATE ELEMENTS */

let p1 = document.createElement('p')
p1.setAttribute('class', 'fakta')

let factText = document.createElement('p')

let factName = document.createElement('p')

/* LOAD ON DOC.LOAD */
window.onload =  factLoader()

/* APPEND THE ELEMENTS */
app.appendChild(p1)
p1.appendChild(factText)
p1.appendChild(factName)