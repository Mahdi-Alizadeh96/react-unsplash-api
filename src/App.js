import React from 'react';
import Searchform from './components/Searchform';
import axios from 'axios';
import TotalResult from './components/TotalResult';


class App extends React.Component {

  state = {
    data : {}
  }

  onSearchForSubmit = async (value) => {
    let result = await axios.get('https://api.unsplash.com/search/photos/?client_id=OGXDdqRWLTY4qyfYSD7nKPjblxsxKsnpDEKI6PTcPzk', {
      params : {
        query : value,
        per_page : 25,
      }
    });
    console.log(result.data)
    this.setState({
      data : result.data,
    })
  };


  render () {
    return (
      <div>
        <Searchform onSearchForSubmit={this.onSearchForSubmit}/>
        <TotalResult data={this.state.data}/>
      </div>
    )
  }
}
export default App;
