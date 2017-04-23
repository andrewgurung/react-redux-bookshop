import React from 'react';

class Book extends React.Component {
  constructor(props) {
    // pass props back to parent
    super(props);
  }

  // Submit book handler
  submitBook(input) {
    alert('Submitted');
  }

  render() {
    // Title input tracker
    let titleInput;

    //return JSX
    return(
      <div>
        <h3>Books</h3>
        <ul>
          {this.props.books.map((book, index) => <li key={index}>{book.title}</li>)}
        </ul>
        <div>
          <h3>Books Form</h3>
          <form onSubmit={e => {
              e.preventDefault();
              var input = {title: titleInput.value};
              this.submitBook(input);
              e.target.reset();
          }}/>
        <input type="text" name="title" ref={node => titleInput = node}/>
        <input type="submit" />
        </div>
      </div>
    );
  }
}

export default Book;
