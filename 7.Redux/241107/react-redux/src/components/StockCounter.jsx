import { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import stockReducer from "./../modules/stockReducer";
import { soldout, sale } from "../modules/stockReducer";

export default function StockCounter() {
  const { message } = useSelector((state) => {
    return { message: state.stockReducer.message };
  });

  const { stock } = useSelector(
    (state) => ({
      stock: state.goodsReducer.stock,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (stock <= 0) {
      dispatch(soldout());
    } else {
      dispatch(sale());
    }
  }, [stock]);
  return (
    <div>
      <strong>{message}</strong>
    </div>
  );
}
