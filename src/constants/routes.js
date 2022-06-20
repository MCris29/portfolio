const publicRoutes = {
  LOGIN: "/login",
  BLOG: "/blog",
  BLOG_ID: "/blog/:id",
};

const privateRoutes = {
  HOME: "/",
  MENU: "/menu",
  PROFILE: "/menu/profile",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
