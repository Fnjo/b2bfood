import React from 'react'
import './App.scss'
import Router from './components/Router'

export default function App() {
    const data = {
        version: [{ versionNumber: 1 }],
        orders: [
            {
                delivery: 'lunch',
                payment: 'online',
                menu: 'IBC 2019',
                booth: '10 - E15',
                dishes: 11,
                price: '140.46',
                orderInfo: [
                    { amount: 1, dish: 'Fried chicken' },
                    { amount: 1, dish: 'Wonton soup' },
                    { amount: 1, dish: 'Noodles' },
                    { amount: 1, dish: 'Vegetables' },
                    { amount: 1, dish: 'Fried rice' },
                    { amount: 1, dish: 'Chicken fried rice' },
                    { amount: 1, dish: 'Noodle soup' },
                    { amount: 1, dish: 'Beef stew' },
                    { amount: 1, dish: 'Pork buns' },
                    { amount: 1, dish: 'Tomato soup' },
                    { amount: 1, dish: 'Chicken soup' },
                    { note: 'I need extra utensils and plates' }
                ],
                length: 12,
                date: '12 jan 2020',
                time: '9:15',
                order: '109',
                company: 'Apple'
            },
            {
                order: '110',
                company: 'HvA',
                payment: 'With cash in the restaurant',
                booth: '8 - F23',
                menu: 'IBC 2018',
                dishes: 9,
                time: '9:32',
                delivery: 'lunch',
                price: '45.99',
                date: '12 jan 2020',
                orderInfo: [
                    {
                        amount: 3,
                        dish: 'Hot wings'
                    },
                    {
                        amount: 1,
                        dish: 'Whole chicken'
                    },
                    {
                        amount: 5,
                        dish: 'Fried rice                        '
                    },
                    { note: '' }
                ]
            },
            {
                order: '111',
                company: 'Nike',
                payment: 'online',
                booth: '9 - G02',
                menu: 'ISE 2019',
                dishes: 5,
                time: '9:46',
                delivery: 'lunch',
                price: '25.00',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 1, dish: 'Noodle soup' },
                    { amount: 1, dish: 'Beef stew' },
                    { amount: 1, dish: 'Pork buns' },
                    { amount: 1, dish: 'Tomato soup' },
                    { amount: 1, dish: 'Chicken soup' },
                    { note: 'Pleas add extra napkins' }
                ]
            },
            {
                order: '112',
                company: 'HvA',
                payment: 'With cash with the next delivery',
                booth: '8 - F23',
                menu: 'IBC 2018',
                dishes: 12,
                time: '9:59',
                delivery: 'lunch',
                price: '42.50',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 1, dish: 'Fried rice' },
                    { amount: 3, dish: 'Chicken fried rice' },
                    { amount: 2, dish: 'Noodle soup' },
                    { amount: 1, dish: 'Beef stew' },
                    { amount: 5, dish: 'Pork buns' },
                    { note: 'Make it fast please' }
                ]
            },
            {
                order: '113',
                company: 'Apple',
                payment: 'online',
                booth: '10 - E15',
                menu: 'IBC 2019',
                dishes: 22,
                time: '10:01',
                delivery: 'lunch',
                price: '95.00',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 1, dish: 'Chicken fried rice' },
                    { amount: 2, dish: 'Noodle soup' },
                    { amount: 3, dish: 'Beef stew' },
                    { amount: 1, dish: 'Pork buns' },
                    { amount: 2, dish: 'Tomato soup' },
                    { amount: 2, dish: 'Chicken soup' },
                    { amount: 3, dish: 'Fried chicken' },
                    { amount: 1, dish: 'Wonton soup' },
                    { amount: 5, dish: 'Noodles' },
                    { amount: 1, dish: 'Vegetables' },
                    { amount: 1, dish: 'Fried rice' },
                    { note: 'Make it spicy' }
                ]
            },
            {
                order: '114',
                company: 'Nike',
                payment: 'All at once at the end of the event',
                booth: '9 - G02',
                menu: 'ISE 2019',
                dishes: 8,
                time: '10:10',
                delivery: 'lunch',
                price: '64.55',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 2, dish: 'Tomato soup' },
                    { amount: 2, dish: 'Chicken soup' },
                    { amount: 3, dish: 'Fried chicken' },
                    { amount: 1, dish: 'Wonton soup' },
                    { note: 'Im alergic to sesame' }
                ]
            },
            {
                order: '115',
                company: 'Apple',
                payment: 'online',
                booth: '10 - E15',
                menu: 'IBC 2019',
                dishes: 13,
                time: '10:24',
                delivery: 'lunch',
                price: '22.10',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 1, dish: 'Wonton soup' },
                    { amount: 2, dish: 'Noodles' },
                    { amount: 1, dish: 'Vegetables' },

                    { amount: 4, dish: 'Chicken fried rice' },
                    { amount: 1, dish: 'Noodle soup' },

                    { amount: 3, dish: 'Pork buns' },
                    { amount: 1, dish: 'Tomato soup' },

                    { note: 'We want extra' }
                ]
            },
            {
                order: '116',
                company: 'HvA',
                payment: 'With cash at delivery',
                booth: '8 - F23',
                menu: 'IBC 2018',
                dishes: 10,
                time: '10:26',
                delivery: 'lunch',
                price: '74.25',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 2, dish: 'Noodles' },
                    { amount: 1, dish: 'Vegetables' },
                    { amount: 2, dish: 'Fried rice' },
                    { amount: 1, dish: 'Chicken fried rice' },
                    { amount: 1, dish: 'Noodle soup' },
                    { amount: 3, dish: 'Beef stew' },
                    { note: 'No garlic in the stew please' }
                ]
            },
            {
                order: '117',
                company: 'HvA',
                payment: 'online',
                booth: '8 - F23',
                menu: 'IBC 2018',
                dishes: 11,
                time: '10:33',
                delivery: 'lunch',
                price: '34.99',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 3, dish: 'Noodle soup' },
                    { amount: 1, dish: 'Beef stew' },
                    { amount: 2, dish: 'Pork buns' },
                    { amount: 1, dish: 'Tomato soup' },
                    { amount: 4, dish: 'Chicken soup' },
                    { note: 'More salt on everything' }
                ]
            },
            {
                order: '118',
                company: 'Nike',
                payment: 'With cash at delivery',
                booth: '9 - G02',
                menu: 'ISE 2019',
                dishes: 5,
                time: '10:46',
                delivery: 'lunch',
                price: '31.00',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 1, dish: 'Vegetables' },
                    { amount: 1, dish: 'Chicken fried rice' },
                    { amount: 1, dish: 'Noodle soup' },
                    { amount: 1, dish: 'Pork buns' },
                    { amount: 1, dish: 'Tomato soup' },
                    { note: 'Make it less spicy' }
                ]
            },
            {
                order: '119',
                company: 'Apple',
                payment: 'With cash at the end of the event',
                booth: '10 - E15',
                menu: 'IBC 2019',
                dishes: 10,
                time: '11:11',
                delivery: 'lunch',
                price: '29.99',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 1, dish: 'Beef stew' },

                    { amount: 2, dish: 'Tomato soup' },

                    { amount: 1, dish: 'Fried chicken' },

                    { amount: 2, dish: 'Noodles' },

                    { amount: 1, dish: 'Fried rice' },

                    { amount: 3, dish: 'Noodle soup' },
                    { note: 'Can I have extra forks' }
                ]
            },
            {
                order: '120',
                company: 'HvA',
                payment: 'online',
                booth: '8 - F23',
                menu: 'IBC 2018',
                dishes: 16,
                time: '11:32',
                delivery: 'lunch',
                price: '75.50',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 2, dish: 'Chicken fried rice' },
                    { amount: 1, dish: 'Noodle soup' },

                    { amount: 3, dish: 'Pork buns' },
                    { amount: 1, dish: 'Tomato soup' },

                    { amount: 2, dish: 'Fried chicken' },
                    { amount: 2, dish: 'Wonton soup' },

                    { amount: 3, dish: 'Vegetables' },
                    { amount: 2, dish: 'Fried rice' },
                    { note: '' }
                ]
            },
            {
                order: '121',
                company: 'Nike',
                payment: 'With cash at delivery',
                booth: '9 - G02',
                menu: 'ISE 2019',
                dishes: 15,
                time: '15:17',
                delivery: 'diner',
                price: '58.99',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 3, dish: 'Beef stew' },
                    { amount: 1, dish: 'Pork buns' },
                    { amount: 2, dish: 'Chicken soup' },
                    { amount: 3, dish: 'Fried chicken' },
                    { amount: 5, dish: 'Noodles' },
                    { amount: 1, dish: 'Vegetables' },

                    { note: 'Can we have extra spoons' }
                ]
            },
            {
                order: '122',
                company: 'HvA',
                payment: 'online',
                booth: '8 - F23',
                menu: 'IBC 2018',
                dishes: 11,
                time: '16:47',
                delivery: 'diner',
                price: '16.50',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 1, dish: 'rice' },
                    { amount: 2, dish: 'veggies' },
                    { amount: 2, dish: 'chicken' },
                    { note: 'Can we have some sauce on the side' }
                ]
            },
            {
                order: '123',
                company: 'Apple',
                payment: 'online',
                booth: '10 - E15',
                menu: 'IBC 2019',
                dishes: 20,
                time: '16:55',
                delivery: 'diner',
                price: '105.00',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 1, dish: 'Chicken fried rice' },
                    { amount: 2, dish: 'Noodle soup' },
                    { amount: 3, dish: 'Beef stew' },
                    { amount: 1, dish: 'Pork buns' },
                    { amount: 2, dish: 'Tomato soup' },
                    { amount: 2, dish: 'Chicken soup' },
                    { amount: 3, dish: 'Fried chicken' },
                    { amount: 1, dish: 'Wonton soup' },
                    { amount: 3, dish: 'Noodles' },
                    { amount: 1, dish: 'Vegetables' },
                    { amount: 1, dish: 'Fried rice' },
                    { note: 'We need extra napkins and plates' }
                ]
            },
            {
                order: '124',
                company: 'HvA',
                payment: 'online',
                booth: '8 - F23',
                menu: 'IBC 2018',
                dishes: 11,
                time: '17:00',
                delivery: 'diner',
                price: '32.10',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 2, dish: 'Tomato soup' },
                    { amount: 3, dish: 'Fried chicken' },
                    { amount: 5, dish: 'Noodles' },
                    { amount: 1, dish: 'Fried rice' },
                    { note: '' }
                ]
            },
            {
                order: '125',
                company: 'Nike',
                payment: 'With cash',
                booth: '9 - G02',
                menu: 'ISE 2019',
                dishes: 15,
                time: '17:10',
                delivery: 'diner',
                price: '55.55',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 3, dish: 'Noodle soup' },
                    { amount: 3, dish: 'Beef stew' },
                    { amount: 1, dish: 'Pork buns' },
                    { amount: 2, dish: 'Chicken soup' },
                    { amount: 3, dish: 'Fried chicken' },
                    { amount: 1, dish: 'Wonton soup' },
                    { amount: 1, dish: 'Vegetables' },
                    { amount: 1, dish: 'Fried rice' },
                    { note: 'Please dont add garlic to the buns and beef stew' }
                ]
            }
        ],
        payments: [
            {
                order: '111',
                company: 'Nike',
                payment: 'online',
                booth: '9 - G02',
                menu: 'ISE 2019',
                dishes: 5,
                time: '9:46',
                delivery: 'lunch',
                price: '25.00',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 1, dish: 'Noodle soup' },
                    { amount: 1, dish: 'Beef stew' },
                    { amount: 1, dish: 'Pork buns' },
                    { amount: 1, dish: 'Tomato soup' },
                    { amount: 1, dish: 'Chicken soup' },
                    { note: 'Pleas add extra napkins' }
                ]
            },
            {
                order: '122',
                company: 'HvA',
                payment: 'online',
                booth: '8 - F23',
                menu: 'IBC 2018',
                dishes: 11,
                time: '16:47',
                delivery: 'diner',
                price: '16.50',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 1, dish: 'rice' },
                    { amount: 2, dish: 'veggies' },
                    { amount: 2, dish: 'chicken' },
                    { note: 'Can we have some sauce on the side' }
                ]
            },
            {
                order: '119',
                company: 'Apple',
                payment: 'With cash at the end of the event',
                booth: '10 - E15',
                menu: 'IBC 2019',
                dishes: 10,
                time: '11:11',
                delivery: 'lunch',
                price: '29.99',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 1, dish: 'Beef stew' },

                    { amount: 2, dish: 'Tomato soup' },

                    { amount: 1, dish: 'Fried chicken' },

                    { amount: 2, dish: 'Noodles' },

                    { amount: 1, dish: 'Fried rice' },

                    { amount: 3, dish: 'Noodle soup' },
                    { note: 'Can I have extra forks' }
                ]
            },
            {
                order: '116',
                company: 'HvA',
                payment: 'With cash at delivery',
                booth: '8 - F23',
                menu: 'IBC 2018',
                dishes: 10,
                time: '10:26',
                delivery: 'lunch',
                price: '74.25',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 2, dish: 'Noodles' },
                    { amount: 1, dish: 'Vegetables' },
                    { amount: 2, dish: 'Fried rice' },
                    { amount: 1, dish: 'Chicken fried rice' },
                    { amount: 1, dish: 'Noodle soup' },
                    { amount: 3, dish: 'Beef stew' },
                    { note: 'No garlic in the stew please' }
                ]
            },
            {
                order: '118',
                company: 'Nike',
                payment: 'With cash at delivery',
                booth: '9 - G02',
                menu: 'ISE 2019',
                dishes: 5,
                time: '10:46',
                delivery: 'lunch',
                price: '31.00',
                date: '12 jan 2020',
                orderInfo: [
                    { amount: 1, dish: 'Vegetables' },
                    { amount: 1, dish: 'Chicken fried rice' },
                    { amount: 1, dish: 'Noodle soup' },
                    { amount: 1, dish: 'Pork buns' },
                    { amount: 1, dish: 'Tomato soup' },
                    { note: 'Make it less spicy' }
                ]
            },
            {
                delivery: 'lunch',
                payment: 'online',
                menu: 'IBC 2019',
                booth: '10 - E15',
                dishes: 11,
                price: '140.46',
                orderInfo: [
                    { amount: 1, dish: 'Fried chicken' },
                    { amount: 1, dish: 'Wonton soup' },
                    { amount: 1, dish: 'Noodles' },
                    { amount: 1, dish: 'Vegetables' },
                    { amount: 1, dish: 'Fried rice' },
                    { amount: 1, dish: 'Chicken fried rice' },
                    { amount: 1, dish: 'Noodle soup' },
                    { amount: 1, dish: 'Beef stew' },
                    { amount: 1, dish: 'Pork buns' },
                    { amount: 1, dish: 'Tomato soup' },
                    { amount: 1, dish: 'Chicken soup' },
                    { note: 'I need extra utensils and plates' }
                ],
                length: 12,
                date: '12 jan 2020',
                time: '9:15',
                order: '109',
                company: 'Apple'
            }
        ],
        clients: [
            {
                company: 'HvA',
                booth: '8 - F23',
                menu: 'IBC 2018',
                contact: 'Marianne Meiijers',
                email: 'info@hva.nl',
                phone: '0685917401'
            },
            {
                company: 'Nike',
                booth: '9 - G02',
                menu: 'ISE 2019',
                contact: 'Tinker Hatfield',
                email: 'info@nike.com',
                phone: '0629572955'
            },
            {
                company: 'Apple',
                booth: '10 - E15',
                menu: 'IBC 2019',
                contact: 'Steve Jobs',
                email: 'info@apple.com',
                phone: '0605662951'
            }
        ],
        menus: [
            {
                menuname: 'IBC 2019',
                dishes: '15',
                items: [
                    {
                        number: '1',
                        dish: 'Rice',
                        description: 'Cooked white rice',
                        price: '4.50'
                    },
                    {
                        number: '2',
                        dish: 'Fried chicken',
                        description: 'Fried chicken with bones',
                        price: '14.50'
                    },
                    {
                        number: '3',
                        dish: 'Noodles',
                        description: 'Without toppings',
                        price: '10'
                    },
                    {
                        number: '4',
                        dish: 'Wonton soup',
                        description: 'Soup with wontons',
                        price: '24.99'
                    },
                    {
                        number: '5',
                        dish: 'Vegetables',
                        description: 'Various vegetables',
                        price: '4.99'
                    },
                    {
                        number: '6',
                        dish: 'Fried rice',
                        description: 'Fried rice with veggies',
                        price: '9.50'
                    },
                    {
                        number: '7',
                        dish: 'Chicken fried rice',
                        description: 'Fried chicken with chicken',
                        price: '16.50'
                    },
                    {
                        number: '8',
                        dish: 'Noodle soup',
                        description: 'Noodles with miso soup',
                        price: '12'
                    },
                    {
                        number: '9',
                        dish: 'Beef stew',
                        description: 'Stewed beef with soup',
                        price: '22.99'
                    },
                    {
                        number: '10',
                        dish: 'Pork buns',
                        description: 'Buns with pork meat',
                        price: '6.99'
                    },
                    {
                        number: '11',
                        dish: 'Tomato soup',
                        description: 'With pieces of tomato',
                        price: '6.50'
                    },
                    {
                        number: '12',
                        dish: 'Chicken soup',
                        description: 'With veggies and chicken',
                        price: '11.50'
                    },
                    {
                        number: '13',
                        dish: 'Takoyaki',
                        description: 'Japanese food (7 pieces)',
                        price: '7'
                    },
                    {
                        number: '14',
                        dish: 'Steak',
                        description: 'Grilled with fries',
                        price: '29.99'
                    },
                    {
                        number: '15',
                        dish: 'Fries',
                        description: 'With mayo',
                        price: '3.99'
                    }
                ]
            },
            {
                menuname: 'ISE 2019',
                dishes: '17',
                items: [
                    {
                        number: '1',
                        dish: 'Noodle soup',
                        description: 'Noodles with miso soup',
                        price: '12'
                    },
                    {
                        number: '2',
                        dish: 'Tomato soup',
                        description: 'With pieces of tomato',
                        price: '6.50'
                    },
                    {
                        number: '3',
                        dish: 'Wonton soup',
                        description: 'Soup with wontons',
                        price: '24.99'
                    },
                    {
                        number: '4',
                        dish: 'Chicken soup',
                        description: 'With veggies and chicken',
                        price: '11.50'
                    },
                    {
                        number: '5',
                        dish: 'Takoyaki',
                        description: 'Japanese food (7 pieces)',
                        price: '7'
                    },
                    {
                        number: '6',
                        dish: 'French fries',
                        description: 'With mayo',
                        price: '3.99'
                    },
                    {
                        number: '7',
                        dish: 'Steak',
                        description: 'Grilled with fries',
                        price: '29.99'
                    },
                    {
                        number: '8',
                        dish: 'Rice',
                        description: 'Cooked white rice',
                        price: '4.50'
                    },
                    {
                        number: '9',
                        dish: 'Fried rice',
                        description: 'Fried rice with veggies',
                        price: '9.50'
                    },
                    {
                        number: '10',
                        dish: 'Pork buns',
                        description: 'Buns with pork meat',
                        price: '6.99'
                    },
                    {
                        number: '11',
                        dish: 'Vegetables',
                        description: 'Various vegetables',
                        price: '4.99'
                    },
                    {
                        number: '12',
                        dish: 'Chicken soup',
                        description: 'With veggies and chicken',
                        price: '11.50'
                    },
                    {
                        number: '13',
                        dish: 'Fried chicken',
                        description: 'Fried chicken with bones',
                        price: '14.50'
                    },
                    {
                        number: '14',
                        dish: 'Beef stew',
                        description: 'Stewed beef with soup',
                        price: '22.99'
                    },
                    {
                        number: '15',
                        dish: 'Pork buns',
                        description: 'Buns with pork meat',
                        price: '6.99'
                    },
                    {
                        number: '16',
                        dish: 'Chicken fried rice',
                        description: 'Fried chicken with chicken',
                        price: '16.50'
                    },
                    {
                        number: '17',
                        dish: 'Fries',
                        description: 'With mayo',
                        price: '3.99'
                    }
                ]
            },
            {
                menuname: 'IBC 2018',
                dishes: '12',
                items: [
                    {
                        number: '1',
                        dish: 'Chicken wings',
                        description: '8 pieces',
                        price: '6.00'
                    },
                    {
                        number: '2',
                        dish: 'Hot wings',
                        description: 'Really hot (8 pieces)',
                        price: '7.00'
                    },
                    {
                        number: '3',
                        dish: 'Whole chicken',
                        description: 'Whole roasted chicken',
                        price: '20.00'
                    },
                    {
                        number: '4',
                        dish: 'Chicken soup',
                        description: 'With veggies and chicken',
                        price: '11.50'
                    },
                    {
                        number: '5',
                        dish: 'Miso ramen',
                        description: 'Japanese ramen in miso soup',
                        price: '14.99'
                    },
                    {
                        number: '6',
                        dish: 'Takoyaki',
                        description: 'Japanese food (7 pieces)',
                        price: '7.00'
                    },
                    {
                        number: '7',
                        dish: 'Rice',
                        description: 'Cooked white rice',
                        price: '4.50'
                    },
                    {
                        number: '8',
                        dish: 'Fried rice',
                        description: 'Fried rice with veggies',
                        price: '9.50'
                    },
                    {
                        number: '9',
                        dish: 'Chicken fried rice',
                        description: 'Fried chicken with chicken',
                        price: '16.50'
                    },
                    {
                        number: '10',
                        dish: 'Chicken soup',
                        description: 'With veggies and chicken',
                        price: '11.50'
                    },
                    {
                        number: '11',
                        dish: 'Noodle soup',
                        description: 'Noodles with miso soup',
                        price: '12'
                    },
                    {
                        number: '12',
                        dish: 'Wonton soup',
                        description: 'Soup with wontons',
                        price: '24.99'
                    }
                ]
            }
        ]
    }

    const checkData = JSON.parse(localStorage.getItem('b2bfood'))
    if (!checkData) {
        console.log('you have no seeder')
        localStorage.setItem('b2bfood', JSON.stringify(data))
    } else if (!checkData.version || checkData.version[0].versionNumber < 1) {
        console.log('seeder is old')
        localStorage.setItem('b2bfood', JSON.stringify(data))
    }

    return (
        <div className='app'>
            <Router />
        </div>
    )
}
