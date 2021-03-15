const channelGroupentityJson = {
  Id:"Id?",
  channelId : "channelId?",
  groupId : "groupId?",
  channelGroupDetails : "channelGroupDetails?",
  channel : "channel?",
  group : "group?",
  channelGroupRevokeUsers : "channelGroupRevokeUsers?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
//SocketId: "SocketId?",
  
};

const channelGroupdtoJson = {
  Id:"Id?",
  channelId : "channelId?",
  groupId : "groupId?",
  channelGroupDetails : "channelGroupDetails?",
  channel : "channel?",
  group : "group?",
  channelGroupRevokeUsers : "channelGroupRevokeUsers?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
//SocketId: "SocketId?",
  
};

const channelGroupentityToDtoJson = {
  Id:"Id?",
  channelId : "channelId?",
  groupId : "groupId?",
  channelGroupDetails : "channelGroupDetails?",
  channel : "channel?",
  group : "group?",
  channelGroupRevokeUsers : "channelGroupRevokeUsers?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
//SocketId: "SocketId?",
  
};

const channelGroupdtoToEntityJson = {
  Id:"Id?",
  channelId : "channelId?",
  groupId : "groupId?",
  channelGroupDetails : "channelGroupDetails?",
  channel : "channel?",
  group : "group?",
  channelGroupRevokeUsers : "channelGroupRevokeUsers?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
//SocketId: "SocketId?",
  
};

const channelGroupBasedOnChannelMapper = {
  community_id : "communityId?",
  group_id : "groupId?",
  group_name : "groupName?",
  channel_id : "channelId?",
  channel_name : "channelName?",
  label_name : "labelName?",
  totalrecords : "totalRecords?"
}

const managedContentBasedOnChannelMapper = {
  section_id : "sectionId?",
  lesson_id : "lessonId?",
  channel_title : "channeltitle?",
  section_title : "sectionTitle?",
  secion_or_course_url : "sectionOrCourseUrl",
  user_image_url : "userImageUrl",
  user_name : "userName",
  section_type : "sectionType",
  lesson_count : "lessonCount",
  publication_type : "publicationType",
  totalRecords : "totalRecords?"
}

const channelUsersByGroupMapper = {
  user_id : "userId?", 
  username : "userName?", 
	groupname : "groupName?", 
	channel_id : "channelId?", 
	channel_name : "channelName?", 
	role_names : "roleNames?", 
	type_of_association : "typeOfAssociation?", 
	label_name : "labelName?", 
	totalrecords : "totalRecords?"

}


module.exports.channelUsersByGroupMapper = channelUsersByGroupMapper;
module.exports.channelGroupentityJson = channelGroupentityJson;
module.exports.channelGroupdtoJson = channelGroupdtoJson;
module.exports.channelGroupentityToDtoJson = channelGroupentityToDtoJson;
module.exports.channelGroupdtoToEntityJson = channelGroupdtoToEntityJson;
module.exports.channelGroupBasedOnChannelMapper = channelGroupBasedOnChannelMapper;