import Chatbox from "./components/chatbox";
import Listening from "./components/listening";
import MusicPlayer from "./components/musicplayer";
import Vote from "./components/vote";
import VotingList from "./components/voting-list";

export default function Home() {
  return (
    <main className="flex bg-background px-0 min-h-screen flex-col items-center justify-between p-24">
      <div className="grid w-full justify-between grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 px-2"><MusicPlayer/><VotingList/></div>
        <div className="flex flex-col gap-4 px-2"><Vote/><Listening/></div>
        <div className="flex flex-col gap-4 px-2"><Chatbox/></div>
      </div>
    </main>
  );
}
