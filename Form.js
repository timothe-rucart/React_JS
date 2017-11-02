import React, { Component } from 'react';

class Form extends Component {
            
            constructor(props){
                super(props);
                this.state={ value: ""};
                
                this.changeValue = this.changeValue.bind(this);
                this.displayUserName = this.displayUserName.bind(this);
            }
            
            changeValue(event){
                this.setState({value: event.target.value});                
            }
            
            displayUserName(event){
                alert('A name was submitted: ' + this.state.value.toUpperCase());
                event.preventDefault();
            }
            
            render(){
                return(
                    <form onSubmit={this.displayUserName}>
                        <label>Login
                        <input type="text" value={this.state.value} onChange={this.changeValue} />  
                            </label>
                        <input type="submit" value="Submit"/>
                    </form>
                );                
            };
        }

export default Form;