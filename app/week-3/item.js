export default function Item({name, quantity, category})
{
    return (
        <li className="p-2 m-4 bg-violet-600 max-w-sm rounded">
            <h2 className="text-xl text-white font-bold">{name}</h2>
            <div className="text-sm  text-white italic">Buy {quantity} in {category}</div>
        </li>
    );
}

