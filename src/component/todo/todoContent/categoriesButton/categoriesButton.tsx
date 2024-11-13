import { categories } from "../../../../data/initialTasks";
import classes from "./categoriesButton.module.css"

interface ButtonProps {
    setSelectedCategory: (category: string | null) => void;
}

const CategoriesButton: React.FC<ButtonProps> = ({ setSelectedCategory }) => {
    return (
        <div className={classes.categoriesContainer}>
            <button onClick={() => setSelectedCategory(null)}>All</button>
            {categories.map(category =>
                <button key={category} onClick={() => setSelectedCategory(category)}>{category}</button>
            )}
        </div>
    );
};

export default CategoriesButton;