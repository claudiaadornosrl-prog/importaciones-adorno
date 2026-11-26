// ═══════════════════════════════════════════════════════════════════════
//  Importaciones Adorno · manual.js — Manual de uso (overlay 📖, autoinyectable)
//  🚨 REGLA (JP, 3-nov-2026): cada vez que se agrega o cambia una función del módulo,
//  actualizar la sección correspondiente acá (y bump del ?v= en _generar.py → MANUAL_V). Clodi responde con este texto.
// ═══════════════════════════════════════════════════════════════════════

function _mEsc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function _manualSecciones() {
  return [
    { icon: '🧭', titulo: 'La barra de arriba', desc: 'Es igual en todos los módulos: la moneda del Hub (el barco azul), el título y los apartados como íconos; al pasar el mouse aparece el nombre.',
      pasos: ['Apartados: Importaciones (las carpetas), Costeo (productos, gastos y costo por producto) y Plantilla (el paso a paso y los documentos que se copian a cada importación nueva).', 'A la derecha: Hub (volver al Hub). En el celular los apartados están adentro del botón ☰.', 'La versión del módulo se ve en el título de la pestaña del navegador. Si Importaciones está instalado como app, la barra de la ventana muestra el nombre y la versión, por ejemplo «Importaciones Adorno · v5»; si es una versión de prueba agrega « · PRUEBA».', 'Para cerrar la sesión: volvé al Hub y tocá 👤 → Salir; se cierra en todos los módulos.', '¿Dudas? Preguntale a Clodi (el botón de abajo a la derecha): sabe todo lo que dice este manual. Mantené apretado el micrófono mientras hablás, o escribí.', 'Si algo sale mal, aparece arriba un cartel rojo que explica qué pasó en castellano simple; lo cerrás con la ✕.'] },
    { icon: '🔐', titulo: 'Entrar y permisos', desc: 'Entra quien tiene el módulo Importaciones en su perfil del Hub (administración, directora, administrativa y oficina). Qué puede grabar cada perfil lo maneja JP en Hub → 👤 → Permisos.',
      pasos: ['Las funciones de Importaciones son: Abrir y editar importaciones (datos de la carpeta, fechas, estado) · Tildar pasos del paso a paso y escribir novedades · Marcar qué documentos están en la carpeta · Cargar productos, pagos y gastos, y costear · Borrar una importación.', 'Habilitada: se usa normal. Oculta: el botón no aparece. Pide permiso: el botón se ve, pero al usarlo pide el mail y la clave de alguien que tenga esa función habilitada; su sesión se cierra sola al terminar.', 'La base de datos controla lo mismo: aunque alguien fuerce el botón, no graba sin el permiso.', '📷 Registra quién: Costear y Borrar vienen marcadas para anotar quién las hizo (JP lo ve en Hub → Permisos → Registro).'] },
    { icon: '📁', titulo: 'Importaciones (las carpetas)', desc: 'Una tarjeta por importación: proveedor, número (año-NN), estado, el anillo con el % del paso a paso hecho y cuántos documentos obligatorios ya están en la carpeta.',
      pasos: ['Filtros arriba: buscar (proveedor, DUA, contenedor…), estado (por defecto se ven las que están en curso: todo menos cerradas y canceladas) y año. El botón Tarjetas / Tabla cambia la vista; la tabla es tipo Excel.', 'El ➕ grande abre una importación nueva: proveedor, país, puerto, vía, incoterm, fecha, forwarder, despachante, descuento del proveedor, qué se trae y la ruta de la carpeta en el OneDrive. El número se asigna solo. Se copian el paso a paso y la lista de documentos de la Plantilla.', 'Tocando la tarjeta se abre la ficha. Arriba de la ficha está el estado (Pedido → En producción → Embarcada → En puerto → En despacho → Recibida → Costeada → Cerrada): se cambia ahí y queda en la bitácora.', 'Convención de la carpeta en el OneDrive: IMPORTACIONES/<año>/<NN> - <PROVEEDOR>/ y los archivos como «PROVEEDOR - TIPO.pdf» (por ej. «CAMBIUM - DUA.pdf», «CAMBIUM - PL FINAL.pdf»). En Documentos hay un botón para copiar la ruta y pegarla en el explorador.'] },
    { icon: '☑', titulo: 'Paso a paso', desc: 'Dentro de la ficha, la lista de pasos de la importación agrupada en cuatro fases: Pedido, Embarque, Despacho, Recepción y cierre. Cada paso dice qué hay que hacer, quién (Adorno, proveedor, forwarder, despachante) y qué documento produce.',
      pasos: ['El círculo de la izquierda marca el paso hecho (verde) y lo tacha; tocarlo de nuevo lo vuelve a pendiente. Queda anotado quién y cuándo, y entra en la bitácora.', '▶ lo pone En curso (amarillo). ⊘ lo marca No aplica en esta importación (no cuenta para el porcentaje); tocarlo de nuevo lo vuelve a aplicar.', '✎ abre el paso para ponerle fecha límite, quién lo hace, cambiar el título o el detalle y escribir una nota propia de esta importación. Un paso con fecha vencida se ve en rojo.', 'Abajo se agrega un paso propio de esta importación (se elige la fase). Los pasos se pueden sacar desde ✎ → Sacar.', 'La barra de cada fase muestra cuántos pasos van hechos.'] },
    { icon: '📄', titulo: 'Documentos', desc: 'La lista de lo que tiene que haber en la carpeta de esa importación (orden, proforma, comprobantes de pago, invoice, packing list, BL, certificados, facturas del forwarder, despachante, terminal, DUA, costeo…), con un estado por documento.',
      pasos: ['Estados: Falta (rojo), Borrador / parcial (amarillo), Está (verde), No aplica (gris). Los obligatorios cuentan para el «📄 x/y» de la tarjeta; los opcionales dicen «opcional».', 'Cada documento que tiene anotado el nombre del archivo se abre tocándolo (📎 nombre ↗): se abre en el OneDrive web, desde donde se ve, se imprime o se descarga. No hace falta entrar al OneDrive y buscar la carpeta. Arriba, «📂 Abrir carpeta» abre la carpeta entera de la importación.', 'Para que el link funcione hace falta que en Datos esté la ruta de la carpeta (IMPORTACIONES/2026/03 - CHANTIK) y que el nombre del archivo sea exactamente el que está en la carpeta; si cambia el nombre del archivo hay que corregirlo con ✎. Hay que estar entrado al OneDrive de la empresa en el navegador (cuenta office@claudiaadorno).', '✎ anota el nombre del archivo en la carpeta, un link propio (opcional, pisa al armado automático), la fecha y una nota; también si es obligatorio o no.', 'Los pasos del paso a paso que producen un documento muestran su estado al lado (📄 verde = ya está).', 'Abajo se agrega un documento propio de esta importación.', 'Para controlar la carpeta desde la computadora de JP hay un script (revisar_carpeta.py) que lee los archivos de la carpeta del OneDrive, reconoce cada documento por el nombre y dice qué falta; puede marcar los que encuentra.'] },
    { icon: '📝', titulo: 'Datos y bitácora', desc: 'Datos: todo lo de la carpeta (país, puerto, vía, incoterm, contenedores, BL, DUA, despachante, forwarder, las fechas de pedido, embarque, ETA, llegada, liberación y recepción, la ruta del OneDrive y notas). Bitácora: el hilo de novedades.',
      pasos: ['Datos se guarda con el botón Guardar. Borrar la importación (con sus pasos, documentos, productos y gastos) está abajo y solo lo ve quien tiene esa función.', 'En Bitácora se escribe qué pasó (qué dijo el proveedor, qué falta, qué se decidió). Los cambios de estado y los pasos tildados se anotan solos.'] },
    { icon: '🧮', titulo: 'Costeo', desc: 'Calcula el costo real en dólares de cada producto importado: FOB + flete (repartido por CBM) + seguro + derechos + tasa de estadística + gastos locales netos (repartidos por valor FOB). Sin IVA, IVA adicional, percepción de Ganancias ni IIBB, que se recuperan. Es el mismo criterio de las planillas de Cambium y Woven 2026.',
      pasos: ['Elegí la importación arriba (o desde la ficha, el botón de la calculadora).', 'Parámetros: tipo de cambio ARS/USD (el del DUA) para pasar a dólares los gastos en pesos y mostrar el costo en pesos; tasa de estadística % (3); descuento del proveedor en esta orden %; y los totales del DUA (FOB, valor en aduana, derechos, tasa) para el control.', 'Productos: los renglones de la invoice/DUA con cantidad, FOB unitario (como figura en el DUA, neto del descuento), CBM del renglón (del packing list), NCM, ítem del DUA, % de derechos y nuestro SKU. Se editan en la misma tabla. Con el botón de pegar se cargan todos de una vez copiando las filas de la orden desde Excel (código, descripción, cantidad, FOB unit., CBM, NCM, ítem DUA, % DI).', 'Pagos y gastos: una fila por comprobante. Clase: Pago al proveedor (anticipo/saldo del FOB: control de lo pagado, no suma al costo), Flete internacional (se reparte por CBM), Seguro (por FOB), Gasto de la importación (forwarder sin flete, terminal, despachante, Lakaut, depósito fiscal, transporte, banco, ayudantes… netos; se reparten por FOB, o por CBM si se marca), IVA / percepciones (recuperable: se anota, no costea). Moneda USD o ARS; si es ARS se pasa a dólares al TC de esa fila o, si está vacío, al TC de la importación. Tilde Pagado para seguir lo que falta pagar.', 'Costo por producto: por renglón, FOB total, base CIF, derechos, tasa, flete, seguro + gastos, costo total, unitario en USD y en pesos, factor sobre FOB y tres precios de venta con los multiplicadores de arriba (×1,75 ≈ 43 % de margen, ×2 ≈ 50 %, ×2,5 ≈ 60 % sobre el precio de venta).', 'Escenarios: Costo real (FOB con el descuento, como se pagó, y nacionalización como se pagó); Sin descuento (FOB a precio pleno y derechos recalculados: lo que va a costar reponerlo); Precio pleno + arancel real (FOB a precio de lista sin el descuento, pero derechos, tasa, flete y gastos tal como se pagaron en el despacho).', 'El escenario que se elige arriba queda guardado como criterio de costeo de esa importación y es el costo que vale para los precios de venta y el stock. Las importaciones 2026 con descuento de primera compra (Woven 30 %, Cambium 20 %) se costearon con «Precio pleno + arancel real»: el descuento fue por única vez, así que el costo del producto es el precio de lista, pero los derechos se pagaron sobre el valor con descuento y se toman como se pagaron.', 'Control contra el DUA: FOB, valor en aduana, derechos y tasa del módulo contra los del DUA; las diferencias tienen que ser ~0. Si no dan, revisar los FOB unitarios, el flete, el seguro o el % de derechos.', 'Excel: baja un archivo con las tres hojas de costeo, los parámetros con el control y los pagos y gastos, para guardarlo en la carpeta como «PROVEEDOR - COSTEO.xlsx».'] },
    { icon: '📋', titulo: 'Plantilla', desc: 'El paso a paso (28 pasos en 4 fases) y la lista de documentos (30) que se copian a cada importación nueva. Solo lectura en pantalla; la cambia administración en la base. Las importaciones ya abiertas no cambian: cada una tiene su copia y se edita adentro.',
      pasos: ['La columna «Palabras en el nombre del archivo» es lo que usa el script revisar_carpeta.py para reconocer cada documento en la carpeta del OneDrive.'] },
    { icon: '📊', titulo: 'Tablas tipo Excel', desc: 'Todas las tablas del módulo funcionan igual que en Excel (y que en los otros módulos).',
      pasos: ['Títulos fijos: al bajar por una tabla larga, la fila de títulos queda siempre arriba.', 'Renglones alternados: las filas se pintan una sí y una no; la fila bajo el mouse se resalta.', 'Ordenar: tocar el título de una columna ordena de menor a mayor; de nuevo, de mayor a menor; una tercera vez vuelve al orden original.', 'Filtrar: el embudito al lado de cada título abre un menú para buscar dentro de esa columna, elegir qué valores mostrar o poner un «desde/hasta». Arriba aparece «Mostrando X de Y» con «Quitar filtros».', 'Ocultar columnas: en el mismo menú, «Ocultar columna». Para volver a verlas: «Mostrar» en la barrita de arriba de la tabla. Las columnas ocultas se recuerdan en esa computadora.', 'Agrandar o achicar columnas: arrastrar el borde derecho del título. Doble clic en ese borde vuelve al ancho normal.', 'Los filtros y el orden duran mientras la página esté abierta.'] },
  ];
}

