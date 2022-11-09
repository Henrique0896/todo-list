import styles from "./app.module.css";
import { Header } from "./components/atoms/Header";
import { ToDoBoard } from "./components/molecules/ToDoBoard";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <ToDoBoard />
        </main>
      </div>
    </div>
  );
}

export default App;
