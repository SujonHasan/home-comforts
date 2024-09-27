import { useAppContext } from "../productContextProvider/ProductContextProvider";

export default function OrderCalculation() {
  const { cart, quantity } = useAppContext();

  const calculateTotalPrice = () => {
    return cart ? cart.reduce((total, item) => {
      const price = parseFloat(item.discountPrice * item.quantity) || 0;
      return total + price;
    }, 0) : 0;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div>
      <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
        order summary
      </h4>
      <div className="space-y-2">
        {cart &&  cart.map((cartItem) => {
          return (
            <div className="flex justify-between" key={cartItem._id}>
              <div>
                <h5 className="text-gray-800 font-[10px]">{cartItem.name}</h5>
              </div>
              <div className="text-[#000] text-lg font-semibold">
                x{cartItem.quantity}
              </div>
              <p className="text-gray-800 font-medium">
                {cartItem.discountPrice * cartItem.quantity} tk
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>subtotal</p>
        <p>{totalPrice} tk</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>shipping</p>
        <p>Free</p>
      </div>

      <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
        <p className="font-semibold">Total</p>
        <p>{totalPrice} tk </p>
      </div>

      <div className="flex items-center mb-4 mt-2">
        <input
          type="checkbox"
          name="aggrement"
          id="aggrement"
          className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
        />
        <label
          htmlFor="aggrement"
          className="text-gray-600 ml-3 cursor-pointer text-sm"
        >
          I agree to the{" "}
          <a href="#" className="text-[#00A9E1]">
            terms & conditions
          </a>
        </label>
      </div>
    </div>
  );
}
