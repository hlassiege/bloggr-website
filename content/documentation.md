---
id: "11"
title: "All features"
description: "Discover all the features of Bloggr."
date: "2024-02-11"
cover: "covers/tokyo.jpg"
table_of_contents: true
listed: false
---

## Introduction

Bloggr is built on top of
* [Nuxt.js 3.x](https://nuxt.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Nuxt-Content](https://content.nuxt.com/)
* [Lucide icons](https://lucide.dev/)
* [Hyvor Talk](https://talk.hyvor.com/)
* and other cool stuff

It is a **static** blog generator that uses markdown files to generate blog posts.

A static blog generator is a tool that generates a blog from markdown files. It is a great way to create a blog because it is simple, fast, and secure. It requires no database and no server-side code. It is just a bunch of HTML, CSS, and JavaScript files.

* It is **secure** because there is no server-side code that can be hacked.
* It is **fast** because there is no database to query and no server-side code to execute.
* It is **simple** because it is just a bunch of files.
* It is **cheap** because it can be hosted on a static hosting provider.

## Installation

Bloggr is a template that you can use to create your own blog. You can clone the repository and start writing your own content.

In most situations, you'll store your blog in a git repository and deploy it to a static hosting provider like Netlify, Vercel, Cloudflare-pages or Github pages.

::alert{type="warning"}
Even if it's only a matter of downloading files and writing markdown, you'll need to have some knowledge of git, markdown, and the command line
::

You have two options here : 

1. Clone the repository 

```bash
# npm
git clone https://github.com/hlassiege/bloggr.git bloggr
```

2. **OR** Alternatively, you can download the zip file from the [repository](https://github.com/hlassiege/bloggr) and extract it.

![Download archive](/images/doc/download.png "Download archive")

Then, you can install the dependencies from the root of the project.

```bash
# npm
npm install
```

Now it's done, you can start the development server to see your blog in action on http://localhost:3000

```bash 
# npm
npm run dev
```


## Configuration

The global configuration of the blog is done in the nuxt.config.ts file.

You can read the content of runtimeConfig.public in the nuxt.config.ts file to see the configuration of the blog.

You can configure
* the title,
* the description,
* the logo,
* the social networks (twitter, mastodon, youtube, linkedin, facebook, instagram, github) for the website
* the top menu,
* the list of authors

Read the actual nuxt.config.ts file to see the configuration of the blog.



## Markdown

You can use all standard markdown features plus some extra features such as frontmatter to add metadata to your markdown files.  
You can read more about it [here](/markdown).

## SEO

Bloggr is SEO friendly. It generates a sitemap and a RSS feed. It also supports Open Graph and Twitter cards. It has been optimized for search engines.  

By default the language of the blog is set to "en" in the nuxt.config.ts file. You can change it to your language.

```typescript
export default {
  head: {
    htmlAttrs: {
      lang: 'en'
    }
  }
}
```

## Sitemap and RSS feed

This blog generates automatically a sitemap.xml and a RSS feed (rss.xml).   
All content is automatically added to the sitemap and the RSS feed except the content with the `listed: false` property in the frontmatter.

## Open Graph and Twitter cards

This blog uses the [useHead](https://nuxt.com/docs/api/composables/use-head) composables to add metadata to the head of the pages.

All pages have a default title and description.
You can tweak the image, title and description of each page in the frontmatter of the markdown file.

This is highly recommended to do so to have a good SEO, not even mentioning that your blog will look broken if you don't define title for each page...

## Robots.txt
By default, the robots.txt allows all robots to crawl the website. It's possible to modify the robots.txt file in the `public` folder.

For example if you don't want to allow chatGpt or yandex:
```txt
User-agent: GPTBot
Disallow: /
User-agent: yandex
Disallow: /
```

## Performance

Performance are an important part of SEO. Here is the lighthouse score of this blog:

| index page                                | blog post                                          |
|-------------------------------------------|----------------------------------------------------|
| ![index page](/images/doc/lighthouse.jpg) | ![blog post](/images/doc/lighthouse-blog-post.jpg) |

Performance could vary depending on the server and the network and images you use in your blog.

## Comment system

You can enable comments on your blog. It uses [Hyvor Talk](https://talk.hyvor.com/).  

I use [Hyvor talk](https://talk.hyvor.com/) for this blog.
If you want to use it, **you'll need to create an account** and get a website id.

Then, you can enable it by adding the following code to the `nuxt.config.ts` file:

```typescript
            comments: {
                enabled: true,
                hyvor_talk: {
                    website_id: "YOUR_HYVOR_TALK_WEBSITE_ID",
                },
            },
```

::alert
Replace `YOUR_HYVOR_TALK_WEBSITE_ID` with your Hyvor Talk website id. 
::


## Flexible file structure

You can organize your files as you want. You can create folders and subfolders and you can choose the URL of your blog posts.  
Each file under the `content` directory will be transformed into a page of the blog.

All the files are markdown files with a frontmatter at the top of the file. They are all listed on the index page, except the ones
* with the `draft: true` property.
* with the `listed: false` property.

The url of the page is the path of the file, without the `.md` extension.
It means you can define the url structure of your blog by organizing the files in the `content` directory.

For example, you can have url like `/2024/01/files_hierarchy` if the file is located at `content/2024/01/files_hierarchy.md`.

::alert
It is highly recommended to use a hierarchical structure for the files, to make the blog more organized and to make the urls more meaningful.
::

## Analytics

You can add any analytics tool to your blog.  

You just have to modify the `nuxt.config.ts` file to add the tracking code of your analytics provider.

For example, to add [Pirsch](https://pirsch.io/), you can add the following code to the `nuxt.config.ts` file:

```typescript
export default {
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            script: [
                {
                    src: "https://api.pirsch.io/pirsch.js",
                    id: "pirschjs",
                    defer: true,
                    "data-code": "YOUR_PIRSCH_CODE",
                    type: "text/javascript",
                },
            ],
        },
    },
}
```
::alert
Replace `YOUR_PIRSCH_CODE` with your Pirsch code.
::


## Newsletter

You can add a newsletter to your blog to keep your readers updated when you publish new content.

The tricky part here is that this blog is a static site, so you can't use a traditional newsletter service, or you'll have to manually send out emails every time you publish a new post and that's not very practical.

Instead, you can use a RSS-to-email service to create a newsletter and then add a form to your blog to allow your readers to sign up.
This is the approach I'm using for this blog. I'm using [Mailerlite](https://www.mailerlite.com/)

Of course you can use another service, here you'll find an example of how to do it with Mailerlite but please feel free to use any other service you like.

### Enable RSS feed

The RSS feed is enabled by default in this blog, you can find it at `/rss.xml`. You can check it by going to `https://yourblog.com/feed.xml`.

### Create a Mailerlite account

Go to [Mailerlite](https://www.mailerlite.com/) and create an account.

### Create a new form

Go to the [forms section](https://dashboard.mailerlite.com/forms/embedded) and create a new form. You can create a simple form with just an email field.
Don't worry about the design, we won't use their form, we'll create our own.

Look at the "HTML code" section and copy the form action URL, it should look like this:

```html
<form action="https://assets.mailerlite.com/jsonp/ID1/forms/ID2/subscribe"" method="post">
```

Copy the form action URL, you'll need it later.

### Add the form to your blog

You just have to enable the newsletter section in the `nuxt.config.ts` file and add the form action URL you copied before.

```typescript
newsletter: {
  enabled: true,
  form_action: "YOUR_FORM_ACTION_URL",
},
```

### Create a new campaign

Go to the [campaigns section](https://dashboard.mailerlite.com/campaigns/status/ready) and create a new **RSS** campaign. Then, the rest should be straightforward, just follow the steps.

And voilà! You have a newsletter for your static blog. People can sign up and they'll receive an email every time you publish a new post.
