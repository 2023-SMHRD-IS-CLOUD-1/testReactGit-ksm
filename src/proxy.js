// 프록시 서버를 만들 수 있는 기능
const { createProxyMiddleware } = require("http-proxy-middleware")

// 프록시 서버 : 클라이언트 주소를 서버 주소에 맞게 바꿔주는 역할

// 프록시 서버 만들기
// app --> 현재 어플리케이션(현재 진행하고 있는 프로젝트)
module.exports = function(app){
    app.use(
        // /v1 --> endpoint (주소값(Origin)의 마지막)
        createProxyMiddleware("/v1",{
            target : "https://openapi.naver.com",
            changeOrigin : true
        })
    )
    //--> 이렇게 두개 써도 됨
    // app.use(  
    //     // /v1 --> endpoint (주소값(Origin)의 마지막)
    //     createProxyMiddleware("/v1",{
    //         target : "https://openapi.naver.com",
    //         changeOrigin : true
    //     })
    // )
}