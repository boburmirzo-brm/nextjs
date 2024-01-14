export default function Docs({params}:{params: {slugId: String[]}}){
    
    return <div>
        <h2>Docs {params.slugId.join("/")}</h2>
    </div>
}