import React from 'react'
import PropTypes from 'prop-types'
import './MultiInput.scss'
import { Button } from '../buttons/Button'
import { times } from 'lodash'
import addIcon from '../../images/add-icon.svg'

export class MultiInput extends React.Component {
    state = {
        initialIndices: times(this.props.baseAmount)
    }

    static propTypes = {
        renderInput: PropTypes.func,
        baseAmount: PropTypes.number,
        className: PropTypes.string
        // addButtonLabel?: string,
        // onAddAction?: PropTypes.func,
        // onRemoveAction?: PropTypes.func,
    }

    static defaultProps = {
        baseAmount: 1
    }

    lastUsedInitialIndex = this.props.baseAmount - 1

    render() {
        const { renderInput, className } = this.props
        const { initialIndices } = this.state
        return (
            <div className={'multiInput'}>
                {initialIndices.map((initialIndex, index) => {
                    const remove =
                        initialIndices.length > 1
                            ? () => this.onRemove(index)
                            : undefined

                    return (
                        <div className={className} key={initialIndex}>
                            {renderInput(index, initialIndex, remove)}
                        </div>
                    )
                })}
                <Button
                    className={'add'}
                    icon={addIcon}
                    onClick={() => this.onAdd()}
                />
            </div>
        )
    }

    onAdd = () => {
        // const { onAddAction } = this.props

        this.setState(prevState => ({
            initialIndices: [
                ...prevState.initialIndices,
                ++this.lastUsedInitialIndex
            ]
        }))

        // if (onAddAction) {
        //     onAddAction()
        // }
    }

    onRemove = indexToRemove => {
        // const { onRemoveAction } = this.props
        const { initialIndices } = this.state

        if (initialIndices.length === 0) {
            return
        }

        this.setState({
            initialIndices: initialIndices.filter(
                (initialIndex, index) => index !== indexToRemove
            )
        })

        // if (onRemoveAction) {
        //     onRemoveAction(indexToRemove)
        // }
    }
}
