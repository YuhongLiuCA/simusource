import './nearby.css';
import s1Img from './sanfrancisco.jpg'
function Nearby() {
    const items = [
        {
            id: 0,
            name:'San Francisco',
            image: s1Img,
            distance:'1.2 hours'                        
        },
        {
            id: 1,
            name:'San Jose',
            image: s1Img,
            distance:'1.2 hours'                        
        },
        {
            id: 0,
            name:'Palo Alto',
            image: s1Img,
            distance:'1.1 hours'                        
        },
        {
            id: 0,
            name:'Mountain View',
            image: s1Img,
            distance:'1.5 hours'                        
        },
        {
            id: 0,
            name:'Sunnyvale',
            image: s1Img,
            distance:'1.1 hours'                        
        },
        {
            id: 0,
            name:'Milpitas',
            image: s1Img,
            distance:'1.1 hours'                        
        },
        {
            id: 0,
            name:'Cupertino',
            image: s1Img,
            distance:'1.5 hours'                        
        },
        {
            id: 0,
            name:'Fremont',
            image: s1Img,
            distance:'0.6 hour'                        
        }
    ];
    const listitems = items.map((item) => {
        return (
          <button class="nearby_content">
            <img src={item.image} alt={item.name} class="nearby_img" /> 
            <div class="nearby_text">
                <div class="nearby_text_name">{item.name}</div>
                <div class="nearby_text_distance">{item.distance}</div>
            </div>
          </button>
        );
    });
    return (
        <div>
            <h2>Explore nearby</h2>
            <div id="nearby_all">
              {listitems}
            </div>            
        </div>
    );
}
export default Nearby;