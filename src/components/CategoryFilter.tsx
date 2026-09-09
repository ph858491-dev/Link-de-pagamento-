import { SortOption } from '../types';
import { ArrowUpDown } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalFiltered: number;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  totalFiltered
}: CategoryFilterProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-6 border-b border-stone-200">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              id={`cat-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => onSelectCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                isSelected
                  ? 'bg-orange-600 text-white shadow-sm shadow-orange-600/30'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 hover:border-stone-300'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Sort & Count Controls */}
      <div className="flex items-center justify-between w-full md:w-auto gap-4 self-end md:self-center">
        <span className="text-xs text-stone-500">
          <strong className="text-stone-800">{totalFiltered}</strong> produto{totalFiltered !== 1 ? 's' : ''}
        </span>

        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-3.5 h-3.5 text-stone-400" />
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="bg-white border border-stone-200 hover:border-stone-300 text-stone-800 text-xs font-medium rounded-xl px-3 py-2 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
          >
            <option value="default">Relevância</option>
            <option value="price-asc">Menor Preço</option>
            <option value="price-desc">Maior Preço</option>
            <option value="name-asc">Nome (A - Z)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
