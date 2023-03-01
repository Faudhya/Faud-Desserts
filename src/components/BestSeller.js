import { Card, Container, Row, Col, Image } from "react-bootstrap";
import bestseller1 from "../assets/bestseller/bestseller-1.jpg";
import bestseller2 from "../assets/bestseller/bestseller-2.jpg";
import bestseller3 from "../assets/bestseller/bestseller-3.jpg";
import bestseller4 from "../assets/bestseller/bestseller-4.jpg";
import bestseller5 from "../assets/bestseller/bestseller-5.jpg";
import bestseller6 from "../assets/bestseller/bestseller-6.jpg";

const BestSeller = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center sub-title">
                    Best Seller
                </h1>
                <br />
                <Row>
                    <Col md={4} id="bestseller">
                        <Card className="foodImage">
                            <Image
                                src={bestseller1}
                                alt="best seller 1"
                                className="images"
                            />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center card-text">
                                        Happy Choco Pudding
                                    </Card.Title>
                                    <Card.Text className="text-left card-text">
                                        This is a wider card with natural
                                        lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left card-text">
                                        Last updated 5 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} id="bestseller">
                        <Card className="foodImage">
                            <Image
                                src={bestseller2}
                                alt="best seller 2"
                                className="images"
                            />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center card-text font-weight-bold">
                                        Citrus Cakey
                                    </Card.Title>
                                    <Card.Text className="text-left card-text">
                                        This is a wider card with natural
                                        lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left card-text">
                                        Last updated 5 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} id="bestseller">
                        <Card className="foodImage">
                            <Image
                                src={bestseller3}
                                alt="best seller 1"
                                className="images"
                            />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center card-text font-weight-bold">
                                        Berry Chocolicous
                                    </Card.Title>
                                    <Card.Text className="text-left card-text">
                                        This is a wider card with natural
                                        lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left card-text">
                                        Last updated 5 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} id="bestseller">
                        <Card className="foodImage">
                            <Image
                                src={bestseller4}
                                alt="best seller 4"
                                className="images"
                            />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center card-text font-weight-bold">
                                        Berry Cupcake
                                    </Card.Title>
                                    <Card.Text className="text-left card-text">
                                        This is a wider card with natural
                                        lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left card-text">
                                        Last updated 5 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} id="bestseller">
                        <Card className="foodImage">
                            <Image
                                src={bestseller5}
                                alt="best seller 1"
                                className="images"
                            />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center card-text font-weight-bold">
                                        Berry Happy Tiramisu
                                    </Card.Title>
                                    <Card.Text className="text-left card-text">
                                        This is a wider card with natural
                                        lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left card-text">
                                        Last updated 5 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} id="bestseller">
                        <Card className="foodImage">
                            <Image
                                src={bestseller6}
                                alt="best seller 6"
                                className="images"
                            />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center card-text font-weight-bold">
                                        Original Tiramisu
                                    </Card.Title>
                                    <Card.Text className="text-left card-text">
                                        This is a wider card with natural
                                        lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left card-text">
                                        Last updated 5 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BestSeller;
