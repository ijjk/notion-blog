# Notion Blog

This is an example Next.js project that shows Next.js' upcoming SSG (static-site generation) support using Notion's **private** API for a backend.

**Note**: This example uses the experimental SSG hooks only available in the Next.js canary branch! The APIs used within this example will change over time. Since it is using a private API and experimental features, use at your own risk as these things could change at any moment.

**Live Example hosted on Vercel**: https://notion-blog.vercel.app/

## Getting Started

To view the steps to setup Notion to work with this example view the post at https://notion-blog.vercel.app/blog/my-first-post or follow the steps below.

## Deploy Your Own

Deploy your own Notion blog with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/ijjk/notion-blog/tree/main&project-name=notion-blog&repository-name=notion-blog)

or

1. Clone this repo `git clone https://github.com/ijjk/notion-blog.git`
2. Configure project with [`vc`](https://vercel.com/download)
3. Add your `NOTION_TOKEN` and `BLOG_INDEX_ID` as environment variables in [your project](https://vercel.com/docs/integrations?query=envir#project-level-apis/project-based-environment-variables). See [here](#getting-blog-index-and-token) for how to find these values
4. Do final deployment with `vc`

Note: if redeploying with `vc` locally and you haven't made any changes to the application's source and only edited in Notion you will need use `vc -f` to bypass build de-duping

## Creating Your Pages Table

**Note**: this is auto run if a table isn't detected the first time visiting `/blog`

### Using the Pre-Configured Script

1. Create a blank page in Notion
2. Clone this repo `git clone https://github.com/ijjk/notion-blog.git`
3. Install dependencies `cd notion-blog && yarn`
4. Run script to create table `NOTION_TOKEN='token' BLOG_INDEX_ID='new-page-id' node scripts/create-table.js` See [here](#getting-blog-index-and-token) for finding the id for the new page

### Manually Creating the Table

1. Create a blank page in Notion
2. Create a **inline** table on that page, don't use a full page table as it requires querying differently
3. Add the below fields to the table

The table should have the following properties:

- `Page`: this the blog post's page
- `Slug`: this is the blog post's slug relative to `/blog`, it should be a text property
- `Published`: this filters blog posts in **production**, it should be a checkbox property
- `Date`: this is when the blog post appears as posted, it should be a date property
- `Authors`: this is a list of Notion users that wrote the post, it should be a person property

![Example Blog Posts Table](./assets/table-view.png)

## Getting Blog Index and Token

To get your blog index value, open Notion and Navigate to the Notion page with the table you created above. While on this page you should be able to get the page id from either:

- the URL, if the URL of your page is https://www.notion.so/Blog-S5qv1QbUzM1wxm3H3SZRQkupi7XjXTul then your `BLOG_INDEX_ID` is `S5qv1QbU-zM1w-xm3H-3SZR-Qkupi7XjXTul`
- the `loadPageChunk` request, if you open your developer console and go to the network tab then reload the page you should see a request for `loadPageChunk` and in the request payload you should see a `pageId` and that is your `BLOG_INDEX_ID`

To get your Notion token, open Notion and look for the `token_v2` cookie.

## Creating Blog Posts

1. In Notion click new on the table to add a new row
2. Fill in the Page name, slug, Date, and Authors
3. At the top of the content area add the content you want to show as a preview (keep this under 2 paragraphs)
4. Add a divider block under your preview content
5. Add the rest of your content under the divider block

## Running Locally

To run the project locally you need to follow steps 1 and 2 of [deploying](#deploy-your-own) and then follow the below steps

1. Install dependencies `yarn`
2. Expose `NOTION_TOKEN` and `BLOG_INDEX_ID` in your environment `export NOTION_TOKEN='<your-token>'`and `export BLOG_INDEX_ID='<your-blog-index-id>'` or `set NOTION_TOKEN="<your-token>" && set BLOG_INDEX_ID="<your-blog-index-id>"` for Windows
3. Run next in development mode `yarn dev`
4. Build and run in production mode `yarn build && yarn start`

## Credits

- Guillermo Rauch [@rauchg](https://twitter.com/rauchg) for the initial idea
- Shu Ding [@shuding\_](https://twitter.com/shuding_) for the design help
- Luis Alvarez [@luis_fades](https://twitter.com/luis_fades) for design help and bug catching
