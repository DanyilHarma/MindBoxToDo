import { categories } from "../../../../../data/initialTasks";
import classes from "./category.module.css"

interface CategoryProps {
    setCategory: (category: string) => void;
    category: string;
}

const Category: React.FC<CategoryProps> = ({ setCategory, category }) => {
    return (
        <div className={classes.categoriesContainer}>
            <h4>Select Category</h4>
            {categories.map(cat =>
                <div key={cat}>
                    <input type="radio" id={cat} name="categoryName" onChange={() => setCategory(cat)} checked={category === cat} />
                    <label htmlFor={cat}>{cat}</label>
                </div>
            )}
        </div>
    )
}

export default Category;