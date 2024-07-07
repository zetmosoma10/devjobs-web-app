import JobCardGrid from "./components/JobCardGrid";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="relative bg-light_grey min-h-screen ">
      <NavBar />
      <div className="max-container absolute left-0 right-0 top-[100px] md:top-[115px]">
        <SearchForm />
      </div>
      <div className="mt-24 md:mt-28 lg:mt-36">
        <JobCardGrid />
      </div>
    </div>
  );
}

export default App;
