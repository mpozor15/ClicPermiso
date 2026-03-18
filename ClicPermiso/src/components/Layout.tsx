import { Link, Outlet, useLocation } from 'react-router-dom';
import { Calendar, User, FileText, ClipboardList, LogOut } from 'lucide-react';

const Layout = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Los items del menú de la captura
  const menuItems = [
    { name: 'Sol. día diurno', path: '/solicitar-dia', icon: <Calendar size={18} />, section: '1. Mis solicitudes' },
    { name: 'Sol. día vespertino', path: '/solicitar-vespertino', icon: <Calendar size={18} /> },
    { name: 'Mi Perfil', path: '/editar-perfil', icon: <User size={18} />, section: '2. Mi Área Personal' },
    { name: 'Mis días Solicitados', path: '/mis-dias', icon: <ClipboardList size={18} /> },
    { name: 'Mis ausencias', path: '/mis-ausencias', icon: <FileText size={18} /> },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      
      {/* --- BARRA LATERAL (SIDEBAR) --- */}
      <aside className="w-60 bg-white border-r border-gray-100 flex flex-col">
        {/* Logo IES Albarregas (Simulado) */}
        <div className="p-8 pb-10">
          <div className="flex items-center gap-3">
            <div className="text-5xl font-serif text-blue-900">M</div>
            <div className="text-xs font-bold text-blue-900 border-l-2 pl-3 border-blue-900 uppercase tracking-tighter leading-tight">
              I.E.S.<br/>Albarregas
            </div>
          </div>
        </div>

        {/* Menú de navegación */}
        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item, index) => (
            <div key={item.path}>
              {/* Sección del menú (ej: 1. Mis solicitudes) */}
              {item.section && (
                <div className="text-[11px] font-bold text-gray-400 uppercase pt-6 pb-2 px-4 tracking-wider">
                  {item.section}
                </div>
              )}
              
              {/* Enlace al elemento */}
              <Link
                to={item.path}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-md text-[13px] font-medium transition-all ${
                  isActive(item.path)
                    // Azul Clarito IES Albarregas
                    ? 'bg-[#C0E0F0] text-blue-900 shadow-inner'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {/* Icono más fino y gris */}
                <div className={isActive(item.path) ? 'text-blue-900' : 'text-gray-400'}>
                  {item.icon}
                </div>
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
      </aside>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Cabecera Superior (IES Albarregas / Prof. Borja) */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-10">
          <h1 className="text-lg font-bold text-gray-800">IES Albarregas</h1>
          <div className="flex items-center gap-5 text-sm font-medium text-gray-600">
            <span>Hola, Prof. Borja Rodríguez</span>
            <button className="text-gray-400 hover:text-red-600 transition-colors">
              <LogOut size={18} />
            </button>
          </div>
        </header>

        {/* Área de las Páginas (Fondo gris F8FAFC) */}
        <div className="flex-1 overflow-y-auto p-12 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;