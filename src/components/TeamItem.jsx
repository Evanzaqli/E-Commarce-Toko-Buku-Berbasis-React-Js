import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import { Instagram ,Linkedin,Twitter} from 'react-feather';


function Team() {
    const teamMembers = [
        { id: 1, name: 'Evan Zaqli', role: 'Frontend', image: '/image/6(sq).jpeg' },
        { id: 2, name: 'Jane Smith', role: 'CTO', image: '/image/2.jpg' },
        { id: 3, name: 'Alice Johnson', role: 'Designer', image: '/image/3(sq).jpg' },
        { id: 4, name: 'Bob Williams', role: 'Developer', image: '/image/4(sq).jpeg' },
        { id: 5, name: 'Eve Brown', role: 'Marketing', image: '/image/1(sq).jpg' },
        { id: 6, name: 'Charlie Davis', role: 'Sales', image: '/image/5(sq).jpeg' }
    ];

    // Menyusun anggota tim ke dalam kelompok-kelompok dengan 3 anggota per kelompok
    const groupedMembers = [];
    for (let i = 0; i < teamMembers.length; i += 3) {
        groupedMembers.push(teamMembers.slice(i, i + 3));
    }

    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <h4 style={{ textAlign: "center", fontWeight: "bold" }}>Our Team</h4>
            <Carousel interval={5000} indicators={false} style={{ maxHeight: "500px" }}>
                {groupedMembers.map((group, index) => (
                    <Carousel.Item key={index}>
                        <Row style={{ display: 'flex', justifyContent: 'center' }}>
                            {group.map((member) => (
                                <Col key={member.id} sm={3} style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                    <Card style={{ width: "90%", margin: "auto" }}>
                                        <Card.Img variant="top" src={member.image} style={{ maxHeight: "300px", objectFit: "cover", borderRadius: "10px" }} />
                                        <Card.Body>
                                            <Card.Title>{member.name}</Card.Title>
                                            <Card.Text>{member.role}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Team;
