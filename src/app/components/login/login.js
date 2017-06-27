import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const Login = () => (
  <div>
    <Card>
      <CardHeader title="Login" subtitle="Provide the email address and password you used to register your account to continue."/>
      <CardText>
        <TextField hintText="Email"/><br/>
        <TextField hintText="Password"/><br/>
        <a href="#">Forgot password?</a>
      </CardText>
      <CardActions>
        <RaisedButton label="Next" primary={'true'}/>
      </CardActions>
    </Card>
    <span>New to Chassi?</span><a href="#">Create a free account</a>
  </div>
);

export default Login;
