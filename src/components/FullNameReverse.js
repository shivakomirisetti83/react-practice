import React from 'react';
import FullName from './FullName';

class FullNameReverse extends React.Component {
    render() {
        return (
            <div>
                <div className="name">{this.props.lastName} {this.props.firstName} </div>
            </div>
        );
    }
}

export default FullNameReverse;