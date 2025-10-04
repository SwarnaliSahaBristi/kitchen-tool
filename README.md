# <img src="./assets/logo.png" width="30px" /> TAXI KITCHEN BOARD

**Kitchen Order Management System** – A real-time app to track and manage restaurant orders. View current orders, monitor cooking progress, and see ready-to-serve dishes with details like table number, waiter ID, and cooking time for efficient kitchen workflow.

## Project Overview

<img src="https://i.ibb.co.com/zV3w2cch/image.png"/>

## Technologies Used

- **React** – For building the interactive user interface
- **JavaScript** – Core language for logic and state management
- **Tailwind CSS** – Utility-first styling framework for responsive design
- **Lucide Icons** – Sleek icons for UI elements
- **React-Toastify** – For showing toast notifications and alerts

## Components

### Logo

```jsx
import logo from "../assets/logo.png"; // you should re-import image based on your image location
const Logo = () => {
  return (
    <div className="flex items-center gap-1 ">
      <img className="w-10 " src={logo} alt="" />
      <h2 className="text-xl font-bold text-shadow-xs">
        Taxi
        <span className="text-primary"> Kitchen</span>
      </h2>
    </div>
  );
};

export default Logo;
```

### Navbar

```jsx
import Logo from "./Logo"; // import your own component
const Navbar = () => {
  return (
    <div className="content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
      <Logo></Logo>
      <nav>
        <ul className="flex gap-16 ">
          <li className="">
            <a
              href="#"
              className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
            >
              Orders
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
            >
              Foods
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
            >
              Tables
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
```

### Title

```jsx
import { ChefHat } from "lucide-react";

const TitleSection = ({ children }) => {
  return (
    <h2
      className={`bg-[url(/title-bg.png)] flex justify-center items-center gap-1 text-4xl font-bold text-center bg-no-repeat pb-20 pt-10 bg-center`}
      style={{ backgroundSize: "100% 100%" }}
    >
      <ChefHat size={40} />
      {children}
    </h2>
  );
};

export default TitleSection;
```

### Card (Counting )

```jsx
import React from "react";
import { ChefHat, CookingPot, ScrollText, TicketCheck } from "lucide-react";

const CurrentOrdersCard = () => {
  const totalOrders = 12; // static number

  return (
    <div className="border-4 border-dotted rounded-2xl border-primary p-5">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <ScrollText className="animate-pulse" color="#fcb700" size={100} />
        <div className="text-xl text-center">
          Current Orders
          <h2 className="text-6xl font-bold">{totalOrders}</h2>
        </div>
      </div>
    </div>
  );
};

export default CurrentOrdersCard;
```

### Card ( Order )

```jsx
import { UtensilsCrossed } from "lucide-react";

const OrderCard = () => {
  // Static data (mock order)
  const order = {
    id: 1,
    order_no: 101,
    quantity: 2,
    order_title: "Chicken Biryani",
    special_instruction: "Extra spicy, no onions",
    table_no: 5,
  };

  return (
    <div className="p-5 rounded-xl shadow-xl relative space-y-3">
      {/* Order Number */}
      <p className="text-xs bg-amber-400 p-2 inline-block rounded-xl">
        #{order.order_no}
      </p>

      {/* Order Title */}
      <h2 className="text-xl flex items-center gap-2">
        <UtensilsCrossed />
        {order.quantity} {order.order_title}
      </h2>

      {/* Special Instruction */}
      <div className="mt-3 text-xs">
        <h4 className="text-primary font-bold text-sm">Instruction</h4>
        <p>{order.special_instruction}</p>
      </div>

      {/* Table Number Badge */}
      <div className="absolute right-2 top-2 w-10 h-10 flex justify-center items-center bg-primary rounded-full opacity-30 text-white">
        {order.table_no}
      </div>
    </div>
  );
};

export default OrderCard;
```

### Card ( Cooking )

```jsx
const CookingCard = () => {
  // Mock data
  const order = {
    order_title: "Pasta Alfredo",
    quantity: 2,
    special_instruction: "Extra cheese, no garlic",
  };

  return (
    <div
      className="rounded-xl p-5 shadow hover:shadow-lg"
      style={{
        background: "linear-gradient(#ffffff90, #FCB700), url('/cook-bg.gif')",
      }}
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-primary mb-2">
        {order.order_title}
      </h3>

      {/* Quantity */}
      <p className="text-lg font-semibold">
        Quantity: <span className="text-gray-700">{order.quantity}</span>
      </p>

      {/* Special Instruction */}
      <p className="text-xs text-gray-600 mt-2 italic">
        {order.special_instruction}
      </p>

      {/* Static Button */}
      <button className="px-6 mt-3 py-1 shadow text-sm hover:bg-black hover:text-white bg-white cursor-pointer rounded-xl">
        Cooked?
      </button>
    </div>
  );
};

export default CookingCard;
```

### Card ( Cooking Completed )

```jsx
const ServeCard = () => {
  // Static mock data
  const order = {
    order_title: "Beef Steak",
    table_no: 12,
    waiterId: "W-007",
    cooked_At: "12:45 PM",
  };

  return (
    <div className="border rounded-xl p-5 shadow bg-green-50 hover:shadow-md transition">
      {/* Order Title */}
      <h3 className="text-xl font-bold text-green-700 mb-2">
        {order.order_title}
      </h3>

      {/* Table No */}
      <p className="text-gray-800">
        <span className="font-semibold">Table:</span> {order.table_no}
      </p>

      {/* Waiter ID */}
      <p className="text-gray-800">
        <span className="font-semibold">Waiter ID:</span> {order.waiterId}
      </p>

      {/* Cooking Time */}
      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Cooking Time:</span> {order.cooked_At}
      </p>
    </div>
  );
};

export default ServeCard;
```

### License

This project was developed by Ferdous Zihad and is licensed under the MIT License.
