import React from 'react';

interface FilterButtonProps {
  onClick?: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onClick }) => (
  <div className="flex justify-end mb-4">
    <button
      className="text-xs px-3 py-1 rounded-full border border-brand-main text-brand-main font-medium me-[27px]"
      onClick={onClick}
    >
      필터
    </button>
  </div>
);

export default FilterButton; 