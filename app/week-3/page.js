import ItemList from "./item-list";

export default function Page()
{
    return (
        <main className="bg-violet-900">
            <div className="p-5">
                <h2 className="text-3xl font-bold m-2 text-white">Shopping List</h2>
                <ItemList />
            </div>
        </main>
    );
}