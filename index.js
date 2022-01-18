import Router from "./core/routes/router";

const router = new Router();

router.get("/about-me", function(req) {
    console.log(req.path);
})

router.init();