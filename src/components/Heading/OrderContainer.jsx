import React, { use, useEffect, useState } from "react";
import Banner from "./Banner";
import OrderCard from "./OrderCard";
import CookingCard from "./CookingCard";
import ReadyCard from "./ReadyCard";
import { toast } from "react-toastify";

const randomColorGen = () =>{
  return`
  rgb(
  ${parseInt(Math.random()*255)},
  ${parseInt(Math.random()*255)},
  ${parseInt(Math.random()*255)},
  0.2
  )
  `
}

const OrderContainer = ({ orderPromise }) => {
  const data = use(orderPromise);

    const[randomColor, setRandomColor] = useState(randomColorGen())
    const[orders, setOrders] = useState(data)
//   console.log(orders);
    const [cookingItems, setCookingItems] = useState([])
    const [readyItems, setReadyItems] = useState([])

    useEffect(()=>{
      setRandomColor(randomColorGen());
    },[readyItems, cookingItems])

    const handleOrder = (order) =>{
        console.log(order)
        const isExist = cookingItems.find(item=> item.id == order.id);
        if(isExist){
            toast.error("Order Already Cooking!!")
            return;
        }
        const newCookingItems = [...cookingItems, order]
        setCookingItems(newCookingItems)
    }
    const handleCooking= (order)=>{
        order.cookedAt= new Date().toLocaleTimeString();
        //add into ready items
        const newReadyItems=[...readyItems,order]
        setReadyItems(newReadyItems)
        //remove from cooking items
        const remaining = cookingItems.filter(item=> item.id!== order.id);
        setCookingItems(remaining)
        //remove order from orders
        const remainingOrders = orders.filter(item=>item.id!==order.id);
        setOrders(remainingOrders)
    }
  return (
    <div id="home" style={{backgroundColor: randomColor}}>
      <Banner readyTotal={readyItems.length} cookingTotal={cookingItems.length} orderTotal={orders.length}></Banner>

      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <h2 className="font-bold text-4xl">Current Orders</h2>

          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard handleOrder={handleOrder} key={order.id} order={order}></OrderCard>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 space-y-5">
          <h2 className="font-bold text-4xl">Cooking Now</h2>
          <div className="shadow p-10 space-y-5">
                {
                    cookingItems.map(order=>(
                        <CookingCard handleCooking={handleCooking} key={order.id} order={order}></CookingCard>
                    ))
                }
          </div>
          <h2 className="font-bold text-4xl">Order Ready</h2>
          <div className="shadow p-10 space-y-5">
            {
                readyItems.map(order=>(
                    <ReadyCard key={order.id} order={order}></ReadyCard>
                ))
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
