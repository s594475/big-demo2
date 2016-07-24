import React, { Component } from 'react';

class List extends Component {
  getStyles(){
    return{
      big:{
        width:'100%',
        height:'300',
        backgroundColor:'blue'
        }
      }
  }
  render(){
      const styles=this.getStyles();
    return (
      <div style={styles.big}>
        List
      </div>
    );
  }
}

export default List;
