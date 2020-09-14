import React from "react";

const SearchBox = ({ onInputChange, onSubmit, value }) => {
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={e => onSubmit(e)}>
        <div className="field">
          <label htmlFor="query">Search Your Favorite Video Here!</label>
          <input
            type="text"
            placeholder="Search..."
            name="query"
            value={value}
            onChange={e => onInputChange(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
