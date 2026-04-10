const list = document.querySelector('#main-list')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' },
]

const formatValue = (value) => {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
}

function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p class="item-price">${formatValue(product.price)}</p>
            </li>
        `
    })

    list.innerHTML = myLi
}

function mapAll() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)
}

function sumAll() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
        <li style="grid-column: 1 / -1; padding: 40px;">
            <p>O valor total dos itens é:</p>
            <p class="item-price" style="font-size: 2.5rem;">${formatValue(totalValue)}</p>
        </li>
    `
}

function filterAll() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAll)
buttonSumAll.addEventListener('click', sumAll)
buttonFilterAll.addEventListener('click', filterAll)