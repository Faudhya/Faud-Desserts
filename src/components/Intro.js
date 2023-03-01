import { Col, Container, Row } from "react-bootstrap";

const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="title">Made With Love</div>
                        <div className="title">Happy Treats, Happy Tummy</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Intro;
