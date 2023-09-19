import React from "react";
import CardCom from "../../components/CardCom";
import FoodData from "../../../utils/FoodData.json";
export default function HomeContent() {
  return (
    <>
      <div className=" ms-auto d-flex flex-wrap justify-content-center  ">
        {FoodData?.map?.((e) => {
          return <CardCom data={e} />;
        })}
      </div>
    </>
  );
}
