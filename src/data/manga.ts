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

const stitchArtwork = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAwLE7ZGhQJDwjwIu--WXdkt_SmKIjXOJS9lVJknebf7dy6nouM9r3Z8jl_AYdRiz_XqEu4-P4aojhVo6WH0ZhdQjYfBXFgHDokjtEUilG9Cn8S7m75E7fODoqF3VU_Tx-gqyjqdTnRa6rBa28hyeyEKONihsqzfH8WMrzAIVUmuRwenmI7VFaWRuw1yjLmuVKs8U8P4iYNzMKEEaYMoqczuwymu24pbCLhztOy1_ZYrgdRVerfwaFe7VdtarxM9uzqRasgNRZiMrpv",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9hP3_eGNBIz8xJSm8NHxCAJ9CsO1-cAUikpWKqmclmr7Vik_-qIqKlWsrMyYRh4qxEXLhcE9b84lIjgu6pL8WK3DURkUNCgeFluQP7IgCG2t-9o32kxI3IAA_SHNYy6O3DeXzlO4kGuJFGBTmA3u3zgIK23hV1mzVECmBGJhH-2bmZ6i1IJHI1WrSBPKeosnPvp0bDcWY2bYMOMI7SoLr5gBW9_VBt4_V0Tuu2jMH9sDP1cnE5fgWgOu2XAEJcTH9o1H3XHzzofFB",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAEeBp8FvmNoLDCtut3BI7j3J54SPbvOe8Jc42DHsWrUPVYOf5js8YyGfs3phRSNsnCHve4hvP9e-esFle0O0CURMYNecukhU4BQdcGzSUFmo3h-NJw_-Oj6H7BQ9Zj3PXRZBjE5mck6jMMdhHXO354sdlO77ISz-aqFOVvgVxITOywSGcp2kmOnymBUcr4y7F81kFIIq9wBgk-GZIFMc-vTktZLFsGFNiaeEy1ffiUI8_buOt3s3acrMNAfw3c3Sajo7CQeUwFOoQE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBDrzxs1B4eXvLxiDdVgxBuzNOq0irXI0PBoTPqxBlO0-EYmwX5V0Y9E24jE0vZNy9NeG6fD1bKcb83yRbc85e_b3XM4jE_2lrEMrX0NFNctf0B9y35ETvHNCtt9q0xkr6FWpS6pCADD3aHF8lwRVFl4cKG_cVuVKAi_aMrngIGMkVO8qGUQT6TZQ_VNI6lMgaArxMgBVXiP5dvb4ohDt5eF7z-GkFdftTSJRiAifSOVZjVpFju11Eg8ENjNNiWoQupuH5zhXVJzeBU",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBjOWfe-z3yWLoNiEaxTYg5L7H75Mhlfc2MHfZjO2kreXuwsgNxTjVFUdwCmCZW8QhfhVaWYB_SDAI-Xlff5yWdjSypfiGj3ffUMJid3LdRK8Jxh6nje8Yu7lCIHQZQfvW_Skr8h1z2_E3AJaxyXIRaWGiHqh9J7MxjhM26ixt2jxKklQ8wvI5r7DpiOiuR1LLa8cQwGsvIuFeWLQcrs4wGRJnQmGNgHB9l8Ij1R5lCAhn6yyr0GZuc8OCpk5eWdG9fyYlbqKwGT1N9",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBJhFXsWXFMdAuAbI2dBMkUz_gVWhryJxmmquSLme8q7WN2j7OQjYdAnH8_ilucAvznLG5-dgo1fhopS9xcc-_UkcHt1vCB_MvKzC6YeeLVOz5hiUEHkh3L6EqfCdOzFrM2pOz-_KwBaFtT-JaIwn4j9Be8lwGOjtIrYkL6hS67hU9a6ePCaShGgfQ5jRlLlTiWm-zAw530fjVO9rm9Jc6t3KdWctE9mjGggfkrJJCh3V4ombz34ritMHkq3C-IgKcXrdKe3OCv9q88",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAEOvU8l1oL_0CJoRfWNPZORa9L-5r4Gfcf1aRxB_avKW5WDaz_8pMQtmdpbJrOo20O8obW53SBsrMmg4DGcDSAIkFUyC8WGPgMwDjRuBHlPqrMbtCZOcTRE4eIHmtPGpT1uUj8F6HI_FFp_bcCeBzrnZvbfJhuv0CThUVvti-u8Vo1ExhwYlynKEpOdQc5ujZI23iXyGIh6KXoSatfUGBf9ZXX-7EJBYz-SPxxnf7l_o2yVdG7lYgXeoCljJ7hwzSCmFuHxQgdsXrF",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDwU1RtW1sHRzYcrblWkCbf9JApDYhSXmOUYLMsuy-ZTLPbjWWUiH9zfGnKM0fxvYm10yP3mnPrWy-SfE68iMhI_NfS8nSubs58tb6l8v19uiaCxS8Q3s5X-d3g10XG2UpVgIzrSF29u7etQxZ57UzNzM3fdlLj7di_KRWLEwbM9_j1q4eqNN9Anj4g1ORfRVB-aVj79n-U_DY9flL8ij2bkMCA7iaxBojnLTqBz8rs9RRb_PJ-55nZ_XSS5ZaB1K1du3RjUREFhNvE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC7QGhT-OXBK9HP7AJZbcJb-wuUi2Jrf2SLygP_sed3r4zBbHCR554onj722RiGlKnPxyjlZ9_5IxkT8fY2fI5z0LLAWyRLhL4XCaumT0OQyMK3oux-lnroG4wo0f4ac5stfGqZGeo6bEvBpHRb04tWyjoytnclS-P3Sol6J-z9xfej5IzlYF09vgKSIAXkxdQ_MffuLZm4Z6RCvXx1KITGLS6h-U-eD-FpGEU6u-FkSBkDmNVnDtkSWBWp7Hid5OTmH4oEjXWFKVqC",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDEuRyRj2ecWGEnGB97cFjk0NNujV7y1w9DhDYy69pN7naNMCukLbYMcaRg5t88iNGdYV7ArKlS9n_NCI4ujuEVa1aqgd4ZcrRy-iIVZwgqVvbGn0NpYpxFHlslT-MncPo8Lrm4OLa_f20_3k_j5yc7HvnlhXJtain-BVtaArHBy43IW4lUjpkch0WGUoQMJv60Gcq9bu1_rD6CecfCkyP-0VVlfuEsA0PDUYeBRkotPcUx4J0i9zummHTYt2U95Qol77HVw9YX5IV7",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBQjD-zpuxVcoXQ5Aah4ZXoODqY_ZeVO73NbzQDtzlDEbe0nPtqcOWeq2wWZNArwnfRtNA2AaXHPWo4hbe5TaWxp4eh1upo4rY1LWx4IFQI4RR4f2W7ObnD71bBFWR193Z869mxA9DrF7NJ8Ydh6jB99S5aFL7GNOUTOvWGm_-eogHMNrgELMVCuyuec0KVgvjkikj9CU27EW1y5TLSjOOsDls6bW1bz3IA7whf8xzU9tAiwtlBFefvVAB0YmiYCuGCpX1KZkw5nmL0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDFLWJbmu3Jk07PLhtTAP85mVzy8OoX1pHq4OBL0th4uGzNahZYCFd6OfLmOu77RydjdzWY-8eTXjdbGAQtuDC5FPJjMqLdQhlMN7m7DCcZiD2XsyNEDW4NK256B5Ov10YmVwFSj5hvsNh4XRoNIWA0ghCcjw621_04v7giRtFbUyn6-nDw_XLD_HvdwYIThacAxR6LEBgPED9dt8us06kR08Ul8Iu2BSWGiaK3n-2MJSp_AR5vwChDeY9LtGNoO8d6RR3tZRsziP4f"
];

