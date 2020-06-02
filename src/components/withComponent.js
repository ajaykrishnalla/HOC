import React from "react";

const updateComponent = OriginalComponent => {
  console.log(OriginalComponent);
  class NewComponent extends React.Component {
    state = {
      count: 0
    };
    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.handleIncrement}
        />
      );
    }
  }
  return NewComponent;
};

export default updateComponent;
