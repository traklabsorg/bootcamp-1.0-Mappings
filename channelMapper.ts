
const channelentityJson = {
  Id : "Id?",
  title : "title?",
  channelType : "channelType?",
  isDraft: "isDraft?",
  channelDetails : "channelDetails?",
  communityId: "communityId?",
  channelSequenceId: "channelSequenceId?",
  isCommunityChannel: "isCommunityChannel?",
  community: "community?",
  channelBillPlan: "channelBillPlan?",
  section: "section?",
  // lessonDataUsers: "lessonDataUsers?",
  channelGroup: "channelGroup?",
  //SocketId: "SocketId?",
    
    channelUser:"channelUser?",
    ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
};

const channeldtoJson = {
  Id : "Id?",
  title : "title?",
  channelType : "channelType?",
  isDraft: "isDraft?",
  channelDetails : "channelDetails?",
  communityId: "communityId?",
  channelSequenceId: "channelSequenceId?",

  community: "community?",
  isCommunityChannel: "isCommunityChannel?",
  channelBillPlan: "channelBillPlan?",
  section: "section?",
  // lessonDataUsers: "lessonDataUsers?",
  channelGroup: "channelGroup?",
  //SocketId: "SocketId?",
    
    channelUser:"channelUser?",
    ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
};

const channelentityToDtoJson = {
  Id : "Id?",
  title : "title?",
  channelType : "channelType?",
  isDraft: "isDraft?",
  channelDetails : "channelDetails?",
  communityId: "communityId?",
  isCommunityChannel: "isCommunityChannel?",
  channelSequenceId: "channelSequenceId?",

  community: "community?",
  channelBillPlan: "channelBillPlan?",
  section: "section?",
  // lessonDataUsers: "lessonDataUsers?",
  channelGroup: "channelGroup?",
  //SocketId: "SocketId?",
    
    channelUser:"channelUser?",
    ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
};

const channeldtoToEntityJson= {
  Id : "Id?",
  title : "title?",
  channelType : "channelType?",
  isDraft: "isDraft?",
  channelDetails : "channelDetails?",
  communityId: "communityId?",
  channelSequenceId: "channelSequenceId?",

  community: "community?",
  isCommunityChannel: "isCommunityChannel?",
  channelBillPlan: "channelBillPlan?",
  section: "section?",
  // lessonDataUsers: "lessonDataUsers?",
  channelGroup: "channelGroup?",
  //SocketId: "SocketId?",
    
    channelUser:"channelUser?",
    ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
};

const channelDetailsReportMapper = {
  user_id : "userId?",
  group_name : "groupName?", 
  user_name : "userName?", 
  first_name : "firstName?",
  last_name : "lastName?",
  account_status : "accountStatus?",
  channel_name : "channelName?",
  channel_creation_timestamp : "channelCreationTimestamp?",
	channel_status : "channelStatus?",
	number_of_lessons : "numberOfLessons?",
	number_of_courses : "numberOfCourses?"
}

const channelLatestContentMapper = {
  lesson_id : "lessonId?",
	section_id : "sectionId?",
	channel_title : "channelTitle?", 
	section_title : "sectionTitle?", 
	lesson_title : "lessonTitle?", 
  lesson_creator_user_id : "lessonCreatorUserId?",
  lesson_creator_user_name : "lessonCreatorUserName?",
  lesson_creator_image : "lessonCreatorImage?", 
  lesson_cover_image : "lessonCoverImage?", 
  section_creator_user_id : "sectionCreatorUserId?",
  section_creator_user_name : "sectionCreatorUserName?",
  section_creator_image : "sectionCreatorImage?",
	section_type : "sectionType?"
}

module.exports.channelentityJson = channelentityJson;
module.exports.channelLatestContentMapper = channelLatestContentMapper;
module.exports.channeldtoJson = channeldtoJson;
module.exports.channelentityToDtoJson = channelentityToDtoJson;
module.exports.channeldtoToEntityJson = channeldtoToEntityJson;