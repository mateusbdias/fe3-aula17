import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";
import api from "../../services/api";

export default function Home() {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getApiData();
        // getDetails();
    }, []);

    async function getApiData() {
        try {
            const { data } = await api.get("/product");
            setProducts(data.products);
        }
        catch (error) {
            
        }
    }

    return (
        <>
            <h1>Produtos</h1>
            <ul style={{ listStyle: "none" }}>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </>
    );
}