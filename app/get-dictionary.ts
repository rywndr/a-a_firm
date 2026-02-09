import "server-only";
import type { Dictionary } from "../dictionaries/types";

const dictionaries = {
    en: () =>
        import("../dictionaries/en.json").then(
            (module) => module.default as unknown as Dictionary,
        ),
    id: () =>
        import("../dictionaries/id.json").then(
            (module) => module.default as unknown as Dictionary,
        ),
};

export const getDictionary = async (locale: "en" | "id") =>
    dictionaries[locale]?.() ?? dictionaries.en();
