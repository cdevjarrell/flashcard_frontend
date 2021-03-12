import CardList from "./components/cardList";
import cards from "./components/test/testData";

function App() {
  return (
    <div className="min-h-screen bg-black-100">
      <div className="bg-white shadow-sm">
        <div className="max-2-7x1 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <p>Flashcards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <header>
          <div className="max-2 7x1 mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3x1 font-bold leading-tight text-gray-900">
              Your Collections
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7x1 mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <CardList cards={cards} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
