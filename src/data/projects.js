// TODO Add a couple lines about each project
const data = [
  {
    title: 'Similar Document Retrieval Engine',
    // subtitle: '2015 BVP Hackathon',
    link: 'https://github.com/rakeshy1116/DocumentRetrievalEngine',
    image: '/images/projects/document.png',
    date: '2022-11-30',
    desc:
      'Created a web application utilizing React and Flask, empowering users to upload documents such as research '
      + 'papers and facilitating retrieval and display of similar documents.'
      + 'Transformed AWS S3-stored documents into text embeddings and harnessed the power of Facebook AI Similarity '
      + 'Search (FAISS) to establish a highly efficient index for conducting relevant document searches.'
      + 'Employed Docker to containerize the React UI component, Flask API, and grobid services, subsequently deploying'
      + 'them on AWS Elastic Kubernetes Service (EKS) for seamless scalability and management.',
  },
  {
    title: 'NITC Hostel Management System',
    // subtitle: 'Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon',
    link: 'https://github.com/rakeshy1116/Hostel-Management-System',
    image: '/images/projects/hostel.jpg',
    date: '2019-05-20',
    desc:
      'Designed and implemented a system that streamlines the process of room assignment in college hostels.'
      + 'Key functionalities encompassed Login Authentication, prioritized room allocation, and concurrent login '
      + 'capabilities.',
  },
  {
    title: 'Experimental Operating System',
    subtitle: 'Toy Operating System for understanding OS.',
    link: 'https://github.com/rakeshy1116/ExpOS',
    image: '/images/projects/logo.png',
    date: '2019-08-01',
    desc:
      'Implemented an experimental OS (ExpOS) which runs on the Experimental String Machine(XSM), '
      + 'architecture built internally by NITC. It efficiently handles Process Management,'
      + 'Memory Management, and System Calls.',
  },
  {
    title: 'Cat Detector',
    subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    image: '/images/projects/catdetector.jpg',
    date: '2020-05-15',
    desc:
      'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
      + 'Over 60,000 cats were classified before server bills made the project too expensive '
      + 'to continue hosting.',
  },
];

export default data;
