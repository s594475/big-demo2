import React, { Component } from 'react';

class Footer extends Component {
  getStyles(){
    return{
      big:{
        width:'100%',
        height:'300',
        backgroundColor:'yellow'
        }
      }
  }
  render(){
      const styles=this.getStyles();
    return (
      <div style={styles.big}>
        Footer
      </div>
    );
  }
}

export default Footer;
