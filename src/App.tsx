import React from "react";
import styles from './App.module.scss';

function App (): JSX.Element {
  return (
        <div className="app">
            <header className={styles.appHeader}>
                <p>Hello World!</p>
            </header>
        </div>
  );
}

export default App;
