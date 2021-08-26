import React from "react";
import PropTypes from "prop-types";
import "./message-history.style.css";

export const MessageHistory = ({ msg }) => {
  return (
    <>
      {msg ? (
        msg.map((row, i) => (
          <div key={i} className="message-history mt-3">
            <div className="send font-weight-bold text-secondary">
              <div className="sender">{row.messageBy}</div>
              <div className="date">{row.date}</div>
            </div>
            <div className="message">{row.message}</div>
          </div>
        ))
      ) : (
        <h1>No Reply</h1>
      )}
    </>
  );
};

MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
