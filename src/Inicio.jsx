import React, { useState } from 'react';
import {
  Accordion, AccordionBody, AccordionHeader, AccordionItem
} from 'reactstrap';

function Inicio() {
  const [open, setOpen] = useState('');

  const toggle = (id) => {
    setOpen(open === id ? '' : id);
  };

  const danzas = [
    { id: '1', region: 'La Paz', danza: 'Caporales', desc: 'Trajes llamativos y pasos energéticos.' },
    { id: '2', region: 'Santa Cruz', danza: 'Chovena', desc: 'Ritmo alegre típico del oriente boliviano.' },
    { id: '3', region: 'Cochabamba', danza: 'Tinku', desc: 'Danza de combate con mucho movimiento.' },
    { id: '4', region: 'Oruro', danza: 'Diablada', desc: 'Mascaras impresionantes y tradición folclórica.' },
    { id: '5', region: 'Tarija', danza: 'Cueca Chapaca', desc: 'Elegancia, pañuelos y pasos suaves.' }
  ];

  return (
    <div>
      <h2 className="text-center mb-3">Danzas Típicas de Bolivia</h2>
      <Accordion open={open} toggle={toggle}>
        {danzas.map((danza) => (
          <AccordionItem key={danza.id}>
            <AccordionHeader targetId={danza.id}>
              {danza.region} - {danza.danza}
            </AccordionHeader>
            <AccordionBody accordionId={danza.id}>
              {danza.desc}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Inicio;
