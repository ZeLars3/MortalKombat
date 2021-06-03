const player1 = {
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
    name: 'Kitana',
    hp: 70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Katana'],
    attack() {
        console.log(player2.name + ' Fight...')
    }
};

player2.attack()

const createPlayer = (name, player) => {
    const $name = document.createElement('div');
    $name.classList.add('name')
    $name.innerText = player.name

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar')

    const $life = document.createElement('div');
    $life.classList.add('life')
    $life.style.width = player.hp

    const $player = document.createElement('div')
    $player.classList.add(name)

    const $character = document.createElement('div')
    $character.classList.add('character')

    const $img = document.createElement('img')
    $img.src = player.img

    const $arenas = document.querySelector('.arenas')

    $arenas.appendChild($player)
    $player.appendChild($progressbar)
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $player.appendChild($character)
    $character.appendChild($img)
}

createPlayer('player1', player1)
createPlayer('player2', player2)