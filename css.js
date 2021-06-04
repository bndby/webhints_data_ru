import cheerio from 'cheerio';
import { URL } from 'url';
import { outputFile } from 'fs-extra';
import fetch from 'node-fetch';

/**
 * Loadn content from Url
 * 
 * @param {string} url Url of page
 * @returns {string} Loaded content
 */
const loadPage = async (url) => {
  const rawData = await fetch(url);
  const data = await rawData.text();

  return data;
}

/**
 * Clear content
 * 
 * @param {string} content Content for clear
 * @returns {string} Cleared content
 */
const clearContent = (content) => {
  const $ = cheerio.load(content, {decodeEntities: false});

  $('svg').remove();
  $('.bc-table abbr').remove();
  $('.bc-table button').remove();
  $('.bc-table .bc-icon').remove();
  $('.bc-table .bc-icons').remove();
  $('.bc-table .bc-browser-name').remove();
  $('.bc-github-link').remove();
  $('.bc-legend').remove();
  $('.hidden').remove();

  return $.html();
}

/**
 * Get Set of page links
 * 
 * @param {string} content Page content
 * @param {string} selector Links selector
 * @param {string} root Links root url
 * @returns {Map} Map of links
 */
const getLinks = (content, selector, root) => {
  const $ = cheerio.load( content, {decodeEntities: false} );
  const links = new Map();
  $(selector).each((i, el) => {
    const href = el.attribs.href;
    if ( href.indexOf('#') === -1 ){
      const resolvedUrl = new URL(href, root);
      if ( resolvedUrl.href.indexOf(root) !== -1 ){
        links.set( resolvedUrl.href.substring(root.length), resolvedUrl.href );
      }
    }
  });

  return links;
}

/**
 * Fix links from root url
 * 
 * @param {string} content Content for fixing links
 * @param {string} selector Links selector
 * @param {string} root Links root url
 * @returns {string} Content with fixed links
 */
const fixLinks = (content, selector, root) => {
  const $ = cheerio.load( content, {decodeEntities: false} );

  $(selector).each((_i, el) => {
    const href = el.attribs.href;
    if ( !href.startsWith('#') ){
      const resolvedUrl = new URL(href, root);
      if ( resolvedUrl.href.startsWith(root) ){
        const shortUrl = resolvedUrl.href.substring(root.length);
        el.attribs.href = '/css' + shortUrl + '/';
      } else {
        el.attribs.href = resolvedUrl.href;
      }
    }
  });

  return $.html();
}

/**
 * Save content to file
 * 
 * @param {string} content Content
 * @param {string} selector Selector what part of content to save
 * @param {string} filename File name
 */
const saveContent = async (content, selector, filename) => {
  const $ = cheerio.load( content, {decodeEntities: false} );

  try {
    await outputFile(filename, $(selector).html());
  } catch (err) {
    console.log(err);
  };
}

/**
 * Get page title
 * 
 * @param {string} content Page content
 * @param {string} selector Title selector
 * @returns Title of page
 */
const getTitle = ( content, selector = 'head title' ) => {
  const $ = cheerio.load( content, {decodeEntities: false} );
  const title = $( selector ).text();
  return title;
}

//
const START = 'https://developer.mozilla.org/ru/docs/Web/CSS/Reference';
const START_EN = 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference';

const ROOT = 'https://developer.mozilla.org/ru/docs/Web/CSS';
const ROOT_EN = 'https://developer.mozilla.org/en-US/docs/Web/CSS';

const OUTDIR = 'docs/css';
const SELECTOR = 'article .index a[href]';

const startContent = await loadPage(START);
const startContentEn = await loadPage(START_EN);

const clearedContent = clearContent( startContent );
const clearedContentEn = clearContent( startContentEn );

const fixContent = fixLinks(clearedContent, SELECTOR, ROOT);
const fixContentEn = fixLinks(clearedContentEn, SELECTOR, ROOT_EN);

await saveContent(fixContentEn, 'article', OUTDIR + '/index.html');
await saveContent(fixContent, 'article', OUTDIR + '/index.html');

console.log('Index saved');

const result = new Map();



let linksEn = new Map([
  ['/', START_EN],
  ...getLinks(clearedContentEn, SELECTOR, ROOT_EN),
]);

let linksRu = new Map([
  ['/', START],
  ...getLinks(clearedContent, SELECTOR, ROOT),
]);

let links = new Map([
  ...linksEn,
  ...linksRu,
]);

console.log('Prepared links:', links.size);

for await (let [_key, link] of links){
  const subDir = _key; //link.substring(ROOT.length);
  const c = await loadPage(link);
  const cc = clearContent(c);
  const title = getTitle(cc, 'body h1');
  const fc = fixLinks(cc, 'article a[href]', ROOT);
  const filename = subDir + '/index.html';

  await saveContent(fc, 'article', OUTDIR + filename);
  console.log('File saved:', filename);

  const theme = subDir.split('/')[1];

  result.set( filename, {
    id: `css${filename}`,
    path: `css${filename}`,
    title: title,
    name: title,
    nameIndex: title.toLocaleLowerCase(),
    theme: '',
    themeIndex: '',
    lang: 'CSS',
    langIndex: 'css',
    filter: title.toLocaleLowerCase() + ' css',
  })
}

try {
  await outputFile(OUTDIR + '.json', JSON.stringify([...result.values()]));
  console.log('JSON saved:', result.size)
} catch (err) {
  console.log(err);
};