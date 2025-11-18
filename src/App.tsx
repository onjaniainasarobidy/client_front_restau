import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import DrinksPage from "./components/DrinksPage";
import DishDetailPage from "./components/DishDetailPage";
import CartPage from "./components/CartPage";
import { Dish } from "./data/staticData";
import ReservationPage from "./components/ReservationPage";
import Footer from "./components/Footer";

interface CartItem extends Dish {
  quantity: number;
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedDishId, setSelectedDishId] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleNavigate = (page: string, dishId?: string) => {
    setCurrentPage(page);
    if (dishId) {
      setSelectedDishId(dishId);
    }
  };

  const handleAddToCart = (dish: Dish) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === dish.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartItemsCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white">
      <Header
        onNavigate={handleNavigate}
        currentPage={currentPage}
        cartItemsCount={cartItemsCount}
      />

      {currentPage === "home" && (
        <HomePage onNavigate={handleNavigate} onAddToCart={handleAddToCart} />
      )}

      {currentPage === "reservation" && <ReservationPage />}

      {currentPage === "menu" && (
        <MenuPage onNavigate={handleNavigate} onAddToCart={handleAddToCart} />
      )}

      {currentPage === "drinks" && <DrinksPage onAddToCart={handleAddToCart} />}

      {currentPage === "detail" && selectedDishId && (
        <DishDetailPage
          dishId={selectedDishId}
          onNavigate={handleNavigate}
          onAddToCart={handleAddToCart}
        />
      )}

      {currentPage === "cart" && (
        <CartPage
          onNavigate={handleNavigate}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
