import dummy from "../../public/dummy.json";
export default function MusicPlayer() {
    return (
        <div className="w-full h-500 shadow-navbar bg-white flex flex-col justify-center items-center pt-[3rem] rounded-4xl">
            <img className="rounded-4xl h-[515px] w-auto " src={dummy.Music.image} alt="music" />
            <h1 className="font-bold text-2xl py-4"> Now Playing: {dummy.Music.title}</h1>
        </div>
    )
}