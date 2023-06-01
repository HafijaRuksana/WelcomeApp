// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  changeToSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  changeToSubscribed = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you!Happy Learning</p>
        {isSubscribed ? (
          <button
            type="button"
            className="button"
            onClick={this.changeToSubscribe}
          >
            Subscribed
          </button>
        ) : (
          <button
            type="button"
            className="button"
            onClick={this.changeToSubscribed}
          >
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
