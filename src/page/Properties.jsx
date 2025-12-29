import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export const propertyData = [
  {
    id: 1,
    title: "Modern Villa in Coimbatore",
    location: "Coimbatore, Tamil Nadu",
    price: "₹75,00,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "Luxury Apartment in Chennai",
    location: "Chennai, Tamil Nadu",
    price: "₹90,00,000",
    image: "https://www.soulspaceinfra.in/abv-arbor.jpg",
  },

  {
    id: 3,
    title: "Farm Land near Salem",
    location: "Salem, Tamil Nadu",
    price: "₹25,00,000",
    image:
      "https://api.sfarmsindia.com/images/product/82b58a5ce1c02ff75ca7f703f73a3cfd---sharp",
  },
  {
    id: 4,
    title: "2Bhk Premium House ",
    location: "coimbatore, Tamil Nadu",
    price: "₹25,00,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-A2pSOmQBYIRqcPUgk05K44fkya7cyuN-g&s",
  },
  {
    id: 5,
    title: "Land sale 10 Acre",
    location: "Coimvatore, Tamil Nadu",
    price: "₹25,00,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGv3uuwbPqksYMhSEAVnwsHfQEplrlJpFlg&s",
  },
  {
    id: 6,
    title: "Small Budhect",
    location: "Salem, Tamil Nadu",
    price: "₹25,00,000",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
  {
    id: 7,
    title: "Farm Land near Salem",
    location: "Salem, Tamil Nadu",
    price: "₹25,00,000",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
  {
    id: 8,
    title: "Farm Land near Salem",
    location: "Salem, Tamil Nadu",
    price: "₹25,00,000",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
];

const Properties = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4 text-primary">
        Available Properties
      </h2>
      <Row>
        {propertyData.map((property) => (
          <Col md={4} className="mb-4" key={property.id}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src={property.image} height="220px" />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>
                  {property.location} <br />
                  <strong>{property.price}</strong>
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <Link to="/">
                    <i class="bi bi-whatsapp text-success    fs-3"></i>
                  </Link>
                  <i class="bi bi-envelope-arrow-down text-secondary    fs-3"></i>

                  <Link to={`/propertydetail/${property.id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Properties;
