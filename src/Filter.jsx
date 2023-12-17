import React from "react";

const Filter = ({onFilterChange}) => {
    return ( 
        <div className="filter">
      <label>
        <input type="text" placeholder="Entrez un titre" onChange={(e) => onFilterChange('title', e.target.value)} />
      </label>
      <label>
        <input type="number"  placeholder="Entrez une note" onChange={(e) => onFilterChange('note', e.target.value)} />
      </label>
    </div>
     );
}
 
export default Filter;