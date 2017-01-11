import React, { Component } from 'react';
import Text from './components/Text'
import Check from './components/Check'
import Select from './components/Select'
import MultiCheck from './components/MultiCheck'
import MultiSelect from './components/MultiSelect'
class App extends Component {
  render() {
    return (
      <div>
        <MultiSelect />
      </div>
    )
  }
}
export default App;
