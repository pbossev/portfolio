---
title: pbsv.photo 📷
description: My photography site, made with <a href="https://www.11ty.dev/" class="arrow-external eleventy">11ty</a>.
links:
  [
    { label: "Source", url: "https://github.com/pbossev/pbsv.photo" },
    { label: "Website", url: "https://pbsv.photo" },
  ]
# stars: 1
order: 3
---

{% Image "homepage_desktop.webp", "A screenshot of the desktop homepage of pbsv.photo." %}

## Motivation

I needed a place to display and share photos with clients, but didn't want to pay for a SmugMug or Pixieset subscription, so I decided to try and write my own portfolio site in <a href="https://www.11ty.dev/" class="arrow-external eleventy">11ty</a>, and take advantage of the Cloudflare Pages free 10gb plan.

## Technologies

The entire site is built around <a href="https://www.11ty.dev/" class="arrow-external eleventy">11ty</a>, it utilizes <a href="https://tailwindcss.com/" class="tailwind arrow-external">TailwindCSS</a> for styling, and a couple Python scripts for posting to instagram or watermarking.

## Gallery

{% Image "homepage_mobile.webp", "A screenshot of the mobile homepage of pbsv.photo." %}
{% Image "events_desktop.webp", "A screenshot of the desktop events page of pbsv.photo." %}
{% Image "events_mobile.webp", "A screenshot of the mobile events page of pbsv.photo." %}
{% Image "portfolio_desktop.webp", "A screenshot of the desktop portfolio page of pbsv.photo." %}
{% Image "portfolio_mobile.webp", "A screenshot of the mobile portfolio page of pbsv.photo." %}
