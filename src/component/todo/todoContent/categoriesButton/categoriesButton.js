import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { categories } from "../../../../data/initialTasks";
import classes from "./categoriesButton.module.css";
const CategoriesButton = ({ setSelectedCategory }) => {
    return (_jsxs("div", { className: classes.categoriesContainer, children: [_jsx("button", { onClick: () => setSelectedCategory(null), children: "All" }), categories.map(category => _jsx("button", { onClick: () => setSelectedCategory(category), children: category }, category))] }));
};
export default CategoriesButton;
