import css from "./ErrorMessage.module.css"

export default function ErrorMessage() {
  return (
    <div className={css.ErrorMessageBox}>
      <p>Something went wrong!</p>
    </div>
  );
}