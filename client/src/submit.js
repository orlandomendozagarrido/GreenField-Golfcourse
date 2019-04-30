import React from 'react';


class Submit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addCode: ""
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }


handleSubmit(e) {
  e.preventDefault();
  const { addCode} = this.state;
  this.props.Run(addCode.toLowerCase());

  this.setState({
    addCode : ""
  });
}

  render() {
    const { addCode } = this.state;
    return (

      <div>

              <br />
              <button onClick={this.handleSubmit}>Submit Code</button>
            </div>
     )
  }

}





export default Submit;
/* <div>
        <label>
          Description:{' '}
          <input
            type="text"
            name="descript"
            value={descript}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          Quantity:{' '}
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <button onClick={this.handleSubmit}>Add item</button>
      </div>
    );
  }*/
