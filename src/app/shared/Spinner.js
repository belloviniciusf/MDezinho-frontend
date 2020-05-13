import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="spinner-wrapper">
          Carregando...
          <div className="donut"></div>
        </div>
      </div>
    )
  }
}

export default Spinner
