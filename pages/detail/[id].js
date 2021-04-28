import axios from "axios";
import Item from '../../src/components/Item';
import Head from "next/head";

const Post = ({item, name}) => {

    return (
        <>
            {item && (
                <>
                    <Head>
                        <title>{item.name}</title>
                        <meta name={"description"} content={item.description}/>
                    </Head>
                    {name} 환경입니다.
                    <Item item={item}/>
                </>
            )}
        </>
    )
}

export default Post;

export async function getStaticPaths(){
    return {
        paths:[
            {params:{id:"740"}},
            {params:{id:"730"}},
            {params:{id:"729"}},
        ],
        fallback:true
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            item: data,
            name: process.env.name
        }
    }
}