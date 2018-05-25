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
         To use the stat generator, input your username (case sensitive) into the "First Username" box, and another username into the "Second Username" box if you want to compare stats. Afterwards, click the submit button, then click the button that appears.
        </Dialog>
      </div>
    );
  }
}