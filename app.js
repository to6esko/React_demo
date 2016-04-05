import React from 'react';
import {
	render
}
from 'react-dom';

class TweetBox extends React.Component {
  getInitialState(){
    return{
      text:""
    };
  }

  handleChange(event){
    console.log(event.target.value);
  }
	render() {
		return <div className = "well clearfix" >
			< textarea className = "form-control" onChange={this.handleChange}> < /textarea> <br / >
      <br/>
      <span>150</span>
			< button className = "btn btn-primary pull-right" > Button < /button>
		< /div>

	}
};
render( < TweetBox / > , document.getElementById('container'));



/*
class TweetBox extends React.Component {
	 getInitialState () {
    return {
      text: ""
    };
  },
  handleChange (event) {
    this.setState({ text: event.target.value });
    console.log(event.target.value);
  },
  render () {
    return (
      <div className="well clearfix">
        <textarea className="form-control"
                  onChange={this.handleChange}>
        </textarea>
        <br/>
        <button className="btn btn-primary pull-right"
                disabled={this.state.text.length === 0}>Tweet</button>
      </div>
    );
  }
};
render( < TweetBox / > , document.getElementById('container'));

*/


