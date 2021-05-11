import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Cızbız İskender",
    date: "12 Ocak 2021, Salı",
    image: food,
    description:
      "Lezzzetli mi lezzetli cızbız iskender ve üstünden adete şelale gibi akan tereyağıyla damaklara zevk katıyor.",
  };

  const likeCount = 56300;
  const isLiked = false;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          recipeItem = {recipeItem}
          isLiked = {isLiked}
          likeCount = {likeCount}
          /* prop ismi = { değişken } */
          author={recipeAuthor}
        />
      </header>
    </div>
  );
}

export default App;
