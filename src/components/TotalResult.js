/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './TotalResult.css';
import ImageCard from "./ImageCard";

class TotalResult extends React.Component {
  
    render() {
        return (
            <div className={'TotalResult'}>
                <div>Total Results :<span> {this.props.data.total ? this.props.data.total : 0}</span></div>
                {(this.props.data.total && this.props.data.results) && (
                <div className="image-list">
                    {this.props.data.results.map((image) => {
                        return (
                            <ImageCard key={image.id} image={image}/>
                        )
                    })}
                </div>
            )}
            </div>
        )
    };
}
export default TotalResult;