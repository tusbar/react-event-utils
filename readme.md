# react-event-utils

[![Build Status](https://travis-ci.org/tusbar/react-event-utils.svg?branch=master)](https://travis-ci.org/tusbar/react-event-utils)

> Shorthand utils for dealing with React events

# Install

```cli
$ yarn add react-event-utils
```

# About

This library exposes shorthand methods that call event methods for you.

This will allow you to stop having components like this:

```jsx
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    doSomething(e.target.title.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" />
      </form>
    );
  }
}
```

While you could just write:

```jsx
import { preventDefault /*, persist, stopPropagation */ } from 'react-event-utils';

export const Form = () =>
  <form onSubmit={preventDefault(e => doSomething(e.target.title.value))}>
    <input type="text" name="title" />
  </form>;
```

Currently `persist`, `preventDefault` and `stopPropagation` are implemented.


# License

MIT © [Bertrand Marron](https://github.com/tusbar)
