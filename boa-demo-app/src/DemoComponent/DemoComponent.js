//Theme.js
import React from 'react'
const ThemeContext = React.createContext('light')
export default ThemeContext




// DemoButton.js
import React from 'react'
import ThemeContext from './DemoComponent'

const DemoButton = (props) => (
  <React.Fragment>
    <ThemeContext.Consumer>
      {(theme) => (
        <div>
          <button className={props.theme} {...props}>
            Submit :{props.theme}
          </button>
          <div
            className={props.theme}
            style={{ height: '300px', width: '300px' }}
          >
            test
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  </React.Fragment>
)

export default DemoButton


// DemoComponent.js  (use this in APP)
import React, { Component } from 'react'
import ThemeContext from './DemoComponent'
import DemoButton from './Button'

class DemoComponent extends Component {
  state = {
    theme: 'dark',
    themes: ['light', 'dark'],
  }
  handleChange(event) {
    this.setState({ theme: event.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <h1>usage of context api</h1>
        <h3>current theme:{this.state.theme}</h3>
        <select
          value={this.state.theme}
          onChange={this.handleChange.bind(this)}
        >
          {this.state.themes.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>

        <ThemeContext.Provider value={this.state.theme}>
                <DemoButton theme={this.state.theme} />
               
        </ThemeContext.Provider>
      </React.Fragment>
    )
  }
}

export default DemoComponent

