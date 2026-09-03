// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Dagger(†) means equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-joined-viba-at-seoul-national-university",
          title: 'I joined ViBA at Seoul National University.',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-aaai-2025-workshop-on-anomaly-detection-in-scientific-domains",
          title: 'A paper got accepted at AAAI 2025 Workshop on Anomaly Detection in Scientific...',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-plos-one",
          title: 'A paper got accepted at PLOS One.',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-ieee-access",
          title: 'A paper got accepted at IEEE Access.',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-neurips-2025-workshop-on-ai4science",
          title: 'A paper got accepted at NeurIPS 2025 Workshop on AI4Science.',
          description: "",
          section: "News",},{id: "news-i-started-my-internship-at-lg-ai-research-materials-intelligence-lab",
          title: 'I started my internship at LG AI Research, Materials Intelligence Lab.',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-kdd-2026-ai-for-sciences-track",
          title: 'A paper got accepted at KDD 2026 (AI for Sciences track.)',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
