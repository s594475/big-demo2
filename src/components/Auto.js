import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import FontIcon from 'material-ui/FontIcon';
let styles={
  position:'absolute',
  top:80,
  left:310
}
 class Auto extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput(value){
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    return (
      <div>
        <FontIcon className="material-icons">home</FontIcon>
        <AutoComplete
          style={styles}
          hintText="用户名"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput.bind(this)}
        />

      </div>
    );
  }
}

export default Auto;
