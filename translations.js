// ═══════════════════════════════════════════════════════════
//  ShowOne — Système de traduction multilingue v2
// ═══════════════════════════════════════════════════════════

const LANGS = {
  fr: { flag: '🇫🇷', name: 'Français' },
  es: { flag: '🇪🇸', name: 'Español' },
  pt: { flag: '🇵🇹', name: 'Português' },
  it: { flag: '🇮🇹', name: 'Italiano' }
};

const T = {
  // NAVIGATION
  nav_decouvrir:  { fr:'Découvrir',     es:'Descubrir',    pt:'Descobrir',    it:'Scoprire'     },
  nav_categories: { fr:'Catégories',    es:'Categorías',   pt:'Categorias',   it:'Categorie'    },
  nav_castings:   { fr:'Castings',      es:'Castings',     pt:'Castings',     it:'Casting'      },
  nav_recruteurs: { fr:'Recruteurs',    es:'Reclutadores', pt:'Recrutadores', it:'Reclutatori'  },
  nav_tarifs:     { fr:'Tarifs',        es:'Precios',      pt:'Preços',       it:'Prezzi'       },
  nav_contact:    { fr:'Contact',       es:'Contacto',     pt:'Contato',      it:'Contatto'     },
  nav_connexion:  { fr:'Connexion',     es:'Iniciar sesión',pt:'Entrar',      it:'Accedi'       },
  nav_rejoindre:  { fr:'Rejoindre',     es:'Unirse',       pt:'Juntar-se',    it:'Unisciti'     },

  // HERO
  hero_line1:     { fr:'Entrez en scène.',   es:'Sube al escenario.',  pt:'Entre em cena.',    it:'Sali sul palco.'     },
  hero_line2:     { fr:'Faites-vous',         es:'Hazte',               pt:'Faça-se',           it:'Fatti'               },
  hero_line3:     { fr:'remarquer.',          es:'notar.',              pt:'notar.',             it:'notare.'             },
  hero_desc:      {
    fr:'ShowOne rassemble chanteurs, danseurs, sportifs, mannequins, animateurs et humoristes. Une vitrine éditoriale pour révéler les artistes de demain aux recruteurs d\'aujourd\'hui.',
    es:'ShowOne reúne cantantes, bailarines, deportistas, modelos, presentadores y humoristas. Un escaparate editorial para revelar a los artistas del mañana a los reclutadores de hoy.',
    pt:'ShowOne reúne cantores, dançarinos, atletas, modelos, apresentadores e humoristas. Uma vitrine editorial para revelar os artistas de amanhã aos recrutadores de hoje.',
    it:'ShowOne riunisce cantanti, ballerini, sportivi, modelle, presentatori e comici. Una vetrina editoriale per rivelare gli artisti di domani ai reclutatori di oggi.'
  },
  hero_search:    { fr:'Rechercher un talent, une catégorie…', es:'Buscar un talento, una categoría…', pt:'Pesquisar um talento, uma categoria…', it:'Cerca un talento, una categoria…' },
  hero_btn:       { fr:'Chercher',       es:'Buscar',       pt:'Buscar',       it:'Cerca'        },

  // BANNIÈRE CASTINGS
  cast_label:     { fr:'Castings disponibles', es:'Castings disponibles', pt:'Castings disponíveis', it:'Casting disponibili' },
  cast_desc:      { fr:'Des recruteurs cherchent des talents comme vous', es:'Los reclutadores buscan talentos como tú', pt:'Recrutadores buscam talentos como você', it:'I reclutatori cercano talenti come te' },
  cast_btn:       { fr:'Postuler maintenant →', es:'Postularse ahora →', pt:'Candidatar-se agora →', it:'Candidati ora →' },

  // SHOWCASE
  showcase_label: { fr:'SHOWCASE',      es:'SHOWCASE',     pt:'SHOWCASE',     it:'SHOWCASE'     },
  showcase_title: { fr:'Tendances du moment', es:'Tendencias del momento', pt:'Tendências do momento', it:'Tendenze del momento' },
  showcase_link:  { fr:'Voir tous les talents →', es:'Ver todos los talentos →', pt:'Ver todos os talentos →', it:'Vedi tutti i talenti →' },
  contacter:      { fr:'Contacter',     es:'Contactar',    pt:'Contatar',     it:'Contatta'     },

  // ÉDITORIAL
  editorial_label:{ fr:'SÉLECTION',     es:'SELECCIÓN',    pt:'SELEÇÃO',      it:'SELEZIONE'    },
  editorial_title:{ fr:'Sélection ShowOne', es:'Selección ShowOne', pt:'Seleção ShowOne', it:'Selezione ShowOne' },
  editorial_sub:  { fr:'Coups de cœur de la rédaction', es:'Favoritos de la redacción', pt:'Favoritos da redação', it:'I preferiti della redazione' },
  editorial_link: { fr:'Voir toute la sélection →', es:'Ver toda la selección →', pt:'Ver toda a seleção →', it:'Vedi tutta la selezione →' },

  // RECRUTEUR
  rec_label:      { fr:'RECRUTEURS',    es:'RECLUTADORES', pt:'RECRUTADORES', it:'RECLUTATORI'  },
  rec_title:      { fr:'Vous êtes recruteur ?', es:'¿Eres reclutador?', pt:'Você é recrutador?', it:'Sei un reclutatore?' },
  rec_desc:       {
    fr:'Accédez à des centaines de talents vérifiés. Filtrez par catégorie, ville, disponibilité. Contactez directement. Publiez vos castings.',
    es:'Accede a cientos de talentos verificados. Filtra por categoría, ciudad, disponibilidad. Contacta directamente. Publica tus castings.',
    pt:'Acesse centenas de talentos verificados. Filtre por categoria, cidade, disponibilidade. Contate diretamente. Publique seus castings.',
    it:'Accedi a centinaia di talenti verificati. Filtra per categoria, città, disponibilità. Contatta direttamente. Pubblica i tuoi casting.'
  },
  rec_btn:        { fr:'Accès recruteur →', es:'Acceso reclutador →', pt:'Acesso recrutador →', it:'Accesso reclutatore →' },

  // TARIFS
  pricing_label:  { fr:'TARIFS',        es:'PRECIOS',      pt:'PREÇOS',       it:'PREZZI'       },
  pricing_title:  { fr:'Simple et transparent', es:'Simple y transparente', pt:'Simples e transparente', it:'Semplice e trasparente' },
  pricing_free:   { fr:'Gratuit',       es:'Gratis',       pt:'Grátis',       it:'Gratuito'     },
  pricing_pro:    { fr:'Pro',           es:'Pro',          pt:'Pro',          it:'Pro'          },
  pricing_btn1:   { fr:'Commencer gratuitement', es:'Empezar gratis', pt:'Começar grátis', it:'Inizia gratis' },
  pricing_btn2:   { fr:'Passer Pro',    es:'Ir a Pro',     pt:'Ir para Pro',  it:'Vai a Pro'    },

  // REJOINDRE
  join_title:     { fr:'Qui êtes-vous ?', es:'¿Quién eres?', pt:'Quem você é?', it:'Chi sei?' },
  join_sub:       { fr:'Choisissez votre profil pour créer votre compte ShowOne.', es:'Elige tu perfil para crear tu cuenta ShowOne.', pt:'Escolha seu perfil para criar sua conta ShowOne.', it:'Scegli il tuo profilo per creare il tuo account ShowOne.' },
  talent_title:   { fr:'Je suis un Talent', es:'Soy un Talento', pt:'Sou um Talento', it:'Sono un Talento' },
  talent_desc:    { fr:'Chanteur, danseur, acteur, mannequin, sportif, créateur…', es:'Cantante, bailarín, actor, modelo, deportista, creador…', pt:'Cantor, dançarino, ator, modelo, atleta, criador…', it:'Cantante, ballerino, attore, modello, sportivo, creatore…' },
  talent_f1:      { fr:'Créez votre profil vidéo', es:'Crea tu perfil de video', pt:'Crie seu perfil de vídeo', it:'Crea il tuo profilo video' },
  talent_f2:      { fr:'Soyez découvert par des recruteurs', es:'Sé descubierto por reclutadores', pt:'Seja descoberto por recrutadores', it:'Fatti scoprire dai reclutatori' },
  talent_f3:      { fr:'Postulez aux castings', es:'Postúlate a castings', pt:'Candidate-se a castings', it:'Candidati ai casting' },
  talent_f4:      { fr:'Inscription 100% gratuite', es:'Registro 100% gratuito', pt:'Cadastro 100% gratuito', it:'Iscrizione 100% gratuita' },
  rec2_title:     { fr:'Je suis Recruteur', es:'Soy Reclutador', pt:'Sou Recrutador', it:'Sono Reclutatore' },
  rec2_desc:      { fr:'Agence, directeur de casting, marque, producteur…', es:'Agencia, director de casting, marca, productor…', pt:'Agência, diretor de casting, marca, produtor…', it:'Agenzia, direttore di casting, marca, produttore…' },
  rec2_f1:        { fr:'Accédez à des centaines de talents', es:'Accede a cientos de talentos', pt:'Acesse centenas de talentos', it:'Accedi a centinaia di talenti' },
  rec2_f2:        { fr:'Contactez directement les profils', es:'Contacta directamente los perfiles', pt:'Contate diretamente os perfis', it:'Contatta direttamente i profili' },
  rec2_f3:        { fr:'Publiez vos offres de casting', es:'Publica tus ofertas de casting', pt:'Publique suas ofertas de casting', it:'Pubblica le tue offerte di casting' },
  rec2_f4:        { fr:'Recherche avancée par catégorie', es:'Búsqueda avanzada por categoría', pt:'Pesquisa avançada por categoria', it:'Ricerca avanzata per categoria' },
  deja_compte:    { fr:'Déjà un compte ?', es:'¿Ya tienes cuenta?', pt:'Já tem conta?', it:'Hai già un account?' },
  connecter_lnk:  { fr:'Se connecter →', es:'Iniciar sesión →', pt:'Entrar →', it:'Accedi →' },
  moins18:        { fr:'Moins de 18 ans ?', es:'¿Menos de 18 años?', pt:'Menos de 18 anos?', it:'Meno di 18 anni?' },
  mineur_lnk:     { fr:'Inscription mineur →', es:'Registro menor →', pt:'Cadastro menor →', it:'Iscrizione minore →' },

  // CONNEXION
  cnx_title:      { fr:'Connexion',     es:'Iniciar sesión',pt:'Entrar',       it:'Accedi'       },
  cnx_sub:        { fr:'Accédez à votre espace ShowOne.', es:'Accede a tu espacio ShowOne.', pt:'Acesse seu espaço ShowOne.', it:'Accedi al tuo spazio ShowOne.' },
  je_talent:      { fr:'🌟 Je suis un talent', es:'🌟 Soy un talento', pt:'🌟 Sou um talento', it:'🌟 Sono un talento' },
  je_rec:         { fr:'🔍 Je suis recruteur', es:'🔍 Soy reclutador', pt:'🔍 Sou recrutador', it:'🔍 Sono reclutatore' },
  email_lbl:      { fr:'Adresse e-mail', es:'Correo electrónico', pt:'Endereço de e-mail', it:'Indirizzo e-mail' },
  pwd_lbl:        { fr:'Mot de passe',  es:'Contraseña',   pt:'Senha',        it:'Password'     },
  souvenir:       { fr:'Se souvenir de moi', es:'Recordarme', pt:'Lembrar de mim', it:'Ricordami' },
  mdp_oublie:     { fr:'Mot de passe oublié ?', es:'¿Olvidaste tu contraseña?', pt:'Esqueceu sua senha?', it:'Password dimenticata?' },
  btn_cnx:        { fr:'Se connecter',  es:'Iniciar sesión',pt:'Entrar',       it:'Accedi'       },
  ou_avec:        { fr:'ou continuer avec', es:'o continuar con', pt:'ou continuar com', it:'o continua con' },
  google_btn:     { fr:'Continuer avec Google', es:'Continuar con Google', pt:'Continuar com Google', it:'Continua con Google' },
  pas_compte:     { fr:'Pas encore de compte ?', es:'¿No tienes cuenta?', pt:'Ainda não tem conta?', it:'Non hai ancora un account?' },
  sinscrire:      { fr:"S'inscrire gratuitement", es:'Registrarse gratis', pt:'Cadastrar-se grátis', it:'Iscriviti gratis' },

  // CASTINGS
  castings_title: { fr:'Castings disponibles', es:'Castings disponibles', pt:'Castings disponíveis', it:'Casting disponibili' },
  castings_sub:   { 
    fr:'Des recruteurs professionnels cherchent des talents comme vous. Postulez directement depuis ShowOne !',
    es:'Reclutadores profesionales buscan talentos como tú. ¡Postúlate directamente desde ShowOne!',
    pt:'Recrutadores profissionais buscam talentos como você. Candidate-se diretamente pelo ShowOne!',
    it:'Reclutatori professionali cercano talenti come te. Candidati direttamente da ShowOne!'
  },
  castings_search:{ fr:'Rechercher un casting, une catégorie, une ville…', es:'Buscar un casting, categoría, ciudad…', pt:'Pesquisar casting, categoria, cidade…', it:'Cerca casting, categoria, città…' },
  castings_btn:   { fr:'Chercher',      es:'Buscar',       pt:'Buscar',       it:'Cerca'        },
  postuler:       { fr:'Postuler →',   es:'Postularse →', pt:'Candidatar-se →', it:'Candidati →' },

  // CATÉGORIES
  cats_title:     { fr:'Explorez les catégories', es:'Explora las categorías', pt:'Explore as categorias', it:'Esplora le categorie' },
  cats_sub:       { fr:'Découvrez les talents ShowOne par discipline', es:'Descubre los talentos ShowOne por disciplina', pt:'Descubra os talentos ShowOne por disciplina', it:'Scopri i talenti ShowOne per disciplina' },
  voir_talents:   { fr:'Voir les talents →', es:'Ver talentos →', pt:'Ver talentos →', it:'Vedi talenti →' },

  // CONTACT
  contact_title:  { fr:'Nous contacter', es:'Contáctenos', pt:'Entre em contato', it:'Contattaci' },
  contact_sub:    { fr:'Une question ? Nous répondons sous 24h.', es:'¿Una pregunta? Respondemos en 24h.', pt:'Uma pergunta? Respondemos em 24h.', it:'Una domanda? Rispondiamo entro 24h.' },
  contact_btn:    { fr:'Envoyer',       es:'Enviar',       pt:'Enviar',       it:'Invia'        },

  // COMMENT CA MARCHE
  ccm_title:      { fr:'Comment ça marche', es:'¿Cómo funciona?', pt:'Como funciona?', it:'Come funziona?' },
  ccm_sub:        { fr:'ShowOne en 3 étapes simples', es:'ShowOne en 3 pasos simples', pt:'ShowOne em 3 passos simples', it:'ShowOne in 3 semplici passi' },
};