function abrirManual() {
  if (document.getElementById('manual-overlay')) return;
  const items = _manualSecciones();
  const ov = document.createElement('div');
  ov.id = 'manual-overlay';
  ov.innerHTML = `
    <div class="m-box">
      <div class="m-head">
        <span style="font-size:22px;">📖</span>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:16px;">Manual · Importaciones</div>
          <div style="font-size:12px;opacity:.85;">Guía rápida de cada herramienta del módulo</div>
        </div>
        <button class="m-close" onclick="cerrarManual()">✕</button>
      </div>
      ${items.map((s, i) => `
        <div class="m-sec">
          <div class="m-tit">${s.icon} ${i + 1}. ${_mEsc(s.titulo)}</div>
          <div class="m-desc">${_mEsc(s.desc)}</div>
          <ul class="m-pasos">${s.pasos.map(p => `<li>${_mEsc(p)}</li>`).join('')}</ul>
        </div>`).join('')}
      <div class="m-foot">💡 Este manual se actualiza junto con el sistema. ¿Falta algo o no funciona? Avisale a JP.</div>
    </div>`;
  document.body.appendChild(ov);
  _manualLupa(ov);
  document.body.style.overflow = 'hidden';
}

function cerrarManual() {
  const ov = document.getElementById('manual-overlay');
  if (ov) ov.remove();
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarManual(); });