export const manga: Manga[] = [
  { id: "shadow-garden", slug: "shadow-garden", title: "Shadow Garden", altTitle: "The Garden Beneath", cover: stitchArtwork[0], banner: stitchArtwork[0], status: "Ongoing", rating: 4.7, year: 2022, author: "Ren Akiyama", artist: "Mika Tohru", genres: ["Dark Fantasy", "Mystery", "Action"], description: "A quiet city hides a second world beneath its streets, where forgotten names become weapons.", latestChapter: 42, readerCount: "18.2k", updatedAgo: "3h ago", chapters: chapterSet("2026-01-12") },
  { id: "lantern-theory", slug: "lantern-theory", title: "Lantern Theory", altTitle: "Hypothesis of Light", cover: stitchArtwork[1], banner: stitchArtwork[1], status: "Ongoing", rating: 4.6, year: 2023, author: "Sora Min", artist: "Ken Odae", genres: ["Urban Fantasy", "Supernatural"], description: "Students investigate supernatural glitches that only appear under train station lights.", latestChapter: 27, readerCount: "12.7k", updatedAgo: "10h ago", chapters: chapterSet("2026-02-02") },
  { id: "hollow-courtyard", slug: "hollow-courtyard", title: "Hollow Courtyard", cover: stitchArtwork[2], banner: stitchArtwork[2], status: "Completed", rating: 4.5, year: 2021, author: "Jin Park", artist: "Nari Seo", genres: ["Psychological", "Drama"], description: "A closed boarding house and six residents unraveling one memory at a time.", latestChapter: 68, readerCount: "21.4k", updatedAgo: "1d ago", chapters: chapterSet("2025-11-01") },
  { id: "riverline-blade", slug: "riverline-blade", title: "Riverline Blade", cover: stitchArtwork[3], banner: stitchArtwork[3], status: "Hiatus", rating: 4.3, year: 2020, author: "Tae Sung", artist: "Hana Cho", genres: ["Martial Arts", "Revenge Arcs"], description: "A disgraced duelist crosses floating districts to reclaim a stolen style.", latestChapter: 51, readerCount: "16.9k", updatedAgo: "4d ago", chapters: chapterSet("2025-09-14") },
  { id: "copper-skyletters", slug: "copper-skyletters", title: "Copper Skyletters", cover: stitchArtwork[4], banner: stitchArtwork[4], status: "Ongoing", rating: 4.4, year: 2024, author: "Iori Dane", artist: "Mina Val", genres: ["Sci-Fi", "Mystery"], description: "Courier pilots decode hidden messages buried inside weather satellites.", latestChapter: 19, readerCount: "9.8k", updatedAgo: "6h ago", chapters: chapterSet("2026-03-01") },
  { id: "weekday-sun", slug: "weekday-sun", title: "Weekday Sun", cover: stitchArtwork[5], banner: stitchArtwork[5], status: "Ongoing", rating: 4.2, year: 2024, author: "Riku Hane", artist: "Aoi Sena", genres: ["Cozy Slice of Life", "Comedy"], description: "A tiny cafe opens before dawn for people who need one honest conversation.", latestChapter: 22, readerCount: "7.2k", updatedAgo: "13h ago", chapters: chapterSet("2026-02-11") },
  { id: "bone-orbit", slug: "bone-orbit", title: "Bone Orbit", cover: stitchArtwork[6], banner: stitchArtwork[6], status: "Completed", rating: 4.8, year: 2019, author: "Kael Miro", artist: "Eun Rei", genres: ["Dark Fantasy", "Sci-Fi"], description: "An exorcist astronaut chases a haunted station spiraling toward a red giant.", latestChapter: 74, readerCount: "29.1k", updatedAgo: "2d ago", chapters: chapterSet("2025-04-08") },
  { id: "velvet-division", slug: "velvet-division", title: "Velvet Division", cover: stitchArtwork[7], banner: stitchArtwork[7], status: "Ongoing", rating: 4.1, year: 2023, author: "Nox Ie", artist: "Reina Vol", genres: ["Action", "Urban Fantasy"], description: "A courier guild moonlights as paranormal cleanup in a city of illegal relics.", latestChapter: 33, readerCount: "11.5k", updatedAgo: "8h ago", chapters: chapterSet("2026-01-24") },
  { id: "room-for-ghosts", slug: "room-for-ghosts", title: "Room for Ghosts", cover: stitchArtwork[8], banner: stitchArtwork[8], status: "Ongoing", rating: 4.6, year: 2022, author: "Aya Frost", artist: "Mori Kei", genres: ["Found Family", "Supernatural"], description: "A failing hostel survives by hosting spirits no shrine can keep.", latestChapter: 39, readerCount: "14.2k", updatedAgo: "5h ago", chapters: chapterSet("2025-12-20") },
  { id: "salt-and-violet", slug: "salt-and-violet", title: "Salt and Violet", cover: stitchArtwork[9], banner: stitchArtwork[9], status: "Completed", rating: 4.0, year: 2018, author: "Mai Ko", artist: "Rin Lu", genres: ["Slow Burn Romance", "Drama"], description: "Two rival archivists restore forbidden letters and keep falling into each other.", latestChapter: 54, readerCount: "13.3k", updatedAgo: "3d ago", chapters: chapterSet("2025-06-10") },
  { id: "juniper-fall", slug: "juniper-fall", title: "Juniper Fall", cover: stitchArtwork[10], banner: stitchArtwork[10], status: "Hiatus", rating: 4.5, year: 2020, author: "Han El", artist: "Sei Toro", genres: ["Mystery", "Psychological"], description: "A mountain town resets every nine days and only one teen remembers.", latestChapter: 47, readerCount: "17.8k", updatedAgo: "1w ago", chapters: chapterSet("2025-08-05") },
  { id: "silk-thunder", slug: "silk-thunder", title: "Silk Thunder", cover: stitchArtwork[11], banner: stitchArtwork[11], status: "Ongoing", rating: 4.4, year: 2024, author: "Noel Cast", artist: "Jae Ori", genres: ["Martial Arts", "Found Family"], description: "Street performers train in an outlaw dojo to protect kids from debt syndicates.", latestChapter: 15, readerCount: "8.6k", updatedAgo: "2h ago", chapters: chapterSet("2026-03-19") }
];

export const mangaBySlug = Object.fromEntries(manga.map((entry) => [entry.slug, entry]));
