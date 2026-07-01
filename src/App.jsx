import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Suspense } from "react";
import Intro from "./components/intro/Intro";
import TaskArea from "./components/taskArea/TaskArea";
import TaskOne from "./components/taskOne/TaskOne";
import TaskThree from "./components/taskThree/TaskThree";
import TaskTwo from "./components/taskTwo/TaskTwo";
import Speaking from "./components/speaking/Speaking";

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/games" element={<TaskArea />}>
            <Route path="task1" element={<TaskOne />} />
            <Route path="task2" element={<TaskTwo/>}/>
            <Route path="task3" element={<TaskThree/>}/>
            <Route path="sp" element={<Speaking/>}/>
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
