import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  onClick = event => {
    this.setState(prevState => ({
      count: prevState.count - Number(event.target.value),
    }))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="user-container">
            <span className="logo">S</span>
            <p className="username">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <div>
              <p>{count}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
            <ul className="items-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  onClick={this.onClick}
                  key={eachDenomination.id}
                  denominationsDetails={eachDenomination}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
