import React, { Component } from 'react';

class Footer extends Component {
  getStyles(){
    return{
      big:{
        width:'100%',
        height:300,
        backgroundColor:'#212121',

      },
      psty:{
        color:'#fff',
        fontSize:"20px",
        textAlign:'center'
      }
      }
  }
  render(){
      const styles=this.getStyles();
    return (
      <div style={styles.big}>
        <p style={styles.psty}>更多内容和评论,欢迎添加 happysong 的微信: s594475</p>
      </div>
    );
  }
}

export default Footer;
