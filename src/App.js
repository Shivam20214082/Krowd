import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");  // Clear the input field after adding the item
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <p className="header-text">Item List Manager</p>
      </header>
      <div className="content">
        <h1 className="list-heading">Item List</h1>
        <div className="input-container">
          <input
            type="text"
            className="item-input"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter item"
          />
          <button className="add-button" onClick={handleAddItem}>
            Add Item
          </button>
        </div>
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
