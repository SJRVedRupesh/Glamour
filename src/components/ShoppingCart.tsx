import { useState, useRef, useEffect } from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShoppingCartProps {
  onClose?: () => void;
}

const ShoppingCart = ({ onClose }: ShoppingCartProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const removeItem = (itemId: string) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div 
      ref={cartRef}
      className="absolute right-0 top-16 w-96 bg-white rounded-md shadow-lg border border-gray-200 p-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Shopping Cart</h3>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full">Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart; 