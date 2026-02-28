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
  fontWeigth: string;
  isActive: boolean;
  userDetail: UserDetailType;
  _id: string;
};
