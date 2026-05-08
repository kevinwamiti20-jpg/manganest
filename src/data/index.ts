import { manga } from "./manga";
import { users } from "./users";

export const userById = Object.fromEntries(users.map((user) => [user.id, user]));
export const mangaBySlug = Object.fromEntries(manga.map((entry) => [entry.slug, entry]));
