import buildClient from "../api/buildClient";

export default function LandingPage({ currentUser }) {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>Your are NOT signed in</h1>
  );
}

export const getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};
