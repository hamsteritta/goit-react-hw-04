import css from "./SearchBar.module.css";
import { toast } from "react-hot-toast";
import { Field, Form, Formik } from "formik";
import { IoSearchCircleOutline } from "react-icons/io5";

export default function SearchBar({ onSearch }) {
    const styleList = {
      toast: {            
            background: "#111",
            color: "#fff",
            borderRadius: "8px",
        }
    }

  return (
    <header className={css.searchHeader}>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, actions) => {
          if (values.search.trim() === "") {
            toast.error("Please enter a search text!", {
              style: styleList.toast,
            });
            return;
          }
          onSearch(values.search.trim());
          actions.resetForm();
        }}
      >
        <Form>
            <button type="submit"><IoSearchCircleOutline /></button>
            <Field
                name="search"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images"
            />          
        </Form>
      </Formik>
    </header>
  );
}