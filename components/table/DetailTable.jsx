import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import './DetailTable.scss'

export class DetailTable extends React.Component {
    static propTypes = {
        data: PropTypes.any,
        activeOrder: PropTypes.any,
        page: PropTypes.any
    }

    render() {
        const { data, activeOrder, page } = this.props
        if (!data) {
            return 'no data'
        }

        return (
            <div className={'detailtable'}>
                <Table aria-label='customized table'>
                    <TableBody>
                        {page === 'home' && activeOrder === ''
                            ? this.renderHomeDetails()
                            : data.map(row => {
                                  if (activeOrder === row.order) {
                                      return this.renderHomeDetails(
                                          row.company,
                                          row.booth,
                                          row.menu,
                                          row.date,
                                          row.time,
                                          row.delivery,
                                          row.price,
                                          row.payment
                                      )
                                  }
                                  return ''
                              })}
                        {page === 'clients' && activeOrder === ''
                            ? this.renderClientDetails()
                            : data.map(row => {
                                  if (activeOrder === row.company) {
                                      return this.renderClientDetails(
                                          row.contact,
                                          row.booth,
                                          row.phone,
                                          row.email,
                                          row.menu
                                      )
                                  }
                                  return ''
                              })}
                    </TableBody>
                </Table>
            </div>
        )
    }

    renderHomeDetails = (
        company,
        booth,
        menu,
        date,
        time,
        delivery,
        price,
        payment
    ) => {
        return (
            <>
                <TableRow key={company}>
                    <TableCell>Company </TableCell>
                    <TableCell>{company}</TableCell>
                </TableRow>
                <TableRow key={booth}>
                    <TableCell>Booth </TableCell>
                    <TableCell>{booth}</TableCell>
                </TableRow>
                <TableRow key={menu}>
                    <TableCell>Menu </TableCell>
                    <TableCell>{menu}</TableCell>
                </TableRow>
                <TableRow key={date}>
                    <TableCell>Date </TableCell>
                    <TableCell>{date}</TableCell>
                </TableRow>
                <TableRow key={time}>
                    <TableCell>Time </TableCell>
                    <TableCell>{time}</TableCell>
                </TableRow>
                <TableRow key={delivery}>
                    <TableCell>Delivery </TableCell>
                    <TableCell>{delivery}</TableCell>
                </TableRow>
                <TableRow key={price}>
                    <TableCell>Price </TableCell>
                    <TableCell>{price ? `€${price}` : ''}</TableCell>
                </TableRow>
                <TableRow key={payment}>
                    <TableCell>Payment </TableCell>
                    <TableCell>{payment}</TableCell>
                </TableRow>
            </>
        )
    }

    renderClientDetails = (contact, booth, phone, email, menu) => {
        return (
            <>
                <TableRow key={contact}>
                    <TableCell>Contact </TableCell>
                    <TableCell>{contact}</TableCell>
                </TableRow>
                <TableRow key={booth}>
                    <TableCell>Booth </TableCell>
                    <TableCell>{booth}</TableCell>
                </TableRow>
                <TableRow key={phone}>
                    <TableCell>Phone </TableCell>
                    <TableCell>{phone}</TableCell>
                </TableRow>
                <TableRow key={email}>
                    <TableCell>E-mail </TableCell>
                    <TableCell>{email}</TableCell>
                </TableRow>
                <TableRow key={menu}>
                    <TableCell>Menu </TableCell>
                    <TableCell>{menu}</TableCell>
                </TableRow>
            </>
        )
    }
}
