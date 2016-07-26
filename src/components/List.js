import React, { Component } from 'react';
import Cards from './Cards.js';
class List extends Component {
  getStyles(){
    return{
      big:{
        width:'100%',
        backgroundColor:'#fff',
      }
      }
  }
  render(){
      const styles=this.getStyles();
    return (
      <div style={styles.big}>
        <Cards style={styles.card}/>
      </div>
    );
  }
}

export default List;
