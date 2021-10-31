import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";

import { resetStore, setStoreError } from "../../store/actions";
import Modal from "./modal/Modal";

type Props = {
  error: Error;
};

const StoreError: FC<Props> = ({ error }) => {
  const dispatch = useDispatch();
  const handleAccept = useCallback(() => dispatch(setStoreError()), [dispatch]);
  const handleReset = useCallback(
    () => dispatch(resetStore()) && handleAccept(),
    [dispatch],
  );

  return (
    <Modal>
      <h2>Storage Error</h2>

      <p>
        Artiss is unable to save your settings. This may happen because Artiss
        does not have permission to store data, or that your settings data is
        too large.
      </p>
      <p>
        Resetting to default or reinstalling Artiss may help. Otherwise contact{" "}
        <a href="mailto:support@artiss.io">support@artiss.io</a> if you are
        unable to solve the issue.
      </p>
      <pre>
        <strong>Error Reason:</strong> {error.message}
      </pre>

      <button onClick={handleAccept}>Okay</button>
      <button onClick={handleReset}>Reset Artiss</button>
    </Modal>
  );
};

export default StoreError;
