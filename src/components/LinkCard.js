import React, { useState, useRef } from "react";

const LinkCard = ({ bookmark, index, editBookmark, removeBookmark }) => {
    const [editMode, setEditMode] = useState(false);
    const nameInput = useRef(null);
    const hrefInput = useRef(null);
  
    const updateBookmark = () => {
      const bookmark = {
        linkName: nameInput.current.value,
        linkHref: hrefInput.current.value
      }
  
      editBookmark(bookmark, index);
      setEditMode(false);
    };
  
    if (editMode) {
      return (
        <>
          <input type="text" defaultValue={bookmark.linkName} ref={nameInput} />
          <input type="text" defaultValue={bookmark.linkHref} ref={hrefInput} />
          <button onClick={updateBookmark}>save</button>
          <button onClick={() => setEditMode(false)}>cancel</button>
        </>
      );
    }
  
    return (
      <div className="linkCard">
        <a href={'//' + bookmark.linkHref} rel="noreferrer" target="_blank">
          {bookmark.linkName}
        </a>

        <div className="controlButtons">
            <button onClick={() => removeBookmark(index)}>delete</button>
            <button onClick={() => setEditMode(true)}>edit</button>
        </div>    
      </div>
    );
  };


export default LinkCard;