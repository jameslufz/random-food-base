import Link from 'next/link'
import { useState } from 'react';
import { Button, Card, Col, Navbar,Container, Image, Row }   from 'react-bootstrap'
import { RiRefreshLine } from "react-icons/ri";

export default function Index() {

    return <>
        <style jsx global>{`
            #__next,html,body {height:100%;}
            img {object-fit:cover;}
            body {background-image:url(main/background.jpg);}
        `}</style>
        <Navbar bg="dark" variant="dark">
            <Link href="/" passHref>
                <Navbar.Brand>ระบบสุ่มอาหาร</Navbar.Brand>
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                หมดปัญหาคิดเมนูไม่ออก
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        <Container>
            <div className="d-flex justify-content-center align-items-center h-100">
                <Row>
                    <Col md={12}>
                        <h1 className="text-center text-light">James Poom Saan's Random food Service</h1>
                        <p className="text-center text-light h4">ระบบสุ่มอาหารฟรี</p>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Img rounded  src="main/food.jpg" width={250} height={250} />
                                <Link href="/food">
                                    <Button variant="outline-success" className="w-100 mt-3">สุ่มอาหาร</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Img rounded  src="main/dessert.jpg" width={250} height={250} />
                                <Link href="/dessert">
                                    <Button variant="outline-danger" className="w-100 mt-3">สุ่มของหวาน</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Img rounded  src="main/drink.jpg" width={250} height={250} />
                                <Link href="/drink">
                                    <Button variant="outline-info" className="w-100 mt-3">สุ่มเครื่องดื่ม</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    </>
}