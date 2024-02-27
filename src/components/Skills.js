import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import jsLogo from "../assets/img/js.png"
import sapLogo from "../assets/img/sap.png"
import ui5Logo from "../assets/img/ui5.png"
import htmlLogo from "../assets/img/html.png"
const skills = [
    {
        name: "JavaScript",
        description: "Experienced with JavaScript programming.",
        imageUrl: jsLogo
    },
    {
        name: "SAP BTP",
        description: "Expertise in SAP Business Technology Platform.",
        imageUrl: sapLogo
    },
    {
        name: "SAP UI5",
        description: "Expertise in SAP UI5.",
        imageUrl: ui5Logo
    },
    {
        name: "HTML5",
        description: "Proficient in HTML5, creating semantic and accessible web structures.",
        imageUrl: htmlLogo
    },
    {
        name: "CSS3",
        description: "Skilled in CSS3 for responsive and engaging web designs.",
        // imageUrl: css3Logo
    },
    {
        name: "Node.js",
        description: "Experience in using Node.js for backend development.",
        // imageUrl: nodejsLogo
    },
    {
        name: "SAP Fiori",
        description: "Knowledge in developing SAP Fiori apps with enhanced user experience.",
        // imageUrl: fioriLogo
    },
    {
        name: "React",
        description: "Proficient in React for building user interfaces.",
        // imageUrl: reactLogo
    },
    {
        name: "Cloud Foundry",
        description: "Familiar with deploying applications using Cloud Foundry.",
        // imageUrl: cfLogo
    },
    {
        name: "CAP",
        description: "Experience in Cloud Application Programming model.",
        // imageUrl: capLogo
    }
    // Add more skills
];
function Skills() {
    return (
        <div className="skills-container">
            <Row xs={1} md={2} lg={3}>
                {skills.map((skill, idx) => (
                    <Col key={idx} className="skill-card-col">
                        <Card className="skill-card">
                            <Card.Img variant="top" src={skill.imageUrl} className="skill-image" />
                            <Card.Body>
                                <Card.Title>{skill.name}</Card.Title>
                                <Card.Text>
                                    {skill.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Skills