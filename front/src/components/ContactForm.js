'use client';
import { useState } from "react";


export default function ContactForm({postUrl}) {

  const initialForm = {
    nombre: '',
    apellido: '',
    email: '',
    consulta: ''
  };
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);

    const rawResponse = await fetch(postUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)

    });
    const response = await rawResponse.json();
    console.log(response);
    setSending(false);
    setMsg(response.message);
    if (response.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <>

      <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
        <p>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" className="form-control" id="nombre" value={formData.nombre} onChange={handleChange} />
        </p>

        <p>
          <label htmlFor="apellido">Apellido</label>
          <input type="text" name="apellido" className="form-control" id="apellido" value={formData.apellido} onChange={handleChange} />
        </p>

        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
        </p>

        <p>
          <label htmlFor="consulta">Consulta</label>
          <textarea name="consulta" id="consulta" value={formData.consulta} onChange={handleChange} ></textarea>
        </p>

        <button type="submit">Enviar</button>
      </form>
      {sending ? <p>Enviando...</p> : null}
      {msg ? <p>{msg}</p> : null}
    </>
  );
}