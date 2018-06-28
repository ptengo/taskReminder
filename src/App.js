// React
import React, { Component } from 'react';
import { hot } from 'react-hot-loader'

// Components
import ReminderList from './components/reminderList.component';
import ReminderForm from './components/reminderForm.component';
import ButtonForm from './components/button-form.component';

// const App = () => <div>Hello World!</div>
class App extends Component {
  constructor() {
    super();
    this.id = 1;
    this.state = {
      reminders: [],
      buttons: [{ name: 'Delete All', key: 'deleteAll' }]
    };
  }

  buttonsHandler(buttonData) {
    console.log('buttonData', buttonData);
    if (buttonData.key === 'deleteAll') {
      this.setState({ reminders: [] })
    }
  }

  handleOnAddReminder(data) {
    let reminder = { id: this.id };
    Object.keys(data).forEach(key => {
      reminder[key] = data[key];
    });
    this.id++;
    
    this.setState({
      reminders: this.state.reminders.concat([reminder])
    });
  }

  render() {
    return (
      <div>
        <ReminderList reminders={this.state.reminders} />
        <ReminderForm onAddReminder={this.handleOnAddReminder.bind(this)} />
        {/* {this.state.form ? <Form group={this.state.form.group}>
          <input type="text" name="name" />
        </Form> : null} */}

        <ButtonForm buttons={this.state.buttons} handleButtons={this.buttonsHandler.bind(this)} />
      </div>
    );
  }
}

// export default hot(module)(App);
export default App;