const React = require('react');

class Keypad extends React.Component {

  constructor() {
    super()
    this.enteringPasswordLogger = this.enteringPasswordLogger.bind(this);
  }

  enteringPasswordLogger() {
    console.log('Entering password...');
  }

  render() {
    return(
      <input type="password" onKeyUp={this.enteringPasswordLogger} />
    )
  }
}

module.exports = Keypad;
