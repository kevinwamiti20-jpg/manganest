import type { Review, CommunityPick } from "./types";

export const reviews: Review[] = [
  { id: "r-1", mangaSlug: "shadow-garden", userId: "u-1", rating: 4.8, text: "The setting feels like a forgotten metro map someone cursed into existence. I am obsessed.", likes: 482, comments: 39, createdAt: "2h ago" },
  { id: "r-2", mangaSlug: "room-for-ghosts", userId: "u-2", rating: 4.6, text: "Warm, weird, and quietly devastating. Every chapter lands a tiny emotional uppercut.", likes: 391, comments: 27, createdAt: "7h ago" },
  { id: "r-3", mangaSlug: "riverline-blade", userId: "u-3", rating: 4.1, text: "The choreography still clears most modern action series. Worth the hiatus pain.", likes: 305, comments: 18, createdAt: "11h ago" },
  { id: "r-4", mangaSlug: "hollow-courtyard", userId: "u-4", rating: 4.7, text: "The final arc ties every clue without insulting your intelligence. Rare and precious.", likes: 276, comments: 12, createdAt: "1d ago" },
  { id: "r-5", mangaSlug: "salt-and-violet", userId: "u-5", rating: 4.3, text: "I came for yearning, stayed for the archive politics and letter restoration scenes.", likes: 214, comments: 11, createdAt: "1d ago" },
  { id: "r-6", mangaSlug: "copper-skyletters", userId: "u-6", rating: 4.2, text: "Great systems storytelling. Every world rule causes a human problem, not just lore.", likes: 188, comments: 15, createdAt: "2d ago" },
  { id: "r-7", mangaSlug: "weekday-sun", userId: "u-7", rating: 4.0, text: "The pace is gentle but never empty. A comfort read with excellent panel timing.", likes: 160, comments: 9, createdAt: "2d ago" },
  { id: "r-8", mangaSlug: "bone-orbit", userId: "u-8", rating: 4.9, text: "A masterpiece of scale. Cosmic horror with deeply personal stakes.", likes: 590, comments: 44, createdAt: "3d ago" }
];

export const communityPicks: CommunityPick[] = [
  { userId: "u-1", mangaSlug: "shadow-garden", quote: "Feels like noir fantasy written at 3am in the rain." },
  { userId: "u-5", mangaSlug: "salt-and-violet", quote: "Romance with emotional consequences, not fluff." },
  { userId: "u-3", mangaSlug: "silk-thunder", quote: "Underrated action layouts and huge heart." },
  { userId: "u-6", mangaSlug: "copper-skyletters", quote: "For readers who love puzzle-box worldbuilding." }
];
