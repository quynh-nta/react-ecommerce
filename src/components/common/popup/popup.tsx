import React, { FC } from "react";
import "./popup.css";

interface PopupProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onSubmit?: (formData: any) => void;
}

const Popup: FC<PopupProps> = ({ isOpen, title, children, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={stopPropagation}>
        <div className="popup-header">
          <h2>{title}</h2>
          <button className="popup-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-body">
          {children}
        </div>
        <div className="popup-footer flex justify-between">
          {onSubmit && <button onClick={onSubmit}>submit</button>}
          <button onClick={onClose}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
