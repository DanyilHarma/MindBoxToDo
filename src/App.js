import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import Todo from './component/todo/todo';
const App = () => {
    return (_jsx(_Fragment, { children: _jsx(Todo, {}) }));
};
export default App;
