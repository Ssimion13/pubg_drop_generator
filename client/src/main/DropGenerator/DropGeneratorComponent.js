import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
 
const style = {
  margin: 12,
  width: '200px',
  height: '100px',
  fontSize: '20%',
}

class DropGeneratorComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.startButton = this.startButton.bind(this);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  startButton = () => {
    if(this.props.sections.length > 0){
    this.props.getMapLocations();
    this.handleOpen();
    } else {
      alert("Please click at least one section to determine your drop location.")
    }
  }
  
  render(props){
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    
    return (
      <div className="dropGeneratorComponentDiv">
        <RaisedButton
                label='Go!'
                onClick={this.startButton}
                className='startButton'
                primary={true} style={style} 
                labelStyle={{lineHeight: '100px', fontSize: '45px'}}
              />
        <Dialog
          titleStyle={{textAlign: "center"}}
          title="Drop Locations:"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <h2 className="centeredText"> First Drop Choice: </h2> <h1 className="centeredText"> {this.props.currentDrop} </h1>
          <br/>
          <h2 className="centeredText"> Second Drop Choice: </h2> <h1 className="centeredText"> {this.props.currentDrop2} </h1>
        </Dialog>
      </div>
    )
  }
}

export default DropGeneratorComponent;