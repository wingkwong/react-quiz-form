import React, { Component } from 'react';

class QuizFormResult extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { result } = this.props;
    const style = {
      resultBox: {
        background: '#e1f5fe',
        minHeight: 300,
        padding: 20,
        margin: 20
      }
    }

    return (
      <div className="QuizFormResult">
       	  {result != null? (
              <div style={style.resultBox}>
                 <pre> {result} </pre>
              </div>
          ) : (
            null
          )}
      </div>
    );
  }
}

export default QuizFormResult;