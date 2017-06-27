import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

const MyAwesomeReactComponent = () => (
  <div>
    <TextField hintText="Email"/><br/>
    <TextField hintText="Password"/><br/>
    <RaisedButton label="Sign In" primary={'true'}/>
    <Checkbox label="Stay signed in"/>
  </div>
);

export default MyAwesomeReactComponent;
