import React from "react";
import axios from "axios";

export default function useRequest({ url, method, body }) {
  const [errors, setErrors] = React.useState(null);

  const doRequest = async () => {
    try {
      const response = await axios[method](url, body);
      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops....</h4>
          <ul className="my-0">
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { errors, doRequest };
}
