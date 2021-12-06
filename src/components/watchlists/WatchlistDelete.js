import React from "react";
import { useState } from "react";
import Modal from "../../Modal";

export default function WatchlistDelete({ listId, title, onDelete }) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const renderActions = () => {
    return (
      <React.Fragment>
        <button
          className="utility-button px-4 py-2"
          onClick={() => {
            onDelete(listId);
            toggleSelected();
          }}
        >
          Delete
        </button>
        <button
          className="utility-button px-4 py-2"
          onClick={() => toggleSelected()}
        >
          Cancel
        </button>
      </React.Fragment>
    );
  };

  const renderContent = () => {
    return `Are you sure you want to delete watchlist: ${title}?`;
  };

  const disableScroll = () => {
    console.log("fired");
    window.scrollTo(0, 0);
  };

  const renderModal = () => {
    return (
      <Modal
        title={"Delete Watchlist"}
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => toggleSelected()}
        disable={() => disableScroll()}
      />
    );
  };

  return selected === false ? (
    <button
      onClick={() => setSelected(!selected)}
      className="utility-button absolute right-4 top-4  py-1 px-2"
    >
      X
    </button>
  ) : (
    renderModal()
  );
}
