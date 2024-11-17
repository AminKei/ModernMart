import React from "react";
import "./CategorySlide.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface Category {
  id: number;
  title: string; // Changed from Title to title
  imageUrl: string;
}

interface CategoryListProps {
  categories: Category[];
  onCategorySelect: (categoryId: number) => void;
}

const CategorySlide: React.FC<CategoryListProps> = ({
  categories,
  onCategorySelect,
}) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <div
          key={category.id}
          className="category-item"
          onClick={() => onCategorySelect(category.id)}
          role="button" // Added role for accessibility
          tabIndex={0} // Added tabIndex for keyboard navigation
          onKeyPress={(e) => { // Added key press event for accessibility
            if (e.key === 'Enter' || e.key === ' ') {
              onCategorySelect(category.id);
            }
          }}
        >
          <img
            src={category.imageUrl}
            alt={category.title} // Changed from Title to title
            className="category-image"
          />
          <span className="category-name">{category.title}</span> {/* Changed from Title to title */}
        </div>
      ))}
    </div>
  );
};

export default CategorySlide;