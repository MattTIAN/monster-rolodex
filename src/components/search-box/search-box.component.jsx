// import React, { Component } from "react";
import "./search-box.styles.css";


const SearchBox = ({className, placeholder, onChangeHandler}) => (
  <div>
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
);

export default SearchBox;
/* export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
} */
