let etoile = 'A'
let espace = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
let pyramide =''

for (let i = 0; i < 16; i++){
    console.log(pyramide + espace.join(' ') + pyramide)
    pyramide += etoile
    espace.pop()
}

console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')