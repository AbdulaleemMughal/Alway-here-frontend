export type VideoType = {
  _id: string;
  memorialId: string;
  heading: string;
  isActive: boolean;
  videos: [Videos];
  createdAt: string;
  updatedAt: string;
};

export type Videos = {
  _id: string;
  url: string;
};

export type UpdateVideoPayload = {
  heading?: string;
  isActive?: boolean;
  videoUrl?: string;
};
