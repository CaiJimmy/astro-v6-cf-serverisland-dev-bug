import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    console.log("URI:", context.request.url, "isPrerendered:", context.isPrerendered);

    if (context.isPrerendered) {
        return next();
    }

    const { env } = await import('cloudflare:workers');
    console.log("Environment variable TEST:", env.TEST);
    return next();
});
