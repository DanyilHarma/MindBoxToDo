import { categories } from "../../../../../data/initialTasks";
import classes from "./category.module.css"

interface CategoryProps {
    category: string;
    setCategory: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({ category, setCategory }) => {
    return (
        <div className={classes.categoriesContainer}>
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