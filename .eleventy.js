const Image = require("@11ty/eleventy-img");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(`./src${src}`, {
    widths: [300, 800, null],
    formats: ["avif", "jpeg"],
    urlPath: "/images/",
    outputDir: "./docs/images/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });

    return {
        pathPrefix: "whitebox",
        dir: {
            input: "src",
            output: "docs"
        }
    };
};
