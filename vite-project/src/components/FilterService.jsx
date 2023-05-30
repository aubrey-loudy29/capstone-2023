import { useEffect, useState } from "react";
import * as React from 'react';
import { Checkbox } from "semantic-ui-react";

const FilterService = ({filters, selected, toggleCategory}) => {
    
    const categoryButtons = filters.map((el) => (
        <div key={el} className="checkbox-wrapper">
          <Checkbox
            label={el}
            onChange={() => toggleCategory(el)}
            checked={
              el === "All"
                ? selected.length === 0 || selected.includes("All")
                : selected.includes(el)
            }
          />
        </div>
      ));

    return (
        <div className="filters-container">
            <div className="checkbox">
                <p style={{ fontWeight: 'bold' }}>Filter</p>
                {categoryButtons}
            </div>
        </div>
    )
}

export default FilterService