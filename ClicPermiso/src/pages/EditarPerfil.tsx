import React, { useState } from 'react';

const EditarPerfil = () => {
  const [formData, setFormData] = useState({
    nombre: 'Borja',
    apellidos: 'Rodríguez Puerta',
    email: 'brodriguezp09@iesalbarregas.es',
    dni: '',
    relacion: 'Otro',
    servicio: 0
  });

  const validarDNI = (dni: string) => {
    const validChars = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    if (!nifRexp.test(dni)) return false;
    const numero = parseInt(dni.substr(0, 8));
    const letra = dni.charAt(8).toUpperCase();
    return validChars.charAt(numero % 23) === letra;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = [];

    // Validar Nombre: Primera letra Mayúscula
    if (!/^[A-Z][a-z]+/.test(formData.nombre)) errors.push("Nombre debe empezar con Mayúscula");

    // Apellidos: Dos apellidos, ambos empiezan por Mayúscula
    const apellidosArr = formData.apellidos.trim().split(' ');
    if (apellidosArr.length < 2) {
      errors.push("Debes introducir dos apellidos");
    } else if (!apellidosArr.every(ap => /^[A-Z]/.test(ap))) {
      errors.push("Cada apellido debe empezar por Mayúscula");
    }

    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.push("Email inválido");

    // DNI
    if (!validarDNI(formData.dni)) errors.push("DNI no válido");

    // Años servicio: 0 a 49
    if (formData.servicio < 0 || formData.servicio >= 50) errors.push("Años de servicio entre 0 y 49");

    if (errors.length > 0) alert(errors.join('\n'));
    else alert("¡Perfil actualizado!");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">👤 Editar Mi Perfil</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold">Nombre</label>
          <input type="text" className="w-full border p-2 rounded" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-bold">Apellidos</label>
          <input type="text" className="w-full border p-2 rounded" value={formData.apellidos} onChange={e => setFormData({...formData, apellidos: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-bold">DNI</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="12345678X" onChange={e => setFormData({...formData, dni: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-bold">Años de Servicio</label>
          <input type="number" className="w-full border p-2 rounded" value={formData.servicio} onChange={e => setFormData({...formData, servicio: Number(e.target.value)})} />
        </div>
        <button type="submit" className="col-span-2 bg-blue-900 text-white py-2 rounded">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarPerfil;