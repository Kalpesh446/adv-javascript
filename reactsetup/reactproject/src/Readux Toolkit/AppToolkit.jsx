import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
// import CountComs from "./CountComs";
// import AmountCom from "./AmountCom";
import { fetchData } from "./feautures/user/userSlice";
import UserCom from "./UserCom";

export default function AppToolkit() {
  return (
    <>
      <Provider store={store}>
        {/* {<CountComs />} */}
        {/* <AmountCom /> */}
        <UserCom />
      </Provider>
    </>
  );
}
