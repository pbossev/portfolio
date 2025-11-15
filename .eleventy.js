const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  // Passthroughs
  eleventyConfig.addPassthroughCopy("src/assets/img/*");
  eleventyConfig.addPassthroughCopy("src/assets/pdf/*");
  eleventyConfig.addPassthroughCopy({ "src/assets/favicon": "/" });

  // Captioned image shortcode
  eleventyConfig.addShortcode("Image", function (src, alt) {
    return `
      <figure class="md-figure">
        <div class="md-figure-wrapper">
          <img src="${`/assets/img/` + src}" alt="${alt}" class="md-figure-img">
        </div>
        <figcaption class="md-figure-caption">${alt}</figcaption>
      </figure>
    `;
  });

  eleventyConfig.addShortcode("PDF", function (src, caption) {
    return `
      <figure class="md-figure">
        <div class="md-figure-wrapper">
          <object data="${`/assets/pdf/` + src}" type="application/pdf" width="100%" height="100%">
            <embed src="${`/assets/pdf/` + src}">
              <p>This browser does not support PDFs. Please download the PDF to view it: <a href="${`/assets/pdf/` + src}">Download PDF</a>.</p>
            </embed>
          </object>
        </div>
        <figcaption class="md-figure-caption">${caption}</figcaption>
      </figure>
    `;
  });

  // Markdown config with GitHub-style heading anchors
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.linkInsideHeader({
      symbol: "#",
      placement: "after",
      class: "heading-anchor",
    }),
    slugify: s => s.trim().toLowerCase().replace(/[^\w]+/g, "-"),
  });

  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true,
  };
};
