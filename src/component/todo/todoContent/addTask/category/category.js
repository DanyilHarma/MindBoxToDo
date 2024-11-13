import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { categories } from "../../../../../data/initialTasks";
import classes from "./category.module.css";
const Category = ({ setCategory, category }) => {
    return (_jsxs("div", { className: classes.categoriesContainer, children: [_jsx("h4", { children: "Select Category" }), categories.map(cat => _jsxs("div", { children: [_jsx("input", { type: "radio", id: cat, name: "categoryName", onChange: () => setCategory(cat), checked: category === cat }), _jsx("label", { htmlFor: cat, children: cat })] }, cat))] }));
};
export default Category;
