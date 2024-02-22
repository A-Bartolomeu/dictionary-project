import Dictionary from "./Dictionary";
import Header from "./ui/Header";

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
