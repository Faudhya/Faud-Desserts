import { Card, Container, Row, Col, Image } from "react-bootstrap";
import oursignature1 from "../assets/oursignature/signature-1.jpg";
import oursignature2 from "../assets/oursignature/signature-2.jpg";
import oursignature3 from "../assets/oursignature/signature-3.jpg";
import oursignature4 from "../assets/oursignature/signature-4.jpg";
import oursignature5 from "../assets/oursignature/signature-5.jpg";
import oursignature6 from "../assets/oursignature/signature-6.jpg";

const OurSignature = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center sub-title">
                    Our Signature
                </h1>
                <br />
                <Row>
                    <Col md={4} id="oursignature">
                        <Card className="foodImage">
                            <Image
                                src={oursignature1}
                                alt="our signature 1"
                                className="images"
                            />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center card-text">
                                        Strawberry Yougurt Cake
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

                    <Col md={4} id="oursignature">
                        <Card className="foodImage">
                            <Image
                                src={oursignature2}
                                alt="our signature 2"
                                className="images"
                            />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center card-text">
                                        Mouthful Tarts
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

                    <Col md={4} id="oursignature">
                        <Card className="foodImage">
                            <Image
                                src={oursignature3}
                                alt="our signature 3"
                                className="images"
                            />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center card-text">
                                        Choco Moose
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

                    <Col md={4} id="oursignature">
                        <Card className="foodImage">
                            <Image
                                src={oursignature4}
                                alt="best seller 1"
                                className="images"
                            />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center card-text">
                                        Lovely Silky Pudding
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

                    <Col md={4} id="oursignature">
                        <Card className="foodImage">
                            <Image
                                src={oursignature5}
                                alt="best seller 1"
                                className="images"
                            />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center card-text">
                                        Chocolicous Pudding
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

                    <Col md={4} id="oursignature">
                        <Card className="foodImage">
                            <Image
                                src={oursignature6}
                                alt="best seller 1"
                                className="images"
                            />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center card-text">
                                        Berry Joy Cake
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

export default OurSignature;