// ── SÉLECTEUR DÉROULANT ──────────────────────────────────────────────────────

function createLangSelector(theme = 'dark') {
  const saved = localStorage.getItem('showone_lang') || detectLang();
  
  const wrap = document.createElement('div');
  wrap.className = 'lang-dropdown-wrap';
  wrap.innerHTML = `
    <button class="lang-trigger" onclick="toggleLangMenu(this)" data-lang="${saved}">
      <span class="lang-flag">${LANGS[saved].flag}</span>
      <span class="lang-name">${LANGS[saved].name}</span>
      <span class="lang-arrow">▾</span>
    </button>
    <div class="lang-menu" style="display:none;">
      ${Object.entries(LANGS).map(([code, info]) => `
        <button class="lang-option ${code === saved ? 'active' : ''}" onclick="selectLang('${code}', this.closest('.lang-dropdown-wrap'))">
          <span>${info.flag}</span>
          <span>${info.name}</span>
        </button>
      `).join('')}
    </div>`;
  
  return wrap;
}

function toggleLangMenu(btn) {
  const menu = btn.nextElementSibling;
  const isOpen = menu.style.display === 'block';
  // Fermer tous les menus
  document.querySelectorAll('.lang-menu').forEach(m => m.style.display = 'none');
  if (!isOpen) menu.style.display = 'block';
}

