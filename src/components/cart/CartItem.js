import { useContext, useState} from "react";
import CartContext from '../../context/cart/CartContext'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FiMinusSquare, FiPlusSquare } from 'react-icons/fi'

const CartItem = ({ item, totalAmount, setTotalAmount }) => {
  const { deleteFromCart } = useContext(CartContext)
  const [count, setCount] = useState(1)

  function increase(amount) {
      setCount(count+1)
  }

  function decrease(amount) {
        setCount(count-1)
  }

  return (
    <div className="mt-5">
        <div className="flow-root">
        <ul className="-my-6 divide-y divide-gray-200">
            <li key={item.id} className="py-6 flex">
                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-center object-cover"
                />
                </div>

                <div className="ml-4 flex-1 flex flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                        <p>{item.title}</p>
                    </h3>
                    <p className="ml-4">${count * item.price}</p>
                    </div>
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                    <div className="flex flex-row">
                    <FiMinusSquare className="cursor-pointer" size={25} onClick={() => decrease(item.price)}/>
                    {count === 0 ? deleteFromCart(item.id) : (
                        <div className="px-5 text-lg font-bold">{count}</div>
                    )}
                    <FiPlusSquare size={25} className="cursor-pointer" onClick={() => increase(item.price)}/>
                    </div>
                    <div className="flex">
                    <RiDeleteBin5Line size={25} className="cursor-pointer"
                    onClick={() => deleteFromCart(item.id)}/>
                    </div>
                </div>
                </div>
            </li>
        </ul>
        </div>
    </div>
    )
}

export default CartItem