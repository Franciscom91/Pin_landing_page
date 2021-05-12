import { Accordion, Card } from 'react-bootstrap';

const Services = () => {
    return (
        <div className="container-fluid">
            <div id='services' className='servicesGeneral'>

                <Accordion className='Acordeon' defaultActiveKey="0">
                    <Card className='cart'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Sed ut perspiciatis
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body className='CardBody'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card lassName='cart'>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        Ut enim ad minima veniam
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body className='CardBody'>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card lassName='cart'>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                        Sit amet, consectetur, adipisci
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body className='CardBody'>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    )
}

export default Services