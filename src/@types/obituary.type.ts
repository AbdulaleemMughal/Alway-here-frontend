export type ObituaryType = {
  memorialId: string;
  _id: string;
  isActive: boolean;
  heading: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateObituaryPayload = {
  isActive?: boolean;
  heading?: string;
  message?: string
};
