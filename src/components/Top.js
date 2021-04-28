import {Header} from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return <div>
        <div style={{display:"flex", paddingTop:20}}>
            <div style={{flex:"100px 0 0"}}>
                <img
                    src="/images/img_1.png"
                    alt="logo"
                    style={{display:"block", width:80}}
                />
            </div>
            <Header as={"H1"}>연습</Header>
        </div>
        <Gnb/>
    </div>
}