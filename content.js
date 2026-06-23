(function() {
  if (document.getElementById('tiktok-comment-searcher-root')) return;

  // =================================================================
  // i18n — 12 Language Definitions
  // =================================================================
  const LANGS = {
    en: {
      name: 'English', flag: '🇬🇧', dir: 'ltr',
      title: 'TikTok Comment Search',
      searchPlaceholder: 'Search comments...',
      sortLabel: 'Sort:',
      sortLikes: 'Most Liked',
      sortNewest: 'Newest',
      sortOldest: 'Oldest',
      filterQuestions: 'Questions (?)',
      filterVerified: 'Verified ✔',
      loaded: 'Loaded:',
      autoLoad: 'Auto Load',
      stop: 'Stop',
      wordAnalysis: 'Word Analysis (Top Words)',
      noCommentsTitle: 'No comments loaded yet.',
      option1: 'Option 1: Click "Auto Load" — loads all comments automatically.',
      option2: 'Option 2: Scroll down in TikTok\'s comment section — comments are added instantly.',
      noResults: 'No comments found matching your criteria.',
      notFoundInPage: 'Comment not visible on page, please scroll the list!',
      scrollHint: 'Click to jump to comment',
      analysisInsufficient: 'Not enough comments for analysis (min. 3 required).',
      analysisNoWords: 'No meaningful words found.',
      settings: 'Settings',
      language: 'Language',
      autoScrollSpeed: 'Auto Load Speed',
      fast: 'Fast',
      balanced: 'Balanced',
      safe: 'Safe',
      settingsNote: 'Settings are saved automatically.',
      mainCommentsLoaded: 'All main comments loaded (replies excluded)',
      locatingComment: 'Locating comment in page...'
    },
    tr: {
      name: 'Türkçe', flag: '🇹🇷', dir: 'ltr',
      title: 'TikTok Yorum Arama',
      searchPlaceholder: 'Yorumlarda ara...',
      sortLabel: 'Sırala:',
      sortLikes: 'En Çok Beğenilen',
      sortNewest: 'En Yeni',
      sortOldest: 'En Eski',
      filterQuestions: 'Sorular (?)',
      filterVerified: 'Onaylı ✔',
      loaded: 'Yüklenen:',
      autoLoad: 'Otomatik Yükle',
      stop: 'Durdur',
      wordAnalysis: 'Kelime Analizi (En Çok Geçenler)',
      noCommentsTitle: 'Henüz yorum yüklenmedi.',
      option1: 'Seçenek 1: "Otomatik Yükle" butonuna bas — tüm yorumlar otomatik yüklenir.',
      option2: 'Seçenek 2: TikTok\'ta yorumlar bölümünde aşağı kaydır — yüklenen yorumlar buraya anlık eklenir.',
      noResults: 'Kriterlere uyan bir yorum bulunamadı.',
      notFoundInPage: 'Yorum sayfada görünür değil, lütfen listeyi kaydırın!',
      scrollHint: 'Yoruma gitmek için tıklayın',
      analysisInsufficient: 'Analiz için yeterli yorum yüklenmedi (en az 3 gerekli).',
      analysisNoWords: 'Anlamlı kelimeler bulunamadı.',
      settings: 'Ayarlar',
      language: 'Dil',
      autoScrollSpeed: 'Otomatik Yükleme Hızı',
      fast: 'Hızlı',
      balanced: 'Dengeli',
      safe: 'Güvenli',
      settingsNote: 'Ayarlar otomatik kaydedilir.',
      mainCommentsLoaded: 'Tüm ana yorumlar yüklendi (cevaplar hariç)',
      locatingComment: 'Yorum sayfada aranıyor...'
    },
    es: {
      name: 'Español', flag: '🇪🇸', dir: 'ltr',
      title: 'Búsqueda de Comentarios TikTok',
      searchPlaceholder: 'Buscar comentarios...',
      sortLabel: 'Ordenar:',
      sortLikes: 'Más Gustados',
      sortNewest: 'Más Nuevos',
      sortOldest: 'Más Antiguos',
      filterQuestions: 'Preguntas (?)',
      filterVerified: 'Verificado ✔',
      loaded: 'Cargados:',
      autoLoad: 'Carga Automática',
      stop: 'Detener',
      wordAnalysis: 'Análisis de Palabras',
      noCommentsTitle: 'Aún no hay comentarios cargados.',
      option1: 'Opción 1: Haz clic en "Carga Automática" — carga todos los comentarios.',
      option2: 'Opción 2: Desplázate hacia abajo en los comentarios de TikTok.',
      noResults: 'No se encontraron comentarios que coincidan.',
      notFoundInPage: '¡Comentario no visible, por favor desplázate!',
      scrollHint: 'Clic para ir al comentario',
      analysisInsufficient: 'No hay suficientes comentarios para el análisis (mín. 3).',
      analysisNoWords: 'No se encontraron palabras significativas.',
      settings: 'Configuración',
      language: 'Idioma',
      autoScrollSpeed: 'Velocidad de Carga',
      fast: 'Rápido',
      balanced: 'Equilibrado',
      safe: 'Seguro',
      settingsNote: 'La configuración se guarda automáticamente.',
      mainCommentsLoaded: 'Comentarios principales cargados (respuestas excluidas)',
      locatingComment: 'Buscando comentario...'
    },
    de: {
      name: 'Deutsch', flag: '🇩🇪', dir: 'ltr',
      title: 'TikTok Kommentar-Suche',
      searchPlaceholder: 'Kommentare durchsuchen...',
      sortLabel: 'Sortieren:',
      sortLikes: 'Meiste Likes',
      sortNewest: 'Neueste',
      sortOldest: 'Älteste',
      filterQuestions: 'Fragen (?)',
      filterVerified: 'Verifiziert ✔',
      loaded: 'Geladen:',
      autoLoad: 'Auto-Laden',
      stop: 'Stoppen',
      wordAnalysis: 'Wortanalyse (Häufigste)',
      noCommentsTitle: 'Noch keine Kommentare geladen.',
      option1: 'Option 1: Klicke auf "Auto-Laden" — lädt alle Kommentare automatisch.',
      option2: 'Option 2: Scrolle im TikTok-Kommentarbereich nach unten.',
      noResults: 'Keine passenden Kommentare gefunden.',
      notFoundInPage: 'Kommentar nicht sichtbar, bitte Liste scrollen!',
      scrollHint: 'Klicken, um zum Kommentar zu springen',
      analysisInsufficient: 'Nicht genug Kommentare für die Analyse (mind. 3).',
      analysisNoWords: 'Keine bedeutsamen Wörter gefunden.',
      settings: 'Einstellungen',
      language: 'Sprache',
      autoScrollSpeed: 'Ladegeschwindigkeit',
      fast: 'Schnell',
      balanced: 'Ausgewogen',
      safe: 'Sicher',
      settingsNote: 'Einstellungen werden automatisch gespeichert.',
      mainCommentsLoaded: 'Alle Hauptkommentare geladen (ohne Antworten)',
      locatingComment: 'Suche Kommentar...'
    },
    fr: {
      name: 'Français', flag: '🇫🇷', dir: 'ltr',
      title: 'Recherche de Commentaires TikTok',
      searchPlaceholder: 'Rechercher des commentaires...',
      sortLabel: 'Trier:',
      sortLikes: 'Plus Aimés',
      sortNewest: 'Plus Récents',
      sortOldest: 'Plus Anciens',
      filterQuestions: 'Questions (?)',
      filterVerified: 'Vérifié ✔',
      loaded: 'Chargés:',
      autoLoad: 'Chargement Auto',
      stop: 'Arrêter',
      wordAnalysis: 'Analyse des Mots',
      noCommentsTitle: 'Aucun commentaire chargé pour l\'instant.',
      option1: 'Option 1: Cliquez sur "Chargement Auto" — charge tous les commentaires.',
      option2: 'Option 2: Faites défiler vers le bas dans la section des commentaires TikTok.',
      noResults: 'Aucun commentaire correspondant trouvé.',
      notFoundInPage: 'Commentaire non visible, veuillez faire défiler!',
      scrollHint: 'Cliquez pour accéder au commentaire',
      analysisInsufficient: 'Pas assez de commentaires pour l\'analyse (min. 3).',
      analysisNoWords: 'Aucun mot significatif trouvé.',
      settings: 'Paramètres',
      language: 'Langue',
      autoScrollSpeed: 'Vitesse de Chargement',
      fast: 'Rapide',
      balanced: 'Équilibré',
      safe: 'Sûr',
      settingsNote: 'Les paramètres sont enregistrés automatiquement.',
      mainCommentsLoaded: 'Commentaires principaux chargés (hors réponses)',
      locatingComment: 'Recherche du commentaire...'
    },
    pt: {
      name: 'Português', flag: '🇧🇷', dir: 'ltr',
      title: 'Pesquisa de Comentários TikTok',
      searchPlaceholder: 'Pesquisar comentários...',
      sortLabel: 'Ordenar:',
      sortLikes: 'Mais Curtidos',
      sortNewest: 'Mais Recentes',
      sortOldest: 'Mais Antigos',
      filterQuestions: 'Perguntas (?)',
      filterVerified: 'Verificado ✔',
      loaded: 'Carregados:',
      autoLoad: 'Carga Automática',
      stop: 'Parar',
      wordAnalysis: 'Análise de Palavras',
      noCommentsTitle: 'Nenhum comentário carregado ainda.',
      option1: 'Opção 1: Clique em "Carga Automática" — carrega todos os comentários.',
      option2: 'Opção 2: Role para baixo na seção de comentários do TikTok.',
      noResults: 'Nenuhm comentário correspondente encontrado.',
      notFoundInPage: 'Comentário não visível, role a lista!',
      scrollHint: 'Clique para ir ao comentário',
      analysisInsufficient: 'Comentários insuficientes para análise (mín. 3).',
      analysisNoWords: 'Nenhuma palavra significativa encontrada.',
      settings: 'Configurações',
      language: 'Idioma',
      autoScrollSpeed: 'Velocidade de Carregamento',
      fast: 'Rápido',
      balanced: 'Equilibrado',
      safe: 'Seguro',
      settingsNote: 'As configurações são salvas automaticamente.',
      mainCommentsLoaded: 'Comentários principais cargados (respostas excluídas)',
      locatingComment: 'Localizando comentário...'
    },
    it: {
      name: 'Italiano', flag: '🇮🇹', dir: 'ltr',
      title: 'Ricerca Commenti TikTok',
      searchPlaceholder: 'Cerca commenti...',
      sortLabel: 'Ordina:',
      sortLikes: 'Più Apprezzati',
      sortNewest: 'Più Recenti',
      sortOldest: 'Più Vecchi',
      filterQuestions: 'Domande (?)',
      filterVerified: 'Verificato ✔',
      loaded: 'Caricati:',
      autoLoad: 'Caricamento Auto',
      stop: 'Ferma',
      wordAnalysis: 'Analisi Parole',
      noCommentsTitle: 'Nessun commento caricato ancora.',
      option1: 'Opzione 1: Clicca su "Caricamento Auto" — carica tutti i commenti.',
      option2: 'Opzione 2: Scorri verso il basso nella sezione commenti di TikTok.',
      noResults: 'Nessun commento corrispondente trovato.',
      notFoundInPage: 'Commento non visibile, scorri la lista!',
      scrollHint: 'Clicca per andare al commento',
      analysisInsufficient: 'Commenti insufficienti per l\'analisi (min. 3).',
      analysisNoWords: 'Nessuna parola significativa trovata.',
      settings: 'Impostazioni',
      language: 'Lingua',
      autoScrollSpeed: 'Velocità di Caricamento',
      fast: 'Veloce',
      balanced: 'Bilanciato',
      safe: 'Sicuro',
      settingsNote: 'Le impostazioni vengono salvate automaticamente.',
      mainCommentsLoaded: 'Commenti principali caricati (risposte escluse)',
      locatingComment: 'Ricerca commento...'
    },
    ar: {
      name: 'العربية', flag: '🇸🇦', dir: 'rtl',
      title: 'البحث في تعليقات TikTok',
      searchPlaceholder: 'ابحث في التعليقات...',
      sortLabel: 'ترتيب:',
      sortLikes: 'الأكثر إعجاباً',
      sortNewest: 'الأحدث',
      sortOldest: 'الأقدم',
      filterQuestions: 'أسئلة (?)',
      filterVerified: 'موثق ✔',
      loaded: 'محمّل:',
      autoLoad: 'تحميل تلقائي',
      stop: 'إيقاف',
      wordAnalysis: 'تحليل الكلمات',
      noCommentsTitle: 'لم يتم تحميل أي تعليقات بعد.',
      option1: 'الخيار 1: انقر على "تحميل تلقائي" — يحمل جميع التعليقات.',
      option2: 'الخيار 2: قم بالتمرير لأسفل في قسم التعليقات على TikTok.',
      noResults: 'لم يتم العثور على تعليقات مطابقة.',
      notFoundInPage: 'التعليق غير مرئي، يرجى التمرير!',
      scrollHint: 'انقر للانتقال إلى التعليق',
      analysisInsufficient: 'تعليقات غير كافية للتحليل (الحد الأدنى 3).',
      analysisNoWords: 'لم يتم العثور على كلمات ذات معنى.',
      settings: 'الإعدادات',
      language: 'اللغة',
      autoScrollSpeed: 'سرعة التحميل',
      fast: 'سريع',
      balanced: 'متوازن',
      safe: 'آمن',
      settingsNote: 'يتم حفظ الإعدادات تلقائياً.',
      mainCommentsLoaded: 'تم تحميل التعليقات الرئيسية (باستثناء الردود)',
      locatingComment: 'تحديد موقع التعليق...'
    },
    ja: {
      name: '日本語', flag: '🇯🇵', dir: 'ltr',
      title: 'TikTokコメント検索',
      searchPlaceholder: 'コメントを検索...',
      sortLabel: '並び替え:',
      sortLikes: 'いいね順',
      sortNewest: '新しい順',
      sortOldest: '古い順',
      filterQuestions: '質問 (?)',
      filterVerified: '認証済み ✔',
      loaded: '読み込み済み:',
      autoLoad: '自動読み込み',
      stop: '停止',
      wordAnalysis: '単語分析（頻出単語）',
      noCommentsTitle: 'まだコメントが読み込まれていません。',
      option1: 'オプション1: 「自動読み込み」をクリック — すべてのコメントを自動読み込み。',
      option2: 'オプション2: TikTokのコメント欄を下にスクロール。',
      noResults: '一致するコメントが見つかりません。',
      notFoundInPage: 'コメントが表示されていません。スクロールしてください!',
      scrollHint: 'クリックしてコメントへ移動',
      analysisInsufficient: '分析に十分なコメントがありません（最低3件）。',
      analysisNoWords: '意味のある単語が見つかりません。',
      settings: '設定',
      language: '言語',
      autoScrollSpeed: '読み込み速度',
      fast: '速い',
      balanced: 'バランス',
      safe: '安全',
      settingsNote: '設定は自动的に保存されます。',
      mainCommentsLoaded: 'すべてのメインコメントが読み込まれました（返信を除く）',
      locatingComment: 'コメントを探しています...'
    },
    ko: {
      name: '한국어', flag: '🇰🇷', dir: 'ltr',
      title: 'TikTok 댓글 검색',
      searchPlaceholder: '댓글 검색...',
      sortLabel: '정렬:',
      sortLikes: '좋아요 순',
      sortNewest: '최신순',
      sortOldest: '오래된 순',
      filterQuestions: '질문 (?)',
      filterVerified: '인증됨 ✔',
      loaded: '로드됨:',
      autoLoad: '자동 로드',
      stop: '정지',
      wordAnalysis: '단어 분석 (최다 사용)',
      noCommentsTitle: '아직 로드된 댓글이 없습니다.',
      option1: '옵션 1: "자동 로드" 클릭 — 모든 댓글을 자동으로 로드합니다.',
      option2: '옵션 2: TikTok 댓글 섹션에서 아래로 스크롤하세요.',
      noResults: '기준에 맞는 댓글을 찾을 수 없습니다.',
      notFoundInPage: '댓글이 페이지에 표시되지 않습니다. 스크롤하세요!',
      scrollHint: '클릭하여 댓글로 이동',
      analysisInsufficient: '분석에 충분한 댓글이 없습니다 (최소 3개).',
      analysisNoWords: '의미 있는 단어를 찾을 수 없습니다.',
      settings: '설정',
      language: '언어',
      autoScrollSpeed: '로드 속도',
      fast: '빠름',
      balanced: '균형',
      safe: '안전',
      settingsNote: '설정이 자동으로 저장됩니다.',
      mainCommentsLoaded: '모든 메인 댓글 로드 완료 (답글 제외)',
      locatingComment: '댓글 위치 찾는 중...'
    },
    ru: {
      name: 'Русский', flag: '🇷🇺', dir: 'ltr',
      title: 'Поиск по комментариям TikTok',
      searchPlaceholder: 'Поиск комментариев...',
      sortLabel: 'Сортировка:',
      sortLikes: 'Популярные',
      sortNewest: 'Новые',
      sortOldest: 'Старые',
      filterQuestions: 'Вопросы (?)',
      filterVerified: 'Верифицировано ✔',
      loaded: 'Загружено:',
      autoLoad: 'Авто-загрузка',
      stop: 'Стоп',
      wordAnalysis: 'Анализ слов',
      noCommentsTitle: 'Комментарии ещё не загружены.',
      option1: 'Вариант 1: Нажмите "Авто-загрузка" — загружает все комментарии.',
      option2: 'Вариант 2: Прокрутите раздел комментариев TikTok вниз.',
      noResults: 'Подходящих комментариев не найдено.',
      notFoundInPage: 'Комментарий не виден, прокрутите список!',
      scrollHint: 'Нажмите, чтобы перейти к комментарию',
      analysisInsufficient: 'Недостаточно комментариев для анализа (мин. 3).',
      analysisNoWords: 'Значимых слов не найдено.',
      settings: 'Настройки',
      language: 'Язык',
      autoScrollSpeed: 'Скорость загрузки',
      fast: 'Быстро',
      balanced: 'Баланс',
      safe: 'Безопасно',
      settingsNote: 'Настройки сохраняются автоматически.',
      mainCommentsLoaded: 'Все главные комментарии загружены (без ответов)',
      locatingComment: 'Поиск комментария...'
    },
    zh: {
      name: '中文', flag: '🇨🇳', dir: 'ltr',
      title: 'TikTok评论搜索',
      searchPlaceholder: '搜索评论...',
      sortLabel: '排序:',
      sortLikes: '最多点赞',
      sortNewest: '最新',
      sortOldest: '最旧',
      filterQuestions: '提问 (?)',
      filterVerified: '已认证 ✔',
      loaded: '已加载:',
      autoLoad: '自动加载',
      stop: '停止',
      wordAnalysis: '词频分析',
      noCommentsTitle: '尚未加载任何评论。',
      option1: '选项1: 点击"自动加载"— 自动加载所有评论。',
      option2: '选项2: 在TikTok评论区向下滚动。',
      noResults: '未找到符合条件的评论。',
      notFoundInPage: '评论不可见，请滚动列表！',
      scrollHint: '点击跳转到评论',
      analysisInsufficient: '评论不足以进行分析（最少3条）。',
      analysisNoWords: '未找到有意义的词汇。',
      settings: '设置',
      language: '语言',
      autoScrollSpeed: '加载速度',
      fast: '快速',
      balanced: '平衡',
      safe: '安全',
      settingsNote: '设置会自动保存。',
      mainCommentsLoaded: '所有主评论已加载（不含回复）',
      locatingComment: '正在定位评论...'
    }
  };

  // =================================================================
  // Settings helpers — saved to localStorage
  // =================================================================
  function getSetting(key, fallback) {
    try { const v = localStorage.getItem('tcs_' + key); return v !== null ? v : fallback; }
    catch (e) { return fallback; }
  }
  function setSetting(key, value) {
    try { localStorage.setItem('tcs_' + key, value); } catch (e) {}
  }

  let currentLangCode = getSetting('lang', 'en');
  if (!LANGS[currentLangCode]) currentLangCode = 'en';
  let currentSpeedKey = getSetting('speed', 'balanced'); // fast=500ms, balanced=800ms, safe=1500ms

  const SPEEDS = { fast: 500, balanced: 800, safe: 1500 };

  function t(key) { return (LANGS[currentLangCode] || LANGS['en'])[key] || key; }
  function dir() { return (LANGS[currentLangCode] || LANGS['en']).dir; }

  // =================================================================
  // State Management
  // =================================================================
  let commentsMap = new Map();
  let currentVideoId = '';
  let lastUrl = window.location.href;
  let isOpen = false;
  let totalCommentsOnServer = 0;
  let currentSort = 'likes';
  let filterQuestions = false;
  let filterVerified = false;
  let isAnalysisOpen = false;
  let isSettingsOpen = false;
  let isAutoScrolling = false;
  let autoScrollTimer = null;
  let lastCommentsCount = 0;
  let sameCountTicks = 0;

  // =================================================================
  // Build Shadow DOM
  // =================================================================
  const host = document.createElement('div');
  host.id = 'tiktok-comment-searcher-root';
  document.body.appendChild(host);
  const shadow = host.attachShadow({ mode: 'open' });

  const style = document.createElement('style');
  style.textContent = `
    :host { all: initial; }
    .ec { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color:#fff; box-sizing:border-box; }
    .ec * { box-sizing:border-box; }

    .toggle-btn {
      position:fixed; right:20px; top:50%; transform:translateY(-50%);
      width:50px; height:50px; border-radius:50%;
      background:#121212; border:2px solid transparent;
      background-image:linear-gradient(#121212,#121212),linear-gradient(135deg,#00f2fe,#fe0979);
      background-origin:border-box; background-clip:padding-box,border-box;
      box-shadow:0 4px 15px rgba(0,0,0,.5); cursor:pointer;
      display:flex; align-items:center; justify-content:center;
      z-index:999999; transition:all .3s cubic-bezier(.175,.885,.32,1.275);
    }
    .toggle-btn:hover { transform:translateY(-50%) scale(1.1); box-shadow:0 0 20px rgba(0,242,254,.6),0 0 20px rgba(254,9,121,.6); }
    .toggle-btn svg { width:22px; height:22px; fill:#fff; transition:transform .3s ease; }
    .toggle-btn.active svg { transform:rotate(45deg); }

    .panel {
      position:fixed; right:85px; top:10%; height:80%; width:380px;
      background:rgba(18,18,18,.88); backdrop-filter:blur(20px);
      border:1px solid rgba(255,255,255,.1); border-radius:16px;
      box-shadow:0 10px 40px rgba(0,0,0,.6); z-index:999998;
      display:flex; flex-direction:column; overflow:hidden;
      transition:all .4s cubic-bezier(.16,1,.3,1);
      opacity:0; transform:translateX(50px) scale(.95); pointer-events:none;
    }
    .panel.visible { opacity:1; transform:translateX(0) scale(1); pointer-events:auto; }
    .panel.rtl { right:auto; left:85px; transform:translateX(-50px) scale(.95); }
    .panel.rtl.visible { transform:translateX(0) scale(1); }

    /* Header */
    .ph { padding:14px 18px; border-bottom:1px solid rgba(255,255,255,.08); display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,.2); gap:10px; }
    .ph-title { font-weight:700; font-size:15px; background:linear-gradient(90deg,#00f2fe,#fe0979); -webkit-background-clip:text; -webkit-text-fill-color:transparent; letter-spacing:.5px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; flex:1; }
    .icon-btn { background:none; border:none; color:#8a8b90; font-size:20px; cursor:pointer; padding:0 4px; line-height:1; transition:color .2s ease; }
    .icon-btn:hover { color:#fff; }
    .icon-btn.active { color:#00f2fe; }

    /* Body */
    .pb { padding:14px 18px; display:flex; flex-direction:column; flex:1; min-height:0; gap:10px; }

    /* Search */
    .sb-wrap { position:relative; }
    .sb-input { width:100%; padding:11px 38px 11px 14px; background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.12); border-radius:24px; color:#fff; font-size:13px; outline:none; transition:all .3s ease; }
    .sb-input:focus { background:rgba(255,255,255,.1); border-color:#00f2fe; box-shadow:0 0 10px rgba(0,242,254,.2); }
    .sb-clear { position:absolute; right:14px; top:50%; transform:translateY(-50%); font-size:17px; color:#8a8b90; cursor:pointer; display:none; }
    .sb-clear:hover { color:#fff; }

    /* Controls */
    .ctrl { background:rgba(255,255,255,.03); border-radius:12px; padding:10px; display:flex; flex-direction:column; gap:8px; border:1px solid rgba(255,255,255,.05); }
    .ctrl-row { display:flex; justify-content:space-between; align-items:center; gap:8px; }
    .sort-grp { display:flex; align-items:center; gap:5px; font-size:11px; color:#8a8b90; }
    .sort-sel { background:rgba(0,0,0,.3); border:1px solid rgba(255,255,255,.1); border-radius:6px; color:#fff; font-size:11px; padding:3px 5px; outline:none; cursor:pointer; }
    .sort-sel option { background:#18191e; color:#fff; }
    .fbtns { display:flex; gap:5px; }
    .fbtn { background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.1); border-radius:6px; color:#8a8b90; font-size:10px; padding:4px 7px; cursor:pointer; transition:all .2s ease; font-weight:600; white-space:nowrap; }
    .fbtn:hover { background:rgba(255,255,255,.1); color:#fff; }
    .fbtn.active { background:rgba(0,242,254,.15); border-color:#00f2fe; color:#00f2fe; }
    .fbtn.va { background:rgba(32,150,243,.15); border-color:#2096f3; color:#2196f3; }

    /* Stats */
    .stats { display:flex; justify-content:space-between; align-items:center; font-size:11px; color:#8a8b90; padding:0 2px; }
    .sv { color:#00f2fe; font-weight:600; }
    .asbtn { background:linear-gradient(135deg,#00f2fe,#fe0979); border:none; border-radius:12px; color:#fff; font-size:10px; font-weight:700; padding:5px 10px; cursor:pointer; transition:all .2s ease; }
    .asbtn:hover { transform:scale(1.05); box-shadow:0 0 10px rgba(0,242,254,.4); }
    .asbtn.loading { background:#fe0979; animation:pulse 1.5s infinite; }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.6} }
    .stats-info { font-size:9px; color:rgba(0,242,254,.85); font-weight:500; margin-top:4px; display:none; animation:fadeIn .3s ease; line-height:1.3; }
    @keyframes fadeIn { from{opacity:0;transform:translateY(-2px)} to{opacity:1;transform:translateY(0)} }
    .sb-input.error { border-color:#fe0979!important; box-shadow:0 0 10px rgba(254,9,121,.3)!important; }
    .sb-input.locating { border-color:#00f2fe!important; box-shadow:0 0 10px rgba(0,242,254,.3)!important; }

    /* Settings Panel Overlay */
    .settings-overlay {
      position:absolute; inset:0; background:rgba(13,13,13,.97); z-index:10;
      display:flex; flex-direction:column;
      opacity:0; pointer-events:none;
      transition:opacity .3s ease;
      border-radius:16px;
    }
    .settings-overlay.visible { opacity:1; pointer-events:auto; }
    .settings-header { padding:16px 18px; border-bottom:1px solid rgba(255,255,255,.08); display:flex; justify-content:space-between; align-items:center; }
    .settings-title { font-weight:700; font-size:15px; background:linear-gradient(90deg,#00f2fe,#fe0979); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
    .settings-body { padding:18px; display:flex; flex-direction:column; gap:20px; overflow-y:auto; flex:1; }
    .settings-section-label { font-size:11px; font-weight:700; color:#8a8b90; text-transform:uppercase; letter-spacing:.8px; margin-bottom:8px; }
    .lang-grid { display:grid; grid-template-columns:1fr 1fr; gap:7px; }
    .lang-item { display:flex; align-items:center; gap:7px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.07); border-radius:10px; padding:8px 10px; cursor:pointer; transition:all .2s ease; font-size:12px; color:#e3e3e4; }
    .lang-item:hover { background:rgba(255,255,255,.08); border-color:rgba(0,242,254,.3); }
    .lang-item.active { background:rgba(0,242,254,.12); border-color:#00f2fe; color:#fff; font-weight:600; }
    .lang-flag { font-size:16px; }
    .speed-grid { display:flex; gap:8px; }
    .speed-item { flex:1; text-align:center; padding:10px 6px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.07); border-radius:10px; cursor:pointer; transition:all .2s ease; font-size:11px; color:#e3e3e4; }
    .speed-item:hover { background:rgba(255,255,255,.08); }
    .speed-item.active { background:rgba(0,242,254,.12); border-color:#00f2fe; color:#fff; font-weight:600; }
    .speed-emoji { font-size:18px; display:block; margin-bottom:4px; }
    .settings-note { font-size:10px; color:#8a8b90; text-align:center; padding-top:4px; }

    /* Analysis */
    .analysis { border:1px solid rgba(255,255,255,.05); border-radius:12px; background:rgba(255,255,255,.02); overflow:hidden; }
    .atbtn { width:100%; background:none; border:none; color:#8a8b90; font-size:11px; font-weight:700; padding:9px 12px; cursor:pointer; display:flex; justify-content:space-between; align-items:center; }
    .atbtn:hover { background:rgba(255,255,255,.03); color:#fff; }
    .atbtn svg { width:14px; height:14px; fill:currentColor; transition:transform .2s ease; }
    .atbtn.open svg { transform:rotate(180deg); }
    .acontent { padding:0 12px 12px; display:none; }
    .acontent.open { display:block; }
    .wcloud { display:flex; flex-wrap:wrap; gap:6px; margin-top:6px; }
    .wtag { background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.08); border-radius:12px; padding:4px 8px; font-size:11px; color:#e3e3e4; cursor:pointer; transition:all .2s ease; }
    .wtag:hover { background:rgba(0,242,254,.15); border-color:#00f2fe; color:#00f2fe; transform:translateY(-1px); }

    /* Results */
    .rlist { flex:1; overflow-y:auto; margin-right:-8px; padding-right:8px; min-height:0; }
    .rlist::-webkit-scrollbar { width:5px; }
    .rlist::-webkit-scrollbar-thumb { background:rgba(255,255,255,.15); border-radius:3px; }

    /* Comment Item */
    .ci { background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.05); border-radius:12px; padding:11px; margin-bottom:9px; display:flex; flex-direction:column; gap:7px; transition:all .2s ease; cursor:pointer; }
    .ci:hover { background:rgba(255,255,255,.06); border-color:rgba(0,242,254,.25); transform:translateY(-2px); }
    .ci-head { display:flex; align-items:center; gap:9px; }
    .ci-avatar { width:28px; height:28px; border-radius:50%; background:#25262b; object-fit:cover; flex-shrink:0; }
    .ci-uinfo { display:flex; flex-direction:column; overflow:hidden; flex:1; }
    .ci-nrow { display:flex; align-items:center; gap:3px; overflow:hidden; }
    .ci-name { font-size:12px; font-weight:600; color:#fff; white-space:nowrap; text-overflow:ellipsis; overflow:hidden; }
    .ci-badge { width:12px; height:12px; background:#2096f3; color:#fff; font-size:7px; border-radius:50%; font-weight:bold; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    .ci-handle { font-size:10px; color:#8a8b90; white-space:nowrap; text-overflow:ellipsis; overflow:hidden; }
    .ci-text { font-size:12px; line-height:1.55; color:#e3e3e4; word-break:break-word; }
    mark.hl { background:linear-gradient(120deg,rgba(0,242,254,.35),rgba(254,9,121,.35)); color:#fff; padding:1px 3px; border-radius:3px; font-weight:600; }
    .ci-foot { display:flex; justify-content:space-between; align-items:center; font-size:10px; color:#8a8b90; border-top:1px solid rgba(255,255,255,.04); padding-top:7px; margin-top:3px; }
    .metrics { display:flex; gap:10px; }
    .mi { display:flex; align-items:center; gap:3px; }
    .mi svg { width:11px; height:11px; fill:#8a8b90; }
    .mi.lk svg { fill:#fe0979; }
    .sh { font-size:9px; color:#00f2fe; opacity:0; height:0; overflow:hidden; transition:all .2s ease; text-align:center; }
    .ci:hover .sh { opacity:1; height:12px; margin-top:2px; }

    /* Empty State */
    .empty { text-align:center; color:#8a8b90; padding:36px 18px; font-size:12px; line-height:1.7; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; }
    .empty svg { width:44px; height:44px; fill:rgba(255,255,255,.1); }
  `;
  shadow.appendChild(ui);

  // =================================================================
  // Bind elements
  // =================================================================
  const toggleBtn   = shadow.querySelector('.toggle-btn');
  const panel       = shadow.querySelector('.panel');
  const settingsOv  = shadow.querySelector('.settings-overlay');
  const searchInput = shadow.querySelector('#search-input');
  const sbClear     = shadow.querySelector('#sb-clear');
  const sortSel     = shadow.querySelector('#sort-sel');
  const fqBtn       = shadow.querySelector('#fq');
  const fvBtn       = shadow.querySelector('#fv');
  const asBtn       = shadow.querySelector('#as-btn');
  const loadedC     = shadow.querySelector('#loaded-c');
  const totalC      = shadow.querySelector('#total-c');
  const statsInfo   = shadow.querySelector('#stats-info');
  const analysisBtn = shadow.querySelector('#analysis-btn');
  const acontent    = shadow.querySelector('#acontent');
  const wcloud      = shadow.querySelector('#wcloud');
  const rlist       = shadow.querySelector('#rlist');
  const settingsBtn = shadow.querySelector('#settings-btn');
  const closeBtn    = shadow.querySelector('#close-btn');
  const closeSets   = shadow.querySelector('#close-settings');
  const langGrid    = shadow.querySelector('#lang-grid');

  // =================================================================
  // Localise UI strings
  // =================================================================
  function applyLang() {
    const isRtl = dir() === 'rtl';
    panel.classList.toggle('rtl', isRtl);
    panel.dir = dir();
    settingsOv.dir = dir();

    shadow.querySelector('#panel-title').textContent      = t('title');
    shadow.querySelector('#settings-title').textContent   = t('settings');
    shadow.querySelector('#lang-label').textContent       = t('language');
    shadow.querySelector('#speed-label').textContent      = t('autoScrollSpeed');
    shadow.querySelector('#settings-note').textContent    = t('settingsNote');
    shadow.querySelector('#sort-label').textContent       = t('sortLabel');
    shadow.querySelector('#opt-likes').textContent        = t('sortLikes');
    shadow.querySelector('#opt-newest').textContent       = t('sortNewest');
    shadow.querySelector('#opt-oldest').textContent       = t('sortOldest');
    shadow.querySelector('#lbl-loaded').textContent       = t('loaded');
    shadow.querySelector('#analysis-label').textContent   = t('wordAnalysis');
    shadow.querySelector('#sp-fast').textContent          = t('fast');
    shadow.querySelector('#sp-balanced').textContent      = t('balanced');
    shadow.querySelector('#sp-safe').textContent          = t('safe');
    searchInput.placeholder = t('searchPlaceholder');
    fqBtn.textContent = t('filterQuestions');
    fvBtn.textContent = t('filterVerified');
    asBtn.textContent = isAutoScrolling ? t('stop') : t('autoLoad');

    // Build language grid
    langGrid.innerHTML = '';
    Object.entries(LANGS).forEach(([code, meta]) => {
      const el = document.createElement('div');
      el.className = 'lang-item' + (code === currentLangCode ? ' active' : '');
      el.innerHTML = `<span class="lang-flag">${meta.flag}</span><span>${meta.name}</span>`;
      el.addEventListener('click', () => {
        currentLangCode = code;
        setSetting('lang', code);
        langGrid.querySelectorAll('.lang-item').forEach(i => i.classList.remove('active'));
        el.classList.add('active');
        applyLang();
        renderResults();
      });
      langGrid.appendChild(el);
    });

    // Speed items
    shadow.querySelectorAll('.speed-item').forEach(el => {
      el.classList.toggle('active', el.dataset.speed === currentSpeedKey);
    });
  }

  // =================================================================
  // Event Listeners
  // =================================================================
  toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    toggleBtn.classList.toggle('active', isOpen);
    panel.classList.toggle('visible', isOpen);
    if (isOpen) { applyLang(); renderResults(); searchInput.focus(); }
    else stopAutoScroll();
  });

  closeBtn.addEventListener('click', () => {
    isOpen = false;
    toggleBtn.classList.remove('active');
    panel.classList.remove('visible');
    stopAutoScroll();
  });

  settingsBtn.addEventListener('click', () => {
    isSettingsOpen = !isSettingsOpen;
    settingsOv.classList.toggle('visible', isSettingsOpen);
    settingsBtn.classList.toggle('active', isSettingsOpen);
  });

  closeSets.addEventListener('click', () => {
    isSettingsOpen = false;
    settingsOv.classList.remove('visible');
    settingsBtn.classList.remove('active');
  });

  shadow.querySelectorAll('.speed-item').forEach(el => {
    el.addEventListener('click', () => {
      currentSpeedKey = el.dataset.speed;
      setSetting('speed', currentSpeedKey);
      shadow.querySelectorAll('.speed-item').forEach(i => i.classList.toggle('active', i.dataset.speed === currentSpeedKey));
    });
  });

  // Prevent panel key events from bubbling up to TikTok's global page listeners (prevents muting, fullscreen, play/pause, etc. when typing)
  ['keydown', 'keyup', 'keypress'].forEach(evt => {
    panel.addEventListener(evt, e => { e.stopPropagation(); });
  });

  sbClear.addEventListener('click', () => { searchInput.value = ''; sbClear.style.display = 'none'; searchInput.focus(); renderResults(); });
  searchInput.addEventListener('input', () => { sbClear.style.display = searchInput.value.trim() ? 'block' : 'none'; renderResults(); });
  sortSel.addEventListener('change', e => { currentSort = e.target.value; renderResults(); });
  fqBtn.addEventListener('click', () => { filterQuestions = !filterQuestions; fqBtn.classList.toggle('active', filterQuestions); renderResults(); });
  fvBtn.addEventListener('click', () => { filterVerified = !filterVerified; fvBtn.classList.toggle('active', filterVerified); fvBtn.classList.toggle('va', filterVerified); renderResults(); });
  asBtn.addEventListener('click', () => { isAutoScrolling ? stopAutoScroll() : startAutoScroll(); });
  analysisBtn.addEventListener('click', () => {
    isAnalysisOpen = !isAnalysisOpen;
    analysisBtn.classList.toggle('open', isAnalysisOpen);
    acontent.classList.toggle('open', isAnalysisOpen);
    if (isAnalysisOpen) renderWordCloud();
  });

  // =================================================================
  // Auto Scroll
  // =================================================================
  function findScrollContainer() {
    const anchor = document.querySelector('[data-e2e="comment-item"]') || document.querySelector('[data-e2e="comment-level-1"]');
    if (anchor) {
      let p = anchor.parentElement, d = 0;
      while (p && d < 10) {
        const s = window.getComputedStyle(p);
        if ((s.overflowY === 'auto' || s.overflowY === 'scroll') && p.scrollHeight > p.clientHeight) return p;
        p = p.parentElement; d++;
      }
    }
    const divs = document.querySelectorAll('div');
    for (const d of divs) {
      const s = window.getComputedStyle(d);
      if ((s.overflowY === 'auto' || s.overflowY === 'scroll') && d.scrollHeight > d.clientHeight) {
        if (d.querySelector('img') && (d.className || '').toLowerCase().includes('comment')) return d;
      }
    }
    return null;
  }

  function startAutoScroll() {
    if (isAutoScrolling) return;
    const dom = getCommentCountFromDOM();
    if (dom > 0 && totalCommentsOnServer === 0) totalCommentsOnServer = dom;
    isAutoScrolling = true;
    asBtn.textContent = t('stop');
    asBtn.classList.add('loading');
    sameCountTicks = 0;
    lastCommentsCount = commentsMap.size;
    if (statsInfo) statsInfo.style.display = 'none';
    runStep();
  }

  function stopAutoScroll(reason) {
    if (!isAutoScrolling) return;
    isAutoScrolling = false;
    if (autoScrollTimer) { clearTimeout(autoScrollTimer); autoScrollTimer = null; }
    asBtn.textContent = t('autoLoad');
    asBtn.classList.remove('loading');
    if (statsInfo) {
      if (reason === 'finished') {
        statsInfo.textContent = t('mainCommentsLoaded');
        statsInfo.style.display = 'block';
      } else {
        statsInfo.style.display = 'none';
      }
    }
  }

  function runStep() {
    if (!isAutoScrolling) return;
    const c = findScrollContainer();
    if (c) c.scrollTop = c.scrollHeight; else window.scrollTo(0, document.body.scrollHeight);

    const delay = SPEEDS[currentSpeedKey] || 800;
    autoScrollTimer = setTimeout(() => {
      const cur = commentsMap.size;
      const dom = getCommentCountFromDOM();
      if (dom > totalCommentsOnServer) totalCommentsOnServer = dom;
      if (cur === lastCommentsCount) sameCountTicks++; else { sameCountTicks = 0; lastCommentsCount = cur; }
      if (totalCommentsOnServer > 0 && cur >= totalCommentsOnServer) { stopAutoScroll('finished'); return; }
      if (sameCountTicks >= 6) { stopAutoScroll('finished'); return; }
      runStep();
    }, delay);
  }

  // =================================================================
  // Helpers
  // =================================================================
  function getCommentCountFromDOM() {
    const el = document.querySelector('[data-e2e="comment-count"]');
    if (el) {
      const txt = (el.textContent || '').trim().toLowerCase();
      if (txt.includes('k')) return Math.round(parseFloat(txt) * 1000);
      if (txt.includes('m')) return Math.round(parseFloat(txt) * 1000000);
      const v = parseInt(txt.replace(/[^0-9]/g, ''), 10);
      if (!isNaN(v)) return v;
    }
    return 0;
  }

  function escapeHTML(s) {
    return s.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]||c));
  }

  function highlight(text, q) {
    const esc = escapeHTML(text);
    if (!q) return esc;
    try { return esc.replace(new RegExp(`(${q.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&')})`, 'gi'), '<mark class="hl">$1</mark>'); }
    catch { return esc; }
  }

  function formatDate(ts) {
    return new Date(ts * 1000).toLocaleDateString(currentLangCode === 'tr' ? 'tr-TR' : currentLangCode, { year:'numeric', month:'short', day:'numeric' });
  }

  function processPayload(data) {
    let list = [];
    if (Array.isArray(data?.comments)) list = data.comments;
    else if (Array.isArray(data?.data?.comments)) list = data.data.comments;
    else if (Array.isArray(data)) list = data;

    return list.map(c => {
      const id = c.cid || c.id || Math.random().toString(36).slice(2);
      let userNickname = 'TikTok User', userUniqueId = 'user', userAvatar = '', verified = false;
      if (c.user) {
        userNickname = c.user.nickname || c.user.unique_id || 'TikTok User';
        userUniqueId = c.user.unique_id || 'user';
        verified = !!(c.user.verified || c.user.is_verified);
        const av = c.user.avatar_thumb || c.user.avatar_medium;
        if (av?.url_list?.[0]) userAvatar = av.url_list[0];
      }
      return {
        id,
        text: c.text || '',
        diggCount: c.digg_count ?? c.like_count ?? 0,
        replyCount: c.reply_comment_total ?? c.reply_count ?? 0,
        createTime: c.create_time || Math.floor(Date.now() / 1000),
        userNickname, userUniqueId, userAvatar, verified
      };
    });
  }

  function resetComments() {
    commentsMap.clear();
    totalCommentsOnServer = 0;
    if (statsInfo) statsInfo.style.display = 'none';
    updateStats();
    renderResults();
  }

  function updateStats() {
    loadedC.textContent = commentsMap.size;
    if (totalCommentsOnServer === 0) totalCommentsOnServer = getCommentCountFromDOM();
    totalC.textContent = totalCommentsOnServer > 0 ? totalCommentsOnServer : '-';
  }

  // =================================================================
  // Word Cloud
  // =================================================================
  const STOP = new Set(['the','and','for','are','but','not','you','all','can','her','was','one','our','out','day','get','has','him','his','how','its','use','into','with','that','this','from','they','have','more','been','will','would','there','their','what','when','which','then','than','some','just','also','were','like','had','she','they','who','said','each','make','may','much','any','way','about','over','after','come','could','well','also','back','other','many','then','do','go','no','so','ve','bir','de','da','bu','ne','en','için','ama','çok','ile','ki','her','o','ya','mi','mı','mu','mü','ben','sen','biz','yok','var','daha','gibi','olan','olarak','şey','değil','nasıl','neden','şimdi']);

  function renderWordCloud() {
    const arr = Array.from(commentsMap.values());
    if (arr.length < 3) { wcloud.innerHTML = `<span style="font-size:11px;color:#8a8b90">${t('analysisInsufficient')}</span>`; return; }
    const counts = {};
    arr.forEach(c => {
      c.text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"]/g,' ').split(/\s+/).forEach(w => {
        if (w.length > 3 && !STOP.has(w)) counts[w] = (counts[w] || 0) + 1;
      });
    });
    const top = Object.entries(counts).sort((a,b) => b[1]-a[1]).slice(0,10);
    if (!top.length) { wcloud.innerHTML = `<span style="font-size:11px;color:#8a8b90">${t('analysisNoWords')}</span>`; return; }
    wcloud.innerHTML = '';
    top.forEach(([w, n]) => {
      const tag = document.createElement('span');
      tag.className = 'wtag';
      tag.textContent = `${w} (${n})`;
      tag.addEventListener('click', () => { searchInput.value = w; sbClear.style.display = 'block'; renderResults(); });
      wcloud.appendChild(tag);
    });
  }

  // =================================================================
  // Render Results
  // =================================================================
  function renderResults() {
    const q = searchInput.value.trim().toLowerCase();
    let arr = Array.from(commentsMap.values());

    if (q) arr = arr.filter(c => c.text.toLowerCase().includes(q) || c.userNickname.toLowerCase().includes(q) || c.userUniqueId.toLowerCase().includes(q));

    if (filterQuestions) {
      const qwords = ['?','how','why','where','what','when','nasıl','neden','nereden','fiyat','kaç','mi','mı','mu','mü','niye','neresi','quand','comment','pourquoi','cómo','cuánto','onde','como','quanto','wie','wann','warum','いくら','どこ','なぜ','어디','얼마','почему','где','哪','什么','多少'];
      arr = arr.filter(c => qwords.some(w => c.text.toLowerCase().includes(w)));
    }

    if (filterVerified) arr = arr.filter(c => c.verified);

    arr.sort((a,b) => currentSort === 'likes' ? b.diggCount - a.diggCount || b.createTime - a.createTime : currentSort === 'newest' ? b.createTime - a.createTime : a.createTime - b.createTime);

    updateStats();
    if (isAnalysisOpen) renderWordCloud();

    if (commentsMap.size === 0) {
      rlist.innerHTML = `
        <div class="empty">
          <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
          <span style="text-align:${dir()==='rtl'?'right':'left'}; line-height:1.8">
            <b style="color:#fff">${t('noCommentsTitle')}</b><br>
            <span style="color:#00f2fe">1.</span> ${t('option1')}<br>
            <span style="color:#00f2fe">2.</span> ${t('option2')}
          </span>
        </div>`;
      return;
    }
    if (!arr.length) {
      rlist.innerHTML = `<div class="empty"><svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg><span>${t('noResults')}</span></div>`;
      return;
    }

    rlist.innerHTML = '';
    arr.forEach(c => {
      const el = document.createElement('div');
      el.className = 'ci';
      const av = c.userAvatar || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%238a8b90"><circle cx="12" cy="8" r="4"/><path d="M12 14c-6.1 0-6 4-6 4h12s.1-4-6-4z"/></svg>';
      el.innerHTML = `
        <div class="ci-head">
          <img class="ci-avatar" src="${av}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\' fill=\\'%238a8b90\\'><circle cx=\\'12\\' cy=\\'8\\' r=\\'4\\'/><path d=\\'M12 14c-6.1 0-6 4-6 4h12s.1-4-6-4z\\'/></svg>'">
          <div class="ci-uinfo">
            <div class="ci-nrow"><span class="ci-name">${highlight(c.userNickname, q)}</span>${c.verified ? '<span class="ci-badge">✔</span>' : ''}</div>
            <span class="ci-handle">@${highlight(c.userUniqueId, q)}</span>
          </div>
        </div>
        <div class="ci-text">${highlight(c.text, q)}</div>
        <div class="ci-foot">
          <div class="metrics">
            <div class="mi lk"><svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>${c.diggCount}</div>
            <div class="mi"><svg viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/></svg>${c.replyCount}</div>
          </div>
          <span>${formatDate(c.createTime)}</span>
        </div>
        <div class="sh">${t('scrollHint')}</div>`;
      el.addEventListener('click', () => scrollToComment(c));
      rlist.appendChild(el);
    });
  }

  // =================================================================
  // Scroll To Comment (Smart Scroll-Search in Virtual DOM)
  // =================================================================
  async function scrollToComment(c) {
    const norm = c.text.trim().toLowerCase();
    
    function findInDOM() {
      for (const el of document.querySelectorAll('p,span,div')) {
        if (el.children.length) continue;
        if ((el.textContent||'').trim().toLowerCase() !== norm) continue;
        let p = el.parentElement, d = 0;
        while (p && d < 8) {
          if ((p.textContent||'').toLowerCase().includes(c.userUniqueId.toLowerCase()) || 
              (p.textContent||'').toLowerCase().includes(c.userNickname.toLowerCase())) {
            return p;
          }
          p = p.parentElement; d++;
        }
      }
      return null;
    }

    let found = findInDOM();
    if (found) {
      highlightAndScroll(found);
      return;
    }

    const container = findScrollContainer();
    if (!container) {
      showError();
      return;
    }

    const originalScrollTop = container.scrollTop;
    const origPlaceholder = searchInput.placeholder;
    searchInput.placeholder = t('locatingComment');
    searchInput.classList.add('locating');

    let attempts = 0;
    while (!found && attempts < 35) {
      container.scrollTop += 450;
      await new Promise(r => setTimeout(r, 60));
      found = findInDOM();
      attempts++;
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        break;
      }
    }

    // Try scrolling to top first if not found, just in case it was above
    if (!found) {
      container.scrollTop = 0;
      await new Promise(r => setTimeout(r, 60));
      found = findInDOM();
      attempts = 0;
      while (!found && attempts < 25) {
        container.scrollTop += 450;
        await new Promise(r => setTimeout(r, 60));
        found = findInDOM();
        attempts++;
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
          break;
        }
      }
    }

    searchInput.placeholder = origPlaceholder;
    searchInput.classList.remove('locating');

    if (found) {
      highlightAndScroll(found);
    } else {
      container.scrollTop = originalScrollTop;
      showError();
    }

    function highlightAndScroll(el) {
      el.scrollIntoView({ behavior:'smooth', block:'center' });
      const orig = el.style.backgroundColor;
      el.style.transition = 'background-color .4s ease';
      el.style.backgroundColor = 'rgba(0,242,254,.25)';
      setTimeout(() => { el.style.backgroundColor = orig; setTimeout(() => { el.style.transition = ''; }, 400); }, 1200);
    }

    function showError() {
      const orig = searchInput.placeholder;
      searchInput.placeholder = t('notFoundInPage');
      searchInput.classList.add('error');
      setTimeout(() => { searchInput.placeholder = orig; searchInput.classList.remove('error'); }, 2500);
    }
  }

  // =================================================================
  // Incoming comment data from inject.js
  // =================================================================
  window.addEventListener('TikTokCommentSearcher_Data', e => {
    const { url, data } = e.detail;
    if (data) {
      const raw = data.total ?? data.comment_count ?? data.data?.total ?? 0;
      const p = parseInt(raw, 10);
      if (!isNaN(p) && p > 0) totalCommentsOnServer = p;
    }
    let vid = '';
    try { const u = new URL(url); vid = u.searchParams.get('aweme_id') || u.searchParams.get('item_id') || ''; } catch {}
    if (vid && vid !== currentVideoId) { currentVideoId = vid; resetComments(); }
    const fresh = processPayload(data);
    if (fresh.length) { fresh.forEach(c => commentsMap.set(c.id, c)); if (isOpen) renderResults(); }
  });

  // Watch SPA URL changes
  setInterval(() => {
    if (window.location.href === lastUrl) return;
    lastUrl = window.location.href;
    const m = lastUrl.match(/@[^/]+\/video\/(\d+)/);
    if (m && m[1] !== currentVideoId) { currentVideoId = m[1]; resetComments(); }
  }, 1000);

  // Initial lang apply
  applyLang();
  console.log('[TikTokCommentSearcher] v2.0 loaded — 12 languages ready.');
})();
