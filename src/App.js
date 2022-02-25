import { useEffect, useState } from "react";
import Form from "./components/Form";
import Item from "./components/Item";
import Total from "./components/Total";

function App() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const deleteItem = (item) => {
    let newItems = items.filter((ele) => ele.id !== item.id);
    setItems(newItems);
  };

  const aumentarCantidad = (itemEdit) => {
    const price = itemEdit.price;
    let newItemCantidad = {
      ...itemEdit,
      cantidad: itemEdit.cantidad + 1,
      total: price * (itemEdit.cantidad + 1),
    };

    let newItems = items.map((item) =>
      item.id === itemEdit.id ? newItemCantidad : item
    );

    setItems(newItems);
    console.log(itemEdit.price);
  };

  const disminuirCantidad = (itemEdit) => {
    const price = itemEdit.price;
    let newItemCantidad = {
      ...itemEdit,
      cantidad: itemEdit.cantidad - 1,
      total: price * (itemEdit.cantidad - 1),
    };

    if (itemEdit.cantidad === 1) {
      deleteItem(itemEdit);
    } else {
      let newItems = items.map((item) =>
        item.id === itemEdit.id ? newItemCantidad : item
      );
      setItems(newItems);
    }
  };

  const updateTotalPrice = (items) => {
    //Esta funcion genera un array con el precio total (cantidad+precio) de cada item y lo guarda en total, esto con la finalidad de hacer siempre un array actualizado del precio total, bien sea que el user haya disminuido cantidad o aumentado, para luego con un reduce sumamos todos sus elementos.
    let total = items.map((ele) => ele.total);
    setTotalPrice(total.reduce((a, b) => a + b, 0));
  };

  useEffect(() => {
    updateTotalPrice(items);
  }, [items]);

  return (
    <div className="App row">
      <h1 className="h2-color text-center my-2 display-5">
        Lista de compras App
      </h1>
      <hr />
      <div className="col-md-12 col-lg-6">
        <Form setItems={setItems} items={items} />
      </div>
      <div className="col-md-12 col-lg-6">
        {items.length == 0 ? (
          <h3 className="h2-color text-center display-5">
            Empieza a registrar los productos de la lista!
          </h3>
        ) : (
          items.map((item) => (
            <Item
              key={item.id}
              item={item}
              aumentarCantidad={aumentarCantidad}
              disminuirCantidad={disminuirCantidad}
              deleteItem={deleteItem}
            />
          ))
        )}
        {items.length == 0 ? null : <Total totalPrice={totalPrice} />}
      </div>
    </div>
  );
}

export default App;
