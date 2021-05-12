import { useState } from 'react'
import { Form, Button, Container, Row, Col}  from 'react-bootstrap'
import contactImage from '../../assets/img/contact-image.png'
import { sendEmail } from '../../axios'

const Contact = () => {
    const [validated, setValidated] = useState(false)
    const [formData, setFormData] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Se envió')
        const form = e.currentTarget;
        console.log(form.checkValidity())

        if (form.checkValidity()) {
            console.log(formData)
            console.log('Validado correctamente')
            let responseData = await sendEmail(formData)
            console.log(responseData.data)
            form.reset()
        } else {
            console.log('Por favor verifique los datos')
        }
    }

    const handleOnChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)

        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    console.log(formData)

    return (
        <section className="contact">
            <Container>
                <Row>
                    <Col md={12} lg={5}>
                        <h3>Get in touch<br></br>
                        <span>We are hiring!</span></h3>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control
                                onChange={handleOnChange}
                                required
                                type='text'
                                placeholder='Name'
                                name='name'
                                />
                            </Form.Group>

                            <Form.Group >
                                <Form.Control
                                onChange={handleOnChange}
                                required
                                name='email'
                                type='email'
                                placeholder='Email'
                                />
                            </Form.Group>

                            <Form.Group >
                                <Form.Control
                                onChange={handleOnChange}
                                required
                                name='phone'
                                type='tel'
                                placeholder='Phone'
                                />
                            </Form.Group>

                            <Form.Group controlId='formBasicTextArea'>
                                <Form.Control
                                onChange={handleOnChange}
                                required
                                name='message'
                                as='textarea'
                                rows={3}
                                placeholder='Message'
                                />
                                <Form.Control.Feedback type='invalid'>
                                Por favor ingrese un mensaje
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button variant='primary' type='submit'>Send</Button>
                        </Form>
                    </Col>
                    <Col md={12} lg={5}>
                        <img src={contactImage} alt='Contact' className='contactImage' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;