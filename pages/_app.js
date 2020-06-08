import React, { Fragment, useState, useEffect } from "react";
import Modal from "react-modal";

const App = ({ Component, pageProps }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  Modal.setAppElement("#__next");

  return (
    <Fragment>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        Oh, hi there!
      </Modal>
      <Component {...pageProps} />;
    </Fragment>
  );
};

export default App;
