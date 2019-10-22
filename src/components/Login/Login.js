
import React, {Component} from 'react';

class Login extends Component {
  render() {
    return(
      <div> 
        <div className="login-box">
  <div className="login-logo">
    
  </div>
  {/* /.login-logo */}
  <div className="login-box-body">
   
    <form action="#" method="post">
      <div className="form-group has-feedback">
        <input type="email" className="form-control" placeholder="Email" />
        <span className="glyphicon glyphicon-envelope form-control-feedback" />
      </div>
      <div className="form-group has-feedback">
        <input type="password" className="form-control" placeholder="Password" />
        <span className="glyphicon glyphicon-lock form-control-feedback" />
      </div>
      <div className="row">
        <div className="col-xs-8">
          <div className="checkbox icheck">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
          </div>
        </div>
        {/* /.col */}
        <div className="col-xs-4">
          <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
        </div>
        {/* /.col */}
      </div>
    </form>
    
    {/* /.social-auth-links */}
    <a href="#">I forgot my password</a><br />

  </div>
  {/* /.login-box-body */}
</div>
        

       </div>
    );
  }
}


export default Login;