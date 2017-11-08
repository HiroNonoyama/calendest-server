const server = require("server");
const { get, post, del, put } = server.router;
const { render, redirect } = server.reply;

server(
  { security: { csrf: false } },
  get("/plans", ctx => "Hello World!"),
  post("/plans", ctx => {
    return redirect("/");
  }),
  del("plans/:id", ctx => {}),
  put("/plans/:id", ctx => {})
);
