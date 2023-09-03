import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
    publicRoutes: ["/","/api/(.*)","/docs"]
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};