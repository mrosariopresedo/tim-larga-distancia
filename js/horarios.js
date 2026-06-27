// ════════════════════════════════════════════════════════════════════════════
//  TIM · Larga Distancia - Lógica de horarios y tabs
//  Nexo Studio · UADE Desarrollo Web 2026
// ════════════════════════════════════════════════════════════════════════════

// ─── DATOS DE HORARIOS POR DESTINO ─────────────────────────────────────────
// amenities: array con 'wifi' | 'plug' | 'ac' | 'bed'
// status: 'ok' = A horario | 'warn' = aviso (texto personalizado)

const DESTINOS_DATA = [

  // 0 - Buenos Aires
  {
    label: 'Buenos Aires',
    subtitle: 'Salidas de hoy hacia Buenos Aires (horarios de referencia). Cambiá el destino para ver otras rutas.',
    filas: [
      { emp:'Andesmar',          serv:'Cama Suite',     dep:'18:30', arr:'08:00 +1', dur:'13h 30m', plat:'A04', amen:['wifi','plug','ac','bed'], precio:'$32.400', status:'ok',   statusLabel:'A horario'  },
      { emp:'Chevallier',        serv:'Cama Ejecutivo', dep:'19:15', arr:'09:00 +1', dur:'13h 45m', plat:'A07', amen:['wifi','plug','bed'],       precio:'$28.900', status:'ok',   statusLabel:'A horario'  },
      { emp:'Cata Intl.',        serv:'Semi-Cama',      dep:'20:00', arr:'10:30 +1', dur:'14h 30m', plat:'B02', amen:['wifi','plug'],             precio:'$22.500', status:'ok',   statusLabel:'A horario'  },
      { emp:'Flecha Bus',        serv:'Cama',           dep:'20:45', arr:'10:15 +1', dur:'13h 30m', plat:'A11', amen:['wifi','plug','bed'],       precio:'$26.800', status:'warn', statusLabel:'Últimos lugares'  },
      { emp:'El Rápido',         serv:'Semi-Cama',      dep:'21:30', arr:'12:00 +1', dur:'14h 30m', plat:'B05', amen:['wifi','ac'],               precio:'$23.200', status:'ok',   statusLabel:'A horario'  },
      { emp:'Vía Bariloche',     serv:'Cama',           dep:'22:00', arr:'11:30 +1', dur:'13h 30m', plat:'A09', amen:['wifi','plug','bed'],       precio:'$27.600', status:'ok',   statusLabel:'A horario'  },
      { emp:'Crucero del Norte', serv:'Cama Suite',     dep:'22:30', arr:'12:00 +1', dur:'13h 30m', plat:'A02', amen:['wifi','plug','ac','bed'],  precio:'$31.200', status:'warn', statusLabel:'Últimos lugares'  },
    ]
  },

  // 1 - Córdoba
  {
    label: 'Córdoba',
    subtitle: 'Salidas hacia Córdoba capital. Servicio diurno y nocturno, 622 km por RN 7.',
    filas: [
      { emp:'Andesmar',   serv:'Semi-Cama',  dep:'07:00', arr:'15:30',    dur:'8h 30m', plat:'A04', amen:['wifi','plug'],           precio:'$14.800', status:'ok', statusLabel:'A horario' },
      { emp:'TAC',        serv:'Semi-Cama',  dep:'09:30', arr:'18:00',    dur:'8h 30m', plat:'B03', amen:['wifi'],                  precio:'$12.500', status:'ok', statusLabel:'A horario' },
      { emp:'Flecha Bus', serv:'Cama',       dep:'13:00', arr:'21:30',    dur:'8h 30m', plat:'A11', amen:['wifi','plug','bed'],     precio:'$18.200', status:'ok', statusLabel:'A horario' },
      { emp:'El Rápido',  serv:'Semi-Cama',  dep:'17:00', arr:'01:30 +1', dur:'8h 30m', plat:'B05', amen:['wifi','ac'],            precio:'$13.900', status:'ok', statusLabel:'A horario' },
      { emp:'Andesmar',   serv:'Cama Suite', dep:'22:30', arr:'07:00 +1', dur:'8h 30m', plat:'A04', amen:['wifi','plug','ac','bed'], precio:'$22.300', status:'ok', statusLabel:'A horario' },
    ]
  },

  // 2 - Rosario
  {
    label: 'Rosario',
    subtitle: 'Salidas hacia Rosario, Santa Fe. 866 km vía Córdoba, servicios nocturnos.',
    filas: [
      { emp:'Andesmar',   serv:'Semi-Cama', dep:'10:00', arr:'21:00',    dur:'11h 00m', plat:'A04', amen:['wifi','plug'],       precio:'$18.900', status:'ok', statusLabel:'A horario' },
      { emp:'Flecha Bus', serv:'Cama',      dep:'20:00', arr:'07:00 +1', dur:'11h 00m', plat:'A11', amen:['wifi','plug','bed'], precio:'$23.400', status:'ok', statusLabel:'A horario' },
      { emp:'Chevallier', serv:'Semi-Cama', dep:'22:30', arr:'09:30 +1', dur:'11h 00m', plat:'A07', amen:['wifi','plug'],       precio:'$19.800', status:'ok', statusLabel:'A horario' },
    ]
  },

  // 3 - Mar del Plata
  {
    label: 'Mar del Plata',
    subtitle: 'Salidas hacia Mar del Plata. 1444 km, servicio nocturno con llegada a la mañana.',
    filas: [
      { emp:'Vía Bariloche', serv:'Cama Suite', dep:'19:00', arr:'13:00 +1', dur:'18h 00m', plat:'A09', amen:['wifi','plug','ac','bed'], precio:'$34.600', status:'ok',   statusLabel:'A horario' },
      { emp:'El Cóndor',     serv:'Cama',       dep:'21:00', arr:'15:00 +1', dur:'18h 00m', plat:'B09', amen:['wifi','plug','bed'],      precio:'$28.400', status:'warn', statusLabel:'Últimos lugares' },
    ]
  },

  // 4 - Bariloche
  {
    label: 'Bariloche',
    subtitle: 'Salidas hacia San Carlos de Bariloche. 1340 km por RN 40, cruce Patagónico.',
    filas: [
      { emp:'Vía Bariloche', serv:'Cama Suite', dep:'16:30', arr:'10:00 +1', dur:'17h 30m', plat:'A09', amen:['wifi','plug','ac','bed'], precio:'$38.200', status:'ok', statusLabel:'A horario' },
      { emp:'Andesmar',      serv:'Cama',       dep:'19:30', arr:'13:00 +1', dur:'17h 30m', plat:'A04', amen:['wifi','plug','bed'],      precio:'$32.100', status:'ok', statusLabel:'A horario' },
    ]
  },

  // 5 - San Juan
  {
    label: 'San Juan',
    subtitle: 'Salidas hacia San Juan capital. 168 km, servicio frecuente durante todo el día.',
    filas: [
      { emp:'Vallecito', serv:'Común',       dep:'06:00', arr:'08:30', dur:'2h 30m', plat:'C01', amen:[],       precio:'$4.200', status:'ok', statusLabel:'A horario' },
      { emp:'Vallecito', serv:'Común',       dep:'08:30', arr:'11:00', dur:'2h 30m', plat:'C01', amen:[],       precio:'$4.200', status:'ok', statusLabel:'A horario' },
      { emp:'Andesmar',  serv:'Diferencial', dep:'10:00', arr:'12:30', dur:'2h 30m', plat:'C03', amen:['wifi'], precio:'$5.800', status:'ok', statusLabel:'A horario' },
      { emp:'Vallecito', serv:'Común',       dep:'12:00', arr:'14:30', dur:'2h 30m', plat:'C01', amen:[],       precio:'$4.200', status:'ok', statusLabel:'A horario' },
      { emp:'Andesmar',  serv:'Diferencial', dep:'16:00', arr:'18:30', dur:'2h 30m', plat:'C03', amen:['wifi'], precio:'$5.800', status:'ok', statusLabel:'A horario' },
      { emp:'Vallecito', serv:'Común',       dep:'18:30', arr:'21:00', dur:'2h 30m', plat:'C01', amen:[],       precio:'$4.200', status:'ok', statusLabel:'A horario' },
    ]
  },

  // 6 - Santiago (CL)
  {
    label: 'Santiago (CL)',
    subtitle: 'Servicio internacional hacia Santiago de Chile. Se requiere documento de identidad o pasaporte vigente.',
    filas: [
      { emp:'Cata Internacional', serv:'Internacional', dep:'09:00', arr:'16:30',    dur:'7h 30m', plat:'B02', amen:['wifi','plug','ac'],       precio:'$35.400', status:'ok', statusLabel:'A horario' },
      { emp:'Andesmar',           serv:'Internacional', dep:'14:00', arr:'21:30',    dur:'7h 30m', plat:'A04', amen:['wifi','plug','ac','bed'], precio:'$42.000', status:'ok', statusLabel:'A horario' },
      { emp:'El Rápido Internacional', serv:'Internacional', dep:'22:00', arr:'05:30 +1', dur:'7h 30m', plat:'B06', amen:['wifi','plug','bed'], precio:'$38.900', status:'ok', statusLabel:'A horario' },
    ]
  },

  // 7 - Salta
  {
    label: 'Salta',
    subtitle: 'Salidas hacia Salta capital. 1260 km por el norte argentino, con servicios nocturnos.',
    filas: [
      { emp:'Andesmar',   serv:'Cama',      dep:'12:30', arr:'06:00 +1', dur:'17h 30m', plat:'A04', amen:['wifi','plug','bed'], precio:'$29.800', status:'ok',   statusLabel:'A horario' },
      { emp:'Flecha Bus', serv:'Semi-Cama', dep:'15:00', arr:'09:00 +1', dur:'18h 00m', plat:'A11', amen:['wifi','plug'],       precio:'$24.500', status:'warn', statusLabel:'Últimos lugares' },
    ]
  },

];

