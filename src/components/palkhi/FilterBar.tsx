import React from 'react';

interface FilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  selectedDistrict: string;
  setSelectedDistrict: (val: string) => void;
  selectedDuration: string;
  setSelectedDuration: (val: string) => void;
  sortOption: string;
  setSortOption: (val: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedDistrict,
  setSelectedDistrict,
  selectedDuration,
  setSelectedDuration,
  sortOption,
  setSortOption
}) => {
  return (
    <div className="directory-filter-bar">
      <div className="directory-dropdowns-row">
        {/* Category Dropdown */}
        <div className="directory-dropdown-select-wrap">
          <select
            className="directory-dropdown-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">Category: All</option>
            <option value="Major / Manachi">Major / Manachi</option>
            <option value="Other Palkhis">Other Palkhis</option>
          </select>
        </div>

        {/* District Dropdown */}
        <div className="directory-dropdown-select-wrap">
          <select
            className="directory-dropdown-select"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="All">District: All</option>
            <option value="Pune">Pune</option>
            <option value="Satara">Satara</option>
            <option value="Solapur">Solapur</option>
            <option value="Ahmednagar">Ahmednagar</option>
            <option value="Nashik">Nashik</option>
            <option value="Kolhapur">Kolhapur</option>
            <option value="Sangli">Sangli</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Duration Dropdown */}
        <div className="directory-dropdown-select-wrap">
          <select
            className="directory-dropdown-select"
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
          >
            <option value="All">Duration: All</option>
            <option value="Under 10 Days">Under 10 Days</option>
            <option value="10–15 Days">10–15 Days</option>
            <option value="15–20 Days">15–20 Days</option>
            <option value="Above 20 Days">Above 20 Days</option>
          </select>
        </div>

        {/* Sort By Dropdown */}
        <div className="directory-dropdown-select-wrap">
          <select
            className="directory-dropdown-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Default">Sort By: Default</option>
            <option value="Alphabetical (A–Z)">Alphabetical (A–Z)</option>
            <option value="Alphabetical (Z–A)">Alphabetical (Z–A)</option>
            <option value="Distance (Shortest First)">Distance (Shortest First)</option>
            <option value="Distance (Longest First)">Distance (Longest First)</option>
            <option value="Duration (Shortest First)">Duration (Shortest First)</option>
            <option value="Duration (Longest First)">Duration (Longest First)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
