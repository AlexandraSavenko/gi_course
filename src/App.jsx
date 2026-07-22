import { Route, Routes } from "react-router-dom";
import IntroLayout from "./components/introLayout/IntroLayout";
import { Suspense } from "react";
import TaskArea from "./components/taskArea/TaskArea";
import TaskOne from "./components/taskOne/TaskOne";
import TaskThree from "./components/taskThree/TaskThree";
import TaskTwo from "./components/taskTwo/TaskTwo";
import Speaking from "./components/speaking/Speaking";
import Intro from "./components/intro/Intro";
import GameLayout from "./components/gameLayout/GameLayout";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<IntroLayout />}>
          <Route path="/" element={<Intro />} />
        </Route>
        <Route element={<GameLayout />}>
          <Route path="/games" element={<TaskArea />}>
            <Route path="task1" element={<TaskOne />} />
            <Route path="task2" element={<TaskTwo />} />
            <Route path="task3" element={<TaskThree />} />
            <Route path="sp" element={<Speaking />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
