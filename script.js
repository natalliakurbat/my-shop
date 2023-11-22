const items = [{
        title: "Цветы Розы",
        price: 4.5,
        img: "./img/rozy.jpg",
    },
    {
        title: "Бумага гофрированая",
        price: 3,
        img: "./img/bumaga_gofrirovana.jpg",
    },
    {
        title: "Цветы Каллы",
        price: 5,
        img: "./img/kally.jpg",
    },
    {
        title: "Коробки",
        price: 6,
        img: "./img/korobki.jpg",
    },
    {
        title: "Крафтовая бумага",
        price: 2.5,
        img: "./img/kraft.jpg",
    },
    {
        title: "Ленты",
        price: 2,
        img: "./img/lenty.png",
    },
    {
        title: "Цветы Лилии",
        price: 5,
        img: "./img/lilii.jpg",
    },
    {
        title: "Цветы Пионы",
        price: 4.5,
        img: "./img/piony.jpg",
    },
    {
        title: "Цветы Ромашки",
        price: 3,
        img: "./img/romashki.jpg",
    },
    {
        title: "Цветы Розы Кустовые",
        price: 4,
        img: "./img/rozy_kustovyje.jpg",
    },
    {
        title: "Цветы Тюльпаны",
        price: 2.5,
        img: "./img/tulpany.jpg",
    },
    {
        title: "Зелень для цветов",
        price: 3,
        img: "./img/zelen.jpg",
    },
];

//Третий шаг:
let currentState = [...items]; // Создаем копию items

//Первый шаг:
const itemsContainer = document.querySelector("#shop-items"); //Контейнер для хранения товаров
const itemTemplate = document.querySelector("#item-template"); //Шаблон по кот создаем карточку товаров
const nothingFound = document.querySelector("#nothing-found"); //Текст если ничего не найдено

//Третий шаг:
function renderItems(arr) { //функция для грамотного отображения карточек товаров
    nothingFound.textContent = ""; //сбрасываем текст "ничего не найдено"
    itemsContainer.innerHTML = ""; //сбрасываем контейнер с товорами если там что то было

    arr.forEach((item) => { //перебираем массив и отрисовывем товары 
        itemsContainer.append(createShopItem(item));
    });

    if (!arr.length) { //если массив товаров пусто отобразить "ничего не найдено"
        nothingFound.textContent = "Ничего не найдено";
    }
}
//Вызываем функцию для отрисовки карточек => добавляем сортировку по алфавиту (четвертый шаг)
renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));

//Четвертый шаг:
function sortByAlphabet(a, b) { //Функция для помощи сортировки карточек по алфавиту
    if (a.title > b.title) { //если первое название товара больше второго
        return 1;
    }

    if (a.title < b.title) {
        return -1;
    }

    return 0; //если товары равны 
}

//Второй шаг:
function createShopItem(shopItem) { //Функция для верстки товара
    const { title, price, img } = shopItem;

    const item = itemTemplate.content.cloneNode(true); //Берем за основу шаблон товаров

    item.querySelector("h1").textContent = title;
    item.querySelector("img").src = img;
    item.querySelector(".price").textContent = `${price}р/шт`;

    return item;
}

//Шестой шаг:
const searchInput = document.querySelector("#search-input"); //обращаемся к строке поиска товаров

function applySearch() {
    const searchString = searchInput.value.trim().toLowerCase(); //в тексте удаляем пробелы по бокам и приводим к нижнему регистру


}


//Пятый шаг:
const sortControl = document.querySelector("#sort"); //обращаемся к селекту сортировки товаров

sortControl.addEventListener("change", (event) => { //обработчик события при смене вида сортировки
    const selectedOption = event.target.value; //Атрибут value опции селектора что выбрал пользовотель 

    switch (selectedOption) { //в зависимости от вида сортировки упорядочеваем массив товаров
        case "expensive":
            { //сначало дорогие 
                currentState.sort((a, b) => b.price - a.price);
                break;
            }
        case "cheap":
            { //сначало дешевые
                currentState.sort((a, b) => a.price - b.price);
                break;
            }
        case "alphabet":
            { //по алфавиту
                currentState.sort((a, b) => sortByAlphabet(a, b));
                break;
            }
    }

    renderItems(currentState); //после упорядочевания массива отрисовываем 
});