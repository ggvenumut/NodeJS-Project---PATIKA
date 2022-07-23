const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = `<H1>NODEJS ODEV 6</H1>`;
});

router.get("/hakkimda", (ctx, next) => {
  ctx.body = `<H1>Hakkimda sayfasi!</H1>`;
});

router.get("/iletisim", (ctx, next) => {
  ctx.body = `<H1>Iletisim sayfasi!</H1>`;
});

app.use(router.routes()).use(router.allowedMethods());

port = 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
