import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const GET_DRUGS = gql`
  {
    drugs {
      id
      name
      inChi
    }
  }
`;

const Drugs = ({onDrugSelected}) => (
  <Query query={GET_DRUGS}>
    {({loading, error, data }) => {
      if(loading) return 'Loading...';
      if(error) return `Error! ${error.message}`;
      return (
        <select name="dog" onChange={onDrugSelected}>
        {data.drugs.map(drug => (
          <option key={drug.id} value={drug.name}>
            {drug.name}
          </option>
        ))}
        </select>
      );
    }}
  </Query>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Drugs/>
      </div>
    );
  }
}

export default App;
