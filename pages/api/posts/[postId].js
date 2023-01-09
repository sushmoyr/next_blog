import data from "../data";

export default function handler(req, res){
    const { postId } = req.query;
    const { Posts }  = data;
    console.log(postId);

    if(postId){
        const post = Posts.find( value => value.id.toString() === postId);
        console.log(post);
        return res.status(200).json(post)
    }

    return res.status(404).json({ error : "Post Not Found"})

}
