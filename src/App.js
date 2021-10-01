import React, { useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStoage";
import LinkCard from  './components/LinkCard'

const App = () => {
  const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);
  const [newCard, setNewCard] = useState({ linkName: "", linkHref: "" });

  const addBookmark = (bookmark) => {
    setBookmarks([...bookmarks, bookmark]);
  };

  const removeBookmark = (index) => {
    const modifiedList = [...bookmarks];
    modifiedList.splice(index, 1);
    setBookmarks(modifiedList);
  };

  const editBookmark = (bookmark, index) => {
    const modifiedList = [...bookmarks]; //clone
    modifiedList.splice(index, 1, bookmark);
    setBookmarks(modifiedList);
  };

  const handleName = (e) => {
    setNewCard({ ...newCard, linkName: e.currentTarget.value });
  };

  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <h3>Add a bookmark</h3>
        <div>
          <label htmlFor="name">Enter a Name: </label>
          <input
            type="text"
            value={newCard.linkName}
            onChange={(e) => handleName(e)}
            id="name"
            placeholder="name"
          />
        </div>
        <div>
          <label htmlFor="link">Enter a Link: </label>
          <input
            type="text"
            value={newCard.linkHref}
            onChange={(e) =>
              setNewCard({ ...newCard, linkHref: e.currentTarget.value })
            }
            id="link"
            placeholder="www.example.com"
          />
        </div>
        <div>
          <button onClick={() => addBookmark(newCard)}>Add</button>
        </div>
      </form>

      <h2>List:</h2>
      <div className={"linkCardWrapper"}>
        <ol>
          {bookmarks.map((bookmark, i) => (
            <li key={i}>
              <LinkCard
                index={i}
                bookmark={bookmark}
                editBookmark={editBookmark}
                removeBookmark={removeBookmark}
              />
            </li>
          ))}
        </ol>
      </div>  
    </div>
  );
};

export default App;