function selectLang(lang, wrap) {
  const trigger = wrap.querySelector('.lang-trigger');
  trigger.querySelector('.lang-flag').textContent = LANGS[lang].flag;
  trigger.querySelector('.lang-name').textContent = LANGS[lang].name;
  trigger.dataset.lang = lang;
  wrap.querySelector('.lang-menu').style.display = 'none';
  wrap.querySelectorAll('.lang-option').forEach(o => o.classList.toggle('active', o.textContent.trim().startsWith(LANGS[lang].flag)));
  applyTranslations(lang);
}

// Fermer le menu si clic ailleurs
document.addEventListener('click', e => {
  if (!e.target.closest('.lang-dropdown-wrap')) {
    document.querySelectorAll('.lang-menu').forEach(m => m.style.display = 'none');
  }
});

// ── MOTEUR DE TRADUCTION ─────────────────────────────────────────────────────

function detectLang() {
  const saved = localStorage.getItem('showone_lang');
  if (saved && LANGS[saved]) return saved;
  const b = (navigator.language || 'fr').substring(0, 2).toLowerCase();
  return LANGS[b] ? b : 'fr';
}

let currentLang = detectLang();

function t(key) {
  const entry = T[key];
  if (!entry) return '';
  return entry[currentLang] || entry['fr'] || '';
}

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('showone_lang', lang);
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const type = el.getAttribute('data-i18n-type') || 'text';
    const val = T[key] ? (T[key][lang] || T[key]['fr'] || '') : '';
    if (!val) return;
    if (type === 'placeholder') el.placeholder = val;
    else if (type === 'html') el.innerHTML = val;
    else el.textContent = val;
  });

  document.documentElement.lang = lang;
}

