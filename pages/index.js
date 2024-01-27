import Center from "../components/Center";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden ">
      <main>
        <div className="flex">
          <Sidebar />
          <Center />
        </div>
        <div className="sticky bottom-0 z-10">
          <Player />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
