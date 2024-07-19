import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [coffeeShops, setCoffeeShops] = useState()

  useEffect(() => {
    const pageLoad = async () => {
    const response = await fetch('http://localhost:8080/api/coffeeshops');
    const body = await response.json();
    setCoffeeShops(body._embedded.coffeeshops)
    setIsLoading(false)
    }
    pageLoad()
  }, [])

  if (isLoading) {
    return <div className='App'>
      <p className='App-header'>Loading...</p>
    </div>;
  }

  return (
    <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2>Coffee Shop List</h2>
            {coffeeShops.map(coffeeShop =>
              <div key={coffeeShop.id}>
                {coffeeShop.name} - {coffeeShop.address}
              </div>
            )}
          </div>
        </header>
      </div>
  );
}

export default App;
