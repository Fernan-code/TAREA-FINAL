import React, { useState } from 'react';
import {
  Card, CardBody, CardTitle, CardText, Button,
  Row, Col, Modal, ModalHeader, ModalBody
} from 'reactstrap';

const cursos = [
  {
    id: 1,
    titulo: 'Curso de Caporales',
    descripcion: 'Aprende a bailar Caporales desde cero con trajes típicos.',
    imagen: '/public/caporales.jpeg',
    precio: '150 Bs'
  },
  {
    id: 2,
    titulo: 'Curso de Tinku',
    descripcion: 'Entrenamiento completo para dominar el estilo Tinku.',
    imagen: '/public/tinkus.jpg',
    precio: '130 Bs'
  },
  {
    id: 3,
    titulo: 'Curso de Morenada',
    descripcion: 'Clases de ritmo, vestimenta y pasos tradicionales.',
    imagen: '/public/images.jpeg',
    precio: '170 Bs'
  }
];

function OfertaCursos() {
  const [modal, setModal] = useState(false);
  const [precioSeleccionado, setPrecioSeleccionado] = useState('');

  const toggle = () => setModal(!modal);

  const mostrarPrecio = (precio) => {
    setPrecioSeleccionado(precio);
    toggle();
  };

  return (
    <div>
      <h2 className="text-center mb-4">Oferta de Cursos</h2>
      <Row>
        {cursos.map((curso) => (
          <Col md="12" className="mb-3" key={curso.id}>
            <Card body>
              <Row>
                <Col md="4">
                  <img src={curso.imagen} alt={curso.titulo} className="img-fluid" />
                </Col>
                <Col md="8">
                  <CardBody>
                    <CardTitle tag="h5">{curso.titulo}</CardTitle>
                    <CardText>{curso.descripcion}</CardText>
                    <Button color="info" onClick={() => mostrarPrecio(curso.precio)}>Ver precio</Button>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Precio del curso</ModalHeader>
        <ModalBody>
          <p>El precio es: <strong>{precioSeleccionado}</strong></p>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default OfertaCursos;
