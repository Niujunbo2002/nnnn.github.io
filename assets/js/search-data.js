// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/nnnn.github.io/";
    },
  },{id: "nav-blogs",
          title: "blogs",
          description: "notes, readings, and project logs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nnnn.github.io/blogs/";
          },
        },{id: "post-mineru-2-0",
        
          title: "MinerU 2.0",
        
        description: "Release notes for MinerU 2.0.0, covering the new architecture, model, and incompatible changes.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nnnn.github.io/blog/2025/mineru-2-0/";
          
        },
      },{id: "news-joined-shanghai-ai-laboratory-opendatalab-as-a-research-intern",
          title: 'Joined Shanghai AI Laboratory, OpenDataLab as a research intern.',
          description: "",
          section: "News",},{id: "news-will-join-peking-university-eecs-as-a-ph-d-student-in-fall-2025",
          title: 'Will join Peking University EECS as a Ph.D. student in Fall 2025.',
          description: "",
          section: "News",},{id: "news-ovo-bench-was-accepted-to-cvpr-2025",
          title: 'OVO-Bench was accepted to CVPR 2025.',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/nnnn.github.io/assets/pdf/CVofJunboNiu_v1.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%32%31%33%37%36%33%33%34@%62%75%61%61.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Niujunbo2002", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=MIt0UGUAAAAJ", "_blank");
        },
      },{
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
