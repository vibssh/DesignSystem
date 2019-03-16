import React, { Component } from 'react';
import './scss/app.scss';
import Header from './components/DS/Header/Header';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row row--spacing">
            <div className="col-12">
              <h1>Hello World !</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
