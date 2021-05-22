import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: "",
      seconds: "",
    };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    this.setState(({ length }) => ({ length: length - 5 }));
    ctx.fillRect(50, 50, width, length);
    

    const { minutes, seconds } = this.state;

    return (
      
      <div>
        Enter minutes:{" "}
        <input
          type="text"
          value={this.state.minutes}
          onChange={(e) => this.setState({ minutes: e.target.value })}
        />
        Enter seconds:{" "}
        <input
          type="text"
          value={this.state.seconds}
          onChange={(e) => this.setState({ seconds: e.target.value })}
        />
        {minutes === 0 && seconds === 0 ? (
          <h1>Times Up!</h1>
        ) : (
          <h1>
            Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
        <Rect minutes={this.state.minutes} seconds={this.state.seconds} />
      </div>
    );
  }
}

ReactDOM.render(<Timer />, document.getElementById("root"));

