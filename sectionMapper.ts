
const sectionentityJson = {
  Id:"Id?",
    title: "title?",
    contents: "contents?",
    liveContents: "liveContents?",
    sectionDetails: "sectionDetails?",
    sectionType: "sectionType?",
    channelId: "channelId?",
    lesson: "lesson?",
    sectionReview: "sectionReview?",
    channel: "channel?",
    ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
    //SocketId: "SocketId?",
      
  };
  
const sectiondtoJson = {
  Id:"Id?",
    title: "title?",
    contents: "contents?",
    liveContents: "liveContents?",
    sectionDetails: "sectionDetails?",
    sectionType: "sectionType?",
    channelId: "channelId?",
    lesson: "lesson?",
    sectionReview: "sectionReview?",
    channel: "channel?",
    ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
    //SocketId: "SocketId?",
      
  };
  
const sectionentityToDtoJson = {
  Id:"Id?",
    title: "title?",
    contents: "contents?",
    liveContents: "liveContents?",
    sectionDetails: "sectionDetails?",
    sectionType: "sectionType?",
    channelId: "channelId?",
    lesson: "lesson?",
    sectionReview: "sectionReview?",
    channel: "channel?",
    ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
    //SocketId: "SocketId?",
      
  };
  
  const sectiondtoToEntityJson= {
    Id:"Id?",
    title: "title?",
    contents: "contents?",
    liveContents: "liveContents?",
    sectionDetails: "sectionDetails?",
    sectionType: "sectionType?",
    channelId: "channelId?",
    lesson: "lesson?",
    sectionReview: "sectionReview?",
    channel: "channel?",
    ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
    //SocketId: "SocketId?",
      
  };


  const sectionInteractionReportMapper = {
    user_id : "userId?",
    group_name : "groupName?", 
    user_name : "userName?", 
    first_name : "firstName?",
    last_name : "lastName?",
    account_status : "accountStatus?",
    channel_name : "channelName?",
    course_id : "courseId?",
    publication_id : "publicationId?",
    course_title : "courseTitle?",
    time_opened : "timeOpened?",
    time_completed : "timeCompleted?"
  }


  const sectionPublicationReportMapper = {
    user_id : "userId?",
    group_name : "groupName?", 
    user_name : "userName?", 
    first_name : "firstName?",
    last_name : "lastName?",
    account_status : "accountStatus?",
    channel_name : "channelName?",
    course_id : "courseId?",
    publication_id : "publicationId?",
    course_title : "courseTitle?",
    time_submitted : "timeSubmitted?",
    time_published : "timePublished?"
  }
  
  const topCoursesMapper = {
    title : "title?",
    cover_image : "coverImage?",
    no_of_views : "noOfViews?" , 
    completion_rate : "completionRate?", 
    totalrecords : "totalRecords?" 
  }

  const topCoursesDaywiseMapper = {
    context_date : "contextDate?",
    title : "title?", 
    no_of_views : "noOfViews?", 
    completion_rate : "completionRate?",
    completion_numbers: "completedNumbers?",
    opened_numbers : "openedNumbers?",
    total_course_published : "totalCoursePublished?",
    totalrecords : "totalrecords?"  
  }

  const sectionDailyEngagementMapper = {
    hour_value: "hourValue?",
    no_of_unique_accesses: "noOfUniqueAccesses?",
    totalrecords : "totalrecords?" 
  }

  const sectionWeeklyEngagementMapper = {
    week_value_in_string : "weekValueInString?",
    no_of_unique_accesses: "noOfUniqueAccesses?",
    totalrecords : "totalrecords?"
  }
  
  module.exports.sectionDailyEngagementMapper = sectionDailyEngagementMapper;
  module.exports.sectionWeeklyEngagementMapper = sectionWeeklyEngagementMapper;
  module.exports.topCoursesDaywiseMapper = topCoursesDaywiseMapper;
  module.exports.topCoursesMapper = topCoursesMapper;
  module.exports.sectionInteractionReportMapper = sectionInteractionReportMapper;
  module.exports.sectionentityJson = sectionentityJson;
  module.exports.sectiondtoJson = sectiondtoJson;
  module.exports.sectionentityToDtoJson = sectionentityToDtoJson;
  module.exports.sectiondtoToEntityJson = sectiondtoToEntityJson;