import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  amountWithDrawed = value => {
    const {balance} = this.state
    this.setState(prevstate => ({balance: prevstate.balance - value}))
  }

  render() {
    const {denominationsList} = this.props

    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="profile-container">
            <div className="profile-photo">s</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="light">Your Balance</p>
            <p className="dark">{balance}</p>
          </div>
          <p className="light-last">In Rupees</p>
          <p className="dark">Withdraw</p>
          <p className="light">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(each => (
              <DenominationItem
                details={each}
                amountWithDrawed={this.amountWithDrawed}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
