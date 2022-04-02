export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "624895e76f4f733f9cd88fe2",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-yt6yhnzs",
                  apiId: "0371e55d-ed7f-4ccf-b33e-cdf34ba254f8",
                },
                {
                  buildHookId: "624895e83a7b7f4f18b7a077",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-r3bpcj7w",
                  apiId: "6e8df8cb-192d-4446-89ce-d584506711f1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jitendralinuxbean/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-r3bpcj7w.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
