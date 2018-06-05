import React from "react";
// import questions from "./Component/data.json";

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "No Data till now"
    };

    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(e) {
    // e.preventDefault();
    this.setState({ data: e.target.value });
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="quiz-container">
        <h3>Welcome to the Ultimate Quiz Show!!!</h3>
        <form>
          <label>What is your age?</label>
          <label>
            <input
              type="radio"
              name="age"
              value="18"
              onClick={this.updateState}
            />18
          </label>
          <label>
            <input
              type="radio"
              name="age"
              value="20"
              onClick={this.updateState}
            />20
          </label>
          <label>
            <input
              type="radio"
              name="age"
              value="22"
              onClick={this.updateState}
            />22
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default Quiz;
