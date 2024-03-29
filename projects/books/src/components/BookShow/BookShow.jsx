import { useState } from "react";
import PropTypes from "prop-types";

import BookEdit from "components/BookEdit/BookEdit";
import useBooksContext from "hooks/useBooksContext";

function BookShow(props) {
  const { book } = props;

  const [showEdit, setShowEdit] = useState(false);

  const { handleDeleteBookById, handleEditBookById } = useBooksContext();

  const handleOnDeleteClick = () => {
    handleDeleteBookById(book.id);
  };

  const handleOnEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleOnSubmit = (id, newTitle) => {
    handleEditBookById(id, newTitle);
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {!showEdit ? (
        book.title
      ) : (
        <BookEdit book={book} handleOnSubmit={handleOnSubmit} />
      )}
      <div className="actions">
        <button onClick={handleOnEditClick} className="edit">
          Edit
        </button>
        <button onClick={handleOnDeleteClick} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

BookShow.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookShow;
