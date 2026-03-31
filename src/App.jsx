import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Suspense } from "react";
import Intro from "./components/intro/Intro";
import TaskArea from "./components/taskArea/TaskArea";
import TaskOne from "./components/taskOne/TaskOne";

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/games" element={<TaskArea />}>
            <Route path=":task1" element={<TaskOne />} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
