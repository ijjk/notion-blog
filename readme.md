# Notion Backed Site

This is an example Next.js project that shows Next.js' upcoming SSG (static-site generation) support using Notion's **private** API for a backend.

**Note**: since it is using a private API and experimental features, use at your own risk as these things could change at any moment.

**Live Example hosted on ZEIT**: https://notion-backed-site.jj4.now.sh/

## Deploy Your Own

Deploy your own Notion site with ZEIT Now.

1. Clone this repo `git clone https://github.com/ijjk/notion-backed-site.git`
2. Update `BLOG_INDEX_ID` in [`./src/lib/notion/server-constants.ts`](./src/lib/notion/server-constants.ts) with your id. See [here](#getting-blog-index) for how to find this value.
3. Add your `NOTION_TOKEN` as a secret to Now `now secrets add NOTION_TOKEN <your-token>`
4. Deploy with `now`

## Creating your pages table

To create your pages table you need to create a new page in Notion and add a table to that page.

The table should have the following properties:

- `Page`: this the blog post's page
- `Slug`: this is the blog post's slug relative to `/blog` (make sure it doesn't start with a `/`), it should be a text property
- `Published`: this filters blog posts in **production**, it should be a checkbox property
- `Date`: this is when the blog post appears as posted, it should be a date property
- `Authors`: this is a list of Notion users that wrote the post, it should be a person property

![Example Blog Posts Table](assets/table-view.png)

## Getting Blog Index

To get your blog index value, open Notion and Navigate to the Notion page with the table you created above. While on this page you should be able to get the page id from either:

- the URL, if the URL of your page is https://www.notion.so/Blog-S5qv1QbUzM1wxm3H3SZRQkupi7XjXTul then your `BLOG_INDEX_ID` is `S5qv1QbU-zM1w-xm3H-3SZR-Qkupi7XjXTul`
- the `loadPageChunk` request, if you open your developer console and go to the network tab then reload the page you should see a request for `loadPageChunk` and in the request payload you should see a `pageId` and that is your `BLOG_INDEX_ID`

## Running locally

To run the project locally you need to follow steps 1 and 2 of [deploying](#deploy-your-own) and then follow the below steps

1. Install dependencies `yarn`
2. Expose `NOTION_TOKEN` in your environment `export NOTION_TOKEN='<your-token>'` or `set NOTION_TOKEN='<your-token>' on windows
3. Run next in development mode `yarn dev`
4. Build and run in production mode `yarn build && yarn start`
