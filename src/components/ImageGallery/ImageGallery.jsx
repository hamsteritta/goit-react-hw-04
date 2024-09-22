import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, imageClick }) {
  return (
    <ul className={css.ImageGalleryBox}>
      {items.map(item => (
        <li key={item.id} onClick={() => imageClick(item) }>
          <ImageCard image={item} />
        </li>
      ))}
    </ul>
  );
}