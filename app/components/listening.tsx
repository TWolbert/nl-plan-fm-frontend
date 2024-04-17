import dummy from "../../public/dummy.json";

function Item({ title, image, time }: { title: string, image: string, time: string }) {
    return (
        <div className="flex max-h-[67px] w-full bg-background px-2 rounded-3xl py-2  justify-start relative gap-3 flex-row">
            <div className="flex flex-row gap-3">
            <img className="rounded-2xl object-contain" src={image} alt="music" />
            <h1 className="font-bold text-2xl py-4"> {title}</h1>
            </div>

            <p className="w-full flex justify-end items-center font-bold px-2 text-2xl">{time}</p>
        </div>
    )
}

export default function Listening() {
    return (
        <div className="w-full h-full shadow-navbar gap-3 px-3 bg-white flex flex-col justify-center items-center  rounded-4xl">
            <h1 className="font-bold text-2xl py-4"> People Listening</h1>
            {
                dummy.peopleListening.map((item ) => {
                    return <Item title={item[1]} image={item[0]} time={item[2]} />
                })
            }
        </div>
    )
}