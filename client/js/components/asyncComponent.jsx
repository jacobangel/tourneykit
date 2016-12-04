import React from 'react';

function asyncComponent(getComponent) {
  class AsyncComponent extends React.Component {
    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then((Component) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  }

  AsyncComponent.Component = null;
  AsyncComponent.state = { Component: AsyncComponent.Component };

  return AsyncComponent;
}

export default asyncComponent;
