import React, { Component } from "react";
import axios from "axios";
import Indicies from "./Indicies";
import Values from "./Values";
import InputForm from "./InputForm";

class Fib extends Component {
  state = {
    indicies: [],
    values: {},
    index: "",
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndicies();
  }

  fetchValues = async () => {
    const response = await axios.get("/api/values/current");

    this.setState({ values: response.data });
  };

  fetchIndicies = async () => {
    const response = await axios.get("/api/values/all");
    const indicies = response.data.map((item) => item.number);
    this.setState({ indicies });
  };

  handleChange = (event) => {
    this.setState({ index: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/api/values", {
      index: this.state.index,
    });

    this.setState({ index: "" });
  };

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Fib Calculator</h1>
        <InputForm index={this.state.index} handleChange={this.handleChange} />
        <Indicies {...this.state} />
        <Values {...this.state} />
      </form>
    );
  };
}

export default Fib;
