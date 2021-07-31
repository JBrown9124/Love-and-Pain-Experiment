import React from "react";
import Chart from "../components/Chart";
import ResultInfo from "../components/ResultInfo";
import uri from "../services/URI"

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  fetchResults = () => {
    fetch(uri + "results")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  };
  componentDidMount() {
    fetch(uri + "get_results")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }
  render() {
    return (
      <>
      <div class="font-effect-fire-animation">
      <h1 className="title" > Results</h1>
      </div>
      
      <div className="result-page" >
        <Chart data={this.state.data} className="result-page"></Chart>
        </div>
        <ResultInfo />
      
      </>
    );
  }
}

export default Results;
