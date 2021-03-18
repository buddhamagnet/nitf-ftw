import ejs from 'ejs';
import fs from 'fs';

const version = (process.env.VERSION as string) || '2';

const article = {
  articleSection: { internal: [{ headline: 'The world this week' }] },
  articleTitle: 'Politics this week',
  byline: '',
  channel: {
    tegID: 'j53t6hsedat4l7rkbb1le98u73262sh5',
    headline: 'About us',
    url: {
      canonical: 'https://stage.economist.com/help/about-us',
      alias: ['https://stage.economist.com/node/21013071'],
    },
  },
  client: 'proquest',
  copyrightHolder: '',
  copyrightYear: 2021,
  dateCreated: '2021-02-25T15:51:55Z',
  dateModified: '2021-02-25T14:59:48Z',
  datePublished: '2021-02-25T15:51:49Z',
  description: '',
  internationalIssue: {
    tegID: 'v4tlmo1c15et1aqt6b9kktlb0fj4kljq',
    headline: 'Tech’s big dust-up',
    url: { canonical: 'https://stage.economist.com/printedition/2021-02-27' },
  },
  magazineTitle: 'Tech’s big dust-up',
  print: { headline: 'Politics this week' },
  tegID: 'h0djntp4l058u53lfk1ofgasq3nfemni',
  text: '[ELIDED]',
};

const input = {
  ...article,
  ...{ section: article.articleSection.internal[0].headline },
};

fs.writeFileSync(
  __dirname + `/output/nitf${version}/${Date.now()}.xml`,
  ejs.render(fs.readFileSync(__dirname + `/nitf${version}.xml`, 'utf8'), input)
);
