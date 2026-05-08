import type { Manga } from "./types";

const chapterSet = (startDate: string): Manga["chapters"] => {
  const base = new Date(startDate);
  return Array.from({ length: 8 }).map((_, i) => ({
    number: i + 1,
    title: [
      "A Quiet Oath",
      "The City Under Glass",
      "Ashes and Ink",
      "Borrowed Names",
      "Night Signal",
      "Rainline Contract",
      "Tremor in Neon",
      "The Last Stairwell"
    ][i],
    releaseDate: new Date(base.getTime() + i * 86400000 * 7).toISOString().slice(0, 10)
  }));
};

export const manga: Manga[] = [
  { id: "shadow-garden", slug: "shadow-garden", title: "Shadow Garden", altTitle: "The Garden Beneath", cover: "/images/covers/cover-1.svg", banner: "/images/banners/banner-1.svg", status: "Ongoing", rating: 4.7, year: 2022, author: "Ren Akiyama", artist: "Mika Tohru", genres: ["Dark Fantasy", "Mystery", "Action"], description: "A quiet city hides a second world beneath its streets, where forgotten names become weapons.", latestChapter: 42, readerCount: "18.2k", updatedAgo: "3h ago", chapters: chapterSet("2026-01-12") },
  { id: "lantern-theory", slug: "lantern-theory", title: "Lantern Theory", altTitle: "Hypothesis of Light", cover: "/images/covers/cover-2.svg", banner: "/images/banners/banner-2.svg", status: "Ongoing", rating: 4.6, year: 2023, author: "Sora Min", artist: "Ken Odae", genres: ["Urban Fantasy", "Supernatural"], description: "Students investigate supernatural glitches that only appear under train station lights.", latestChapter: 27, readerCount: "12.7k", updatedAgo: "10h ago", chapters: chapterSet("2026-02-02") },
  { id: "hollow-courtyard", slug: "hollow-courtyard", title: "Hollow Courtyard", cover: "/images/covers/cover-3.svg", banner: "/images/banners/banner-3.svg", status: "Completed", rating: 4.5, year: 2021, author: "Jin Park", artist: "Nari Seo", genres: ["Psychological", "Drama"], description: "A closed boarding house and six residents unraveling one memory at a time.", latestChapter: 68, readerCount: "21.4k", updatedAgo: "1d ago", chapters: chapterSet("2025-11-01") },
  { id: "riverline-blade", slug: "riverline-blade", title: "Riverline Blade", cover: "/images/covers/cover-4.svg", banner: "/images/banners/banner-4.svg", status: "Hiatus", rating: 4.3, year: 2020, author: "Tae Sung", artist: "Hana Cho", genres: ["Martial Arts", "Revenge Arcs"], description: "A disgraced duelist crosses floating districts to reclaim a stolen style.", latestChapter: 51, readerCount: "16.9k", updatedAgo: "4d ago", chapters: chapterSet("2025-09-14") },
  { id: "copper-skyletters", slug: "copper-skyletters", title: "Copper Skyletters", cover: "/images/covers/cover-5.svg", banner: "/images/banners/banner-5.svg", status: "Ongoing", rating: 4.4, year: 2024, author: "Iori Dane", artist: "Mina Val", genres: ["Sci-Fi", "Mystery"], description: "Courier pilots decode hidden messages buried inside weather satellites.", latestChapter: 19, readerCount: "9.8k", updatedAgo: "6h ago", chapters: chapterSet("2026-03-01") },
  { id: "weekday-sun", slug: "weekday-sun", title: "Weekday Sun", cover: "/images/covers/cover-6.svg", banner: "/images/banners/banner-6.svg", status: "Ongoing", rating: 4.2, year: 2024, author: "Riku Hane", artist: "Aoi Sena", genres: ["Cozy Slice of Life", "Comedy"], description: "A tiny cafe opens before dawn for people who need one honest conversation.", latestChapter: 22, readerCount: "7.2k", updatedAgo: "13h ago", chapters: chapterSet("2026-02-11") },
  { id: "bone-orbit", slug: "bone-orbit", title: "Bone Orbit", cover: "/images/covers/cover-7.svg", banner: "/images/banners/banner-7.svg", status: "Completed", rating: 4.8, year: 2019, author: "Kael Miro", artist: "Eun Rei", genres: ["Dark Fantasy", "Sci-Fi"], description: "An exorcist astronaut chases a haunted station spiraling toward a red giant.", latestChapter: 74, readerCount: "29.1k", updatedAgo: "2d ago", chapters: chapterSet("2025-04-08") },
  { id: "velvet-division", slug: "velvet-division", title: "Velvet Division", cover: "/images/covers/cover-8.svg", banner: "/images/banners/banner-8.svg", status: "Ongoing", rating: 4.1, year: 2023, author: "Nox Ie", artist: "Reina Vol", genres: ["Action", "Urban Fantasy"], description: "A courier guild moonlights as paranormal cleanup in a city of illegal relics.", latestChapter: 33, readerCount: "11.5k", updatedAgo: "8h ago", chapters: chapterSet("2026-01-24") },
  { id: "room-for-ghosts", slug: "room-for-ghosts", title: "Room for Ghosts", cover: "/images/covers/cover-9.svg", banner: "/images/banners/banner-9.svg", status: "Ongoing", rating: 4.6, year: 2022, author: "Aya Frost", artist: "Mori Kei", genres: ["Found Family", "Supernatural"], description: "A failing hostel survives by hosting spirits no shrine can keep.", latestChapter: 39, readerCount: "14.2k", updatedAgo: "5h ago", chapters: chapterSet("2025-12-20") },
  { id: "salt-and-violet", slug: "salt-and-violet", title: "Salt and Violet", cover: "/images/covers/cover-10.svg", banner: "/images/banners/banner-10.svg", status: "Completed", rating: 4.0, year: 2018, author: "Mai Ko", artist: "Rin Lu", genres: ["Slow Burn Romance", "Drama"], description: "Two rival archivists restore forbidden letters and keep falling into each other.", latestChapter: 54, readerCount: "13.3k", updatedAgo: "3d ago", chapters: chapterSet("2025-06-10") },
  { id: "juniper-fall", slug: "juniper-fall", title: "Juniper Fall", cover: "/images/covers/cover-11.svg", banner: "/images/banners/banner-11.svg", status: "Hiatus", rating: 4.5, year: 2020, author: "Han El", artist: "Sei Toro", genres: ["Mystery", "Psychological"], description: "A mountain town resets every nine days and only one teen remembers.", latestChapter: 47, readerCount: "17.8k", updatedAgo: "1w ago", chapters: chapterSet("2025-08-05") },
  { id: "silk-thunder", slug: "silk-thunder", title: "Silk Thunder", cover: "/images/covers/cover-12.svg", banner: "/images/banners/banner-12.svg", status: "Ongoing", rating: 4.4, year: 2024, author: "Noel Cast", artist: "Jae Ori", genres: ["Martial Arts", "Found Family"], description: "Street performers train in an outlaw dojo to protect kids from debt syndicates.", latestChapter: 15, readerCount: "8.6k", updatedAgo: "2h ago", chapters: chapterSet("2026-03-19") }
];

export const mangaBySlug = Object.fromEntries(manga.map((entry) => [entry.slug, entry]));
