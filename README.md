"# QuizForge- Online Quiz System

An engaging online quiz system built with HTML, CSS, and JavaScript featuring a modern neo-brutalist design.

## 🎯 Features

### Core Functionality
- **Topic Selection**: Choose from 6 different topics
  - General Knowledge
  - Science
  - History
  - Geography
  - Sports
  - MAthematics
  - Technology
  - Mixed Topics (questions from all categories)

- **Customizable Quiz Settings**
  - Number of Questions: 5, 10, 15, or 20
  - Time Limit: 5, 10, 15, 20, or 30 minutes

- **Interactive Quiz Experience**
  - MCQ (Multiple Choice Questions) with 4 options each
  - Picture-based questions for visual learning
  - Real-time countdown timer
  - Progress tracking with visual progress bar
  - Question counter showing current position

- **Navigation Features**
  - Forward and backward navigation between questions
  - Jump to any question using question indicators
  - Modify answers anytime before submission
  - Visual indicators showing answered vs unanswered questions

- **Instant Evaluation**
  - Immediate score calculation upon submission
  - Detailed breakdown: Correct, Incorrect, Unanswered
  - Percentage score display
  - Option to review all answers with correct/incorrect highlighting

- **Review Mode**
  - See all questions with your answers
  - Correct answers highlighted in green
  - Incorrect answers highlighted in red
  - Visual badges showing result for each question

## 🎨 Design

The quiz features a **Neo-Brutalist** design with:
- Bold black borders and hard shadows (4px-8px)
- Pastel color palette with warm cream background (#FFFDF0)
- Primary color: Coral Red (#FF5A5F)
- Secondary color: Golden Yellow (#FFC82C)
- Accent color: Ocean Blue (#005B96)
- Success color: Lime Green (#A3E635)
- Outfit font for headings
- Work Sans font for body text
- Interactive hover effects with shadow transitions
- Fully responsive design for mobile, tablet, and desktop

## 📁 Files

- **quiz.html** - Main HTML structure
- **quiz.css** - Complete styling with neo-brutalist design
- **quiz.js** - All functionality and quiz logic

## 📚 Question Bank

The system includes **100+ questions** across all topics:
- General Knowledge: 22 questions
- Science: 20 questions
- History: 20 questions
- Geography: 20 questions (includes image-based questions)
- Sports: 20 questions
- Technology: 20 questions 
- Mathematics: 20 questions

### Image-Based Questions
Several questions include images for:
- Landmark identification
- Animal recognition
- Geography visualization

## 🎮 How to Use

1. **Welcome Screen**: Click \"Start Quiz\" to begin
2. **Configuration**: 
   - Select your preferred topic
   - Choose number of questions
   - Set your time limit
   - Click \"Begin Quiz\"
3. **Quiz Screen**:
   - Read each question carefully
   - Select your answer by clicking an option
   - Use \"Next\" and \"Previous\" buttons to navigate
   - Click question indicators to jump to specific questions
   - Watch the timer countdown
   - Click \"Submit Quiz\" on the last question
4. **Results Screen**:
   - View your score and statistics
   - Click \"Review Answers\" to see detailed breakdown
   - Click \"Take New Quiz\" to start over
5. **Review Screen**:
   - See all questions with correct/incorrect highlighting
   - Your answers are marked
   - Correct answers are shown for comparison

## 🔧 Technical Details

### Technologies Used
- HTML5
- CSS3 (with custom properties and animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Outfit & Work Sans)

### Key JavaScript Features
- Object-oriented state management
- Array shuffling for randomized questions
- Timer functionality with countdown
- Dynamic DOM manipulation
- Event delegation for option selection
- LocalStorage can be added for saving progress

### Responsive Breakpoints
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## 🎯 Future Enhancements

Consider adding:
- **User Accounts**: Save quiz history and track progress
- **Leaderboards**: Compare scores with other users
- **Custom Quizzes**: Allow users to create their own questions
- **More Topics**: Expand question bank with additional categories
- **Difficulty Levels**: Easy, Medium, Hard question variants
- **Hints System**: Option to use hints for difficult questions
- **Social Sharing**: Share results on social media
- **Analytics**: Track performance over time with charts
- **Sound Effects**: Audio feedback for correct/incorrect answers
- **Dark Mode**: Alternative color scheme option

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
