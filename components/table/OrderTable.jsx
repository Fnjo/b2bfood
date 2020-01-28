import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import './OrderTable.scss'

export class OrderTable extends React.Component {
    static propTypes = {
        tableHeaders: PropTypes.array,
        data: PropTypes.any,
        activeOrder: PropTypes.any,
        page: PropTypes.any,
        mobile: PropTypes.bool
    }

    render() {
        const { tableHeaders, data, activeOrder, page, mobile } = this.props
        if (!data) {
            return 'no data'
        }
        const orderData =
            data.find(order => activeOrder === order.order) || undefined
        const orderInfo = orderData && orderData.orderInfo
        const orderLength = orderInfo && orderInfo.length
        const menuData =
            data.find(menu => activeOrder === menu.menuname) || undefined
        const menuInfo = menuData && menuData.items
        return (
            <div className={'ordertable'}>
                <Table aria-label='customized table'>
                    <TableHead>
                        <TableRow>
                            {tableHeaders &&
                                tableHeaders.map(header => (
                                    <TableCell key={header}>{header}</TableCell>
                                ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {page === 'home' &&
                            orderData !== undefined &&
                            orderInfo.map((order, i) =>
                                i === orderInfo.length - 1 ? (
                                    ''
                                ) : (
                                    <TableRow>
                                        <TableCell>
                                            {order.amount}
                                            <span className={'celldivider'}>
                                                |
                                            </span>
                                        </TableCell>
                                        <TableCell>{order.dish}</TableCell>
                                    </TableRow>
                                )
                            )}
                        {page === 'menu' &&
                            !mobile &&
                            menuData !== undefined &&
                            menuInfo.map((items, i) => (
                                <TableRow>
                                    <TableCell
                                        className={'menu-right-itemnumber'}
                                    >
                                        {`${items.number}.`}
                                        <span className={'celldivider'}>|</span>
                                    </TableCell>
                                    <TableCell>
                                        {items.dish}
                                        <span className={'celldivider'}>|</span>
                                    </TableCell>
                                    <TableCell>
                                        {items.description}
                                        <span className={'celldivider'}>|</span>
                                    </TableCell>
                                    <TableCell
                                        className={'menu-right-itemprice'}
                                    >
                                        {items.price ? `€${items.price}` : ''}
                                    </TableCell>
                                </TableRow>
                            ))}

                        {page === 'menu' &&
                            mobile &&
                            menuData !== undefined &&
                            menuInfo.map((items, i) => (
                                <TableRow>
                                    <TableCell>
                                        {`${items.number}.`}
                                        <span className={'celldivider'}>|</span>
                                    </TableCell>
                                    <TableCell>
                                        {items.dish}
                                        <span className={'celldivider'}>|</span>
                                    </TableCell>
                                    <TableCell>
                                        {items.price ? `€${items.price}` : ''}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                {page === 'home' && (
                    <>
                        <p className={'orderNoteText'}>Order note</p>
                        <div className={'orderNote'}>
                            {orderInfo && (
                                <span>{orderInfo[orderLength - 1].note}</span>
                            )}
                        </div>
                    </>
                )}
            </div>
        )
    }
}