// ─── ÍCONOS DE AMENIDADES ───────────────────────────────────────────────────
const AMEN_ICONS = {
  wifi: '<svg class="w-5 h-5" title="Wi-Fi"><use href="#i-wifi"/></svg>',
  plug: '<svg class="w-5 h-5" title="Enchufe USB/220V"><use href="#i-plug"/></svg>',
  ac:   '<svg class="w-5 h-5" title="Aire acondicionado"><use href="#i-ac"/></svg>',
  bed:  '<svg class="w-5 h-5" title="Cama/Cama Suite"><use href="#i-bed"/></svg>',
};

// ─── RENDERIZAR TABLA ───────────────────────────────────────────────────────
function renderTable(destIndex) {
  const dest  = DESTINOS_DATA[destIndex];
  const tbody = document.getElementById('schedule-tbody');
  const sub   = document.getElementById('tabla-subtitle');

  sub.textContent = dest.subtitle;

  tbody.innerHTML = dest.filas.map(f => {
    const amenHtml = f.amen.length
      ? `<span class="amenities">${f.amen.map(a => AMEN_ICONS[a]).join('')}</span>`
      : '<span class="text-tim-subtle text-xs">-</span>';

    const statusClass = f.status === 'ok' ? 'status-ok' : 'status-warn';

    return `
      <tr>
        <td class="px-3.5 py-[18px] font-semibold">${f.emp}</td>
        <td class="px-3.5 py-[18px] text-tim-muted">${f.serv}</td>
        <td class="px-3.5 py-[18px] font-bold text-base tnum">${f.dep}</td>
        <td class="px-3.5 py-[18px] tnum">${f.arr}</td>
        <td class="px-3.5 py-[18px] text-tim-muted tnum">${f.dur}</td>
        <td class="px-3.5 py-[18px]">
          <span class="bg-tim-light text-tim px-2.5 py-1 rounded text-[13px] font-bold tnum">${f.plat}</span>
        </td>
        <td class="px-3.5 py-[18px]">${amenHtml}</td>
        <td class="px-3.5 py-[18px] font-bold tnum">${f.precio}</td>
        <td class="px-3.5 py-[18px]">
          <span class="${statusClass}">${f.statusLabel}</span>
        </td>
        <td class="px-3.5 py-[18px] text-right">
          <button class="btn-primary" style="min-height:40px;padding:.5rem 1rem;font-size:.8125rem;white-space:nowrap;">Reservar →</button>
        </td>
      </tr>`;
  }).join('');
}

