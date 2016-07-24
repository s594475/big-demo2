import React, { Component } from 'react';

class Header extends Component {
  getStyles(){
    return{
      big:{
        width:'100%',
        height:'300',
        backgroundColor:'red'
        }
      }
}
  render(){
    const styles=this.getStyles();
    return (
      <div style={styles.big}>
        header
      </div>
    );
  }
}

export default Header;
