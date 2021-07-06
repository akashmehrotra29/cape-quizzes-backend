const quizzesDB = [
  {
    category: "Javascript",
    description: "Test your knowledge of JavaScript",
    playTime: 5,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
    questions: [
      {
        question:
          "Which of the following is the correct syntax to print a page using JavaScript?",
        points: 5,
        negativePoints: -1,
        options: [
          {
            text: "window.print();",
            isRight: true,
          },
          {
            text: "browser.print();",
            isRight: false,
          },
          {
            text: "navigator.print();",
            isRight: false,
          },
          {
            text: "document.print();",
            isRight: false,
          },
        ],
      },
      {
        question:
          "Which built-in method combines the text of two strings and returns a new string?",
        points: 5,
        negativePoints: -1,
        options: [
          {
            text: "append()",
            isRight: false,
          },
          {
            text: "concat()",
            isRight: true,
          },
          {
            text: "attach()",
            isRight: false,
          },
          {
            text: "None of the above",
            isRight: false,
          },
        ],
      },
    ],
  },
];

module.exports = quizzesDB;
