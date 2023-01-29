const baseURL = "http://localhost:3000/api/posts";

// endpoint: http://localhost:3000/api/posts
/// This post fetches the post from api. This is not real data but a mockup.
export default async function getPost(id){
    const res = await fetch(`${baseURL}`)
    const posts = await res.json()

    if(id){
        return posts.find(value => value.id == id)
    }

    return posts;
}
