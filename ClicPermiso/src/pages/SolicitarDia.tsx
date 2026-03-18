import React, { useState } from 'react';

const SolicitarDia = () => {
  const [formData, setFormData] = useState({
    fecha: '2026-04-23', // Formato input date es yyyy-mm-dd
    telefono: '',
    jornada: '',
    turno: 'Diurno',
    horasDocencia: 0,
    diasPermiso: 0
  });

  const [errors, setErrors] = useState<string[]>([]);

  // Formatear fecha para la cabecera (dd/mm/yyyy)
  const formatHeaderDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split('-');
    return `${d}/${m}/${y}`;
  };

  const validar = () => {
    const newErrors: string[] = [];
    
    // Teléfono: empieza por 6,7,8,9 y tiene 9 caracteres
    if (!/^[6-9]\d{8}$/.test(formData.telefono)) {
      newErrors.push("Teléfono inválido (debe tener 9 dígitos y empezar por 6,7,8 o 9)");
    }

    // Horas y días: 1 a 7
    if (formData.horasDocencia <= 0 || formData.horasDocencia >= 8) {
      newErrors.push("Horas de docencia deben ser entre 1 y 7");
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">📅 Solicitar Día: {formatHeaderDate(formData.fecha)}</h2>
      
      <form onSubmit={(e) => { e.preventDefault(); validar(); }} className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold">Día Solicitado</label>
          <input 
            type="date" 
            className="w-full border p-2 rounded"
            value={formData.fecha}
            onChange={(e) => setFormData({...formData, fecha: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-bold">Número de Teléfono</label>
          <input 
            type="text" 
            className="w-full border p-2 rounded"
            onChange={(e) => setFormData({...formData, telefono: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-bold">Jornada</label>
          <select className="w-full border p-2 rounded" onChange={(e) => setFormData({...formData, jornada: e.target.value})}>
            <option value="Completa">Completa</option>
            <option value="Parcial">Parcial</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold">Turno Solicitado</label>
          <select className="w-full border p-2 rounded" value={formData.turno} onChange={(e) => setFormData({...formData, turno: e.target.value})}>
            <option value="Diurno">Diurno</option>
            <option value="Vespertino">Vespertino</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold">Núm de horas docencia...</label>
          <input type="number" className="w-full border p-2 rounded" onChange={(e) => setFormData({...formData, horasDocencia: Number(e.target.value)})} />
        </div>

        <div className="col-span-2">
          {errors.map(err => <p key={err} className="text-red-500 text-xs">{err}</p>)}
          <button className="bg-blue-900 text-white px-4 py-2 rounded mt-4 float-right">Guardar Solicitud</button>
        </div>
      </form>
    </div>
  );
};

export default SolicitarDia;