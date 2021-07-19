import React from 'react';
import './Searchform.css';

class Seachform extends React.Component {

    state = {
        term : '',
      }
    
      searchFormChange = (event) => {
        this.setState({
            term : event.target.value
        });
    }
    
      submitButton = () => {
        this.props.onSearchForSubmit(this.state.term)
      }

    render() {
        return (
            <div>
                <h1 className={'header'}>Unsplash React Search</h1>
                <div className={'Searchform'}>
                    <input value={this.state.term} onChange={this.searchFormChange} type={'text'} placeholder={'Search Anythings you want'} />
                    <button onClick={this.submitButton}>Search Photos</button>
                </div>
            </div>
        );
    }
}
export default Seachform;