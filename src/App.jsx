import { useState } from "react";
import Card from "./Card";
import "./App.css";

const cards = [
  { id: 1,  front: "der Hund",       back: "the dog",             category: "Animals",      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/1200px-YellowLabradorLooking_new.jpg" },
  { id: 2,  front: "die Katze",      back: "the cat",             category: "Animals",      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg" },
  { id: 3,  front: "der Vogel",      back: "the bird",            category: "Animals",      image: null },
  { id: 4,  front: "das Buch",       back: "the book",            category: "Objects",      image: null },
  { id: 5,  front: "das Fahrrad",    back: "the bicycle",         category: "Objects",      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/1200px-Left_side_of_Flying_Pigeon.jpg" },
  { id: 6,  front: "die Schule",     back: "the school",          category: "Places",       image: null },
  { id: 7,  front: "der Bahnhof",    back: "the train station",   category: "Places",       image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400", },
  { id: 8,  front: "Guten Morgen",   back: "Good morning",        category: "Greetings",    image: null },
  { id: 9,  front: "Danke schön",    back: "Thank you very much", category: "Greetings",    image: null },
  { id: 10, front: "das Wasser",     back: "the water",           category: "Food & Drink", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400", },
  { id: 11, front: "das Brot",       back: "the bread",           category: "Food & Drink", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_made_bread_05.jpg/1200px-Fresh_made_bread_05.jpg" },
  { id: 12, front: "Ich liebe dich", back: "I love you",          category: "Phrases",      image: null },
];

const categoryColors = {
  "Animals":      "#FFF3CD",
  "Objects":      "#D4EDDA",
  "Places":       "#CCE5FF",
  "Greetings":    "#F8D7DA",
  "Food & Drink": "#FDE2C8",
  "Phrases":      "#E8D5F5",
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="app">
      <div className="bg-blob blob1" />
      <div className="bg-blob blob2" />

      <div className="header">
        <h1>🐔 Hühnerlingo</h1>
        <p className="subtitle">How well do you know your German? Test yourself here!</p>
        <p className="count">Number of cards: {cards.length}</p>
      </div>

      <Card
        key={cards[currentIndex].id}
        card={cards[currentIndex]}
        color={categoryColors[cards[currentIndex].category]}
      />

      <div className="btn-row">
        <button className="nav-btn" onClick={handlePrev}>←</button>
        <button className="nav-btn" onClick={handleNext}>→</button>
      </div>
    </div>
  );
}

export default App;