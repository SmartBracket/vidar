
export default function Page({ params }: { params: { product_slug: string } }){
    return (
        <div className="container">
            <div style={{padding:'30px 0px',minHeight:'80vh'}}>Климадон в капсулах 20 шт. {params.product_slug}</div>
        </div>
    )
}