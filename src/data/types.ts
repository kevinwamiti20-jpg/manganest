export type MangaStatus = "Ongoing" | "Completed" | "Hiatus";

export type Chapter = {
  number: number;
  title: string;
  releaseDate: string;
};

export type Manga = {
  id: string;
  slug: string;
  title: string;
  altTitle?: string;
  cover: string;
  banner: string;
  status: MangaStatus;
  rating: number;
  year: number;
  author: string;
  artist: string;
  genres: string[];
  description: string;
  latestChapter: number;
  readerCount: string;
  updatedAgo: string;
  chapters: Chapter[];
};

export type User = {
  id: string;
  username: string;
  avatar: string;
  favoriteGenres: string[];
  readsThisMonth: number;
  followers: string;
  bio: string;
};

export type Review = {
  id: string;
  mangaSlug: string;
  userId: string;
  rating: number;
  text: string;
  likes: number;
  comments: number;
  createdAt: string;
};

export type Comment = {
  id: string;
  mangaSlug: string;
  userId: string;
  body: string;
  createdAt: string;
};

export type Discussion = {
  id: string;
  title: string;
  replies: number;
  lastActive: string;
  participantIds: string[];
};

export type Collection = {
  id: string;
  title: string;
  curatorId: string;
  description: string;
  mangaSlugs: string[];
};

export type CommunityPick = {
  userId: string;
  mangaSlug: string;
  quote: string;
};
