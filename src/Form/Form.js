import React, { Component } from 'react'
import './Form.css'
 class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firsName:'',
             lastName : '',
             userName: '',
             email : '',
             password : ''
        }
    }
    
    render() {
        return (
            <div>
    <form className = 'signUpForm'>
    First Name: <input type = 'text' placeholder = 'First Name ' firstName = {this.state.firsName} onChange ={e => this.setState({firstName : e.target.value})}></input> <br></br>
    Last Name :  <input type = 'text'  placeholder = 'Last Name ' value = {this.state.lastName} onChange ={e => this.setState({lastName : e.target.value})}></input><br></br>
    User Name :<input type = 'text' placeholder = 'User Name ' value = {this.state.userName} onChange ={e => this.setState({userName : e.target.value})}></input><br></br>
    Email addr : <input type = 'email' placeholder = 'Email ' value = {this.state.email} onChange ={e => this.setState({email : e.target.value})}></input><br></br>
    Password   :<input type = 'password'  placeholder = 'Password' value = {this.state.password} onChange ={e => this.setState({password : e.target.value})}></input><br></br>

<button>Sign Up</button> <br></br>
<button>Sign In Instead</button>
                </form>
            </div>
        )
    }
}
export default Form;
