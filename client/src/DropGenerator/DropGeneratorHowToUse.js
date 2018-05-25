import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


export default class DropGeneratorHowToUse extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <RaisedButton
        label="Got It!"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Instructions" onClick={this.handleOpen} />
        <Dialog
          title="How To Use"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          To use the drop generator, look at the plane route in game, then click any sections of the below map that correspond with the plane's path. When you are finished, press "GO!" to find your drop location.
        </Dialog>
      </div>
    );
  }
}