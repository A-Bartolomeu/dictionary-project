import Dictionary from "./components/Dictionary";
import Header from "./components/Header";

function App() {
  return (
    <div className="overflow-scroll">
      <Header />
      <main className="mx-auto max-w-3xl">
        <Dictionary />
      </main>
    </div>
  );
}

export default App;
