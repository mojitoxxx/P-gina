/**
 * SLG Transportes — Sistema de internacionalización (i18n)
 * Idiomas: Español (es) | English (en) | Français (fr)
 */

const LANG_FLAGS = { es: '🇪🇸', en: '🇬🇧', fr: '🇫🇷' };
const LANG_CODES = { es: 'ES', en: 'EN', fr: 'FR' };

function updateLangBtn(lang) {
  const flagEl = document.getElementById('lang-flag-current');
  const codeEl = document.getElementById('lang-code-current');
  if (flagEl) flagEl.textContent = LANG_FLAGS[lang] || '🌐';
  if (codeEl) codeEl.textContent = LANG_CODES[lang] || lang.toUpperCase();
}

const TRANSLATIONS = {

  /* ====================================================
     COMPONENTES COMPARTIDOS (nav, footer, modal PWA)
     ==================================================== */
  nav_home:       { es: 'Inicio',          en: 'Home',           fr: 'Accueil' },
  nav_about:      { es: 'Sobre nosotros',  en: 'About us',       fr: 'À propos' },
  nav_services:   { es: 'Servicios',       en: 'Services',       fr: 'Services' },
  nav_contact:    { es: 'Contacto',        en: 'Contact',        fr: 'Contact' },
  nav_install:    { es: '📲 Instalar App', en: '📲 Install App', fr: '📲 Installer' },
  nav_quote:      { es: 'Pedir Presupuesto', en: 'Get a Quote',  fr: 'Devis Gratuit' },

  footer_tagline: { es: 'Compañía de transportes nacional de España', en: 'National transport company in Spain', fr: 'Société de transport national en Espagne' },
  footer_desc:    { es: 'Soluciones logísticas integrales, puntuales y seguras para empresas y particulares en toda la península e islas.', en: 'Comprehensive, punctual and secure logistics solutions for businesses and individuals across mainland Spain and the islands.', fr: 'Solutions logistiques complètes, ponctuelles et sécurisées pour entreprises et particuliers dans toute la péninsule et les îles.' },
  footer_links:   { es: 'Enlaces rápidos', en: 'Quick links',    fr: 'Liens rapides' },
  footer_contact_title: { es: 'Contacto directo', en: 'Direct contact', fr: 'Contact direct' },
  footer_hours:   { es: '⏰ Lun - Vie: 08:00 - 19:00 | Urgencias 24h', en: '⏰ Mon - Fri: 08:00 - 19:00 | Emergencies 24h', fr: '⏰ Lun - Ven: 08:00 - 19:00 | Urgences 24h' },
  footer_copy:    { es: '© 2026 SLG - Compañía de transportes nacional de España. Todos los derechos reservados.', en: '© 2026 SLG - National transport company in Spain. All rights reserved.', fr: '© 2026 SLG - Société de transport national en Espagne. Tous droits réservés.' },
  footer_link_home:     { es: 'Inicio',                    en: 'Home',                     fr: 'Accueil' },
  footer_link_about:    { es: 'Sobre nosotros',            en: 'About us',                 fr: 'À propos' },
  footer_link_services: { es: 'Servicios de transporte',   en: 'Transport services',       fr: 'Services de transport' },
  footer_link_quote:    { es: 'Solicitar presupuesto',     en: 'Request a quote',          fr: 'Demander un devis' },
  footer_link_install:  { es: 'Instalar Aplicación',       en: 'Install App',              fr: 'Installer l\'app' },

  modal_title:    { es: '📲 Cómo instalar SLG Transportes', en: '📲 How to install SLG Transportes', fr: '📲 Comment installer SLG Transportes' },
  modal_subtitle: { es: 'Sigue estos sencillos pasos según el dispositivo que estés utilizando:', en: 'Follow these simple steps depending on your device:', fr: 'Suivez ces étapes simples selon votre appareil :' },
  modal_step1_title: { es: 'En iPhone / iPad (Safari):', en: 'On iPhone / iPad (Safari):', fr: 'Sur iPhone / iPad (Safari) :' },
  modal_step1_desc:  { es: 'Pulsa el botón <strong>Compartir</strong> (icono de cuadrado con flecha hacia arriba) y selecciona <strong>"Añadir a la pantalla de inicio"</strong>.', en: 'Tap the <strong>Share</strong> button (square with an upward arrow) and choose <strong>"Add to Home Screen"</strong>.', fr: 'Appuyez sur <strong>Partager</strong> (carré avec flèche vers le haut) et choisissez <strong>"Sur l\'écran d\'accueil"</strong>.' },
  modal_step2_title: { es: 'En Android (Chrome):', en: 'On Android (Chrome):', fr: 'Sur Android (Chrome) :' },
  modal_step2_desc:  { es: 'Toca los 3 puntos superiores del navegador y pulsa en <strong>"Instalar aplicación"</strong> o <strong>"Añadir a pantalla principal"</strong>.', en: 'Tap the 3-dot menu and select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.', fr: 'Appuyez sur le menu 3 points et sélectionnez <strong>"Installer l\'application"</strong> ou <strong>"Ajouter à l\'écran d\'accueil"</strong>.' },
  modal_step3_title: { es: 'En ordenador (Chrome / Edge):', en: 'On desktop (Chrome / Edge):', fr: 'Sur ordinateur (Chrome / Edge) :' },
  modal_step3_desc:  { es: 'Haz clic en el icono de instalación 🖥️ que aparece en la barra de direcciones arriba a la derecha.', en: 'Click the install icon 🖥️ in the address bar at the top right.', fr: 'Cliquez sur l\'icône d\'installation 🖥️ dans la barre d\'adresse en haut à droite.' },
  modal_btn:      { es: 'Entendido', en: 'Got it', fr: 'Compris' },

  /* ====================================================
     INDEX.HTML
     ==================================================== */
  hero_badge:     { es: 'Transporte Nacional & Logística Exprés', en: 'National Transport & Express Logistics', fr: 'Transport National & Logistique Express' },
  hero_h2:        { es: 'Transporte terrestre ágil, puntual y seguro en toda España', en: 'Agile, punctual and secure road transport across Spain', fr: 'Transport routier agile, ponctuel et sécurisé dans toute l\'Espagne' },
  hero_p:         { es: 'Conectamos empresas y particulares con cualquier punto de la península. Especialistas en carga completa, grupaje y entregas urgentes con seguimiento en tiempo real.', en: 'We connect businesses and individuals to any point on the peninsula. Specialists in full loads, groupage and express deliveries with real-time tracking.', fr: 'Nous relions entreprises et particuliers à tout point de la péninsule. Spécialistes en chargement complet, groupage et livraisons urgentes avec suivi en temps réel.' },
  hero_btn1:      { es: 'Pide tu presupuesto gratis', en: 'Get your free quote', fr: 'Demandez votre devis gratuit' },
  hero_btn2:      { es: 'Ver Servicios', en: 'View Services', fr: 'Voir les Services' },
  hero_g1:        { es: 'Flota propia moderna', en: 'Modern own fleet', fr: 'Flotte propre moderne' },
  hero_g2:        { es: 'Seguro de carga a todo riesgo', en: 'All-risk cargo insurance', fr: 'Assurance marchandises tous risques' },
  hero_g3:        { es: 'Atención directa 24/7', en: 'Direct support 24/7', fr: 'Assistance directe 24h/24' },

  stats_y:        { es: 'Años de experiencia en el sector', en: 'Years of industry experience', fr: 'Ans d\'expérience dans le secteur' },
  stats_p:        { es: 'Puntualidad en entregas garantizada', en: 'Guaranteed on-time deliveries', fr: 'Ponctualité des livraisons garantie' },
  stats_r:        { es: 'Rutas y destinos cubiertos en España', en: 'Routes and destinations covered in Spain', fr: 'Routes et destinations couvertes en Espagne' },
  stats_t:        { es: 'Tiempos de tránsito exprés nacional', en: 'National express transit times', fr: 'Délais de transit express national' },

  sec_services_badge: { es: 'Lo que hacemos', en: 'What we do', fr: 'Ce que nous faisons' },
  sec_services_h2:    { es: 'Soluciones integrales de transporte', en: 'Comprehensive transport solutions', fr: 'Solutions de transport complètes' },
  sec_services_p:     { es: 'Adaptamos cada operativa logística al volumen, urgencia y características de tu carga.', en: 'We tailor every logistics operation to the volume, urgency and characteristics of your cargo.', fr: 'Nous adaptons chaque opération logistique au volume, à l\'urgence et aux caractéristiques de votre chargement.' },

  s1_h3: { es: 'Transporte de Mercancías', en: 'Freight Transport', fr: 'Transport de Marchandises' },
  s1_p:  { es: 'Carga completa (FTL) o grupaje (LTL) para empresas industriales, comercios y distribución en toda España.', en: 'Full load (FTL) or groupage (LTL) for industrial companies, retailers and distribution across Spain.', fr: 'Chargement complet (FTL) ou groupage (LTL) pour entreprises industrielles, commerces et distribution dans toute l\'Espagne.' },
  s1_l1: { es: 'Salidas diarias programadas', en: 'Daily scheduled departures', fr: 'Départs quotidiens programmés' },
  s1_l2: { es: 'Optimización de costes por volumen', en: 'Volume cost optimisation', fr: 'Optimisation des coûts par volume' },
  s1_link: { es: 'Saber más →', en: 'Learn more →', fr: 'En savoir plus →' },

  s2_h3: { es: 'Paquetería Exprés 24h', en: 'Express Parcel 24h', fr: 'Colis Express 24h' },
  s2_p:  { es: 'Servicio urgente puerta a puerta para envíos prioritarios, repuestos críticos y documentación sensible.', en: 'Urgent door-to-door service for priority shipments, critical spare parts and sensitive documents.', fr: 'Service urgent porte-à-porte pour envois prioritaires, pièces critiques et documents sensibles.' },
  s2_l1: { es: 'Entregas antes de las 10:00 y 14:00', en: 'Deliveries before 10:00 and 14:00', fr: 'Livraisons avant 10h00 et 14h00' },
  s2_l2: { es: 'Notificación SMS/Email al receptor', en: 'SMS/Email notification to recipient', fr: 'Notification SMS/Email au destinataire' },

  s3_h3: { es: 'Mudanzas y Traslados', en: 'Moving & Relocation', fr: 'Déménagements et Transferts' },
  s3_p:  { es: 'Traslados residenciales y corporativos con máximo cuidado, personal cualificado y embalaje profesional.', en: 'Residential and corporate relocations with maximum care, qualified staff and professional packaging.', fr: 'Déménagements résidentiels et professionnels avec soin maximal, personnel qualifié et emballage professionnel.' },
  s3_l1: { es: 'Montaje y desmontaje de mobiliario', en: 'Furniture assembly and disassembly', fr: 'Montage et démontage de meubles' },
  s3_l2: { es: 'Protección para objetos delicados', en: 'Protection for fragile items', fr: 'Protection des objets fragiles' },

  s4_h3: { es: 'Almacenaje y Logística', en: 'Warehousing & Logistics', fr: 'Entreposage & Logistique' },
  s4_p:  { es: 'Instalaciones seguras para custodia temporal, control de inventario y preparación de pedidos (picking & packing).', en: 'Secure facilities for temporary storage, inventory control and order preparation (picking & packing).', fr: 'Installations sécurisées pour stockage temporaire, contrôle des stocks et préparation de commandes (picking & packing).' },
  s4_l1: { es: 'Almacén vigilado 24 horas', en: 'Monitored warehouse 24 hours', fr: 'Entrepôt surveillé 24h/24' },
  s4_l2: { es: 'Flexibilidad de metros cuadrados', en: 'Flexible square metres', fr: 'Flexibilité de superficie' },

  sec_why_badge: { es: 'Nuestras Ventajas', en: 'Our Advantages', fr: 'Nos Avantages' },
  sec_why_h2:   { es: '¿Por qué confiar en SLG?', en: 'Why trust SLG?', fr: 'Pourquoi faire confiance à SLG ?' },
  sec_why_p:    { es: 'Construimos relaciones a largo plazo basadas en la puntualidad, transparencia y seguridad en cada kilómetro.', en: 'We build long-term relationships based on punctuality, transparency and safety at every kilometre.', fr: 'Nous construisons des relations durables fondées sur la ponctualité, la transparence et la sécurité à chaque kilomètre.' },
  why1_h3: { es: 'Cobertura Peninsular Total', en: 'Full Peninsula Coverage', fr: 'Couverture péninsulaire totale' },
  why1_p:  { es: 'Disponemos de red de distribución directa para llegar a cualquier código postal, polígono o núcleo urbano de España.', en: 'We have a direct distribution network to reach any postcode, industrial estate or urban area in Spain.', fr: 'Nous disposons d\'un réseau de distribution direct pour atteindre tout code postal, zone industrielle ou centre urbain d\'Espagne.' },
  why2_h3: { es: 'Mercancía 100% Protegida', en: '100% Protected Cargo', fr: 'Marchandise 100% protégée' },
  why2_p:  { es: 'Todos nuestros transportes incluyen póliza de seguro a todo riesgo y protocolos estrictos de estiba y sujeción.', en: 'All our transports include an all-risk insurance policy and strict lashing and stowage protocols.', fr: 'Tous nos transports incluent une assurance tous risques et des protocoles stricts d\'arrimage et de fixation.' },
  why3_h3: { es: 'Atención Personalizada', en: 'Personalised Service', fr: 'Service personnalisé' },
  why3_p:  { es: 'Sin centralitas automáticas engorrosas: tendrás un gestor de tráfico dedicado que resolverá cualquier consulta al instante.', en: 'No cumbersome automated switchboards: you will have a dedicated traffic manager who will resolve any query instantly.', fr: 'Sans standardistes automatiques encombrants : vous aurez un gestionnaire dédié qui résoudra toute question instantanément.' },

  sec_test_badge: { es: 'Garantía Real', en: 'Real Guarantee', fr: 'Garantie Réelle' },
  sec_test_h2:    { es: 'Lo que dicen nuestros clientes', en: 'What our clients say', fr: 'Ce que disent nos clients' },
  sec_test_p:     { es: 'La satisfacción de empresas y particulares avala nuestro compromiso día a día.', en: 'The satisfaction of businesses and individuals backs our commitment day after day.', fr: 'La satisfaction des entreprises et des particuliers valide notre engagement au quotidien.' },
  t1_text:   { es: '"Llevamos trabajando con SLG más de 3 años para la distribución de repuestos en Madrid y Valencia. La puntualidad y el cuidado con las piezas son impecables."', en: '"We have been working with SLG for over 3 years for spare parts distribution in Madrid and Valencia. The punctuality and care with the parts are impeccable."', fr: '"Nous travaillons avec SLG depuis plus de 3 ans pour la distribution de pièces à Madrid et Valence. La ponctualité et le soin apporté aux pièces sont impeccables."' },
  t1_role:   { es: 'Director de Logística - InduTech SL', en: 'Logistics Director - InduTech SL', fr: 'Directeur Logistique - InduTech SL' },
  t2_text:   { es: '"Gestionaron la mudanza de nuestra sede corporativa en un fin de semana completo sin incidencias. Muy profesionales y organizados de principio a fin."', en: '"They managed the relocation of our corporate headquarters over a full weekend without any incidents. Very professional and organised from start to finish."', fr: '"Ils ont géré le déménagement de notre siège en un week-end complet sans incident. Très professionnels et organisés du début à la fin."' },
  t2_role:   { es: 'Operations Manager - Grupo Vértice', en: 'Operations Manager - Grupo Vértice', fr: 'Responsable des opérations - Grupo Vértice' },
  t3_text:   { es: '"Me ayudaron con la mudanza de mi piso de Barcelona a Sevilla sin ningún problema. Trato cercano, precio justo y llegaron el mismo día a la hora exacta. Como particular quedé encantado."', en: '"They helped me move my flat from Barcelona to Seville without any problem. Friendly service, fair price and they arrived on the same day at the exact time. As a private customer I was delighted."', fr: '"Ils m\'ont aidé à déménager mon appartement de Barcelone à Séville sans aucun problème. Accueil chaleureux, prix juste et ils sont arrivés le même jour à l\'heure exacte. En tant que particulier, j\'ai été ravi."' },
  t3_role:   { es: 'Particular — Mudanza Barcelona › Sevilla', en: 'Private client — Move Barcelona › Seville', fr: 'Particulier — Déménagement Barcelone › Séville' },

  pwa_badge:  { es: 'App Móvil & Escritorio', en: 'Mobile & Desktop App', fr: 'App Mobile & Bureau' },
  pwa_h2:     { es: 'Lleva SLG Transportes siempre en tu pantalla de inicio', en: 'Keep SLG Transportes always on your home screen', fr: 'Gardez SLG Transportes toujours sur votre écran d\'accueil' },
  pwa_p:      { es: 'Instala nuestra aplicación oficial de forma gratuita y sin pasar por tiendas. Acceso directo con un solo toque, solicitudes de presupuesto inmediatas y contacto de urgencia 24 horas.', en: 'Install our official app for free without going through any store. One-tap direct access, instant quote requests and 24-hour emergency contact.', fr: 'Installez notre application officielle gratuitement sans passer par les boutiques. Accès direct en un seul clic, demandes de devis immédiates et contact d\'urgence 24h/24.' },
  pwa_v1:     { es: '<strong>Carga inmediata</strong> sin esperas ni consumo de datos innecesario.', en: '<strong>Instant loading</strong> with no unnecessary waiting or data usage.', fr: '<strong>Chargement instantané</strong> sans attente ni consommation inutile de données.' },
  pwa_v2:     { es: '<strong>Acceso directo</strong> desde el escritorio de tu móvil o PC como una app nativa.', en: '<strong>Direct access</strong> from your mobile or PC desktop like a native app.', fr: '<strong>Accès direct</strong> depuis le bureau de votre mobile ou PC comme une app native.' },
  pwa_v3:     { es: '<strong>Ultra ligera</strong> (ocupa menos de 1 MB de memoria).', en: '<strong>Ultra lightweight</strong> (less than 1 MB of memory).', fr: '<strong>Ultra légère</strong> (moins de 1 Mo de mémoire).' },
  pwa_v4:     { es: '<strong>Modo sin conexión</strong> para consultar teléfonos de contacto incluso sin cobertura.', en: '<strong>Offline mode</strong> to check contact phone numbers even without signal.', fr: '<strong>Mode hors ligne</strong> pour consulter les coordonnées même sans réseau.' },
  pwa_btn:    { es: 'Instalar Aplicación Gratis', en: 'Install App for Free', fr: 'Installer l\'App Gratuitement' },
  pwa_compat: { es: 'Compatible con Android, iPhone / iPad, Windows y Mac', en: 'Compatible with Android, iPhone / iPad, Windows and Mac', fr: 'Compatible avec Android, iPhone / iPad, Windows et Mac' },

  cta_h2:  { es: '¿Tienes un envío pendiente?', en: 'Got a shipment to send?', fr: 'Vous avez un envoi en attente ?' },
  cta_p:   { es: 'Calculamos tu ruta más eficiente y te ofrecemos la mejor tarifa del mercado en menos de 2 horas.', en: 'We calculate your most efficient route and offer you the best market rate in under 2 hours.', fr: 'Nous calculons votre itinéraire le plus efficace et vous proposons le meilleur tarif du marché en moins de 2 heures.' },
  cta_btn: { es: 'Solicitar Presupuesto Online', en: 'Request Quote Online', fr: 'Demander un Devis en Ligne' },

  /* ====================================================
     ABOUT/INDEX.HTML
     ==================================================== */
  about_hero_badge: { es: 'Nuestra Historia', en: 'Our Story', fr: 'Notre Histoire' },
  about_hero_h2:    { es: 'Más de 15 años moviendo España', en: 'Over 15 years moving Spain', fr: 'Plus de 15 ans à déplacer l\'Espagne' },
  about_hero_p:     { es: 'Nacimos con la vocación de hacer el transporte más eficiente, transparente y accesible para cualquier empresa o particular que necesite mover su carga por la península.', en: 'We were born with the vocation of making transport more efficient, transparent and accessible for any business or individual needing to move their cargo across the peninsula.', fr: 'Nous sommes nés avec la vocation de rendre le transport plus efficace, transparent et accessible pour toute entreprise ou particulier souhaitant transporter ses marchandises à travers la péninsule.' },

  about_mission_badge: { es: 'Misión & Visión', en: 'Mission & Vision', fr: 'Mission & Vision' },
  about_mission_h2:    { es: 'Lo que nos define', en: 'What defines us', fr: 'Ce qui nous définit' },
  about_mission_h3a:   { es: 'Nuestra Misión', en: 'Our Mission', fr: 'Notre Mission' },
  about_mission_pa:    { es: 'Ofrecer soluciones de transporte y logística confiables, puntuales y competitivas que impulsen el crecimiento de nuestros clientes, construyendo relaciones duraderas basadas en la transparencia y el servicio de excelencia.', en: 'To offer reliable, punctual and competitive transport and logistics solutions that drive our clients\' growth, building lasting relationships based on transparency and service excellence.', fr: 'Offrir des solutions de transport et de logistique fiables, ponctuelles et compétitives qui favorisent la croissance de nos clients, en construisant des relations durables fondées sur la transparence et l\'excellence du service.' },
  about_mission_h3b:   { es: 'Nuestra Visión', en: 'Our Vision', fr: 'Notre Vision' },
  about_mission_pb:    { es: 'Ser la compañía de transporte terrestre de referencia en España, reconocida por la eficiencia de nuestra red, la tecnología integrada en cada proceso y el compromiso genuino con nuestros clientes.', en: 'To be the benchmark land transport company in Spain, recognised for the efficiency of our network, technology integrated into every process and genuine commitment to our clients.', fr: 'Être la société de transport terrestre de référence en Espagne, reconnue pour l\'efficacité de notre réseau, la technologie intégrée dans chaque processus et notre engagement sincère envers nos clients.' },

  about_fleet_badge: { es: 'Nuestra Flota', en: 'Our Fleet', fr: 'Notre Flotte' },
  about_fleet_h2:    { es: 'Equipos modernos y seguros', en: 'Modern and safe equipment', fr: 'Équipements modernes et sécurisés' },
  about_fleet_p:     { es: 'Nuestra flota se renueva permanentemente para garantizar eficiencia, seguridad y reducción del impacto medioambiental.', en: 'Our fleet is permanently renewed to guarantee efficiency, safety and reduced environmental impact.', fr: 'Notre flotte est constamment renouvelée pour garantir efficacité, sécurité et réduction de l\'impact environnemental.' },

  about_values_badge: { es: 'Nuestros Valores', en: 'Our Values', fr: 'Nos Valeurs' },
  about_values_h2:    { es: 'Los pilares de SLG', en: 'The pillars of SLG', fr: 'Les piliers de SLG' },

  /* ====================================================
     SERVICE/INDEX.HTML
     ==================================================== */
  service_hero_badge: { es: 'Nuestros Servicios', en: 'Our Services', fr: 'Nos Services' },
  service_hero_h2:    { es: 'Transporte a medida para cada necesidad', en: 'Tailor-made transport for every need', fr: 'Transport sur mesure pour chaque besoin' },
  service_hero_p:     { es: 'Desde un palet urgente hasta una mudanza completa o soluciones de almacenaje: cubrimos todo el espectro logístico con flota propia y personal experto.', en: 'From a single urgent pallet to a full relocation or warehousing solutions: we cover the entire logistics spectrum with our own fleet and expert staff.', fr: 'D\'une palette urgente à un déménagement complet ou des solutions d\'entreposage : nous couvrons tout le spectre logistique avec notre propre flotte et un personnel expert.' },

  service_process_badge: { es: 'Así trabajamos', en: 'How we work', fr: 'Comment nous travaillons' },
  service_process_h2:    { es: 'Tu envío en 4 pasos', en: 'Your shipment in 4 steps', fr: 'Votre envoi en 4 étapes' },

  service_faq_badge: { es: 'Preguntas Frecuentes', en: 'Frequently Asked Questions', fr: 'Questions Fréquentes' },
  service_faq_h2:    { es: '¿Tienes dudas?', en: 'Got questions?', fr: 'Des questions ?' },

  /* ====================================================
     CONTACT/INDEX.HTML
     ==================================================== */
  contact_hero_badge: { es: 'Presupuesto Gratuito', en: 'Free Quote', fr: 'Devis Gratuit' },
  contact_hero_h2:    { es: 'Cuéntanos tu envío', en: 'Tell us about your shipment', fr: 'Parlez-nous de votre envoi' },
  contact_hero_p:     { es: 'Rellena el formulario o contáctanos directamente. Te respondemos con precio y disponibilidad en menos de 2 horas hábiles.', en: 'Fill in the form or contact us directly. We reply with price and availability in under 2 working hours.', fr: 'Remplissez le formulaire ou contactez-nous directement. Nous répondons avec prix et disponibilité en moins de 2 heures ouvrables.' },

  contact_card1_title: { es: 'Llámanos ahora', en: 'Call us now', fr: 'Appelez-nous' },
  contact_card1_sub:   { es: 'Atención inmediata', en: 'Immediate attention', fr: 'Attention immédiate' },
  contact_card2_title: { es: 'Escríbenos', en: 'Email us', fr: 'Écrivez-nous' },
  contact_card2_sub:   { es: 'Respuesta en &lt;2h', en: 'Reply in &lt;2h', fr: 'Réponse en &lt;2h' },
  contact_card3_title: { es: 'WhatsApp', en: 'WhatsApp', fr: 'WhatsApp' },
  contact_card3_sub:   { es: 'Respuesta rápida', en: 'Quick reply', fr: 'Réponse rapide' },

  form_title:  { es: 'Pide tu Presupuesto Online', en: 'Request Your Online Quote', fr: 'Demandez Votre Devis en Ligne' },
  form_desc:   { es: 'Rellena los datos de tu envío y te responderemos con precio y disponibilidad en menos de 2 horas hábiles.', en: 'Fill in your shipment details and we will reply with price and availability in under 2 working hours.', fr: 'Remplissez les détails de votre envoi et nous vous répondrons avec prix et disponibilité en moins de 2 heures ouvrables.' },
  form_name:   { es: 'Nombre y Apellidos *', en: 'Full Name *', fr: 'Nom et Prénom *' },
  form_name_ph:{ es: 'Ej. Juan Pérez', en: 'e.g. John Smith', fr: 'Ex. Jean Dupont' },
  form_company:{ es: 'Empresa (Opcional)', en: 'Company (Optional)', fr: 'Entreprise (Optionnel)' },
  form_company_ph: { es: 'Nombre de tu negocio', en: 'Your business name', fr: 'Nom de votre entreprise' },
  form_email:  { es: 'Correo Electrónico *', en: 'Email Address *', fr: 'Adresse e-mail *' },
  form_phone:  { es: 'Teléfono de Contacto *', en: 'Contact Phone *', fr: 'Téléphone de contact *' },
  form_client_type: { es: 'Tipo de Cliente *', en: 'Client Type *', fr: 'Type de client *' },
  form_particular: { es: '👤 Particular', en: '👤 Individual', fr: '👤 Particulier' },
  form_empresa:    { es: '🏢 Empresa / Autónomo', en: '🏢 Business / Self-employed', fr: '🏢 Entreprise / Indépendant' },
  form_service_type: { es: 'Tipo de Servicio *', en: 'Service Type *', fr: 'Type de service *' },
  form_service_ph:   { es: 'Selecciona una opción', en: 'Select an option', fr: 'Sélectionnez une option' },
  form_origin:  { es: 'Población / CP Origen *', en: 'Origin City / Postcode *', fr: 'Ville / CP Origine *' },
  form_origin_ph: { es: 'Ej. 28001 Madrid', en: 'e.g. Madrid', fr: 'Ex. Paris 75001' },
  form_dest:    { es: 'Población / CP Destino *', en: 'Destination City / Postcode *', fr: 'Ville / CP Destination *' },
  form_dest_ph: { es: 'Ej. 46001 Valencia', en: 'e.g. Valencia', fr: 'Ex. Lyon 69001' },
  form_msg:     { es: 'Detalles de la Carga (Medidas, peso aproximado, fecha prevista) *', en: 'Cargo Details (Dimensions, approx. weight, expected date) *', fr: 'Détails du chargement (Dimensions, poids approximatif, date prévue) *' },
  form_msg_ph:  { es: 'Indica tipo de bultos, si necesitas trampilla elevadora o cualquier requisito especial...', en: 'Specify type of packages, whether you need a tail lift or any special requirement...', fr: 'Indiquez le type de colis, si vous avez besoin d\'un hayon élévateur ou tout autre exigence spéciale...' },
  form_privacy: { es: 'Acepto el tratamiento de mis datos con la única finalidad de recibir la propuesta de presupuesto solicitada.', en: 'I accept the processing of my data solely for the purpose of receiving the requested quote.', fr: 'J\'accepte le traitement de mes données dans le seul but de recevoir la proposition de devis demandée.' },
  form_submit:  { es: 'Enviar Solicitud de Presupuesto', en: 'Send Quote Request', fr: 'Envoyer la Demande de Devis' },
  form_success: { es: '✅ ¡Solicitud enviada! Te contactaremos en menos de 2 horas hábiles.', en: '✅ Request sent! We will contact you within 2 working hours.', fr: '✅ Demande envoyée ! Nous vous contacterons dans moins de 2 heures ouvrables.' },
  form_error:   { es: '❌ Error al enviar. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.', en: '❌ Send error. Please try again or contact us via WhatsApp.', fr: '❌ Erreur d\'envoi. Veuillez réessayer ou nous contacter via WhatsApp.' },
};

