import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import './OverviewTable.scss'

export class OverviewTable extends React.Component {
    static propTypes = {
        tableHeaders: PropTypes.array,
        onClick: PropTypes.any,
        activeRow: PropTypes.string,
        data: PropTypes.any,
        uniqueRow: PropTypes.string,
        noColor: PropTypes.any,
        tableCols: PropTypes.any,
        page: PropTypes.any,
        mobile: PropTypes.bool
    }

    state = {
        isActive: false
    }

    render() {
        const {
            tableHeaders,
            onClick,
            activeRow,
            data,
            uniqueRow,
            page
        } = this.props

        return (
            <div className={'overviewtable'}>
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
                        {data
                            .slice(0)
                            .reverse()
                            .map((row, i) => {
                                return (
                                    <TableRow
                                        data-id={row[uniqueRow]}
                                        key={row[uniqueRow]}
                                        onClick={onClick}
                                        className={
                                            uniqueRow
                                                ? activeRow ===
                                                      row[uniqueRow] &&
                                                  'active-overview-row'
                                                : 'no-color'
                                        }
                                    >
                                        {page === 'home' &&
                                            this.renderHomeOverview(
                                                row.order,
                                                row.company,
                                                row.booth,
                                                row.menu,
                                                row.dishes,
                                                row.time
                                            )}
                                        {page === 'clients' &&
                                            this.renderClientsOverview(
                                                row.company,
                                                row.booth,
                                                row.menu
                                            )}
                                        {page === 'menu' &&
                                            this.renderMenuOverview(
                                                row.menuname,
                                                row.dishes
                                            )}
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
            </div>
        )
    }

    renderHomeOverview = (order, company, booth, menu, dishes, time) => {
        if (this.props.mobile) {
            return (
                <>
                    <TableCell>
                        {order}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                    <TableCell>
                        {company}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                    <TableCell>
                        {time}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                </>
            )
        } else {
            return (
                <>
                    <TableCell>
                        {order}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                    <TableCell>
                        {company}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                    <TableCell>
                        {booth}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                    <TableCell>
                        {menu}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                    <TableCell>
                        {dishes}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                    <TableCell>
                        {time}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                </>
            )
        }
    }

    renderClientsOverview = (company, booth, menu) => {
        if (this.props.mobile) {
            return (
                <>
                    <TableCell>
                        {company}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                    <TableCell>
                        {menu}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                </>
            )
        } else {
            return (
                <>
                    <TableCell>
                        {company}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                    <TableCell>
                        {booth}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                    <TableCell>
                        {menu}
                        <span className={'celldivider'}>|</span>
                    </TableCell>
                </>
            )
        }
    }

    renderMenuOverview = (menuname, dishes) => {
        return (
            <>
                <TableCell>
                    {menuname}
                    <span className={'celldivider'}>|</span>
                </TableCell>
                <TableCell>
                    {dishes}
                    <span className={'celldivider'}>|</span>
                </TableCell>
            </>
        )
    }
}
