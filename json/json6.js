var exam = {
  name: "Js Basic",
  questions: [
    {
      question: "What is javascript?",
      answers: [
        { ans: "Programming Language" },
        { ans: "Scripting Language" },
        { ans: "Markup Language" },
        { ans: "None of the above" },
      ],
      correct: 1, //index...
    },
    {
      question: "What is data type of 1?",
      answers: [
        {
          ans: "Number",
        },
        {
          ans: "String",
        },
        {
          ans: "Boolean",
        },
        {
          ans: "Object",
        },
      ],
      correct: 0,
    },
  ],
};

console.log(exam);
for (let i = 0; i < exam.questions.length; i++) {
  console.log(exam.questions[i].question);
}
