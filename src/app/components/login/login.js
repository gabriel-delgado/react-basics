import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    veritcalAlign: 'middle',
    alignContent: 'spaceBetween',
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.54)',
    fontFamily: 'Roboto, sans-serif'
  },
  next: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

const Login = () => (
  <div style={styles.root}>
    <GridList cellHeight={'auto'}>
      <GridTile>
        <Card>
          <CardHeader title="Login" subtitle="Provide the email address and password you used to register your account to continue."/>
          <CardText>
            <TextField hintText="Email"/><br/>
            <TextField hintText="Password"/><br/>
            <a href="#">Forgot password?</a>
          </CardText>
          <CardActions>
            <div style={styles.next}>
              <RaisedButton label="Next" primary={'true'}/>
            </div>
          </CardActions>
        </Card>
        <span>New to Chassi?</span>&nbsp;<a href="#">Create a free account</a>
      </GridTile>
    </GridList>
  </div>
);

export default Login;
