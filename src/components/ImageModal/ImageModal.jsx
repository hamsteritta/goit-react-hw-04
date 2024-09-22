import css from "./ImageModal.module.css"
import Modal from "react-modal";
import { useEffect } from "react";
import { IoHeartSharp } from "react-icons/io5";

export default function ImageModal({ isOpen, onClose, image }) {

    const styleList = { 
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            position: "relative",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            padding: 0,
            border: "none",
            background: "none",
            maxWidth: "80%",
            maxHeight: "80%",
            display: "flex",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
          },
    };

  useEffect(() => {
    const handleEsc = e => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);


  return (
    <Modal
    appElement={document.getElementById("root")}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image info"      
      style={styleList}
      onClick={onClose}
    >
      <div className={css.ImageModal} onClick={e => e.stopPropagation()} >
        <img src={image?.urls.full} alt={image?.description} />        
      </div>
      <div className={css.Description}>
            {image?.description && <p>{image?.description}</p>}
            <div className={css.Info}>
                <span>{image?.user.name}</span>
                <span><IoHeartSharp/> {image?.likes}</span>
            </div>
        </div>
    </Modal>
  );
}