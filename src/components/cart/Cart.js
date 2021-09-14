import { Fragment, useContext} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import CartContext from '../../context/cart/CartContext'
import CartItem from '../cart/CartItem'

export default function Cart() {
  const { showCart, showHideCart, cartItems, clearCart} = useContext(CartContext)

  return (
    <Transition.Root show={showCart} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={showHideCart}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-20 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Shopping Cart</Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={showHideCart}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    {cartItems.length !== 0 && (
                        <div className="flex justify-center items-center py-2 w-24 mt-3 cursor-pointer border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-400 hover:bg-red-500"
                        onClick={clearCart}>
                            Clear Cart
                        </div>
                    )}

                    {cartItems.length === 0 ? (
                        <div className="text-center m-12">No Items Added</div>
                        ) : (
                        <div>
                            {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                            ))}
                        </div>
                    )}
                  </div>

                  {cartItems.length !== 0 && (
                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        {/* <p>$
                          {
                              totalAmount.toFixed(2)
                          }
                        </p> */}
                      </div>
                      <div className="mt-6">
                        <div
                          className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Checkout
                        </div>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="text-indigo-600 font-medium hover:text-indigo-500"
                            onClick={showHideCart}
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}