import './inspiration.css';
function Inspiration(){
    const items = {
        header: ["Destination for arts & culture","Destination for outdoor adventure","Mountain cabins","Beach destinations","Popular destinations","Unique stays"],
        content: [
            [["Phoenix", "Arizona"],["Hot Springs", "Arkansas"],["Los Angeles","California"],["San Diego", "California"]],
            [["San Francisco","California"],["Barcelona","California"],["Prague","Czechia"],["Washington","District of Columbia"]],
            [["Keswick","England"],["London","England"],["Scarborough","England"],["Sherwood Forest","England"]],
            [["York","England"],["Paris","France"],["Rhodes","Greece"],["Nashville","Indiana"]],
            [["Dublin","Ireland"],["Florence","Italy"],["Rome","Italy"],["Lisbon","Lisbon"]],
            [["Grande Isle","Louisiana"],["New Orleans","Louisiana"],["Marthas Vineyard","Massachusetts"],["South Haven","Michigan"]],
            [["Duluth","Minnesota"],["Amsterdam","Netherlands"],["New York","New York"],["Nice","Provence-Alpes-Côte d'Azur"]],
            [["Inverness","Scotland"],["Malaga","Spain"],["Valencia","Spain"],["Split","Split-Dalmatia County"]],
            [["Nashville","Tennessee"],["Austin","Texas"],["Houston","Texas"],["Darthmouth","United Kingdom"]],
            [["Edinburgh","United Kingdom"],["Liverpool","United Kingdom"],["St Ives","United Kingdom"],["Lake Powell","United States"]],
            [["Lake Anna","Virginia"],["Leavenworth","Washington"],["Seattle","Washington"]]
        ]
    };
    //let items1 = JSON.parse(items);
    return(
        <div>
            <h2>Inspiration for future getaways</h2>
            <div id="inspiration_header">
                    {
                    items.header.map((item) => {
                       return <button class="inspiration_header_button">{item}</button>
                    })
                    }
            </div>
            <hr id="inspiration_header_hr"/>
            <table>
                
                {                    
                    items.content.map((item1) => {
                       return (<tr>                               
                    {item1.map(iitem => {
                        return (<td class="inspiration_item">
                            <div class="inspiration_item_one">{iitem[0]}</div>
                            <div class="inspiration_item_two">{iitem[1]}</div>
                            </td>);
                    })
                    }
                        </tr>);
                    })
                }
            </table>
        </div>
    );
}
export default Inspiration;