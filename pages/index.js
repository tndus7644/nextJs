import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from "axios";
import ItemList from "../src/components/ItemList";
import {Divider, Header, Loader} from "semantic-ui-react";

export default function Home({list}) {

    return (
        <div>
            <Head>
                <title>연습용 nextJs</title>
                <meta name={"description"} content={"연습"}/>
            </Head>
            <>
                <Header as={"h3"} style={{paddingTop: 40}}>
                    베스트 상품
                </Header>
                <Divider/>
                <ItemList list={list.slice(0,9)}/>
                <Header as={"h3"} style={{paddingTop: 40}}>
                    신상품
                </Header>
                <Divider/>
                <ItemList list={list.slice(9)}/>
            </>
        </div>
    )
}

export async function getStaticProps() {
    const apiUrl = process.env.apiUrl;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            list: data,
            name: process.env.name
        },
    };
}
