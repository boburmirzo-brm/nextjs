export default function Blog({params}: {
    params:{
        blogId: String
    }
}){
    return <div>
        <h2>Blog {params?.blogId}</h2>
    </div>
}