// ── CSS DU SÉLECTEUR ─────────────────────────────────────────────────────────

const langCSS = `
  .lang-dropdown-wrap { position:relative; }
  .lang-trigger { 
    display:flex; align-items:center; gap:6px;
    padding:6px 12px; border-radius:8px;
    border:1.5px solid rgba(255,255,255,0.2);
    background:rgba(255,255,255,0.05);
    color:#fff; font-size:13px; font-weight:600;
    cursor:pointer; font-family:'DM Sans',sans-serif;
    transition:all .2s; white-space:nowrap;
  }
  .lang-trigger:hover { background:rgba(255,255,255,0.12); border-color:rgba(255,255,255,0.4); }
  .lang-flag { font-size:16px; }
  .lang-name { font-size:12px; }
  .lang-arrow { font-size:10px; opacity:.7; }
  .lang-menu { 
    position:absolute; top:calc(100% + 6px); right:0;
    background:#fff; border-radius:10px;
    box-shadow:0 8px 24px rgba(0,0,0,0.15);
    border:1px solid rgba(0,0,0,0.08);
    overflow:hidden; z-index:1000; min-width:140px;
  }
  .lang-option {
    display:flex; align-items:center; gap:10px;
    width:100%; padding:10px 14px;
    border:none; background:transparent;
    color:#1a1535; font-size:13px; font-weight:500;
    cursor:pointer; font-family:'DM Sans',sans-serif;
    transition:background .15s; text-align:left;
  }
  .lang-option:hover { background:#f5f3ff; }
  .lang-option.active { background:#f0eeff; color:#5B4FE8; font-weight:700; }
  /* Version fond clair */
  .lang-trigger.light {
    border-color:rgba(91,79,232,0.2);
    background:rgba(91,79,232,0.04);
    color:#1a1535;
  }
  .lang-trigger.light:hover { border-color:#5B4FE8; background:rgba(91,79,232,0.08); }
`;

const styleEl = document.createElement('style');
styleEl.textContent = langCSS;
document.head.appendChild(styleEl);

// ── INITIALISATION ────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Injecter le sélecteur dans nav-cta si présent
  const navCta = document.querySelector('.nav-cta');
  if (navCta && !navCta.querySelector('.lang-dropdown-wrap')) {
    const sel = createLangSelector('dark');
    navCta.insertBefore(sel, navCta.firstChild);
  }

  // Injecter dans side-form si présent (pages connexion/inscription)
  const sideForm = document.querySelector('.side-form, .auth-wrap, .form-wrap');
  if (sideForm && !document.querySelector('.lang-dropdown-wrap')) {
    const sel = createLangSelector('light');
    sel.style.cssText = 'position:fixed;top:16px;right:16px;z-index:200;';
    sel.querySelector('.lang-trigger').classList.add('light');
    document.body.appendChild(sel);
  }

  // Appliquer les traductions
  applyTranslations(currentLang);
});
