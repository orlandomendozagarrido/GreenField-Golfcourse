import React from 'react';







class Editor extends React.Component {
   constructor(props){
   	super(props);
  
   }
  render() {
    return (

      <div>
      
       <textarea onChange={this.props.update}> </textarea>
         
     
     </div>
     )
       }
  }







export default Editor;