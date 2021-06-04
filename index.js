const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')

const player1 = {
    player: 1,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Granades'],
    attack() {
        console.log(player1.name + ' Fight...')
    }
};

player1.attack()

const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Katana'],
    attack() {
        console.log(player2.name + ' Fight...')
    }
};

player2.attack()

const changeHP = (player) => {
    const $playerLife = document.querySelector('.player'+ player.player +' .life')

    const randomHit = (hp) => {
        const currentHit = hp - Math.ceil(Math.random() * 20)
        return currentHit
    }

    player.hp = randomHit(player.hp)
    $playerLife.style.width = player.hp + '%'

    if (player.hp <= 0) {
        player.hp = 0
        $playerLife.style.width = 0 + '%'
        $arenas.appendChild(playerLose(player.name))
        $randomButton.disabled = true
    }
    console.log(`${player.name} health: ${player.hp}`)
}

const createElement = (tag, className) => {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }  

    return $tag
}

const createPlayer = (playerObj) => {
    const $name = createElement('div', 'name');
    const $progressbar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    const $player = createElement('div', 'player'+ playerObj.player);
    const $character = createElement('div', 'character')
    const $img = createElement('img')
    

    $name.innerText = playerObj.name
    $life.style.width = playerObj.hp + '%'
    $img.src = playerObj.img

    $progressbar.appendChild($life)
    $progressbar.appendChild($name)

    $player.appendChild($character)
    $player.appendChild($progressbar)

    $character.appendChild($img)

    return $player
}

const playerLose = (name) => {
    const $loseTitle = createElement('div', 'loseTitle')
    $loseTitle.innerText = name + ' lose'

    return $loseTitle
}

$randomButton.addEventListener('click', () => {
    console.log('Atack')

    changeHP(player1)
    changeHP(player2)
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))