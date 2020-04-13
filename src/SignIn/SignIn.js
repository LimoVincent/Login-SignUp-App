import React, { Component } from 'react'

 class SignIn extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            loginUserName: '',
            password : ''
         }
     }
     
    render() {
        return (
            <div>
                <form>
               
    UserName : <input type = 'text' placeholder = 'User Name or Password' value = {this.state.loginUserName} onChange ={e => this.setState({loginUserName : e.target.value})}></input><br></br>
    Password:<input type = 'password'  placeholder = 'Password' value = {this.state.password} onChange ={e => this.setState({password : e.target.value})}></input><br></br>

<button>Sign in</button>
<br></br>
<button>Sign Up Instead</button>
                </form>

                <h3><strong>Vincent limo</strong></h3>
            </div>
        )
    }
}

export default SignIn;