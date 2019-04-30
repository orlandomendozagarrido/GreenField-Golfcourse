import React from 'react';







class Editor extends React.Component {
   constructor(props){
   	super(props);
      this.state = {
       updateEditor : "",
        data: ""
      }
      this.handleUpdate = this.handleUpdate.bind(this);
   }


  componentDidUpdate(prevProps , currProps){
    if (prevProps.data !== this.props.data) {
   this.updateEditor = Editor.load({
     data: this.props.data
   });
 }


  }
  handleUpdate(e){


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
