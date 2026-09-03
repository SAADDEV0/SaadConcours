// Table pagination — a "load more" button rather than real pages, since the
// underlying list is already fully loaded client-side (see ResourcePanel's
// load()). Keeps the DOM small once a resource crosses a couple hundred rows.
export const PAGE_SIZE = 50;

export function emptyFormFor(fields) {
  const form = {};
  fields.forEach((f) => {
    if (f.type === "checkbox") form[f.key] = false;
    else if (f.type === "quiz-questions") form[f.key] = [];
    else if (f.type === "image-list") form[f.key] = [];
    // dependsOn fields (cascading select) compute their options from a
    // sibling field's value — that sibling must appear earlier in `fields`
    // so form[f.dependsOn] is already set by the time we get here.
    else if (f.type === "select" && f.dependsOn) form[f.key] = f.optionsFor(form[f.dependsOn])?.[0]?.value ?? "";
    else if (f.type === "select") form[f.key] = f.options?.[0]?.value ?? "";
    else form[f.key] = "";
  });
  return form;
}

export function toFormValues(item, fields) {
  const form = {};
  fields.forEach((f) => {
    const v = item[f.key];
    if (f.type === "list") form[f.key] = (v || []).join(", ");
    else if (f.type === "checkbox") form[f.key] = Boolean(v);
    else if (f.type === "quiz-questions") form[f.key] = v || [];
    else if (f.type === "image-list") form[f.key] = v || [];
    else form[f.key] = v ?? "";
  });
  return form;
}

export function toPayload(form, fields) {
  const payload = {};
  for (const f of fields) {
    const raw = form[f.key];
    if (f.type === "list") payload[f.key] = raw.split(",").map((s) => s.trim()).filter(Boolean);
    else if (f.type === "checkbox") payload[f.key] = Boolean(raw);
    else if (f.type === "quiz-questions") payload[f.key] = raw;
    else if (f.type === "image-list") payload[f.key] = raw;
    else payload[f.key] = raw;
  }
  return payload;
}

export const OPTION_LETTERS = "abcdefgh";

export function emptyOption(existing) {
  return { letter: OPTION_LETTERS[existing.length] || "?", text: "" };
}

export function nextQuestionId(questions) {
  const max = questions.reduce((m, q) => Math.max(m, Number(q.id) || 0), 0);
  return max + 1;
}
