import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.LoadMoreBtnBox}>
      <button type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}