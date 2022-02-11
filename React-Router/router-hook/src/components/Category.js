
import {
    useNavigate
} from "react-router-dom";
function Category() {
    let navigation = useNavigate();
    const sendDataToProduct = (e) => {
        navigation(`/product/${e.target.value}`);
    }
    return (
        <>
            <h2>Select a Category:</h2>
            <select onChange={(e) => sendDataToProduct(e)
            }>
                <option>Chose</option>
                <option value="Honda">
                    Honda
                </option>
                <option value="Suzuki">
                    Suzuki
                </option>
                <option value="Yamaha">
                    Yamaha
                </option>
            </select>
        </ >
    );
}
export default Category;