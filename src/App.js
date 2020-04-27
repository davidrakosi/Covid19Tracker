import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

import coronaImg from './images/image.png';

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    this.handleCountry();
  }

  handleCountry = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const {data, country} = this.state

    return(
      <React.Fragment>
        <div className={styles.imgDiv}>
          <img className={styles.image} src={coronaImg} alt="COVID-19"/>
        </div>
        <div className={styles.container}>
          <div className={styles.cards}><Cards data={data}/></div>
          <div className={styles.subContainer}>
            <CountryPicker handleCountry={this.handleCountry}/>
            <Chart data={data} country={country}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;