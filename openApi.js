//안내링크 : https://www.foodsafetykorea.go.kr/api/newDatasetDetail.do
//📌인증키 : c3a4287c0582470db0ae	(승인완료)
//샘플 json 링크 : http://openapi.foodsafetykorea.go.kr/api/sample/COOKRCP01/json/1/5
//공공API 주소 : http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx
//추가요청인자 X URL : http://openapi.foodsafetykorea.go.kr/api/인증키/서비스명/요청파일타입/요청시작위치/요청종료위치
//추가요청인자 O URL : http://openapi.foodsafetykorea.go.kr/api/인증키/서비스명/요청파일타입/요청시작위치/요청종료위치/변수명=값&변수명=값2
adadad

import axios from "axios";

const BASE_URL = "http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx";

export default {
    getDate: function (id) {
        return axios.get(BASE_URL + `posts/${id}`);
    }

}