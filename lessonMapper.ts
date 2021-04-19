const lessonentityJson = {
  Id:"Id?",
  title:"title?",
  contentType : "contentType?",
  contentTemplateId : "contentTemplateId?",
  contentDetails : "contentDetails?",
  sequence: "sequence?",
  publishDate: "publishDate?",
  isMandatorySequence: "isMandatorySequence?",
  isFeatured:"isFeatured?",
  sectionId: "sectionId?",
  collaborators:"collaborators?",
  section: "section?",
  lessonData:"lessonData?",
  lessonTotalPoint:"lessonTotalPoint?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
  //SocketId: "SocketId?",
    
};

const lessondtoJson = {
  Id:"Id?",
  title:"title?",
  contentType : "contentType?",
  contentTemplateId : "contentTemplateId?",
  contentDetails : "contentDetails?",
  sequence: "sequence?",
  publishDate: "publishDate?",
  isMandatorySequence: "isMandatorySequence?",
  isFeatured:"isFeatured?",
  sectionId: "sectionId?",
  collaborators:"collaborators?",
  section: "section?",
  lessonData:"lessonData?",
  lessonTotalPoint:"lessonTotalPoint?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
  //SocketId: "SocketId?",
    
};

const lessonentityToDtoJson = {
  Id:"Id?",
  title:"title?",
  contentType : "contentType?",
  contentTemplateId : "contentTemplateId?",
  contentDetails : "contentDetails?",
  sequence: "sequence?",
  publishDate: "publishDate?",
  isMandatorySequence: "isMandatorySequence?",
  isFeatured:"isFeatured?",
  sectionId: "sectionId?",
  collaborators:"collaborators?",
  section: "section?",
  lessonData:"lessonData?",
  lessonTotalPoint:"lessonTotalPoint?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
  //SocketId: "SocketId?",
    
};

const lessondtoToEntityJson = {
  Id:"Id?",
  title:"title?",
  contentType : "contentType?",
  contentTemplateId : "contentTemplateId?",
  contentDetails : "contentDetails?",
  sequence: "sequence?",
  publishDate: "publishDate?",
  isMandatorySequence: "isMandatorySequence?",
  isFeatured:"isFeatured?",
  sectionId: "sectionId?",
  collaborators:"collaborators?",
  section: "section?",
  lessonData:"lessonData?",
  lessonTotalPoint:"lessonTotalPoint?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
  //SocketId: "SocketId?",
    
};


const lessonBasedOnChannelMapper = {
  member_name : "memberName?",
  member_image : "memberImage?",
  group_name : "groupName?",
  points : "points?",
  totalrecords : "totalRecords?"
}

const lessonInteractionReportMapper = {
  user_id : "userId?",
  group_name : "groupName?", 
  user_name : "userName?", 
  first_name : "firstName?",
  last_name : "lastName?",
  account_status : "accountStatus?",
  channel_name : "channelName?",
  lesson_id : "lessonId?",
  publication_id : "publicationId?",
  lesson_title : "lessonTitle?",
  time_opened : "timeOpened?",
  time_completed : "timeCompleted?"
}

const lessonInteractionOverviewMapper = {
  user_id : "userId?",
  group_name : "groupName?", 
  user_name : "userName?", 
  first_name : "firstName?",
  last_name : "lastName?",
  account_status : "accountStatus?",
  channel_name : "channelName?",
  lessons_started : "lessonsStarted?",
  lessons_completed : "lessonsCompleted?",
  lesson_id : "lessonId?",
  total_lesson_points : "totalLessonPoints?",
  total_lesson_points_covered : "totalLessonPointsCovered?",
  total_records : "totalRecords?"
}

const lessonPublicationReportMapper = {
  user_id : "userId?",
  group_name : "groupName?", 
  user_name : "userName?", 
  first_name : "firstName?",
  last_name : "lastName?",
  account_status : "accountStatus?",
  channel_name : "channelName?",
  lesson_id : "lessonId?",
  publication_id : "publicationId?",
  lesson_title : "lessonTitle?",
  time_submitted : "timeSubmitted?",
  time_published : "timePublished?"
}

const topLessonMapper = {
  title : "title?",
  no_of_views : "noOfViews?" , 
  completion_rate : "completionRate?", 
  total_records : "totalRecords?" 
}

const topLessonDaywiseMapper = {
  context_date : "contextDate?",
	title : "title?", 
	no_of_views : "noOfViews?", 
	completion_rate : "completionRate?",
	completion_numbers: "completedNumbers?",
  opened_numbers : "openedNumbers?",
	total_lesson_published : "totalLessonPublished?",
  totalrecords : "totalrecords?"  
}

module.exports.topLessonDaywiseMapper = topLessonDaywiseMapper;
module.exports.topLessonMapper = topLessonMapper;
module.exports.lessonPublicationReportMapper = lessonPublicationReportMapper;
module.exports.lessonInteractionOverviewMapper = lessonInteractionOverviewMapper;
module.exports.lessonInteractionReportMapper = lessonInteractionReportMapper;
module.exports.lessonentityJson = lessonentityJson;
module.exports.lessondtoJson = lessondtoJson;
module.exports.lessonentityToDtoJson = lessonentityToDtoJson;
module.exports.lessondtoToEntityJson = lessondtoToEntityJson;
module.exports.lessonBasedOnChannelMapper = lessonBasedOnChannelMapper;