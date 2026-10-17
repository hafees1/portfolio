/* ==========================================================
   EDIT THIS FILE TO ADD PROJECTS AND WRITINGS.
   The home page, writings page and article headers are all
   built automatically from the lists below.
   ========================================================== */

/* ---------- PROJECTS ----------
   Copy one block, paste it in the list, change the values.
   Order here = order on the page. tags can be [] for none. */
window.PROJECTS = [
  {
    title: "Brain Tumor MRI Classification",
    link: "https://github.com/hafees1/brain-tumor-mri-classification",
    description: "An end-to-end computer vision and machine learning project for multiclass brain tumor classification using MRI images.",
    tags: ["Python", "Computer Vision"]
  },
  {
    title: "RNA-Seq Cancer Classification",
    link: "https://github.com/hafees1/rna-seq-cancer-classification",
    description: "An end-to-end machine learning project for cancer classification using RNA-seq gene expression data.",
    tags: ["Python", "scikit-learn"]
  },
  {
    title: "BBC News NLP Classification",
    link: "https://github.com/hafees1/bbc-news-nlp-classification",
    description: "An end-to-end NLP pipeline for multiclass news classification using Bag of Words and TF-IDF.",
    tags: ["Python", "scikit-learn", "NLP"]
  },
  {
    title: "Loan Approval Prediction",
    link: "https://github.com/hafees1/loan-approval-prediction",
    description: "An end-to-end machine learning pipeline for predicting loan approval using Logistic Regression and scikit-learn.",
    tags: ["Python", "scikit-learn"]
  },
  {
    title: "Sushi Palace — UI/UX Design",
    link: "https://www.figma.com/proto/s474vxtVkXc1wUNQoIS2zP/Sushi?node-id=6-43&page-id=2%3A3&starting-point-node-id=6%3A43&t=OOW3pHKxhXJDfldG-1",
    description: "A mobile app prototype for a sushi restaurant, designed in Figma.",
    tags: ["Figma"]
  }
];

/* ---------- WRITINGS ----------
   slug    = the folder name inside /posts/
   date    = YYYY-MM-DD  (newest is shown first automatically)
   minutes = read time (word count / 200, rounded up)        */
window.POSTS = [
  {
    slug: "building-a-neural-network-from-scratch",
    title: "Building a neural network from scratch",
    date: "2026-10-18",
    minutes: 5
  }
];

/* How many writings to show on the home page */
window.HOME_POST_LIMIT = 4;
