/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Target Corporation',
    position: 'Senior Data Engineer',
    url: 'https://corporate.target.com/',
    startDate: '2020-08-03',
    endDate: '2022-07-31',
    highlights: [
      'Devised and implemented automated data pipelines, utilizing Apache Spark and Scala,'
      + 'to extract essential eCommerce finance data from Kafka and API sources. These pipelines were'
      + 'instrumental in preprocessing, transforming, and loading data into the data warehouse.',
      'Spearheaded the development of an in-house website using React and Spring,'
      + 'facilitating efficient allocation of company resources. Lead multiple internal training sessions on Hadoop, Hive, and Oozie.',
      'Collaborated closely with business teams to translate complex business challenges into scalable and dependable data solutions, resulting in revenue generation in the millions.',
      'Played a key role in Fixed Assets project, empowering the finance team to manage tax calculations in-house,'
      + 'resulting in $100M savings annually.',
      'Delivered valuable data analysis and generated reports to enhance core operations, leading to improved data '
      + 'quality and dependability. Streamlined data pipeline workflows responsible for processing over 20 TB of data daily.',
      'Successfully integrated CI/CD practices into data pipelines, automating deployment processes efficiently',
    ],
  },
  {
    name: 'Arvind Internet',
    position: 'Software Engineer Intern',
    // url: 'http://skepticalinvestments.biz',
    startDate: '2019-05-01',
    endDate: '2019-07-01',
    // summary: `Skeptical Investments is a micro-vc fund focused on Angel, Seed, and Series-A
    // YC companies.`,
    highlights: [
      'Pioneered the implementation of the alerts feature within the Omuni.One app, enabling real-time notifications for'
      + 'vendors upon customer orders. This involved developing and retrieving notification data using REST APIs.',
    ],
  },
];

export default work;
