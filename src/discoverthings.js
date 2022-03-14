import './discoverthings.css';
import s2Img from './homestyle.jpg';
function Discoverthings() {
    const items = [
        {
            id: 0,
            name:'Expereinces',
            description: 'Find ungorgottable things near you',
            image: s2Img                        
        },
        {
            id: 1,
            name:'Online Experiences',
            description: 'Live,interactive activities led by Hosts',
            image: s2Img                    
        },
        {
            id: 2,
            name:'Outdoor Collection',
            description: 'Expereinces that immerse you in nature',
            image: s2Img                      
        }
    ];
    const listitems = items.map((item) => {
        return (
          <button id="discoverthings_content">
            <img src={item.image} alt={item.name} id="discoverthings_img" /> 
            <div id="discoverthings_text">
                <div id="discoverthings_text_name">{item.name}</div>
                <div id="discoverthings_text_name_small">{item.description}</div>
            </div>
          </button>
        );
    });
    return (
        <div>
            <h2>Discover things to do</h2>
            <div id="discoverthings_all">
              {listitems}
            </div>     
        </div>
    );
}
export default Discoverthings;