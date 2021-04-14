import React,{Component} from 'react';


class ByteProgracess extends Component{

        constructor(){
            super();
            this.state = {
                index:0,
                progracess:"",
                list:[
                   {
                       date:'03-05-2021',
                       bytes: 12365475,
                       maxBytes: 32595648
                   },

                   {
                    date:'04-05-2021',
                    bytes: 12567895,
                    maxBytes: 42595648
                   },

                   {
                    date:'05-05-2021',
                    bytes: 15236789,
                    maxBytes: 42563178
                    },

                    {
                        date:'06-05-2021',
                        bytes: 25634125,
                        maxBytes: 48710236
                    },

                    {
                        date:'07-05-2021',
                        bytes: 245163125,
                        maxBytes: 451236785
                    }
                ]

            }
            
        }
        
        next = () => {
            this.setState({index:this.state.index+1});
            
        }

        prev = () =>{
            this.setState({index:this.state.index-1});
            
        }
        
        render(){
            const result =this.state.list[this.state.index].bytes /this.state.list[this.state.index].maxBytes *100; 
            return(
                <div>
                    <button onClick={this.prev} disabled={this.state.index === 0}>Prev</button>
                    <button onClick={this.next} disabled={this.state.index >=this.state.list.length-1}>Next</button>
                    <h1>{this.state.list[this.state.index].date}</h1>
                    <h2>{result} %</h2>
                    
                </div>
            );
        }
}

export default ByteProgracess;