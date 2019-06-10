import React from 'react'
import './App.css'
var QRCode = require('qrcode.react')

function Result({ url }) {
  return (
    <div className="App">
      <header className="App-header">
        <QRCode size={256} renderAs="svg" value={url} />
        <p>{url}</p>
      </header>
    </div>
  )
}

function Main({ match }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(match)}</p>
        <p>Add the URL you wish to encode to the address.</p>
        <p>
          <i>
            e.g.
            <a href="?url=http://bbc.co.uk">
              https://qr.lab.io?url=http://bbc.co.uk
            </a>
          </i>
        </p>
      </header>
    </div>
  )
}

function App({ match }) {
  let params = new URLSearchParams(window.location.search)
  let url = params.get('url')

  if (url) {
    return <Result url={url} />
  } else {
    return <Main />
  }
}

export default App
