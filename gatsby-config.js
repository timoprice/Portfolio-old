module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Tim Price, PhD MBA',
    // Main Site Title
    title: `Tim Price, PhD MBA | User Experience Researcher & Strategist`,
    // Description that goes under your name in main bio
    description: `User Experience Research & Innovation Strategist`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: ``,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/timoprice/`,
    // Content of the About Me section
    about:
     `I have a unique and diverse skill set built from experience in research, web technology, business, and teaching. 
     I leverage mixed-methods and qualitative research techniques to understand user needs, behaviors, and attitudes, and convert these insights into actionable recommendations. 
     My experience in ethnographic research enables me to ask the right questions, translate data into consumable stories, and provide metrics on the business value of design decisions. 
     I enjoy supporting and mentoring others to grow their professional skills.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    
    /*
    projects: [
      {
        name: 'American Red Cross',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    */
    
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Venafi',
        description: 'Head of User Research & Innovation, Jun 2021–Present',
        link: 'https://www.venafi.com',
      },
      {
        name: 'WellSky',
        description: 'User Experience Research & UXOps Manager, Mar 2019–Jun 2021',
        link: 'https://www.wellsky.com',
      },
      {
        name: 'Boncom',
        description: 'User Experience Strategist, Oct 2017–Mar 2019',
        link: 'https://www.boncom.com/',
      },
      {
        name: 'Axis41 (now Merkle)',
        description: 'User Experience Strategist, Dec 2015–Oct 2017',
        link: 'https://dx.merkleinc.com/',
      },
      {
        name: 'Bavarian Academy of Sciences',
        description: 'Computational Researcher, Oct 2013–Jan 2015',
        link: 'https://badw.de/die-akademie.html',
      },
      {
        name: 'Digital Humanities Hessen',
        description: 'Computational Researcher, May 2011–Oct 2013',
        link: 'http://digital-humanities-hessen.de/',
      },
      {
        name: 'University of California, Berkeley',
        description: 'Ethnographic Researcher, Aug 2033–May 2011',
        link: 'https://german.berkeley.edu/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Leadership',
        description:
          'ROI discovery, Mentoring, Effective Communication, Empathy',
      },
      {
        name: 'Research',
        description:
          'Ethnographic Studies, (Remote) Usability Testing, (Un)Moderated Studies, Surveys, Behavioral Analytics, Competitive Analysis',
      },
      {
        name: 'UX',
        description: 'Design Sprints, Journey Mapping, Information Architecture, Systems Thinking, A/B Testing, Card Sorting',
      },
      {
        name: 'Design',
        description:
          'Wireframing, Prototypting, Participatory Design, Information Architecture, Content Strategy',
      },
      {
        name: 'Languages',
        description:
          'German (near native), Romanian (professional), Dutch (beginner), Russian (beginner)',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
