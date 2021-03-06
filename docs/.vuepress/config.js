module.exports = {
  title: "前端厚说",
  plugins: [
    ["@vuepress/back-to-top"], // 返回顶部
    ["@vuepress/nprogress"], // 加载进度条
    [
      "vuepress-plugin-comment",
      {
        choosen: "valine",
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: "#vcomments",
          appId: "T7SJkJx11EpLNMvfzjee4mmM-gzGzoHsz",
          appKey: "8XiyybSQiGhWVGACeLeL6csO",
          visitor: true, // 阅读量统计
          placeholder: "有什么问题请留言",
        },
      },
    ],
  ],
  description: "frontend-thick-talk",
  themeConfig: {
    lastUpdated: "最近更新于", // string | boolean
    serviceWorker: {
      updatePopup: true, // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是:
      // updatePopup: {
      //    message: "New content is available.",
      //    buttonText: "Refresh"
      // }
    },
    head: [["link", { rel: "icon", href: "/favo.jpg" }]],
    nav: [
      { text: "指南", link: "/guides/" },
      {
        text: "GitHub",
        link: "https://github.com/yayxs/frontend-thick-talk",
        target: "_blank",
      },
    ],

    sidebar: [
      {
        title: "前言",
        collapsable: false,
        children: ["/guides/", "/guides/quick_start"],
      },
      {
        title: "简历面试",
        collapsable: false,
        children: [
          "/guides/interview/",
          "/guides/interview/question",
          "/guides/interview/top_fe_iqa",
        ],
      },
      {
        title: "HTML/HTML5",
        collapsable: false,
        children: ["/guides/html/video"],
      },
      {
        title: "CSS/CSS3",
        collapsable: false,
        children: [
          "/guides/css/css_basis",
          "/guides/css/css3",
          "/guides/css/css_layout",
          "/guides/css/css_preprocessor",
        ],
      },
      {
        title: "JavaScript",
        collapsable: false,
        children: [
          "/guides/javascript/storage",
          "/guides/javascript/module",
          "/guides/javascript/custom_method",
        ],
      },
      {
        title: "读书笔记",
        collapsable: false,
        children: [
          "/guides/books/css-world/",
          "/guides/books/css_secret_outline",
          "/guides/books/js-info/",
          "/guides/books/professional-javascript-4/",
          "/guides/books/You-Dont-Know-JS/",
          "/guides/books/flutter_1",
          "/guides/books/http/",
        ],
      },
      {
        title: "自制教程",
        collapsable: false,
        children: ["/guides/bilibili/typescript", "/guides/bilibili/vue3"],
      },

      {
        title: "推荐分享",
        collapsable: false,
        children: [
          "/guides/recommend/book",
          "/guides/recommend/video",
          "/guides/recommend/renting",
          "/guides/recommend/know",
        ],
      },
      {
        title: "TypeScript",
        collapsable: true,
        children: ["/guides/typescript/ts_1", "/guides/typescript/ts_2"],
      },
      {
        title: "Vue2/Vue3",
        collapsable: true,
        children: [],
      },
      {
        title: "React",
        collapsable: true,
        children: ["/guides/react/"],
      },
      {
        title: "Flutter",
        collapsable: true,
        children: ["/guides/flutter/"],
      },
      {
        title: "实战项目",
        collapsable: false,
        children: [
          "/guides/wangyiyun/",
          "/guides/pro/flutter",
          "/guides/pro/mini_pro",
        ],
      },
      {
        title: "微信小程序",
        collapsable: true,
        children: ["/guides/mini_pro/"],
      },
      {
        title: "Web性能优化",
        collapsable: false,
        children: [
          "/guides/optimization/all",
          "/guides/optimization/css",
          "/guides/optimization/vue",
        ],
      },
      {
        title: "前端工程化",
        collapsable: false,
        children: ["/guides/engineering/css/", "/guides/engineering/git/"],
      },
      {
        title: "其他工具",
        collapsable: false,
        children: ["/guides/blog_article/cra_admin"],
      },
    ],
  },
};
