import React from "react";
import SelectSearch from "react-select-search";

export default function Search({ options, onChange1, onChange2, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="holders">
        <SelectSearch
          className="select-search"
          options={options}
          search
          placeholder="select your first pokemon"
          value=""
          onChange={(value) => onChange1(value)}
        />
        <SelectSearch
          className="select-search"
          options={options}
          search
          placeholder="select your second pokemon"
          value=""
          onChange={(value) => onChange2(value)}
        />
        <button type="submit" className="comparebtn">
          Compare
        </button>
      </div>
    </form>
  );
}
