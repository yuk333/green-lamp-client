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
        https://db61c468-4fa6-4bcf-8b07-aacfc25ea3d6.mock.pstmn.io/product/${id}
        `)
        .then(function(result){
            setProduct(result.data);
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
                <div>2022년 1월 4일</div>
                <div>설명글...</div>
            </div>
        </div>
    );
}
export default ProductView;