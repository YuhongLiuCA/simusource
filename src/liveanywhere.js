import './liveanywhere.css';
import s2Img from './homestyle.jpg';
import s3Img from './hosting.jpg';
function Liveanywhere() {
    const items = [
        {
            id: 0,
            name:'Outdoor gatewyas',
            image: s2Img                        
        },
        {
            id: 1,
            name:'Unique stays',
            image: s2Img                    
        },
        {
            id: 2,
            name:'Entire homes',
            image: s2Img                      
        },
        {
            id: 3,
            name:'Pets allowed',
            image: s2Img                    
        }
    ];
    const listitems = items.map((item) => {
        return (
          <button id="liveanywhere_content">
            <img src={item.image} alt={item.name} id="liveanywhere_img" /> 
            <div id="liveanywhere_text">
                <div id="liveanywhere_text_name">{item.name}</div>
            </div>
          </button>
        );
    });
    return (
        <div>
            <h2>Live anywhere</h2>
            <div id="liveanywhere_all">
              {listitems}
            </div>     

      <div id="liveanywhere_hosting">
         <img class="card-img" src={s3Img} alt="Hosting home" id="liveanywhere_img_hosting"/>
        <div id="liveanywhere_text_hosting">
          <div >Try hosting</div>
          <div id="liveanywhere_text_hosting_small">Extra income and unlock new opportunities by sharing your space.</div>
        </div>
      </div>

        </div>
    );
}
export default Liveanywhere;