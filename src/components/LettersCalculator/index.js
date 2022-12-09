import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {value: '0'}

  OnLettersCount = event => {
    const phrase = event.target.value
    const lenghtOfPhrase = phrase.length
    this.setState({value: lenghtOfPhrase})
  }

  render() {
    const {value} = this.state

    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="main-heading">Calculate the Letters you Enter</h1>
          <div>
            <label className="para" htmlFor="phrase">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input-style"
              onChange={this.OnLettersCount}
              placeholder="Enter the phrase"
              id="phrase"
            />
          </div>
          <div className="count-content">
            <p>No.of letters: {value}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
