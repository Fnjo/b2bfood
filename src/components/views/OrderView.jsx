/* eslint-disable array-callback-return */
import React from 'react'
import './OrderView.scss'
// import PropTypes from 'prop-types'
import { PageTitle } from '../titles/PageTitle'
import { OrderRow } from '../order/OrderRow'
import cartIcon from '../../images/cart.svg'
import removeIcon from '../../images/exit.svg'
import { Button } from '../buttons/Button'
import { Modal } from '../modals/Modal'
import { Form } from '../forms/Form'
import logo from '../../images/logo.svg'

export class OrderView extends React.Component {
    state = {
        isMobile: false,
        cart: [],
        activeModal: false,
        showDetails: false,
        formData: {},
        activeModalComplete: false
    }

    // static propTypes = {

    // }

    data = JSON.parse(localStorage.getItem('b2bfood'))

    componentDidMount() {
        const mobile = window.matchMedia('(max-width: 600px)').matches
        if (mobile) {
            this.setState({
                isMobile: true
            })
        }
    }

    render() {
        const { showDetails, activeModal } = this.state

        if (!this.data) {
            this.data = []
        }

        const companyName = this.props.match.params.id

        // console.log(this.data.menus)
        // console.log(this.data.clients)
        let menuname
        let items
        let total = 0

        this.data.clients.find(client => {
            if (companyName.toUpperCase() === client.company.toUpperCase()) {
                menuname = client.menu
            }
        })

        this.data.menus.find(menu => {
            if (menu.menuname === menuname) {
                items = menu.items
            }
        })

        // console.log(items)

        return (
            <div className={'order'}>
                <div className={'order-left'}>
                    <img src={logo} alt='logo' className={'order-left-logo'} />
                    <div className={'order-left-content'}>
                        <div className={'order-left-header'}>
                            <PageTitle title={`Hello, ${companyName}`} />
                            <h2>{menuname}</h2>
                        </div>
                        {this.data &&
                            items.map(item => {
                                return (
                                    <OrderRow
                                        key={item.numer}
                                        index={item.number}
                                        dish={item.dish}
                                        price={item.price}
                                        description={item.description}
                                        onIncrease={this.onIncrease(item)}
                                        onDecrease={this.onDecrease(item)}
                                    />
                                )
                            })}
                    </div>
                </div>
                {showDetails && <span className={'blackLayer'} />}
                <div
                    className={
                        showDetails
                            ? 'order-right order-right-showOnMobile'
                            : 'order-right'
                    }
                >
                    <div className={'order-right-mobile-header'}>
                        <h3>Order</h3>
                        <img
                            src={removeIcon}
                            alt='remove icon'
                            onClick={this.toggleDetails}
                        />
                    </div>
                    <div className={'cart'}>
                        <div className={'cart-header'}>
                            <h3>Order</h3>
                            <img src={cartIcon} alt='cart icon' />
                        </div>
                        {this.state.cart.map(item => {
                            const price = item.item.price * item.amount

                            total = total + price

                            return (
                                <div className={'cart-row'}>
                                    <div className={'cart-amount'}>
                                        {item.amount}x
                                    </div>
                                    <div className={'cart-name'}>
                                        {item.item.dish}
                                    </div>
                                    <div className={'cart-price'}>
                                        €{price.toFixed(2)}
                                    </div>
                                </div>
                            )
                        })}
                        <div className={'cart-row cart-row-last'}>
                            <div className={'cart-amount'} />

                            <div className={'cart-name'}>Total</div>
                            <div className={'cart-price'}>
                                €{total.toFixed(2)}
                            </div>
                        </div>
                        <Button
                            text={'Order'}
                            onClick={this.toggleModal}
                        ></Button>
                    </div>
                </div>
                <div
                    className={'order-cart-overlay'}
                    onClick={this.toggleDetails}
                >
                    <img src={cartIcon} alt='cart icon' />
                    <div className={'order-cart-overlay-total'}>
                        €{total.toFixed(2)}
                    </div>
                </div>
                <Modal
                    className={'order'}
                    isActive={activeModal}
                    closeModal={this.toggleModal}
                    title={'Order summary'}
                >
                    <div className={'summary'}>
                        {this.state.cart.map(item => {
                            const price = item.item.price * item.amount

                            total = total + price

                            return (
                                <div className={'summary-row'}>
                                    <div className={'summary-amount'}>
                                        {item.amount}x
                                    </div>
                                    <div className={'summary-name'}>
                                        {item.item.dish}
                                    </div>
                                    <div className={'summary-price'}>
                                        €{price.toFixed(2)}
                                    </div>
                                </div>
                            )
                        })}
                        <div className={'summary-row summary-row-last'}>
                            <div className={'summary-amount'} />

                            <div className={'summary-name'}>Total</div>
                            <div className={'summary-price'}>
                                €{total.toFixed(2)}
                            </div>
                        </div>
                    </div>
                    <Form
                        btnText={'Place order'}
                        submitData={event => this.submitOrderData(event)}
                    >
                        <h3>Order note</h3>
                        <div className={'note'}>
                            <textarea
                                name='note'
                                placeholder='Add notes here that you want to notice the restaurant about'
                            ></textarea>
                        </div>
                        <div className={'delivery'}>
                            <h3>Select time of delivery</h3>
                            <label>
                                <input
                                    type='radio'
                                    name='delivery'
                                    value='lunch'
                                    required
                                />
                                Lunch (between 12pm - 1pm)
                            </label>
                            <label>
                                <input
                                    type='radio'
                                    name='delivery'
                                    value='diner'
                                    required
                                />
                                Diner (between 6pm - 7pm)
                            </label>
                        </div>
                        <div className={'payment'}>
                            <h3>Select time of payment</h3>
                            <label>
                                <input
                                    type='radio'
                                    name='payment'
                                    value='online'
                                    required
                                />
                                Now (This will redirect you to your payment
                                provider)
                            </label>
                            <label className={'laterPayment'}>
                                <div className={'laterPayment-checkbox'}>
                                    <input
                                        type='radio'
                                        name='payment'
                                        value='later'
                                        required
                                    />
                                    Later, please specify
                                </div>
                                <textarea
                                    name='reason'
                                    placeholder='Please specify when, where and how you want to pay'
                                ></textarea>
                            </label>
                        </div>
                    </Form>
                </Modal>
                <Modal
                    className={'order-complete'}
                    isActive={this.state.activeModalComplete}
                    closeModal={this.toggleCloseModalComplete}
                    title={'Thank you for your order!'}
                >
                    <p>An invoice of your order will be sent to your email.</p>
                </Modal>
            </div>
        )
    }

