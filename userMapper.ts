
const userentityJson = {
  Id: "Id?",
  userName: "userName?",
  communityId: "communityId?",
  userType: "userType?",
  userDetails: "userDetails?",
  userEmail: "userEmail?",
  userImage: "userImage?",
  isActive: "isActive?",
  lastLogonDateTime: "lastLogonDateTime?",
  userAdditionalDetails: "userAdditionalDetails?",
  liveContentUser: "liveContentUser?",
  userMeetingProvider: "userMeetingProvider?",
  groupUser: "groupUser?",
  enrolledMeeting: "enrolledMeeting?",
  lessonDataReview: "lessonDataReview?",
  lessonDataUser: "lessonDataUser?",
  community: "community?",
  liveContent: "liveContent?",
  paymentInfo: "paymentInfo?",


  //SocketId: "SocketId?",

  externalUserId: "externalUserId?",
  externalTenantUserId: "externalTenantUserId?",
  externalTenantUserAppId: "externalTenantUserAppId?",
  channelUser: "channelUser?",
  sectionReview: "sectionReview?",
  payment: "payment?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"

};

const userdtoJson = {
  Id: "Id?",
  userName: "userName?",
  communityId: "communityId?",
  userType: "userType?",
  userDetails: "userDetails?",
  userEmail: "userEmail?",
  userImage: "userImage?",
  isActive: "isActive?",
  lastLogonDateTime: "lastLogonDateTime?",
  userAdditionalDetails: "userAdditionalDetails?",
  liveContentUser: "liveContentUser?",
  userMeetingProvider: "userMeetingProvider?",
  groupUser: "groupUser?",
  enrolledMeeting: "enrolledMeeting?",
  lessonDataReview: "lessonDataReview?",
  lessonDataUser: "lessonDataUser?",
  community: "community?",
  liveContent: "liveContent?",
  paymentInfo: "paymentInfo?",

  //SocketId: "SocketId?",

  externalUserId: "externalUserId?",
  externalTenantUserId: "externalTenantUserId?",
  externalTenantUserAppId: "externalTenantUserAppId?",
  channelUser: "channelUser?",
  sectionReview: "sectionReview?",
  payment: "payment?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
};

const userentityToDtoJson = {
  Id: "Id?",
  userName: "userName?",
  communityId: "communityId?",
  userType: "userType?",
  userDetails: "userDetails?",
  userEmail: "userEmail?",
  userImage: "userImage?",
  isActive: "isActive?",
  lastLogonDateTime: "lastLogonDateTime?",
  userAdditionalDetails: "userAdditionalDetails?",
  liveContentUser: "liveContentUser?",
  userMeetingProvider: "userMeetingProvider?",
  groupUser: "groupUser?",
  enrolledMeeting: "enrolledMeeting?",
  lessonDataReview: "lessonDataReview?",
  lessonDataUser: "lessonDataUser?",
  community: "community?",
  liveContent: "liveContent?",
  paymentInfo: "paymentInfo?",

  //SocketId: "SocketId?",

  externalUserId: "externalUserId?",
  externalTenantUserId: "externalTenantUserId?",
  externalTenantUserAppId: "externalTenantUserAppId?",
  channelUser: "channelUser?",
  sectionReview: "sectionReview?",
  payment: "payment?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
};

const userdtoToEntityJson = {
  Id: "Id?",
  userName: "userName?",
  communityId: "communityId?",
  userType: "userType?",
  userDetails: "userDetails?",
  userEmail: "userEmail?",
  userImage: "userImage?",
  isActive: "isActive?",
  lastLogonDateTime: "lastLogonDateTime?",
  userAdditionalDetails: "userAdditionalDetails?",
  liveContentUser: "liveContentUser?",
  userMeetingProvider: "userMeetingProvider?",
  groupUser: "groupUser?",
  enrolledMeeting: "enrolledMeeting?",
  lessonDataReview: "lessonDataReview?",
  lessonDataUser: "lessonDataUser?",
  community: "community?",
  liveContent: "liveContent?",
  paymentInfo: "paymentInfo?",

  //SocketId: "SocketId?",

  externalUserId: "externalUserId?",
  externalTenantUserId: "externalTenantUserId?",
  externalTenantUserAppId: "externalTenantUserAppId?",
  channelUser: "channelUser?",
  sectionReview: "sectionReview?",
  payment: "payment?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
};

const userDetailsReportMapper = {
  user_id: "userId?",
  group_name: "groupName?",
  user_name: "userName?",
  first_name: "firstName?",
  last_name: "lastName?",
  account_status: "accountStatus?",
  channel_name: "channelName?",
  access_rights_level: "accessRightsLevel?",
  account_creation_timestamp: "actionCreationTimestamp?",
  number_of_joined_channels: "numberOfJoinedChannels?",
  joined_channel_ids: "joinedChannelIds?",
  joined_channel_names: "joinedChannelNames?",
  last_login: "lastLogin?"
}

const profileDataMapper = {
  user_id: "userId?",
  published_courses: "publishedCourses?",
  published_lessons: "publishedLessons?",
  published_webinars: "publishedWebinars?",
  consumed_courses: "consumedCourses?",
  consumed_lessons: "consumedLessons?",
  consumed_webinars: "consumedWebinars?",
  group_rank: "groupRank?",
  total_points: "totalPoints?",
  total_member_in_group: "totalMemberInGroup?",
  channel_points_data: "channelPointsData?"
}

module.exports.profileDataMapper = profileDataMapper;
module.exports.userDetailsReportMapper = userDetailsReportMapper;
module.exports.userentityJson = userentityJson;
module.exports.userdtoJson = userdtoJson;
module.exports.userentityToDtoJson = userentityToDtoJson;
module.exports.userdtoToEntityJson = userdtoToEntityJson;