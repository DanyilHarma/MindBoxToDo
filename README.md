<html>
 <head>
  <title>
   README
  </title>
 </head>
 <body>
  <h1>
   Project Overview
  </h1>
  <p>
   This project is a task management (todo) application developed using React and TypeScript. It includes core features like task creation, categorization, and completion tracking.
  </p>
  <h2>
   Project Structure
  </h2>
  <p>
   The project contains various components and hooks to handle task operations, categorize them, and manage state efficiently.
  </p>
  <ul>
   <li>
    src/App.tsx: Main application component where the overall structure is defined.
   </li>
   <li>
    src/main.tsx: Application entry point, rendering the main App component.
   </li>
   <li>
    src/component/todo: Contains components specific to todo functionalities, like task listing and categorization.
   </li>
   <li>
    src/data/initialTasks.ts: Initial tasks data for default loading.
   </li>
   <li>
    src/hooks/todoState.ts: Custom hook managing the state of the todo list.
   </li>
   <li>
    src/types/interfaces.ts: Defines TypeScript interfaces for structured data handling.
   </li>
  </ul>
  <h2>
   Setup and Usage
  </h2>
  <ol>
   <li>
    Clone the repository to your local machine.
   </li>
   <li>
    Navigate to the project directory and install dependencies:
   </li>
   <pre><code>npm install</code></pre>
   <li>
    Start the development server:
   </li>
   <pre><code>npm run start</code></pre>
  </ol>
  <h2>
   Core Features
  </h2>
  <ul>
   <li>
    <strong>
     Task Creation:
    </strong>
    Add new tasks to the todo list.
   </li>
   <li>
    <strong>
     Task Categorization:
    </strong>
    Organize tasks by categories.
   </li>
   <li>
    <strong>
     Completion Tracking:
    </strong>
    Mark tasks as completed.
   </li>
   <li>
    <strong>
     Task Filtering:
    </strong>
    View tasks based on completion status.
   </li>
  </ul>
  <h2>
   Dependencies
  </h2>
  <ul>
   <li>
    jest: version ^29.7.0
   </li>
   <li>
    react: version ^18.3.1
   </li>
   <li>
    react-dom: version ^18.3.1
   </li>
  </ul>
  <h2>
   Dev Dependencies
  </h2>
  <ul>
   <li>
    @eslint/js: version ^9.13.0
   </li>
   <li>
    @testing-library/jest-dom: version ^6.6.3
   </li>
   <li>
    @testing-library/react: version ^16.0.1
   </li>
   <li>
    @types/jest: version ^29.5.14
   </li>
   <li>
    @types/node: version ^22.9.0
   </li>
   <li>
    @types/react: version ^18.3.12
   </li>
   <li>
    @types/react-dom: version ^18.3.1
   </li>
   <li>
    @vitejs/plugin-react: version ^4.3.3
   </li>
   <li>
    eslint: version ^9.13.0
   </li>
   <li>
    eslint-plugin-react-hooks: version ^5.0.0
   </li>
   <li>
    eslint-plugin-react-refresh: version ^0.4.14
   </li>
   <li>
    globals: version ^15.11.0
   </li>
   <li>
    identity-obj-proxy: version ^3.0.0
   </li>
   <li>
    jest-environment-jsdom: version ^29.7.0
   </li>
   <li>
    ts-jest: version ^29.2.5
   </li>
   <li>
    typescript: version ^5.6.3
   </li>
   <li>
    typescript-eslint: version ^8.11.0
   </li>
   <li>
    vite: version ^5.4.10
   </li>
  </ul>
  <h2>
   Scripts
  </h2>
  <ul>
   <li>
    <strong>
     npm run start:
    </strong>
    Starts the Vite development server.
   </li>
   <li>
    <strong>
     npm run build:
    </strong>
    Compiles TypeScript and builds the app.
   </li>
   <li>
    <strong>
     npm run test:
    </strong>
    Runs Jest tests.
   </li>
   <li>
    <strong>
     npm run lint:
    </strong>
    Lints the codebase with ESLint.
   </li>
   <li>
    <strong>
     npm run preview:
    </strong>
    Previews the production build locally.
   </li>
  </ul>
  <h2>
   Components
  </h2>
  <p>
   This section describes the core components in the `todo` module, each designed to handle specific functionality within the task management app.
  </p>
  <ul>
   <li>
    todo.tsx: const Todo: React.FC = () =&gt; {
   </li>
   <li>
    todoContent.tsx: const TodoContent: React.FC = () =&gt; { const { tasks, toggleCompleted, addTask } = useTodoState(); const [isPopup, setIsPopup] = useState(false); const [selectedCategory, setSelectedCategory] = useState&lt;string | null&gt;(null); const [showCompleted, setShowCompleted] = useState&lt;boolean&gt;(false); const handleAddTask = (text: string, category: string, importance: boolean) =&gt; { const filteredTask = tasks.filter(task =&gt; {
   </li>
   <li>
    addTask.test.tsx: const addTaskMock = jest.fn(); const closePopupMock = jest.fn(); const input = screen.getByPlaceholderText("Add new task"); const categoryRadio = screen.getByLabelText("sport"); const importanceCheckbox = screen.getByLabelText("Is Important"); const button = screen.getByText("Add New");
   </li>
   <li>
    addTask.tsx: const AddTask: React.FC&lt;AddTaskProps&gt; = ({ onAddTask, closePopup }) =&gt; { const [taskInput, setTaskInput] = useState(""); const [category, setCategory] = useState(""); const [importance, setImportance] = useState(false); const handleAddTask = () =&gt; {
   </li>
   <li>
    category.tsx: const Category: React.FC&lt;CategoryProps&gt; = ({ setCategory, category }) =&gt; {
   </li>
   <li>
    categoriesButton.tsx: const CategoriesButton: React.FC&lt;ButtonProps&gt; = ({ setSelectedCategory }) =&gt; {
   </li>
   <li>
    completedTask.tsx: const CompletedTask: React.FC&lt;CompletedTaskProps&gt; = ({ setShowCompleted, isActive }) =&gt; {
   </li>
   <li>
    tasksList.tsx: const TasksList: React.FC&lt;TasksListProps&gt; = ({ tasks, setCompleted }) =&gt; {
   </li>
  </ul>
 </body>
</html>
