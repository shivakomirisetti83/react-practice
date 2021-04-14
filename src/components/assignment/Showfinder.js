import axios from 'axios';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import showActions from '../../Redux/Actions/ShowActions';


class Showfinder extends Component{
 
    render(){
        return(
            <div>
               
                <div>{this.props.errMsg}</div>
                <div className="inpdiv">
                    <input type="text" placeholder="Search"   onKeyDown={this.onKeyDown} value = {this.props.input} onChange={e =>this.props.updateinput(e.target.value)}/>
                    <button onClick={e =>this.props.getShowList(this.props.input)}>Search</button>
                </div>
               
                {this.props.showList.map((item,index) =>{
                    const {show: {id, image, summary, name} = {}} = item || {};
                    const {medium} = image || {};
                    return (
                        <div key={id} className="show">
                            
                            {medium ? 
                             <img src={medium} alt="img"/>:
                             <div className="errimg"><p>No Image for this</p></div>
                            }
                            <div className="rght">
                            <h1>{name}</h1>
                            <div dangerouslySetInnerHTML={{__html:summary}} className="para" />
                            <button>Show Episodes</button>
                            </div>
                            <div className="clear"></div>
                            
                        </div>
                        
                    )
                    
                }
                )}
                
            </div>
        );
    }
}
    const mapStateToProps = (state) => {
       return {
           showList:state.show.showList,
            errMsg:state.show.errMsg,
            input:state.show.input
    }
}
        const mapDispatchToProps =  showActions 



export default connect(mapStateToProps,mapDispatchToProps)(Showfinder);



