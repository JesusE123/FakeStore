import { useRouter } from "next/router"


const ProductCategory = ({data}) => {
    
    console.log(data)
    const router = useRouter();
    const {category} = router.query;

    return (
    <>
    <div>hola</div>
    </>
    )

}

export async function getStaticPaths() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    const paths = await data.map(({category}) =>({params: {category: `${category}`}}))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}){
    const res = await ('https://fakestoreapi.com/products/' + params.category );
    const data = await res.json();

    return {
        props: {
            data,
        }
    }
}
 
export default ProductCategory