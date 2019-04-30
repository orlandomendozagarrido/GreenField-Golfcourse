import React from 'react';
import Editor from './Editor';
import CodeRoom from './codeRoom';
import Run from './Run';
import Submit from './submit';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    code : "",
    time: 0,
    channel: ""
    }

     this.updateCode = this.updateCode.bind(this);
     this.codeTime = this.codeTime.bind(this);
     this.channelRoom = this.channelRoom.bind(this);

  }

updateCode(e){



  this.setState({

      code : e.currentTarget.value
    });

}

codeTime(e){
this.setState({
     time : e.currentTarget.value
    });


}

channelRoom(e){
this.setState({
      channel : e.currentTarget.value
    });


}
componentDidUpdate(){
   const code = this.state.code
}

  render() {
    return (

      <div>

     <h1>Hello, World </h1>
     <Editor update={this.updateCode}/>

     <CodeRoom joinRoom={this.channelRoom}/>
     <Run codeTime={this.codeTime}/>
     <Submit/>

     </div>
     )
  }

}





export default App;
