import React, { useContext, useState } from "react";
import { MyContext } from "./Context";
import Loading from "./Loading";
import { Card, Container, Row, Button } from "react-bootstrap";
const NewsList = () => {
  const { data, isLoading } = useContext(MyContext);

  if (isLoading) {
    return (
      <h2>
        <Loading />
      </h2>
    );
  }


  const d = new Date()
  

  return (
    <>
      <Container fluid>
        <Row
          sx={1}
          sm={2}
          md={3}
          lg={4}
          className="gx-5 "
          style={{marginTop:"1rem"}}
          
        >
          {data?.map((item, index) => {
            const { description, datePublished, name, image, provider } = item;
            return (
              <div key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={image?.thumbnail?.contentUrl}
                    style={{ height: "10rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{name.slice(0)}</Card.Title>
                    <Card.Text>{description.substring(0, 30)}</Card.Text>
                    <h6>Source : {provider[0].name}</h6>
                    <h6>Article Date : {datePublished}</h6>
                    <Button variant="dark">More Details</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default NewsList;
