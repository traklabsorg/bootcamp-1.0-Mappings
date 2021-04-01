const quizQuestionReportMapper = {
    user_id : "userId?",
    group_name : "groupName?", 
    user_name : "userName?", 
    first_name : "firstName?",
    last_name : "lastName?",
    account_status : "accountStatus?",
    channel_name : "channelName?",
    course_id : "courseId?",
	course_title : "courseTitle?",
	lesson_id : "lessonId?",
	publication_id : "publicationId?",
	lesson_title : "lessonTitle?",
	quiz_question_data : "quizQuestionData?",
	options_selected : "optionsSelectedText?", 
	answer_correctness : "answerCorrectness?",
	points_awarded : "pointsAwarded?",
	quiz_timestamp : "quizTimestamp?"
  }


  const quizScoreReportMapper = {
    user_id : "userId?",
    group_name : "groupName?", 
    user_name : "userName?", 
    first_name : "firstName?",
    last_name : "lastName?",
    account_status : "accountStatus?",
    channel_name : "channelName?",
    course_id : "courseId?",
	course_title : "courseTitle?",
	lesson_id : "lessonId?",
    lesson_title : "lessonTitle?",
	publication_id : "publicationId?",
	total_number_of_quiz_questions : "totalNumberOfQuizQuestions?",
    correct_answers : "correctAnswers?",
    time_opened: "timeOpened?",
    time_completed : "timeCompleted?"
  }


  module.exports.quizQuestionReportMapper = quizQuestionReportMapper;
  module.exports.quizScoreReportMapper = quizScoreReportMapper;