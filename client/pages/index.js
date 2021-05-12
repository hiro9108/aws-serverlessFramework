import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/client";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [session, loading] = useSession();

  const onClickHandler = () => {};

  const onClickGetDataHandler = async () => {
    const { data } = await axios.get("https://xxxxx", {
      headers: {
        Authorization: `token`,
      },
    });
    console.log(data);
  };

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <br />
        <button onClick={onClickGetDataHandler}>Get API Data</button>
      </>
    );
  }
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <button
            type="button"
            className="rounded-lg px-4 py-2 text-white bg-gray-400"
            onClick={onClickHandler}
          >
            Sign In
          </button>
          <br />
          <button onClick={() => signIn()}>NextAuth</button>
        </main>
      </div>
    </>
  );
}