(function _manualInit() {
  const css = document.createElement('style');
  css.textContent = `
    #manual-overlay{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:9999;display:flex;align-items:flex-start;justify-content:center;padding:20px 12px;overflow-y:auto;-webkit-overflow-scrolling:touch;}
    #manual-overlay .m-box{background:#f8fafc;border-radius:14px;max-width:760px;width:100%;padding-bottom:6px;box-shadow:0 20px 60px rgba(0,0,0,.3);}
    #manual-overlay .m-head{position:sticky;top:0;background:#34557A;color:#fff;padding:14px 18px;border-radius:14px 14px 0 0;display:flex;align-items:center;gap:10px;z-index:1;}
    #manual-overlay .m-close{background:rgba(255,255,255,.18);border:none;color:#fff;font-size:16px;border-radius:8px;padding:6px 11px;cursor:pointer;}
    #manual-overlay .m-sec{background:#fff;border:1px solid #e2e8f0;border-left:4px solid #34557A;border-radius:10px;margin:14px 14px 0;padding:14px 18px;}
    #manual-overlay .m-tit{font-weight:700;font-size:15px;margin-bottom:4px;color:#243d5a;}
    #manual-overlay .m-desc{font-size:13px;color:#475569;margin-bottom:8px;}
    #manual-overlay .m-pasos{margin:0 0 2px 18px;padding:0;font-size:13px;line-height:1.65;color:#334155;}
    #manual-overlay .m-pasos li{margin-bottom:4px;}
    #manual-overlay .m-foot{margin:16px 14px 12px;background:#e3ecf5;border-left:4px solid #34557A;border-radius:8px;padding:11px 14px;font-size:12.5px;color:#243d5a;}`;
  document.head.appendChild(css);

  const nav = document.querySelector('nav.tabs');
  if (nav) {
    const b = document.createElement('button');
    b.innerHTML = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg><span class="lb">Manual</span>'; b.title = 'Manual';
    b.onclick = () => abrirManual();
    nav.appendChild(b);
  }
})();

