import { useParams } from 'react-router-dom';

function Product() {
        const { categoryID } = useParams();
        return (
            <div>
                <h1>ID selected: {categoryID}</h1>
            </div>
        )
    }
export default Product;