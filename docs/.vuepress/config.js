module.exports = {
  base: "/2d/",
  title: "2d",
  description: "2d",
  serviceWorker: true,
  themeConfig: {
    sidebar: "auto",
    sidebarDepth: 2,
    nav: [
      { text: "SVG", link: "/svg/" },
      { text: "Canvas", link: "/canvas/" },
      { text: "WebGL", link: "/webgl/" },
      { text: "H5", link: "/h5/" },
    ],
    lastUpdated: "Last Updated", // string | boolean
  },
  plugins: [],
};
