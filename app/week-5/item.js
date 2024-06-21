export default function Item({name, quantity, category})
{
    return (
        <li className="p-2 m-4 bg-slate-900 max-w-sm">
            <h2  className="text-xl text-white font-bold">{name}</h2>
            <div  className="text-sm  text-white italic">Buy {quantity} in {category}</div>
        </li>
    );
}

