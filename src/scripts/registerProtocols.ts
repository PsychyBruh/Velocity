import Protocol from "~/API/Protocol";

const about = new Protocol("about");

about.register("blank", "about:blank");
about.register("newTab", "/internal/newTab");
about.register("preferences", "/internal/preferences");
about.register("history", "/internal/history");

const viewSource = new Protocol("view-source");

viewSource.register("*", "/internal/view-source");
