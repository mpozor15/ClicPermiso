const MisAusencias = () => {
  const ausencias = [
    { inicio: '14/01/2026', fin: '15/01/2026', estado: 'Pendiente de Justificación', modificado: '15/01/2026 23:30' }
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">🗂️ Historial de Ausencias Justificadas</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-sm">
            <th className="p-2 border">Período ausencia</th>
            <th className="p-2 border">Estado</th>
            <th className="p-2 border">Última Modificación</th>
            <th className="p-2 border">Anexo V</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ausencias.map((aus, i) => (
            <tr key={i} className="text-center text-sm">
              <td className="p-2 border">{aus.inicio} al {aus.fin}</td>
              <td className="p-2 border text-orange-600 font-bold">{aus.estado}</td>
              <td className="p-2 border">{aus.modificado}</td>
              <td className="p-2 border text-red-600">✘</td>
              <td className="p-2 border">
                <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">Justificar día</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MisAusencias;