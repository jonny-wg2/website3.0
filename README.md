# Working Group Two (wgtwo.com) website

## Blog

https://github.com/working-group-two/wgtwo.com/tree/main/blog

Upload images at https://github.com/working-group-two/wgtwo.com/tree/main/static/img/blog
## Docs

https://github.com/working-group-two/wgtwo.com/tree/main/docs/

Upload images at https://github.com/working-group-two/wgtwo.com/tree/main/docs/images/

To have the new doc show up on the sidebar, update `sidebars.js` at https://github.com/working-group-two/wgtwo.com/tree/main/sidebars.js with the `id` that is specified in the `docs/your-doc.md`. The following is an example:

`docs/media-and-press.md`
```yaml
---
id: media-and-press
title: Media and Press
sidebar_label: Media and Press
---
...
...
```

`sidebar.js`
```js
module.exports = {
  someSidebar: {
    "About Working Group Two": [
      "introduction",
      "concept", 
      "working-with-wgtwo", 
      "demos", 
      "media-and-press",
    ],
    ...
    ...
    ...
```
## Markdown Tutorial

For the Docs and Blog, markdown is used. Here is a great example https://markdownlivepreview.com/

In short, the main things to know for markdown

```md
## This is large header

normal paragraph with then **bold** text and *italic* text

Image for a docs
![](images/wgtwo-skier-1.png)  

Image for a blog
![](/img/blog/log4j/01-canary-tokens.png)

Normal link to a website
[Description of your link](www.wgtwo.com)
```

## Website Development

**Expert**

The website is built using Docusaurus, React, and Typescript. This allows for custom complex integrations using APIs, as well as, the simple updating docs and blogs with markdown. 

To run the website locally with hot reload:
```bash
yarn install
yarn start
```

Before pushing to prod, it is recommended to test with `yarn build`. There can be oddities with CSS changes for when React will generate the html. To test this,

```bash
yarn build
yarn run serve
```

Website structure
```bash
$ tree -d -L 4
.
├── blog
├── docs
│   └── images
│       └── wgtwo-logos
├── src
│   ├── components
│   │   ├── apply
│   │   ├── brands
│   │   ├── casestudy
│   │   ├── cta
│   │   ├── enterprise
│   │   ├── hero
│   │   ├── integrations
│   │   ├── interview-process
│   │   ├── logs
│   │   ├── multig
│   │   ├── ourservice
│   │   ├── quote
│   │   ├── rbe
│   │   ├── security-domain
│   │   ├── security-header
│   │   └── technologymetrics
│   ├── css
│   ├── pages
│   │   └── news
│   └── util
├── static
│   ├── img
│   │   ├── blog
│   │   │   ├── blend-modes
│   │   │   ├── building-software-for-a-telecom-core-network
│   │   │   ├── forbidden-lore-hacking-dns-routing-for-k8s
│   │   │   ├── hackdays-october-2020
│   │   │   ├── jenkins-to-concourse
│   │   │   ├── kafka-timers
│   │   │   ├── log4j
│   │   │   ├── mqtt-event-bridge
│   │   │   ├── operator
│   │   │   ├── sms
│   │   │   ├── thanos
│   │   │   ├── the-specs-behind-the-specs
│   │   │   ├── vowifi-imsi-leak
│   │   │   ├── website-redesign
│   │   │   └── were-all-grownups-here
│   │   ├── favicons
│   │   └── team
│   └── video
│       └── blog
│           └── mqtt-event-bridge
└── theme
    ├── BlogListPage
    ├── BlogPostItem
    ├── BlogPostPage
    ├── BlogSidebar
    ├── BlogTagsListPage
    └── BlogTagsPostsPage
```