// ── 🔍 Lupa del manual: busca por palabra, sin tildes ni mayúsculas (mismo bloque en todos los módulos).
function _mLupaNorm(s){ return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
function _mLupaMarcar(el, q){
  const nodos = [], w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  while (w.nextNode()) nodos.push(w.currentNode);
  nodos.forEach(n => {
    const t = n.nodeValue; let norm = '', mapa = [];
    for (let i = 0; i < t.length; i++){ const c = _mLupaNorm(t[i]); for (let k = 0; k < c.length; k++){ norm += c[k]; mapa.push(i); } }
    let desde = 0, pos, frag = null, ult = 0;
    while (q && (pos = norm.indexOf(q, desde)) >= 0){
      frag = frag || document.createDocumentFragment();
      const a = mapa[pos], b = mapa[pos + q.length - 1] + 1;
      if (a > ult) frag.appendChild(document.createTextNode(t.slice(ult, a)));
      const m = document.createElement('mark'); m.textContent = t.slice(a, b);
      m.style.cssText = 'background:#fde047;color:inherit;padding:0 1px;border-radius:3px'; frag.appendChild(m);
      ult = b; desde = pos + q.length;
    }
    if (frag){ if (ult < t.length) frag.appendChild(document.createTextNode(t.slice(ult))); n.parentNode.replaceChild(frag, n); }
  });
}
function _mLupaFiltrar(cont, selSec, texto, info){
  if (!cont) return;
  const q = _mLupaNorm(String(texto || '').trim());
  let vistas = 0;
  cont.querySelectorAll(selSec).forEach(sec => {
    if (sec.dataset.mOrig == null) sec.dataset.mOrig = sec.innerHTML; else sec.innerHTML = sec.dataset.mOrig;
    if (!q){ sec.style.display = ''; return; }
    const lis = [...sec.querySelectorAll('li')];
    const enLis = lis.filter(li => _mLupaNorm(li.textContent).includes(q));
    const hay = _mLupaNorm(sec.textContent).includes(q);
    sec.style.display = hay ? '' : 'none';
    if (!hay) return;
    vistas++;
    if (enLis.length) lis.forEach(li => { if (!enLis.includes(li)) li.style.display = 'none'; });
    _mLupaMarcar(sec, q);
  });
  if (info) info.textContent = !q ? '' : vistas ? `${vistas} ${vistas === 1 ? 'sección' : 'secciones'} con «${String(texto).trim()}»` : `No encontré «${String(texto).trim()}» en el manual.`;
  const primera = q && cont.querySelector('mark');
  if (primera) primera.scrollIntoView({block: 'center', behavior: 'smooth'});
}
function _manualLupa(ov){
  const head = ov && ov.querySelector('.m-head'); if (!head) return;
  head.style.flexWrap = 'wrap';
  const box = document.createElement('div');
  box.style.cssText = 'flex-basis:100%;display:flex;gap:8px;align-items:center;margin-top:8px';
  box.innerHTML = '<input type="search" placeholder="🔍 Buscar en el manual (por ej.: DUA, flete, descuento)…" '
    + 'style="flex:1;min-width:0;padding:8px 11px;border-radius:9px;border:none;font-size:14px;color:#0f172a;font-family:inherit">'
    + '<span class="m-lupa-info" style="font-size:12px;opacity:.9;white-space:nowrap"></span>';
  head.appendChild(box);
  const inp = box.querySelector('input'), info = box.querySelector('.m-lupa-info');
  let t = null;
  inp.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => _mLupaFiltrar(ov, '.m-sec', inp.value, info), 250); });
  inp.addEventListener('keydown', e => { if (e.key === 'Escape' && inp.value){ e.stopPropagation(); inp.value = ''; _mLupaFiltrar(ov, '.m-sec', '', info); } });
  setTimeout(() => inp.focus(), 50);
}
