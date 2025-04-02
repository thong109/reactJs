function generateSlug(text) {
  if (!text) {
    return "";
  }
  const baseSlug = text
    .normalize("NFD") // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  return baseSlug;
}

export default generateSlug;