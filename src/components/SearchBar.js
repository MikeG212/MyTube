import React from "react";
import "../stylesheets/SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  render() {
    return (
      <div className="search-container">
        <div className="search-bar">
          <form onSubmit={this.handleSubmit}>
            <input className="search-input" onChange={this.handleChange} />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
