export default function Item({item})
{
    return (
        <li key={item.id} className="p-2 m-4 bg-slate-900 max-w-sm">
            <h2  className="text-xl text-white font-bold">{item.name}</h2>
            <div  className="text-sm  text-white italic">Buy {item.quantity} in {item.category}</div>
        </li>
    );
}

