import './footer.css';
import {AiOutlineGlobal,AiFillInstagram,AiOutlineTwitter} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
function Footer(){
    const items = {
        header: ["ABOUT","COMMUNITY","HOST","SUPPORT"],
        content: [
            ["How Airbnb works", "Diversity & Belonging","Host your home", "Our COVID-19 Response"],
            ["Newsroom", "Against Discrimination","Host an Online Experience", "Help Center"],
            ["Airbnb 2021", "Accessibility","Host an Experience", "Cancellation options"],
            ["Investors", "Airbnb Associates","Responsible hosting", "Neighborhood Support"],
            ["Airbnb Plus", "Host Afghan refugees","Resource Center", "Trust & Safety"],
            ["Airbnb Luxe", "Guest Referrals","Community Center"],
            ["HotelTonight", "Gift cards"],
            ["Airbnb for Work", "Airbnb.org"],
            ["Made possible by Hosts"],
            ["Careers"],
            ["Founders' Letter"]
        ]
    };
    //let items1 = JSON.parse(items);
    return(
        <div id="footer">           
            
            <table id="footer_header">
                <tr>
                    {
                    items.header.map((item) => {
                       return <th class="footer_header_button">{item}</th>
                    })
                    }
                </tr>
                {                    
                    items.content.map((item1) => {
                       return (<tr>                               
                    {item1.map(iitem => {
                        return (<td >
                            <div class="footer_item_one">{iitem}</div>
                            </td>);
                    })
                    }
                        </tr>);
                    })
                }
            </table>
            <hr id="footer_header_hr"/>
            <div id="footer_lastline">
                <span id="footer_lastline_first">© 2021 Airbnb, Inc.&nbsp;·&nbsp;Privacy&nbsp;·&nbsp;Terms&nbsp;·&nbsp;Sitemap</span>
                <span id="footer_lastline_last"><AiOutlineGlobal /> English&nbsp;&nbsp;&nbsp; (US)&nbsp;$USD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaFacebookF />&nbsp;&nbsp;&nbsp; <AiOutlineTwitter /> &nbsp;&nbsp;&nbsp;<AiFillInstagram /></span>
            </div>
        </div>
    );
}
export default Footer;