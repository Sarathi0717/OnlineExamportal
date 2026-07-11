const exams = [
  {
    id: 1,
    title: "Java Quiz",
    duration: 600,
    questions: [
      {
        id: 1,
        question: "Who invented Java?",
        options: [
          "James Gosling",
          "Dennis Ritchie",
          "Bjarne Stroustrup",
          "Guido van Rossum",
        ],
        answer: "James Gosling",
      },
      {
        id: 2,
        question: "Java is a ____ language?",
        options: [
          "Programming",
          "Markup",
          "Database",
          "Operating System",
        ],
        answer: "Programming",
      },
      {
        id: 3,
        question: "Which company originally developed Java?",
        options: [
          "Microsoft",
          "Sun Microsystems",
          "Google",
          "IBM",
        ],
        answer: "Sun Microsystems",
      },
      {
        id: 4,
        question: "Which method is the entry point of a Java program?",
        options: [
          "run()",
          "start()",
          "main()",
          "init()",
        ],
        answer: "main()",
      },
      {
        id: 5,
        question: "Which keyword is used to inherit a class in Java?",
        options: [
          "implements",
          "inherits",
          "extends",
          "super",
        ],
        answer: "extends",
      },
      {
        id: 6,
        question: "Which package is automatically imported in every Java program?",
        options: [
          "java.io",
          "java.sql",
          "java.lang",
          "java.util",
        ],
        answer: "java.lang",
      },
      {
        id: 7,
        question: "Which of the following is not a primitive data type?",
        options: [
          "int",
          "float",
          "String",
          "char",
        ],
        answer: "String",
      },
      {
        id: 8,
        question: "Which keyword is used to create an object?",
        options: [
          "create",
          "class",
          "new",
          "object",
        ],
        answer: "new",
      },
      {
        id: 9,
        question: "Which loop executes at least one time?",
        options: [
          "for",
          "while",
          "do-while",
          "foreach",
        ],
        answer: "do-while",
      },
      {
        id: 10,
        question: "Which concept allows one interface with many implementations?",
        options: [
          "Encapsulation",
          "Inheritance",
          "Polymorphism",
          "Abstraction",
        ],
        answer: "Polymorphism",
      },
    ],
  },
  {
  id: 2,
  title: "React Quiz",
  duration: 600,
  questions: [
    {
      id: 1,
      question: "React is developed by?",
      options: [
        "Google",
        "Microsoft",
        "Facebook",
        "Amazon",
      ],
      answer: "Facebook",
    },
    {
      id: 2,
      question: "What is JSX?",
      options: [
        "Java XML",
        "JavaScript XML",
        "JSON XML",
        "Java Syntax",
      ],
      answer: "JavaScript XML",
    },
    {
      id: 3,
      question: "Which hook is used to manage state?",
      options: [
        "useFetch",
        "useEffect",
        "useState",
        "useContext",
      ],
      answer: "useState",
    },
    {
      id: 4,
      question: "Which hook is used for side effects?",
      options: [
        "useEffect",
        "useState",
        "useMemo",
        "useRef",
      ],
      answer: "useEffect",
    },
    {
      id: 5,
      question: "React is mainly used for building?",
      options: [
        "Database",
        "Operating System",
        "User Interfaces",
        "Compiler",
      ],
      answer: "User Interfaces",
    },
    {
      id: 6,
      question: "Which company maintains React?",
      options: [
        "Apple",
        "Meta",
        "Netflix",
        "Oracle",
      ],
      answer: "Meta",
    },
    {
      id: 7,
      question: "How do you pass data from parent to child?",
      options: [
        "Props",
        "State",
        "Redux",
        "Hooks",
      ],
      answer: "Props",
    },
    {
      id: 8,
      question: "Which command creates a React project using Vite?",
      options: [
        "npm create vite@latest",
        "npm install react",
        "npx react-app",
        "npm create react",
      ],
      answer: "npm create vite@latest",
    },
    {
      id: 9,
      question: "Which hook is used for navigation in React Router?",
      options: [
        "useParams",
        "useNavigate",
        "useLocation",
        "useRoute",
      ],
      answer: "useNavigate",
    },
    {
      id: 10,
      question: "Which symbol is used to embed JavaScript inside JSX?",
      options: [
        "()",
        "[]",
        "{}",
        "<>",
      ],
      answer: "{}",
    },
  ],
},
{
  id: 3,
  title: "JavaScript Quiz",
  duration: 600,
  questions: [
    {
      id: 1,
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: [
        "let",
        "print",
        "echo",
        "define",
      ],
      answer: "let",
    },
    {
      id: 2,
      question: "Which company developed JavaScript?",
      options: [
        "Microsoft",
        "Netscape",
        "Google",
        "Oracle",
      ],
      answer: "Netscape",
    },
    {
      id: 3,
      question: "Which symbol is used for single-line comments?",
      options: [
        "/* */",
        "//",
        "#",
        "<!-- -->",
      ],
      answer: "//",
    },
    {
      id: 4,
      question: "Which method is used to print output in the browser console?",
      options: [
        "console.print()",
        "console.log()",
        "print()",
        "echo()",
      ],
      answer: "console.log()",
    },
    {
      id: 5,
      question: "Which data type is NOT primitive in JavaScript?",
      options: [
        "String",
        "Number",
        "Object",
        "Boolean",
      ],
      answer: "Object",
    },
    {
      id: 6,
      question: "Which operator is used for strict equality?",
      options: [
        "=",
        "==",
        "===",
        "!=",
      ],
      answer: "===",
    },
    {
      id: 7,
      question: "Which function converts JSON into a JavaScript object?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.object()",
        "JSON.convert()",
      ],
      answer: "JSON.parse()",
    },
    {
      id: 8,
      question: "Which array method adds an element to the end of an array?",
      options: [
        "pop()",
        "shift()",
        "push()",
        "unshift()",
      ],
      answer: "push()",
    },
    {
      id: 9,
      question: "Which keyword is used to define a constant?",
      options: [
        "var",
        "let",
        "const",
        "constant",
      ],
      answer: "const",
    },
    {
      id: 10,
      question: "JavaScript is primarily a ____ language.",
      options: [
        "Markup",
        "Programming",
        "Database",
        "Styling",
      ],
      answer: "Programming",
    },
  ],
}

];

export default exams;