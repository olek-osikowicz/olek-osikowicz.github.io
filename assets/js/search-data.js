// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-first-paper-on-empirically-evaluating-flaky-tests-for-autonomous-driving-systems-in-simulated-environments-has-been-accepted-at-ftw-2025",
          title: '📔: My first paper on Empirically Evaluating Flaky Tests for Autonomous Driving Systems...',
          description: "",
          section: "News",},{id: "news-️-i-received-billy-ibberson-travel-fund-bursary-this-stipend-will-help-me-attend-the-2025-international-conference-on-software-engineering-icse-in-ottawa-canada",
          title: '✈️: I received Billy Ibberson Travel Fund bursary. This stipend will help me...',
          description: "",
          section: "News",},{id: "news-attended-icse-2025-in-canada-presented-my-first-paper",
          title: '🌐: Attended ICSE 2025 in Canada 🇨🇦 - Presented My First Paper!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025_04_icse/";
            },},{id: "news-this-summer-i-ll-be-supervising-two-students-as-part-of-the-research-internship-together-we-ll-be-building-infrastructure-to-facilitate-autonomous-driving-system-testing-research",
          title: '📢: This summer, I’ll be supervising two students as part of the research...',
          description: "",
          section: "News",},{id: "news-i-got-nominated-for-the-teaching-support-award-for-my-efforts-in-deliverying-software-re-engineering-module-see-the-linkedin-post",
          title: '🏆: I got nominated for the Teaching Support Award for my efforts in...',
          description: "",
          section: "News",},{id: "news-i-got-part-time-role-as-a-reasearch-assistant-to-support-the-international-research-project-titled-simulation-based-testing-for-mobility-cyber-physical-systems-of-systems-collaboration-with-the-korea-advanced-institute-of-science-and-technology-kaist-led-in-sheffield-by-dr-donghwan-shin-see-the-linkedin-post",
          title: '📢: I got part-time role as a reasearch assistant to support the international...',
          description: "",
          section: "News",},{id: "projects-goa-maps",
          title: 'GOA Maps',
          description: "Generating detailed SVG city map posters in Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/goa_maps/";
            },},{id: "projects-sleep-breeze",
          title: 'Sleep Breeze',
          description: "Bluetooth wake-up light mobile app",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sleep_breeze/";
            },},{
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
