import dummy from "../../public/dummy.json";

export default function Navbar() {
    return (
        <div className="w-full fixed h-16 shadow-navbar flex rounded-b-3xl justify-between items-center px-8 bg-white">
            <div>
                <h1 className="text-3xl font-bold">NL Plan FM</h1>
            </div>
            <div className="flex h-8 flex-row gap-3">
                <p className="text-lg font-bold">Hello, {dummy.user.name}</p>
                <img className="rounded-full object-scale-down" src={dummy.user.image} alt="Teun" />
            </div>
        </div>
    )
}