    onIncrease = item => {
        return amount => {
            const foundItem = this.state.cart.find(dish => {
                return dish.item.number === item.number
            })

            if (foundItem) {
                foundItem.amount = amount
                this.setState({
                    cart: this.state.cart
                })
            } else {
                this.setState({
                    cart: [...this.state.cart, { item, amount }]
                })
            }
        }
    }

    onDecrease = item => {
        return amount => {
            const foundItem = this.state.cart.find(dish => {
                return dish.item.number === item.number
            })

            if (foundItem) {
                foundItem.amount = amount
                if (foundItem.amount === 0) {
                    this.setState({
                        cart: this.state.cart.filter(dish => {
                            return dish.item.number !== item.number
                        })
                    })
                    return
                }

                this.setState({
                    cart: this.state.cart
                })
            }
        }
    }

    toggleDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    toggleModal = () => {
        this.setState({
            activeModal: !this.state.activeModal,
            showDetails: false
        })
    }

    toggleModalComplete = () => {
        this.setState({
            activeModalComplete: !this.state.activeModalComplete,
            showDetails: false,
            formData: {},
            cart: []
        })
    }

    toggleCloseModalComplete = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    submitOrderData = event => {
        const stored = JSON.parse(localStorage.getItem('b2bfood'))
        event.preventDefault()
        const form = event.target
        const newdata = new FormData(form)

        this.setState(
            {
                formData: this.objectifyFormData(newdata)
            },
            () => {
                console.log(this.state.formData)
                stored.orders.push(this.state.formData)
                localStorage.setItem('b2bfood', JSON.stringify(stored))
                // this.data = JSON.parse(localStorage.getItem('b2bfood'))
                this.toggleModal()
                this.toggleModalComplete()
            }
        )
    }

    objectifyFormData = fd => {
        const data = {}
        let orderInfo = []
        let total = 0
        let dishes = 0
        let dishAndAmount = {}
        const months = [
            'jan',
            'feb',
            'mar',
            'Apr',
            'may',
            'jun',
            'jul',
            'aug',
            'sep',
            'oct',
            'nov',
            'dec'
        ]
        const stored = JSON.parse(localStorage.getItem('b2bfood'))
        const orderNo =
            parseFloat(stored.orders[stored.orders.length - 1].order) + 1
        const companyName = this.props.match.params.id
        let newDate = new Date()
        let time =
            newDate.getHours() +
            ':' +
            (newDate.getMinutes() < 10 ? '0' : '') +
            newDate.getMinutes()

        let date =
            newDate.getDate() +
            ' ' +
            months[newDate.getMonth()] +
            ' ' +
            newDate.getFullYear()

        let orderNote = {}

        this.state.cart.map(item => {
            const price = item.item.price * item.amount
            total = total + price
            dishAndAmount = {}
            dishAndAmount['amount'] = item.amount
            dishAndAmount['dish'] = item.item.dish
            orderInfo.push(dishAndAmount)
            dishes = dishes + item.amount
        })

        fd.forEach((value, key) => {
            console.log(value, key)
            if (key === 'payment' && value === 'later') {
                data['payment'] = fd.get('reason')
            } else if (key === 'reason') {
                return
            } else if (key === 'note') {
                orderNote['note'] = value
                orderInfo.push(orderNote)
            } else {
                data[key] = value
            }
        })

        this.data.clients.find(client => {
            if (companyName.toUpperCase() === client.company.toUpperCase()) {
                data['menu'] = client.menu
                data['booth'] = client.booth
            }
        })
        data['dishes'] = dishes
        data['price'] = total.toFixed(2)
        data['orderInfo'] = orderInfo
        data['date'] = date
        data['time'] = time
        data['order'] = orderNo.toString()
        data['company'] = companyName

        return data
    }
}
