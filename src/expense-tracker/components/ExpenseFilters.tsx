import React from 'react';
export const categories = ['Groceries', 'Utilities', 'Entertainment'] as const


interface Props {
    onSelectCategory: (category: string) => void

}



function ExpenseFilters({onSelectCategory}: Props) {
    return (
        <div>
            <select className="form-select" onChange={(e) => onSelectCategory(e.target.value)}>
                <option value="">All categories</option>
                {categories.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
        </div>
    );
}

export default ExpenseFilters;