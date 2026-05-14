// ═══════════════════════════════════════════════════════════
//  ShowOne — Système de traduction multilingue
//  Langues : FR, ES, PT, IT
// ═══════════════════════════════════════════════════════════

const SHOWONE_TRANSLATIONS = {

  // NAVIGATION
  nav_decouvrir:     { fr:"Découvrir",      es:"Descubrir",     pt:"Descobrir",     it:"Scoprire"      },
  nav_categories:    { fr:"Catégories",     es:"Categorías",    pt:"Categorias",    it:"Categorie"     },
  nav_castings:      { fr:"Castings",       es:"Castings",      pt:"Castings",      it:"Casting"       },
  nav_recruteurs:    { fr:"Recruteurs",     es:"Reclutadores",  pt:"Recrutadores",  it:"Reclutatori"   },
  nav_tarifs:        { fr:"Tarifs",         es:"Precios",       pt:"Preços",        it:"Prezzi"        },
  nav_contact:       { fr:"Contact",        es:"Contacto",      pt:"Contato",       it:"Contatto"      },
  nav_connexion:     { fr:"Connexion",      es:"Iniciar sesión",pt:"Entrar",        it:"Accedi"        },
  nav_rejoindre:     { fr:"Rejoindre",      es:"Unirse",        pt:"Juntar-se",     it:"Unisciti"      },

  // HERO PAGE D'ACCUEIL
  hero_line1:        { fr:"Entrez en scène.",      es:"Sube al escenario.",   pt:"Entre em cena.",      it:"Sali sul palco."       },
  hero_line2:        { fr:"Faites-vous",           es:"Hazte",                pt:"Faça-se",              it:"Fatti"                 },
  hero_line3:        { fr:"remarquer.",             es:"notar.",               pt:"notar.",               it:"notare."               },
  hero_desc:         { 
    fr:"ShowOne rassemble chanteurs, danseurs, sportifs, mannequins, animateurs et humoristes. Une vitrine éditoriale pour révéler les artistes de demain aux recruteurs d'aujourd'hui.",
    es:"ShowOne reúne cantantes, bailarines, deportistas, modelos, presentadores y humoristas. Un escaparate editorial para revelar a los artistas del mañana a los reclutadores de hoy.",
    pt:"ShowOne reúne cantores, dançarinos, atletas, modelos, apresentadores e humoristas. Uma vitrine editorial para revelar os artistas de amanhã aos recrutadores de hoje.",
    it:"ShowOne riunisce cantanti, ballerini, sportivi, modelle, presentatori e comici. Una vetrina editoriale per rivelare gli artisti di domani ai reclutatori di oggi."
  },
  hero_search_placeholder: {
    fr:"Rechercher un talent, une catégorie…",
    es:"Buscar un talento, una categoría…",
    pt:"Pesquisar um talento, uma categoria…",
    it:"Cerca un talento, una categoria…"
  },
  hero_search_btn:   { fr:"Chercher",       es:"Buscar",        pt:"Buscar",        it:"Cerca"         },

  // BANNIÈRE CASTINGS
  casting_banner_label: { fr:"Castings disponibles", es:"Castings disponibles", pt:"Castings disponíveis", it:"Casting disponibili" },
  casting_banner_desc:  { fr:"Des recruteurs cherchent des talents comme vous", es:"Los reclutadores buscan talentos como tú", pt:"Recrutadores buscam talentos como você", it:"I reclutatori cercano talenti come te" },
  casting_banner_btn:   { fr:"Postuler maintenant →", es:"Postularse ahora →", pt:"Candidatar-se agora →", it:"Candidati ora →" },

  // SHOWCASE
  showcase_label:    { fr:"SHOWCASE",            es:"SHOWCASE",          pt:"SHOWCASE",          it:"SHOWCASE"          },
  showcase_title:    { fr:"Tendances du moment", es:"Tendencias del momento", pt:"Tendências do momento", it:"Tendenze del momento" },
  showcase_link:     { fr:"Voir tous les talents →", es:"Ver todos los talentos →", pt:"Ver todos os talentos →", it:"Vedi tutti i talenti →" },
  contacter:         { fr:"Contacter",           es:"Contactar",         pt:"Contatar",          it:"Contatta"          },

  // SECTION RECRUTEUR
  recruiter_label:   { fr:"RECRUTEURS",          es:"RECLUTADORES",      pt:"RECRUTADORES",      it:"RECLUTATORI"       },
  recruiter_title:   { fr:"Vous êtes recruteur ?", es:"¿Eres reclutador?", pt:"Você é recrutador?", it:"Sei un reclutatore?" },
  recruiter_btn:     { fr:"Accès recruteur →",   es:"Acceso reclutador →", pt:"Acesso recrutador →", it:"Accesso reclutatore →" },

  // PAGE REJOINDRE
  rejoindre_title:   { fr:"Qui êtes-vous ?",     es:"¿Quién eres?",      pt:"Quem você é?",      it:"Chi sei?"          },
  rejoindre_sub:     { fr:"Choisissez votre profil pour créer votre compte ShowOne.", es:"Elige tu perfil para crear tu cuenta ShowOne.", pt:"Escolha seu perfil para criar sua conta ShowOne.", it:"Scegli il tuo profilo per creare il tuo account ShowOne." },
  talent_title:      { fr:"Je suis un Talent",   es:"Soy un Talento",    pt:"Sou um Talento",    it:"Sono un Talento"   },
  talent_desc:       { fr:"Chanteur, danseur, acteur, mannequin, sportif, créateur…", es:"Cantante, bailarín, actor, modelo, deportista, creador…", pt:"Cantor, dançarino, ator, modelo, atleta, criador…", it:"Cantante, ballerino, attore, modello, sportivo, creatore…" },
  talent_f1:         { fr:"Créez votre profil vidéo", es:"Crea tu perfil de video", pt:"Crie seu perfil de vídeo", it:"Crea il tuo profilo video" },
  talent_f2:         { fr:"Soyez découvert par des recruteurs", es:"Sé descubierto por reclutadores", pt:"Seja descoberto por recrutadores", it:"Fatti scoprire dai reclutatori" },
  talent_f3:         { fr:"Postulez aux castings", es:"Postúlate a castings", pt:"Candidate-se a castings", it:"Candidati ai casting" },
  talent_f4:         { fr:"Inscription 100% gratuite", es:"Registro 100% gratuito", pt:"Cadastro 100% gratuito", it:"Iscrizione 100% gratuita" },
  recruteur_title:   { fr:"Je suis Recruteur",   es:"Soy Reclutador",    pt:"Sou Recrutador",    it:"Sono Reclutatore"  },
  recruteur_desc:    { fr:"Agence, directeur de casting, marque, producteur…", es:"Agencia, director de casting, marca, productor…", pt:"Agência, diretor de casting, marca, produtor…", it:"Agenzia, direttore di casting, marca, produttore…" },
  recruteur_f1:      { fr:"Accédez à des centaines de talents", es:"Accede a cientos de talentos", pt:"Acesse centenas de talentos", it:"Accedi a centinaia di talenti" },
  recruteur_f2:      { fr:"Contactez directement les profils", es:"Contacta directamente los perfiles", pt:"Contate diretamente os perfis", it:"Contatta direttamente i profili" },
  recruteur_f3:      { fr:"Publiez vos offres de casting", es:"Publica tus ofertas de casting", pt:"Publique suas ofertas de casting", it:"Pubblica le tue offerte di casting" },
  recruteur_f4:      { fr:"Recherche avancée par catégorie", es:"Búsqueda avanzada por categoría", pt:"Pesquisa avançada por categoria", it:"Ricerca avanzata per categoria" },
  deja_compte:       { fr:"Déjà un compte ?",    es:"¿Ya tienes cuenta?", pt:"Já tem conta?",     it:"Hai già un account?" },
  se_connecter_lnk:  { fr:"Se connecter →",      es:"Iniciar sesión →",  pt:"Entrar →",          it:"Accedi →"          },
  moins_18:          { fr:"Moins de 18 ans ?",   es:"¿Menos de 18 años?", pt:"Menos de 18 anos?", it:"Meno di 18 anni?" },
  inscription_mineur:{ fr:"Inscription mineur →", es:"Registro menor →", pt:"Cadastro menor →",  it:"Iscrizione minore →" },

  // PAGE CONNEXION
  connexion_title:   { fr:"Connexion",           es:"Iniciar sesión",    pt:"Entrar",            it:"Accedi"            },
  connexion_sub:     { fr:"Accédez à votre espace ShowOne.", es:"Accede a tu espacio ShowOne.", pt:"Acesse seu espaço ShowOne.", it:"Accedi al tuo spazio ShowOne." },
  je_talent:         { fr:"🌟 Je suis un talent", es:"🌟 Soy un talento", pt:"🌟 Sou um talento", it:"🌟 Sono un talento" },
  je_recruteur:      { fr:"🔍 Je suis recruteur", es:"🔍 Soy reclutador", pt:"🔍 Sou recrutador", it:"🔍 Sono reclutatore" },
  email_label:       { fr:"Adresse e-mail",      es:"Correo electrónico", pt:"Endereço de e-mail", it:"Indirizzo e-mail" },
  password_label:    { fr:"Mot de passe",        es:"Contraseña",        pt:"Senha",              it:"Password"         },
  se_souvenir:       { fr:"Se souvenir de moi",  es:"Recordarme",        pt:"Lembrar de mim",    it:"Ricordami"         },
  mdp_oublie:        { fr:"Mot de passe oublié ?", es:"¿Olvidaste tu contraseña?", pt:"Esqueceu sua senha?", it:"Password dimenticata?" },
  btn_connexion:     { fr:"Se connecter",        es:"Iniciar sesión",    pt:"Entrar",            it:"Accedi"            },
  ou_continuer:      { fr:"ou continuer avec",   es:"o continuar con",   pt:"ou continuar com",  it:"o continua con"    },
  continuer_google:  { fr:"Continuer avec Google", es:"Continuar con Google", pt:"Continuar com Google", it:"Continua con Google" },
  pas_compte:        { fr:"Pas encore de compte ?", es:"¿No tienes cuenta?", pt:"Ainda não tem conta?", it:"Non hai ancora un account?" },
  sinscrire_gratuit: { fr:"S'inscrire gratuitement", es:"Registrarse gratis", pt:"Cadastrar-se grátis", it:"Iscriviti gratis" },

  // PAGE CATÉGORIES
  categories_title:  { fr:"Explorez les catégories", es:"Explora las categorías", pt:"Explore as categorias", it:"Esplora le categorie" },
  categories_sub:    { fr:"Découvrez les talents ShowOne par discipline", es:"Descubre los talentos ShowOne por disciplina", pt:"Descubra os talentos ShowOne por disciplina", it:"Scopri i talenti ShowOne per disciplina" },
  voir_talents:      { fr:"Voir les talents →",  es:"Ver talentos →",    pt:"Ver talentos →",    it:"Vedi talenti →"    },

  // PAGE CASTINGS
  castings_title:    { fr:"Castings disponibles", es:"Castings disponibles", pt:"Castings disponíveis", it:"Casting disponibili" },
  castings_sub:      { fr:"Des recruteurs professionnels cherchent des talents comme vous. Postulez directement depuis ShowOne !", es:"Reclutadores profesionales buscan talentos como tú. ¡Postúlate directamente desde ShowOne!", pt:"Recrutadores profissionais buscam talentos como você. Candidate-se diretamente pelo ShowOne!", it:"Reclutatori professionali cercano talenti come te. Candidati direttamente da ShowOne!" },
  castings_search:   { fr:"Rechercher un casting, une catégorie, une ville…", es:"Buscar un casting, categoría, ciudad…", pt:"Pesquisar casting, categoria, cidade…", it:"Cerca casting, categoria, città…" },
  castings_btn:      { fr:"Chercher",            es:"Buscar",            pt:"Buscar",            it:"Cerca"             },
  postuler:          { fr:"Postuler →",          es:"Postularse →",      pt:"Candidatar-se →",   it:"Candidati →"       },

  // COMMENT CA MARCHE
  ccm_title:         { fr:"Comment ça marche",  es:"¿Cómo funciona?",   pt:"Como funciona?",    it:"Come funziona?"    },
  ccm_sub:           { fr:"ShowOne en 3 étapes simples", es:"ShowOne en 3 pasos simples", pt:"ShowOne em 3 passos simples", it:"ShowOne in 3 semplici passi" },

  // CONTACT
  contact_title:     { fr:"Nous contacter",     es:"Contáctenos",       pt:"Entre em contato",  it:"Contattaci"        },
  contact_sub:       { fr:"Une question ? Nous répondons sous 24h.", es:"¿Una pregunta? Respondemos en 24h.", pt:"Uma pergunta? Respondemos em 24h.", it:"Una domanda? Rispondiamo entro 24h." },
  contact_btn:       { fr:"Envoyer",            es:"Enviar",            pt:"Enviar",             it:"Invia"             },

  // GÉNÉRAL
  gratuit_tag:       { fr:"Gratuit",            es:"Gratis",            pt:"Grátis",             it:"Gratuito"          },
  pro_tag:           { fr:"Pro",                es:"Pro",               pt:"Pro",                it:"Pro"               },
};

// ── MOTEUR DE TRADUCTION ─────────────────────────────────

function detectLanguage() {
  const saved = localStorage.getItem('showone_lang');
  if (saved && ['fr','es','pt','it'].includes(saved)) return saved;
  const browser = (navigator.language || 'fr').substring(0,2).toLowerCase();
  return ['es','pt','it'].includes(browser) ? browser : 'fr';
}

let currentLang = detectLanguage();

function t(key) {
  const entry = SHOWONE_TRANSLATIONS[key];
  if (!entry) return '';
  return entry[currentLang] || entry['fr'] || '';
}

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('showone_lang', lang);

  // Traduire tous les éléments marqués data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const type = el.getAttribute('data-i18n-type') || 'text';
    const val = t(key);
    if (!val) return;
    if (type === 'placeholder') el.placeholder = val;
    else if (type === 'html') el.innerHTML = val;
    else el.textContent = val;
  });

  // Mettre à jour les boutons actifs
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

// Appliquer au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
});
