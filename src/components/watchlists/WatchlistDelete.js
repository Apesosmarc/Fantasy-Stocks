import React from "react";
import { useState, useEffect } from "react";
import Modal from "../../Modal";

import { Link } from "react-router-dom";
import history from "../../history";

export default function WatchlistDelete({ index, title, onDelete }) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const renderActions = () => {
    return (
      <React.Fragment>
        <button
          className="utility-button px-4 py-2"
          onClick={() => onDelete(index)}
        >
          Delete
        </button>
        <button
          className="utility-button px-4 py-2"
          onClick={() => toggleSelected()}
        >
          <Link to="/">Cancel</Link>
        </button>
      </React.Fragment>
    );
  };

  const renderContent = () => {
    return `Are you sure you want to delete watchlist: ${title}?`;
  };

  const renderModal = () => {
    return (
      <Modal
        title={title}
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => toggleSelected()}
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
