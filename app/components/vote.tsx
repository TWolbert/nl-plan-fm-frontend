import dummy from "../../public/dummy.json";


export default function Vote() {
    return (
        <div className="grid shadow-navbar grid-cols-2 p-6 rounded-4xl gap-8 bg-white h-[500px]">
 <div className="flex flex-col gap-3">
                <div className="border-0 shadow-navbar border-pink rounded-4xl overflow-hidden">
                    <img className=" object-cover" src={dummy.voting[0].image} alt={dummy.voting[1].title} />
                </div>
                <div className="w-full flex gap-1 px-4 justify-center items-center flex-col">
                    <h1>{dummy.voting[0].title}</h1>
                    <h2>{dummy.voting[0].requester}</h2>
                    <p className="text-8xl font-bold">{dummy.voting[0].votes}</p>
                    <div className="w-full h-4 overflow-hidden rounded-3xl bg-background shadow-navbar">
                        <div className='w-[30%] bg-pink h-full'></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="border-4 shadow-navbar border-pink rounded-4xl overflow-hidden">
                    <img className=" object-cover" src={dummy.voting[1].image} alt={dummy.voting[1].title} />
                </div>
                <div className="w-full flex gap-1 px-4 justify-center items-center flex-col">
                    <h1>{dummy.voting[1].title}</h1>
                    <h2>{dummy.voting[1].requester}</h2>
                    <p className="text-8xl font-bold">{dummy.voting[1].votes}</p>
                    <div className="w-full h-4 overflow-hidden rounded-3xl bg-background shadow-navbar">
                        <div className="w-2/3 bg-pink h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}