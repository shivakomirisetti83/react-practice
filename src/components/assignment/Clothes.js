import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import clothesActions from '../../Redux/Actions/ClothesActions';
import './Clothes.css';

class Clothes extends Component{
    
    componentDidMount() {
        this.props.getClothes();
    }

    render (){
        return(
            <div className="cardcontainer">

                <div>{this.props.errorMsg}</div>
                {this.props.clothesList.map((item,index) => {
                    const {url, brand, model, price, size, ...rest} = item;
                    return (
                        <div key={model} className="card" >
                            <img src={url} alt="img" />
                            <div className="details">
                                <ul>
                                    <li>{brand}{index}</li>
                                    <li>{model}</li>
                                    <li>{price}</li>
                                    <li>{size}</li>
                                </ul>
                            </div>
                        </div>
                    );
                    }
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clothesList: state.clothes.clothesList,
        errorMsg: state.clothes.errorMsg
    }
}

const mapDispatchToProps = clothesActions

export default connect(mapStateToProps, mapDispatchToProps)(Clothes);
