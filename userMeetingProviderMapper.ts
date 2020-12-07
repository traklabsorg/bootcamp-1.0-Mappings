

const entityJson = {
  user_meeting_provider_id : "user_meeting_provider_id?",
  userId : "userId?",
  meetingProviderId : "meetingProviderId?"

};

const dtoJson = {
  user_meeting_provider_idDto : "user_meeting_provider_idDto?",
  userIdDto : "userIdDto?",
  meetingProviderIdDto : "meetingProviderIdDto?"
};

const entityToDtoJson = {
  user_meeting_provider_idDto : "user_meeting_provider_id?",
  userIdDto : "userId?",
  meetingProviderIdDto : "meetingProviderId?"
};

const dtoToEntityJson= {
  user_meeting_provider_id : "user_meeting_provider_idDto?",
  userId : "userIdDto?",
  meetingProviderId : "meetingProviderIdDto?"
};

module.exports.entityJson = entityJson;
module.exports.dtoJson = dtoJson;
module.exports.entityToDtoJson = entityToDtoJson;
module.exports.dtoToEntityJson = dtoToEntityJson;