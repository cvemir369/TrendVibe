const CartItem = ({ item }) => {
  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-16 w-16">
                <img src={item.image} alt={`Image of ${item.title}`} />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.title}</div>
              <div className="badge badge-ghost badge-sm">{item.category}</div>
            </div>
          </div>
        </td>
        <td>{item.description}</td>
        <td>{item.price} €</td>
        <td>{item.quantity}</td>
        <th>{item.price * item.quantity} €</th>
      </tr>
    </>
  );
};

export default CartItem;
