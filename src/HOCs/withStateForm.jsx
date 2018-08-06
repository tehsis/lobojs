import React, { Component } from 'react';


export default function withStateForm(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();

      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {};
    }

    static defaultProps = {
      onFormSet: function() {}
    }

    onChange(event) {
      const { name, value } = event.target;
      this.setState((prev) => {
        return {...prev, [name]: value}
      })
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.onFormSet(this.state);
    }

    render() {
      return <WrappedComponent onSubmit={this.handleSubmit} onChange={this.onChange} {...this.props} />
    }
  }
}