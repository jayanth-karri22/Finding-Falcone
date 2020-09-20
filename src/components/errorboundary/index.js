import React, { Fragment } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Fragment>
          <h1 style={{ color: "red" }}>
            Something went wrong.Please reload your page
          </h1>
        </Fragment>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
