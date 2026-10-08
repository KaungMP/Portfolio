// -------------------- DOM READY --------------------
document.addEventListener('DOMContentLoaded', () => {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Reveal on scroll
  const revealElements = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(el => obs.observe(el));

  // Smooth internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // -------------------- THEME --------------------
  const themeBtn = document.getElementById('themeToggle');
  const root = document.documentElement;

  const setTheme = (mode) => {
    const isLight = mode === 'light';
    document.body.classList.toggle('light-mode', isLight);

    if (isLight) {
      root.style.setProperty('--bg',     '#c7c7c7ff');
      root.style.setProperty('--card',   '#fdfdfd');
      root.style.setProperty('--text',   '#0f172a');
      root.style.setProperty('--muted',  '#475569');
      root.style.setProperty('--border', '#e2e8f0');
      root.style.setProperty('--accent', '#0ea5e9');
      if (themeBtn) {
        themeBtn.textContent = '🌙';
        themeBtn.setAttribute('aria-label', 'Switch to dark mode');
        themeBtn.setAttribute('aria-pressed', 'true');
      }
    } else {
      root.style.setProperty('--bg',     '#141414');
      root.style.setProperty('--card',   '#111318');
      root.style.setProperty('--text',   '#e8ecf1');
      root.style.setProperty('--muted',  '#b1b7c3');
      root.style.setProperty('--border', '#1f2330');
      root.style.setProperty('--accent', '#6ee7b7');
      if (themeBtn) {
        themeBtn.textContent = '🌓';
        themeBtn.setAttribute('aria-label', 'Switch to light mode');
        themeBtn.setAttribute('aria-pressed', 'false');
      }
    }

    localStorage.setItem('theme', mode);
  };

  // init theme
  setTheme(localStorage.getItem('theme') === 'light' ? 'light' : 'dark');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = document.body.classList.contains('light-mode') ? 'dark' : 'light';
      setTheme(next);
    });
  }

  // -------------------- I18N --------------------
  const I18N = {
    en: {
      nav: { work: "Work", about: "About", contact: "Contact" },
      hero: {
        hi: "Hi, I’m ",
        subtitle: "Web Designer · UI/UX · Front-End",
        desc: "I design and build clean, thoughtful digital experiences with a focus on usability, responsive interfaces and clear visual communication."
      },
      cta: { viewWork: "View My Work", aboutMe: "About Me", downloadResume: "Download Resume" },
      work: {
        title: "Selected Work",
        p1: { title: "KhitSam", desc: "Artist & writer invitation platform · Web Design" },
        p2: { title: "SoraTrip", desc: "Flight booking experience · UI/UX & Front-End" },
        p3: { title: "Technest", desc: "Technology e-commerce concept · Web Design" }
},
      about: {
        title: "About Me",
        desc: "I’m really passionate about web design and front-end development. What matters most to me is creating designs that feel easy to understand and enjoyable for users to interact with. In school, I’m mainly learning HTML, CSS, and JavaScript, and in my personal time I’ve been working on projects like portfolio websites and e-commerce layouts, focusing not only on making them visually appealing but also improving usability. I enjoy learning new skills and staying updated on design trends and technology — growing step by step is exciting for me. I also take responsibility seriously and I don’t give up easily. Once I start something, I stay committed until I’m satisfied with the result.",
        hire: "Hire Me",
        resume: "See Resume"
      },
      skills: {
        figma: "Figma",
        systems: "Design Systems",
        responsive: "Responsive HTML/CSS",
        accessibility: "Accessibility / UX"
      },
      contact: {
        title: "Please feel free to contact me",
        subtitle: "I will respond politely and sincerely to any inquiry. Thank you in advance."
      },
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        download: "Download PDF",
        sending: "Sending...",
        sent: "Thanks — message received (simulation). I will get back to you.",
        preparing: "Preparing resume...",
        prepared: "Resume downloaded (simulation)."
      },
      skillssection: {
      title: "My Skill Set",
      intro: "Clean, responsive web design with modern tools."
      },

    },
    ja: {
      nav: { work: "制作実績", about: "プロフィール", contact: "お問い合わせ" },
      hero: {
        hi: "はじめまして。",
        subtitle: "Webデザイナー · UI/UX · フロントエンド",
        desc: "使いやすさ、レスポンシブ設計、分かりやすいビジュアル表現を大切にし、クリーンで丁寧なデジタル体験をデザイン・制作しています。"
      },
      cta: { viewWork: "実績を見る", aboutMe: "自己紹介", downloadResume: "履歴書をダウンロード" },
      work: {
        title: "制作実績",
        p1: { title: "KhitSam", desc: "アーティスト・作家向け招待プラットフォーム · Webデザイン" },
        p2: { title: "SoraTrip", desc: "航空券予約体験 · UI/UX・フロントエンド" },
        p3: { title: "Technest", desc: "テクノロジーECサイト · Webデザイン" }
      },
      about: {
        title: "自己紹介",
        desc: "Webデザインとフロントエンド開発に興味があり、ユーザーにとって「見やすく、使いやすいデザイン」を作ることを大切にしています。学校ではHTML、CSS、JavaScriptを中心に学びながら、個人でもポートフォリオサイトやECサイトのデザインに挑戦し、改善したり新しい表現方法を試したりしています。新しい知識を学ぶことが好きで、技術やデザインのトレンドを吸収することも楽しみの一つです。また、途中で諦めず、最後まで丁寧に取り組むところが自分の強みだと思っています。",
        hire: "仕事を依頼する",
        resume: "履歴書を見る"
      },
      skills: {
        figma: "Figma",
        systems: "デザインシステム",
        responsive: "レスポンシブHTML/CSS",
        accessibility: "アクセシビリティ / UX"
      },
      contact: {
        title: "よろしければご連絡ください",
        subtitle: "どのような内容でも、丁寧に対応させていただきます。尚、よろしくお願いします。"
      },
      form: {
        name: "お名前",
        email: "メールアドレス",
        message: "メッセージ",
        send: "送信する",
        download: "PDFをダウンロード",
        sending: "送信中…",
        sent: "送信完了（シミュレーション）。追ってご連絡いたします。",
        preparing: "準備中…",
        prepared: "ダウンロード完了（シミュレーション）。"
      },
      skillssection: {
      title: "スキルセット",
      intro: "モダンなツールを用いた、クリーンでレスポンシブなWebデザイン。"
      },
    }
  };

  const getLang = () => localStorage.getItem('lang') || 'en';

  function applyI18n(lang) {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const path = el.getAttribute('data-i18n').split('.');
      let val = dict;
      for (const k of path) val = val?.[k];
      if (typeof val === 'string') el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const path = el.getAttribute('data-i18n-placeholder').split('.');
      let val = dict;
      for (const k of path) val = val?.[k];
      if (typeof val === 'string') el.setAttribute('placeholder', val);
    });

    // Theme button label localization (optional)
    if (themeBtn) {
      const isLight = document.body.classList.contains('light-mode');
      themeBtn.setAttribute('aria-label',
        lang === 'ja'
          ? (isLight ? 'ダークモードに切り替え' : 'ライトモードに切り替え')
          : (isLight ? 'Switch to dark mode' : 'Switch to light mode')
      );
    }

    // Update language toggle button label
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.textContent = lang === 'ja' ? 'EN' : 'JP';
      langBtn.setAttribute('aria-label', lang === 'ja' ? '言語を英語に切り替え' : 'Switch language to Japanese');
    }
  }

  function initI18n() {
    let saved = localStorage.getItem('lang');
    if (!saved) {
      saved = (navigator.language && navigator.language.startsWith('ja')) ? 'ja' : 'en';
      localStorage.setItem('lang', saved);
    }
    applyI18n(saved);

    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const next = getLang() === 'en' ? 'ja' : 'en';
        localStorage.setItem('lang', next);
        applyI18n(next);

        
        const msg = document.getElementById('formMsg'); 
        if (msg && msg.textContent) {
          msg.textContent = '';
        }
      });
    }
  }

  initI18n();
});







