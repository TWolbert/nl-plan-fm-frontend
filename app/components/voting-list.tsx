import { it } from "node:test";
import dummy from "../../public/dummy.json";



function Item({ title, image, voter }: { title: string, image: string, voter: string }) {
    return (
        <div className="flex max-h-[67px] w-full bg-background px-2 rounded-3xl py-2  justify-start relative gap-3 flex-row">
            <div className="flex flex-row gap-3">
            <img className="rounded-2xl object-contain" src={image} alt="music" />
            <h1 className="font-bold text-2xl py-4"> {title}</h1>
            </div>

            <img className=" object-cover w-auto h-full rounded-2xl" src={voter} alt="voter" />
        </div>
    )
}

export default function VotingList() {
    var data = dummy["voting-group"];
    return (
        <div className="w-full shadow-navbar gap-4 bg-white flex flex-col px-4 py-5 rounded-4xl">
            <h1 className="px-4 font-bold text-2xl py-4"> Next voting group:</h1>
            {
                data.map((item ) => {
                    return <Item title={item[0]} image={item[1]} voter={item[2]} />
                })
            }
        </div>
    )
}