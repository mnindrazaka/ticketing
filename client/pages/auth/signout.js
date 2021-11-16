import useRequest from "../../hooks/useRequest";
import Router from "next/router";
import React from "react";

export default function Signout() {
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });

  React.useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out...</div>;
}
