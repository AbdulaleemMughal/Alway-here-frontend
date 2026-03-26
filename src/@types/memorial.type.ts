export type UserDetailType = {
  coverImage: string;
  profileImage: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  location: string;
  _id: string;
};

export type MemorialType = {
  userId: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  fontWeight: string;
  isActive: boolean;
  totalVideos: number;
  totalTimelines: number;
  userDetail: UserDetailType;
  _id: string;
};
