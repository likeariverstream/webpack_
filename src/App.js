import React from "react";
import $ from "jquery";

export default class App extends React.Component {
  componentDidMount() {
    $('<h1 />')
      .text('Hello Jquery')
      .css({
        textAlign: 'center',
        color: 'blue'
      })
      .appendTo($('header'))

  }
  render() {
    return (
      <React.Fragment>
        <header className="header"></header>
        <hr />
        <div className="box">
          <h2 className="box-title">Title</h2>
          <p className="box-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus fugit assumenda dolor vitae sunt officiis velit, blanditiis repellat voluptates sequi corporis voluptas harum similique quas commodi quidem dolore modi sed!</p>

        </div>
      </React.Fragment>
    )
  }
}
