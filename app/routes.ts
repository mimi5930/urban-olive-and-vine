import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/_index.tsx"),
  route("/about", "./routes/about.tsx"),
  route("/menu", "./routes/menu.tsx"),
  route("/events", "./routes/events.tsx"),
  route("/admin", "./routes/admin.tsx"),
] satisfies RouteConfig;
