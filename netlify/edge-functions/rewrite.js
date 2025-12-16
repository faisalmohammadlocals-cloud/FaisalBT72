// Netlify edge rewrite removed as part of removing starter template content.
// If you still need Geo-based rewrites, re-add an appropriate function here.

export const config = { path: "/edge" };

export default function noop(request) {
    return request.url;
}
