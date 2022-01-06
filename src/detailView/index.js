import axios from "axios";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import "./detail.scss";
function ProductView(){
    const [product,setProduct] = useState(null);
    const param = useParams();
    const {id} = param;
    useEffect(()=>{
        axios.get(`
        http://localhost:8080/products/${id}
        `)
        .then(function(result){
            setProduct(result.data.product);
        })
        .catch(function(error){
            console.log(error);
        })
    },[]);
    if(product == null){
        return <div>상품정보를 받고있습니다...</div>
    }
    return(
        <div className="innerCon" id="detail">
            <h1>{product.name}</h1>
            <div id="image-box">
                <img src={product.imageUrl} alt="제품" />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" alt="아이콘" />
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>{product.createdAt}</div>
                <div>{product.description}</div>
            </div>
        </div>
    );
}
export default ProductView;