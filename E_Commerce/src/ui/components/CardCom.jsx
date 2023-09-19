import { Button } from "antd";
import { Heart } from "lucide-react";
import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
export default function CardCom(props) {
  return (
    <>
      <Card
        className=" m-3 border-0 rounded-4 shadow"
        style={{
          width: "17rem",
          backgroundColor: "rgba(186, 164, 164, 0.409)  ",
        }}
      >
        <img
          className="rounded-3 w-100"
          style={{
            height: "17rem",
          }}
          alt="Sample"
          src={props?.data?.img}
        />
        <CardBody className=" text-center">
          <CardTitle tag="h5">{props?.data?.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            $ {props?.data?.price}
          </CardSubtitle>

          <Button
            className="w-50"
            style={{
              color: "black",
              backgroundColor: "red",
              fontWeight: "bold",
            }}
          >
            Buy
          </Button>
          <Button className="w-50" style={{ backgroundColor: "green" }}>
            <Heart color="#ffffff" />
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
