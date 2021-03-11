const company1 = {
    id: 0,
    name: 'Бюджетный вариант',
    image: 'https://coffee-break.pro/2642-thickbox_default/stakan-odnorazovyj-huhtamaki-prozrachnyj-200ml-100sht-up.jpg',
}

const company2 = {
    id: 1,
    name: 'Дружеский вариант',
    image: 'https://buttylka.ru/images/but.png',
}

const company3 = {
    id: 2,
    name: 'Классический вариант',
    image: 'https://www.gammaplast.lv/public/images/products/pet%20mw%201.50.png',
}

const company4 = {
    id: 3,
    name: 'Премиум вариант',
    image: 'https://static.tildacdn.com/tild6330-6131-4361-a164-373661616633/5L1.png',
}

export const categoriesWithCompanies = [
    {
        id: 0,
        name: 'Вода',
        companies: [company1]
    },
    {
        id: 1,
        name: 'Ёмкости',
        companies: [company3, company4]
    },
    {
        id: 2,
        name: 'Доставка',
        companies: [company2, company4]
    },
    {
        id: 3,
        name: 'Все',
        companies: [company1, company2, company3, company4]
    }
]