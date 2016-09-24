const React = require('react');

class EyesOnMe extends React.Component {

  constructor() {
    super();

    this.focusLogger = this.focusLogger.bind(this)
    this.blurLogger = this.blurLogger.bind(this)
  }

  focusLogger() {
    console.log('Good!');
  }

  blurLogger() {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return(
      <button onFocus={this.focusLogger} onBlur={this.blurLogger}>Button!</button>
    )
  }
}


module.exports = EyesOnMe;
