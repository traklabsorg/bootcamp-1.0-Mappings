const liveContententityJson = {
  // AutoOffset: "AutoOffset?",
  Id: "Id?",
  url: "url?",
  contentDetails: "contentDetails?",
  webinarDetails: "webinarDetails?",
  startDateTime: "startDateTime?",
  duration: "duration?",
  endDate: "endDate?",
  recordingURL:"recordingURL?",
  externalMeetingProviderUserId: "externalMeetingProviderUserId?",
  meetingProviderId: "meetingProviderId?",
  userId: "userId?",
  typeOfRegistration: "typeOfRegistration?",
  user: "user?",
  hostUsers: "hostUsers?",
  meetingProvider: "meetingProvider?",
  liveContentUser:"liveContentUser?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"

  //SocketId: "SocketId?",
  // 
};

const liveContentdtoJson = {
  // AutoOffset: "AutoOffset?",
  Id: "Id?",
  url: "url?",
  contentDetails: "contentDetails?",
  webinarDetails: "webinarDetails?",
  startDateTime: "startDateTime?",
  duration: "duration?",
  endDate: "endDate?",
  recordingURL:"recordingURL?",
  externalMeetingProviderUserId: "externalMeetingProviderUserId?",
  meetingProviderId: "meetingProviderId?",
  userId: "userId?",
  typeOfRegistration: "typeOfRegistration?",
  user: "user?",
  hostUsers: "hostUsers?",
  meetingProvider: "meetingProvider?",
  liveContentUser:"liveContentUser?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"

  //SocketId: "SocketId?",
  // 
};

const liveContententityToDtoJson = {
  // AutoOffset: "AutoOffset?",
  Id: "Id?",
  url: "url?",
  contentDetails: "contentDetails?",
  webinarDetails: "webinarDetails?",
  startDateTime: "startDateTime?",
  duration: "duration?",
  endDate: "endDate?",
  recordingURL:"recordingURL?",
  externalMeetingProviderUserId: "externalMeetingProviderUserId?",
  meetingProviderId: "meetingProviderId?",
  userId: "userId?",
  typeOfRegistration: "typeOfRegistration?",
  user: "user?",
  hostUsers: "hostUsers?",
  meetingProvider: "meetingProvider?",
  liveContentUser:"liveContentUser?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"

  //SocketId: "SocketId?",
  // 
};

const liveContentdtoToEntityJson = {
  // AutoOffset: "AutoOffset?",
  Id: "Id?",
  url: "url?",
  contentDetails: "contentDetails?",
  webinarDetails: "webinarDetails?",
  startDateTime: "startDateTime?",
  duration: "duration?",
  endDate: "endDate?",
  recordingURL:"recordingURL?",
  externalMeetingProviderUserId: "externalMeetingProviderUserId?",
  meetingProviderId: "meetingProviderId?",
  userId: "userId?",
  typeOfRegistration: "typeOfRegistration?",
  user: "user?",
  hostUsers: "hostUsers?",
  meetingProvider: "meetingProvider?",
  liveContentUser:"liveContentUser?",
  ModifiedBy: "ModifiedBy?",
  CreatedBy: "CreatedBy?",
  CreationDate: "CreationDate?",
  ModifiedDate: "ModifiedDate?"
};


const webinarDetailsReportMapper = {
  
  user_id : "userId?",
  group_name : "groupName?", 
  user_name : "userName?", 
  first_name : "firstName?",
  last_name : "lastName?",
  account_status : "accountStatus?",
  scheduled_date_time: "scheduledDateTime?",
	number_of_attendees: "numberOfAttendees?",
	webinar_type : "webinarType?"
};

const topWebinarsMapper = {
  
  title : "title?" ,
  cover_image : "coverImage?",
  no_of_attendees : "noOfAttendees?", 
  totalrecords : "totalRecords?" 
};

const topWebinarsDaywiseMapper = {
  
  context_date : "contextDate?" ,
  no_of_webinars : "noOfWebinars?", 
  totalrecords : "totalRecords?" 
};


module.exports.topWebinarsDaywiseMapper = topWebinarsDaywiseMapper;
module.exports.topWebinarsMapper = topWebinarsMapper;
module.exports.webinarDetailsReportMapper = webinarDetailsReportMapper;
module.exports.liveContententityJson = liveContententityJson;
module.exports.liveContentdtoJson = liveContentdtoJson;
module.exports.liveContententityToDtoJson = liveContententityToDtoJson;
module.exports.liveContentdtoToEntityJson = liveContentdtoToEntityJson;
