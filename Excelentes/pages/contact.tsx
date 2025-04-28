import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState('');

  const handleChange = (e:any) => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setStatus('Enviando...');
    const res = await fetch('/api/contact', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(form)
    });
    setStatus(res.ok ? 'Mensaje enviado' : 'Error al enviar');
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" required placeholder="Nombre" onChange={handleChange} className="w-full p-2 border" />
        <input name="email" type="email" required placeholder="Email" onChange={handleChange} className="w-full p-2 border" />
        <textarea name="message" required placeholder="Mensaje" onChange={handleChange} className="w-full p-2 border h-32" />
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Enviar</button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
