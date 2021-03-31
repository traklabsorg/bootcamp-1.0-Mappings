
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
  
  module.exports.sectionInteractionReportMapper = sectionInteractionReportMapper;
  module.exports.sectionentityJson = sectionentityJson;
  module.exports.sectiondtoJson = sectiondtoJson;
  module.exports.sectionentityToDtoJson = sectionentityToDtoJson;
  module.exports.sectiondtoToEntityJson = sectiondtoToEntityJson;