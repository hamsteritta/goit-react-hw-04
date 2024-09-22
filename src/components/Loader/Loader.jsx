import css from "./Loader.module.css"
import RingLoader from "react-spinners/RingLoader";

export default function Loader() {
    return (
      <div className={css.LoaderBox}>
         <RingLoader
        color="#333"
        loading="true"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    );
  }