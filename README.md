# react-quiz-form
A redux form for creating quizzes in React

react-quiz-form is a ReactJS component integrated with [Redux From](https://github.com/erikras/redux-form). It aims to allow users to create a quiz manually and outputs a JSON file for [react-quiz-component](https://github.com/wingkwong/react-quiz-component) to process. 

>> react-quiz-form currently only supports [react-quiz-component](https://github.com/wingkwong/react-quiz-component) v0.2.8.

## Structure breakdown:
- Quiz Title
- Quiz Synopsis
- Questions
	- Title
	- Type (Text or Photo)
- Answers
	- Answer #n (Max number of n: 4)
- Correct Answer
- Message for Correct Answer
- Message for Incorrect Answer
- Explaination
- Point

## Validation
- All fields are required except `messageForCorrectAnswer`, `messageForIncorrectAnswer`, and `explanation`
- At least one question has to be created
- At least two answers have to be created
- Max four answers in one question are allowed

## Result
```json
{
  "quizTitle": "React Quiz Demo - https://github.com/wingkwong/react-quiz",
  "quizSynopsis": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
  "questions": [
    {
      "question": "How can you access the state of a component from inside of a member function?",
      "questionType": "text",
      "answers": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
    {
      "question": "ReactJS is developed by _____?",
      "questionType": "text",
      "answers": [
        "Google Engineers",
        "Facebook Engineers"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
    {
      "question": "ReactJS is an MVC based framework?",
      "questionType": "text",
      "answers": [
        "True",
        "False"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
    {
      "question": "Which of the following concepts is/are key to ReactJS?",
      "questionType": "text",
      "answers": [
        "Component-oriented design",
        "Event delegation model",
        "Both of the above",
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
    {
      "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      "questionType": "photo",
      "answers": [
        "https://dummyimage.com/600x400/000/fff&text=A",
        "https://dummyimage.com/600x400/000/fff&text=B",
        "https://dummyimage.com/600x400/000/fff&text=C",
        "https://dummyimage.com/600x400/000/fff&text=D"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    }
  ]
} 
```

## Development
- Clone the project
- run `npm install`
- run `npm run start`

## Demo
The demo is available at https://wingkwong.github.io/react-quiz-form/

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details