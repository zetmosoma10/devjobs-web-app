import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import JobDetailsPage from "./pages/JobDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Layout />>
          <Route index element=<HomePage /> />
          <Route path="jobDetails/:id" element=<JobDetailsPage /> />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
