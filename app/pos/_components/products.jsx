"use client";

export const Products = ({ biz_products }) => {
  const handleCart = (id) => {
    if (typeof window !== "undefined") {
      let cart_items_array = [];
      let cart_items_object = {};

      const cart_items = window.localStorage.getItem("cart_items_array");

      if (cart_items) {
        // local storage items available

        let new_cart_items = JSON.parse(cart_items);

        cart_items_object = { id };

        new_cart_items.unshift(cart_items_object);

        window.localStorage.setItem(
          "cart_items_array",
          JSON.stringify(new_cart_items)
        );
      } else {
        //local storage items not available
        window.localStorage.setItem(
          "cart_items_array",
          JSON.stringify(cart_items_array)
        );

        const items = window.localStorage.getItem("cart_items_array");

        let new_cart_items = JSON.parse(items);

        cart_items_object = { id };

        new_cart_items.unshift(cart_items_object);

        window.localStorage.setItem(
          "cart_items_array",
          JSON.stringify(new_cart_items)
        );
      }
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {biz_products?.map((item, i) => (
        <div
          onClick={() => handleCart(item?.id)}
          className="col-span-1 flex items-center space-x-1 border border-zinc-400 cursor-pointer"
          key={i}
        >
          <div>{item?.name}</div>
          <div>{item?.sellprice}</div>
        </div>
      ))}
    </div>
  );
};
