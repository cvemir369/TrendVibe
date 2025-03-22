import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  return (
    <>
      <tr className="border-b border-gray-200">
        <th className="p-4">
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td className="p-2">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <Link
                to={`/products/${item.id}`}
                className="mask mask-squircle h-12 w-12 md:h-16 md:w-16"
              >
                <img src={item.image} alt={`Image of ${item.title}`} />
              </Link>
            </div>
            <div>
              <Link
                to={`/products/${item.id}`}
                className="font-bold text-xs md:text-base block mb-1"
              >
                {item.title}
              </Link>
              <div className="badge badge-ghost badge-sm text-xs md:text-xs">
                {item.category}
              </div>
            </div>
          </div>
        </td>
        <td className="px-4 text-xs md:text-sm">
          {item.description.length > 200
            ? `${item.description.slice(0, 200)}...`
            : item.description}
        </td>
        <td className="px-4 min-w-28 text-sm md:text-base">{item.price} €</td>
        <td className="p-2 min-w-36">
          <div className="flex items-center">
            <button className="btn btn-xs md:btn-sm">-</button>
            <span className="mx-2 text-sm md:text-base">{item.quantity}</span>
            <button className="btn btn-xs md:btn-sm">+</button>
          </div>
        </td>
        <th className="px-4 min-w-28 text-sm md:text-base">
          {item.price * item.quantity} €
        </th>
      </tr>
    </>
  );
};

export default CartItem;
