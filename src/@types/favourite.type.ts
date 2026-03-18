export type FavouriteType = {
  _id: string;
  memorialId: string;
  heading: string;
  isActive: boolean;
  favourites: {
    _id: string;
    question: string;
    answer: string;
  }[];
  createdAt: string;
  updatedAt: string;
};

export type UpdateFavouritePayload = {
  heading?: string;
  isActive?: boolean;
  question?: string;
  answer?: string;
};
