import './App.css';
import {AiOutlineGlobal,AiOutlineMenu,AiOutlineSearch} from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";
import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Nearby from "./nearby";
import Liveanywhere from "./liveanywhere"
import Discoverthings from './discoverthings';
import Inspiration from './inspiration';
import Footer from './footer';

function App() {
  const [titleChoice, setTitleChoice] = useState(0);
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [flexibleForm, setFlexibaleForm] = useState(false);
  const [searchPlace, setSearchPlace] = useState('');
  const [guestForm, setGuestForm] = useState(false);
  const [guestAdult, setGuestAdult] = useState(0);
  const [guestChildren, setGuestChildren] = useState(0);
  const [guestInfants, setGuestInfants] = useState(0);
  const [guestValue, setGuestValue] = useState("");
  const [flexibleDate, setFlexibleDate] = useState('');
 

  const handleSearchPlace = (e) => {
    //console.log("search!");
    if(searchPlace === '') {
      setFlexibaleForm(true);
    }
    e.stopPropagation();
  }
  const handleFlexibleChange = (e) => {
    var v = e.target.value;
    //console.log("current:"+v);
    if(v === '') {
      setFlexibaleForm(true);
    } else {
      setFlexibaleForm(false);
    }
    setSearchPlace(v);
    e.stopPropagation();
  }
  const handleGuestChange = (e) => {    
    setGuestForm((prev) => !prev);
    e.stopPropagation();
  }
  const handleOverrallClick = (e) => {
    //console.log("overall");
    setFlexibaleForm(false);
    setGuestForm(false);
  }
  const handleTitleChoice0 = (e) => {
    setTitleChoice(0);
  }
  const handleTitleChoice1 = (e) => {
    setTitleChoice(1);
  }
  const handleTitleChoice2 = (e) => {
    setTitleChoice(2);
  }
  const handleGuestAdultIncrement = (e) => {
    let n = guestAdult;
    if(n < 50) {
      n++;
    }
    setGuestAdult(n);
    if(n > 0) {
      let str;
      if(n === 1) { 
        str = n + " guest";
      } else {
        str = n + " guests";
      }
      if(guestChildren > 0) {
        let nn = guestChildren + guestAdult;
        str = nn + " guests";
      }
      if(guestInfants > 0) {
        str += "," + guestInfants + " infants";
      }
      setGuestValue(str);
    } else {
      let str = '';
      setGuestValue(str);
    }
    e.stopPropagation();
  }
  const handleGuestAdultDecrement = (e) => {
    let n = guestAdult;
    if(n > 0) {
      n--;
    }
    if((guestChildren > 0 || guestInfants > 0) && (n === 0)) {
      n = 1;
    }
    setGuestAdult(n);
    if(n > 0) {
      let str;
      if(n === 1) { 
        str = n + " guest";
      } else {
        str = n + " guests";
      }
      if(guestChildren > 0) {
        let nn = guestChildren + guestAdult;
        str = nn + " guests";
      }
      if(guestInfants > 0) {
        str += "," + guestInfants + " infants";
      }
      setGuestValue(str);
    } else {
      let str = '';
      setGuestValue(str);
    }
    e.stopPropagation();
  }

  const handleGuestChildrenIncrement = (e) => {
    let n = guestChildren;
    let an = 0;
    if(n < 50) {
      n++;
    }
    if(n > 0 && guestAdult === 0) {
      setGuestAdult(1);
      an = 1;
    } else {
      an = guestAdult;
    }
    setGuestChildren(n);
    if(n > 0) {
      let str;
      let nn = n + an;
      if(nn === 1) { 
        str = nn + " guest";
      } else {
        str = nn + " guests";
      }
      
      if(guestInfants > 0) {
        str += "," + guestInfants + " infants";
      }
      setGuestValue(str);
    } else {
      let str = '';
      let nn = an;
      if(nn === 1) { 
        str = nn + " guest";
      } else if(nn > 1){
        str = nn + " guests";
      } else {
        str = "";
      }
      setGuestValue(str);
    }
    e.stopPropagation();
  }

  const handleGuestChildrenDecrement = (e) => {
    let n = guestChildren;
    let an = 0;
    if(n  > 0) {
      n--;
    }
    if(n > 0 && guestAdult === 0) {
      setGuestAdult(1);
      an = 1;
    } else {
      an = guestAdult;
    }
    setGuestChildren(n);
    if(n > 0) {
      let str;
      let nn = n + an;
      if(nn === 1) { 
        str = nn + " guest";
      } else {
        str = nn + " guests";
      }
      
      if(guestInfants > 0) {
        str += "," + guestInfants + " infants";
      }
      setGuestValue(str);
    } else {
      let str = '';
      let nn = an;
      if(nn === 1) { 
        str = nn + " guest";
      } else if(nn > 1){
        str = nn + " guests";
      } else {
        str = "";
      }
      setGuestValue(str);
    }
    e.stopPropagation();
  }
  
  const handleGuestInfantsIncrement = (e) => {
    let n = guestInfants;
    let an = 0;
    if(n < 50) {
      n++;
    }
    if(n > 0 && guestAdult === 0) {
      setGuestAdult(1);
      an = 1;
    } else {
      an = guestAdult;
    }
    setGuestInfants(n);
    if(n > 0) {
      let str;
      let nn = guestChildren + an;
      if(nn === 1) { 
        str = nn + " guest";
      } else {
        str = nn + " guests";
      }  
      str += "," + n + " infants";      
      setGuestValue(str);
    } else {
      let str = '';
      let nn = an + guestChildren;
      if(nn === 1) { 
        str = nn + " guest";
      } else if(nn > 1){
        str = nn + " guests";
      } else {
        str = "";
      }
      setGuestValue(str);
    }
    e.stopPropagation();
  }

  const handleGuestInfantsDecrement = (e) => {
    let n = guestInfants;
    let an = 0;
    if(n > 0) {
      n--;
    }
    if(n > 0 && guestAdult === 0) {
      setGuestAdult(1);
      an = 1;
    } else {
      an = guestAdult;
    }
    setGuestInfants(n);
    if(n > 0) {
      let str;
      let nn = guestChildren + an;
      if(nn === 1) { 
        str = nn + " guest";
      } else {
        str = nn + " guests";
      }  
      str += "," + n + " infants";      
      setGuestValue(str);
    } else {
      let str = '';
      let nn = an + guestChildren;
      if(nn === 1) { 
        str = nn + " guest";
      } else if(nn > 1){
        str = nn + " guests";
      } else {
        str = "";
      }
      setGuestValue(str);
    }
    e.stopPropagation();
  }

  const handleFormClick = (e) => {
    e.stopPropagation();
  }

  const handleFlexibaleClick = (e) => {
    setFlexibaleForm(false);
    setSearchPlace("Flexible places");
  }

  return (
    <div className="App" onClick={handleOverrallClick}>
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" className="App-logo" alt="logo" />
        <div id="menu_group">
          <button class="title_menu" onClick={handleTitleChoice0}>Places to stay<br/>
          <span id="title_indicate0" hidden={titleChoice !== 0}>_</span>&nbsp; </button>
          <button class="title_menu" onClick={handleTitleChoice1}>Experiences<br/>
          <span id="title_indicate0" hidden={titleChoice !== 1}>_</span>&nbsp; </button>
          <button class="title_menu" onClick={handleTitleChoice2}>Online Experiences<br/>
          <span id="title_indicate0" hidden={titleChoice !== 2}>_</span>&nbsp; </button>          
        </div>
        <div id="menu_signin">
          <p class="title_signin" id="title_become">Become a Host</p>
          <AiOutlineGlobal class="title_signin" id="menu_signin_icon"/>
          <div id="user_login" class="title_signin">
            <AiOutlineMenu />
            <BsFillPersonFill />
          </div>
        </div>
        {titleChoice === 0 ?
        <form id="menu_search" onClick={handleFormClick} autoComplete="off">
          <div class="search_setting">
            <label for="search_location" class="search_label">Location</label>
            <input name="search_location" value={searchPlace} class="search_item" type="text" placeholder="Where are you going?" onClick={handleSearchPlace} onChange={handleFlexibleChange}/>
          </div>
          <hr class="hr_title"/>
          <div class="search_setting">
            <label for="search_location" class="search_label">Checkin</label>
            <DatePicker selected={checkinDate} showPopperArrow={false} onChange={date => { setCheckinDate(date);if(checkoutDate < date && checkoutDate !== '' ) setCheckoutDate(date);}} locale="es" minDate={new Date()} id="checkin_item" format='MM-dd-yyyy' type="date" placeholderText="Add dates" />
          </div>
          <hr class="hr_title"/>
          <div class="search_setting">
            <label for="search_location" class="search_label">Checkout</label>
            <DatePicker selected={checkoutDate} showPopperArrow={false} onChange={date => {setCheckoutDate(date); if(date < checkinDate) setCheckinDate(date);}} locale="es" minDate={checkinDate} id="checkout_item" format='MM-dd-yyyy' type="date" placeholderText="Add dates"/>
          </div>
          <hr class="hr_title"/>
          <div class="search_setting">
            <label for="search_location" class="search_label">Guests</label>
            <input name="search_location" class="search_item" type="text" placeholder="Add guests" value={guestValue} onClick={handleGuestChange}/>
          </div>
          <div id="search_icondiv">
            <AiOutlineSearch id="search_icon" />
          </div>
        </form>  : titleChoice === 1 ?
        <form id="menu_expereince" autoComplete="off">
        <div class="search_setting">
          <label for="search_location" class="search_label">Location</label>
          <input name="search_location" class="search_item" type="text" placeholder="Where are you going?" />
        </div>
        <hr class="hr_title"/>
        <div class="search_setting">
          <label for="search_date" class="search_label">Date</label>
          <DatePicker selected={flexibleDate} showPopperArrow={false} onChange={date => setFlexibleDate(date)} locale="es" minDate={new Date()} id="flexible_item" format='MM-dd-yyyy' type="date" placeholderText="Add dates"/>
        </div>
        <div id="search_icondiv">
          <AiOutlineSearch id="search_icon" />
        </div>
      </form> : <div></div>
        }
        {flexibleForm ? <div id="flexibale_form" onClick={handleFormClick} style={{display: "flex", flexDirection: "column",backgroundColor: "white",border:"none"}}>
          <label id="flexible_form_label" for="flexible_form_button" style={{fontSize:"12px",fontWeight:"bold",color: "black",textAlign:"left",marginTop: "20px",marginLeft: "15px"}}>GO ANYWHERE, ANYTIME</label>
          <button onClick={handleFlexibaleClick} style={{display:"flex",justifyContent:"space-between",backgroundColor: "white",border:"1px solid grey",width: "320px",borderRadius:"20px",marginTop: "20px",marginLeft: "12px",boxShadow:"0 0 20px #ccc;",fontSize:"18px",fontWeight:"bold",color:"rgb(114,2,156)"}}> 
            <span id="flexible_form_button" style={{marginLeft: "5px",border:"none",padding:"15px", backgroundColor: "white" }}>I'm flexible</span>
            <span style={{marginRight: "5px", border:"none",padding:"15px"}}>&gt;</span>
          </button>
        
      </div> : <div></div>}
      {guestForm ? <div id="guest_form" onClick={handleFormClick} style={{marginLeft:"auto",marginRight:"5px",display: "flex", flexDirection: "column",backgroundColor: "white",border:"none"}}>
          <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
            <label for="adult_guest" style={{display: "flex", flexDirection: "column",fontSize:"16px",color: "black",textAlign:"left",marginTop: "20px",marginLeft: "15px"}}>
              <div style={{fontWeight:"bold",color: "black"}}>Adults</div>
              <div style={{fontWeight:"normal",color: "grey"}}>Ages 13 or above</div>
            </label>
            <div style={{display: "flex", flexDirection: "row",marginTop: "20px",marginRight: "20px"}}>
              <buttton id="adult_de" onClick={handleGuestAdultDecrement} style={{width: "30px",height:"30px",border:"1px solid grey",borderRadius:"50%",fontSize:"18px",color: "black"}}>-</buttton>
              <div style={{width: "30px",height:"30px",border:"none",fontSize:"18px",color: "black"}}>{guestAdult}</div>
              <buttton  id="adult_in" onClick={handleGuestAdultIncrement} style={{width: "30px",height:"30px",border:"1px solid grey",borderRadius:"50%",fontSize:"18px",color: "black"}}>+</buttton>
            </div>
          </div>
          <hr/>
          <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
            <label for="adult_guest" style={{display: "flex", flexDirection: "column",fontSize:"16px",color: "black",textAlign:"left",marginTop: "10px",marginLeft: "15px"}}>
              <div style={{fontWeight:"bold",color: "black"}}>Children</div>
              <div style={{fontWeight:"normal",color: "grey"}}>Ages 2–12</div>
            </label>
            <div style={{display: "flex", flexDirection: "row",marginTop: "10px",marginRight: "20px"}}>
              <buttton id="child_de" onClick={handleGuestChildrenDecrement} style={{width: "30px",height:"30px",border:"1px solid grey",borderRadius:"50%",fontSize:"18px",color: "black"}}>-</buttton>
              <div style={{width: "30px",height:"30px",border:"none",fontSize:"18px",color: "black"}}>{guestChildren}</div>
              <buttton id="child_in" onClick={handleGuestChildrenIncrement} style={{width: "30px",height:"30px",border:"1px solid grey",borderRadius:"50%",fontSize:"18px",color: "black"}}>+</buttton>
            </div>
          </div>
          <hr/>
          <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
            <label for="adult_guest" style={{display: "flex", flexDirection: "column",fontSize:"16px",color: "black",textAlign:"left",marginTop: "10px",marginLeft: "15px"}}>
              <div style={{fontWeight:"bold",color: "black"}}>Infants</div>
              <div style={{fontWeight:"normal",color: "grey"}}>Under 2</div>
            </label>
            <div style={{display: "flex", flexDirection: "row",marginTop: "10px",marginRight: "20px"}}>
              <buttton id="infant_de" onClick={handleGuestInfantsDecrement} style={{width: "30px",height:"30px",border:"1px solid grey",borderRadius:"50%",fontSize:"18px",color: "black"}}>-</buttton>
              <div style={{width: "30px",height:"30px",border:"none",fontSize:"18px",color: "black"}}>{guestInfants}</div>
              <buttton id="infant_in" onClick={handleGuestInfantsIncrement} style={{width: "30px",height:"30px",border:"1px solid grey",borderRadius:"50%",fontSize:"18px",color: "black"}}>+</buttton>
            </div>
          </div>
        
      </div> : <div></div>}
      <div id="menu_flexible">
          <div>Not sure where to go? Perfect.</div>
          <div id="button_flexible"><span id="button_flexibleText">I'm flexible</span></div>
      </div>
      <div id="title_simulation">Yuhong's simulation of Airbnb</div>
      </header>
      <body>
        <Nearby />   
        <Liveanywhere />    
        <Discoverthings />
        <Inspiration />
      </body>
      <Footer />
    </div>
  );
}

export default App;
