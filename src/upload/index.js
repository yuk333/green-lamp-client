import "antd/dist/antd.css";
import "./upload.scss"; 
import {useState} from "react"
import {Form,Divider,Input,InputNumber,Button,Upload} from "antd";
function UploadPage(){
    //이미지 경로 상태관리 추가하기
    const[imageUrl,setImageUrl] = useState(null);
    const onSubmit = () =>{
        console.log('업로드');
    }
    //이미지처리함수
    const onChangeImage = (info) => {
        //파일이 업로드 중일대
        if(info.file.status === 'uploading'){
            return;
        }
        //파일이 업로드 완료했을 때
        if(info.file.status === 'done'){
            const response = info.file.response;
            const imageUrl = response.imageUrl;
            setImageUrl(imageUrl);
        }
    }
    return(
        <div id="upload" className="innerCon">
            <h2>상품등록하기</h2>
            <Form name="상품업로드" onFinish={onsubmit}>
                <Form.Item name= "upload" label={<div className="upload-label">상품사진</div>}>
                    <Upload name="image"
                    action="http://localhost:8080/image"
                    listType="picture"
                    onChange={onChangeImage}
                    showUploadList = {false}
                    >
                    <div id="upload-img">
                        <img src="/images/icons/camera.png" alt="카메라" />
                        <span>이미지를 업로드 해주세요</span>
                    </div>
                    </Upload>
                </Form.Item>
                <Form.Item name="seller" label={<div className="upload-label">판매자 명</div>}
                    rules={[{required:true,message:"판매자 이름을 입력해 주세요"}]}
                >
                    <Input placeholder="판매자 이름을 입력해주세요" className="upload-name"/>
                </Form.Item>
                <Form.Item name="name" label={<div className="upload-label">제품명</div>}
                    rules={[{required:true,message:"제품 이름을 입력해 주세요"}]}
                >
                    <Input placeholder="제품 이름을 입력해주세요" className="upload-name"/>
                </Form.Item>
                <Form.Item name="price" label={<div className="upload-label">상품가격</div>}
                    rules={[{required:true,message:"상품가격을 입력해 주세요"}]}
                >
                    <InputNumber />
                </Form.Item>
                <Divider />
                <Form.Item name="description" label={<div className="upload-label">상품소개</div>}>
                    <Input.TextArea
                    placeholder="상품소개를 적어주세요" maxLength={400}/>
                </Form.Item>
                <Divider />
                <Form.Item>
                    <Button size="large" htmlType="submit">상품등록하기</Button>
                    <Button size="large" htmlType="reset">취소하기</Button>
                </Form.Item>
            </Form>
        </div>
        
    );
}
export default UploadPage;