/* =====================================================
   MOTOR DE TRADUCCIÓN
   ===================================================== */

const LANG_KEY = 'slg_lang';
const LANGS    = ['es', 'en', 'fr'];

function getLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && LANGS.includes(saved)) return saved;
  const browser = (navigator.language || 'es').slice(0, 2).toLowerCase();
  return LANGS.includes(browser) ? browser : 'es';
}

function applyLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;

  // Traducir todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const map = TRANSLATIONS[key];
    if (!map) return;
    const text = map[lang] || map['es'];
    // Usar innerHTML si el texto contiene HTML, textContent si es texto plano
    if (text.includes('<')) {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });

  // Traducir placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const map = TRANSLATIONS[key];
    if (!map) return;
    el.placeholder = map[lang] || map['es'];
  });

  // Marcar botón activo en el selector
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-activo', btn.dataset.lang === lang);
  });

  // Actualizar el pill de la cabecera
  updateLangBtn(lang);
}

function switchLang(lang) {
  if (!LANGS.includes(lang)) return;
  applyLang(lang);
  // Cerrar el dropdown
  document.querySelector('.lang-dropdown')?.classList.remove('abierto');
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  applyLang(getLang());

  // Toggle del dropdown de idioma
  document.querySelector('.lang-selector-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelector('.lang-dropdown')?.classList.toggle('abierto');
  });
  document.addEventListener('click', () => {
    document.querySelector('.lang-dropdown')?.classList.remove('abierto');
  });
});
