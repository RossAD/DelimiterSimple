import React from 'react';
import styles from './App.css';
import Search from './components/search.js';
import Head from './components/header.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>
        <Head />
        <Search entries={this.state.entries} />
      </div>
    );
  }
}
