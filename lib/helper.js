// endpoint: api/posts
const postUrl = 'http://localhost:3000/api/posts';
export default async function getPost() {
    const res = await fetch(postUrl);
    return await res.json();
}
