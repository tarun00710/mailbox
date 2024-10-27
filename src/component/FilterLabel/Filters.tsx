import { useState } from "react";
import { FilterType } from "../../types";

const Filters = ({
  onFilterClick,
}: {
  onFilterClick: (filterType: FilterType) => void;
}) => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const handleFilterClick = (filterType: FilterType) => {
    onFilterClick(filterType);
    setActiveFilter(filterType);
  };
  return (
    <div className="filter_wrapper">
      <p className="filter_label">Filter By:</p>
      <p
        className={`filter_label ${
          activeFilter === "ALL" ? "filter_active" : ""
        }`}
        onClick={() => handleFilterClick("ALL")}
      >
        All
      </p>
      <p
        className={`filter_label ${
          activeFilter === "UNREAD" ? "filter_active" : ""
        }`}
        onClick={() => handleFilterClick("UNREAD")}
      >
        Unread
      </p>
      <p
        className={`filter_label ${
          activeFilter === "READ" ? "filter_active" : ""
        }`}
        onClick={() => handleFilterClick("READ")}
      >
        Read
      </p>
      <p
        className={`filter_label ${
          activeFilter === "FAVORITES" ? "filter_active" : ""
        }`}
        onClick={() => handleFilterClick("FAVORITES")}
      >
        Favorites
      </p>
    </div>
  );
};

export default Filters;
