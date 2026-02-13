import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { createCounter } from "$lib/server/counters";

type ActionErrors = {
  title?: string;
};

type ActionValues = {
  title: string;
  description: string;
  visibility: "public" | "private";
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get("title")?.toString().trim() ?? "";
    const description = formData.get("description")?.toString().trim() ?? "";
    const visibility = (formData.get("visibility")?.toString() ?? "public") as
      | "public"
      | "private";

    const errors: ActionErrors = {};

    if (!title) {
      errors.title = "Title is required.";
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, {
        errors,
        values: {
          title,
          description,
          visibility,
        } satisfies ActionValues,
      });
    }

    const counter = createCounter({
      title,
      description,
      isPublic: visibility === "public",
    });

    throw redirect(303, `/c/${counter.id}`);
  },
};
