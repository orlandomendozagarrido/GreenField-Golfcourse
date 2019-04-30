import React from 'react'


class CodeRoom extends React.Component {
	constructor(props){
       super(props)
	}
  render() {
    return (

      <div>

     <textarea onChange={this.props.joinRoom}> </textarea>
     
     </div>
     )
  }

}





export default CodeRoom;