// ─── TABS ───────────────────────────────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('#dest-tabs .tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#dest-tabs .tab').forEach(t => {
        t.classList.remove('tab-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('tab-active');
      tab.setAttribute('aria-selected', 'true');
      renderTable(parseInt(tab.dataset.dest, 10));
    });
  });
}

// ─── BUSCADOR: abre el destino elegido en la tabla ──────────────────────────
function initSearch() {
  document.getElementById('search-form').addEventListener('submit', e => {
    e.preventDefault();
    const idx = parseInt(document.getElementById('search-destino').value, 10);
    if (!isNaN(idx)) seleccionarDestino(idx);
  });
}

// ─── Seleccionar un destino: activa su pestaña (por data-dest) y baja a Horarios
function seleccionarDestino(idx) {
  document.querySelectorAll('#dest-tabs .tab').forEach(t => {
    const activo = parseInt(t.dataset.dest, 10) === idx;
    t.classList.toggle('tab-active', activo);
    t.setAttribute('aria-selected', activo ? 'true' : 'false');
  });
  renderTable(idx);
  document.getElementById('horarios').scrollIntoView({ behavior: 'smooth' });
}

// ─── TIMESTAMP "ÚLTIMA ACTUALIZACIÓN" ──────────────────────────────────────
function setUpdateTime() {
  const now   = new Date();
  const pad   = d => String(d).padStart(2, '0');
  const meses = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  const str   = `${pad(now.getDate())} ${meses[now.getMonth()]} ${now.getFullYear()} · ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  const el    = document.getElementById('update-time');
  if (el) el.textContent = `Última actualización · ${str}`;
}

// ─── SMOOTH SCROLL para anchor links internos ───────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

// ─── ACCESIBILIDAD: panel propio en terracota ──────────────────────────────
function initAccesibilidad() {
  const btn      = document.getElementById('acc-btn');
  const panel    = document.getElementById('acc-panel');
  const contrast = document.getElementById('toggle-contrast');
  const fontsize = document.getElementById('toggle-fontsize');
  if (!btn || !panel) return;

  // Abrir / cerrar el panel al tocar el botón
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const abierto = !panel.classList.contains('hidden');
    panel.classList.toggle('hidden', abierto);
    btn.setAttribute('aria-expanded', String(!abierto));
  });

  // Cerrar el panel al hacer click fuera
  document.addEventListener('click', e => {
    if (!panel.contains(e.target) && e.target !== btn) {
      panel.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Activar/desactivar una opción y recordarla en el navegador
  function toggleOpcion(boton, clase, clave) {
    const activo = document.body.classList.toggle(clase);
    boton.setAttribute('aria-pressed', String(activo));
    localStorage.setItem(clave, activo);
  }
  contrast.addEventListener('click', () => toggleOpcion(contrast, 'high-contrast', 'tim-ld-contraste'));
  fontsize.addEventListener('click', () => toggleOpcion(fontsize, 'large-text',    'tim-ld-texto'));

  // Restaurar las preferencias guardadas de visitas anteriores
  if (localStorage.getItem('tim-ld-contraste') === 'true') {
    document.body.classList.add('high-contrast');
    contrast.setAttribute('aria-pressed', 'true');
  }
  if (localStorage.getItem('tim-ld-texto') === 'true') {
    document.body.classList.add('large-text');
    fontsize.setAttribute('aria-pressed', 'true');
  }
}

// ─── Abrir los enlaces a otros sitios en una pestaña nueva ─────────────────
function initEnlacesExternos() {
  document.querySelectorAll('a[href^="http"]').forEach(a => {
    a.target = '_blank';            // nueva pestaña
    a.rel    = 'noopener noreferrer'; // seguridad al abrir sitios externos
  });
}

// ─── Poblar el buscador con los destinos (desplegable predeterminado) ───────
function cargarBuscadorDestinos() {
  const select = document.getElementById('search-destino');
  if (!select) return;
  DESTINOS_DATA.forEach((d, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = d.label;
    select.appendChild(opt);
  });
}

// ─── "Ver horarios" de cada tarjeta → abre ese destino en la tabla ──────────
function initVerHorarios() {
  // Orden de las tarjetas de Destinos → índice de su pestaña en la tabla
  const orden = [0, 1, 2, 3, 4, 7, 5, 6];
  document.querySelectorAll('#destinos article a[href="#horarios"]').forEach((link, i) => {
    link.addEventListener('click', e => {
      e.preventDefault();
      seleccionarDestino(orden[i]);
    });
  });
}

// ─── Mapa accesible por teclado (los nodos se recorren con Tab y se activan
//     con Enter o barra espaciadora, igual que con el mouse) ─────────────────
function initMapaTeclado() {
  document.querySelectorAll('.mapa-nodo').forEach(nodo => {
    nodo.setAttribute('tabindex', '0');
    nodo.setAttribute('role', 'button');
    const texto = nodo.querySelector('text');
    if (texto) nodo.setAttribute('aria-label', texto.textContent.trim());
    nodo.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        nodo.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    });
  });
}

// ─── Fecha mínima = hoy (no se pueden elegir fechas pasadas) ────────────────
function initFechaMinima() {
  const hoy = new Date().toISOString().split('T')[0];
  const f = document.getElementById('search-fecha');
  if (f) f.min = hoy;
}

// ─── INIT ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderTable(0);
  initTabs();
  cargarBuscadorDestinos();
  initSearch();
  initVerHorarios();
  initMapaTeclado();
  initFechaMinima();
  setUpdateTime();
  initSmoothScroll();
  initAccesibilidad();
  initEnlacesExternos();
});
