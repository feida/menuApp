// import pomelo from '../pomelo-client/index';
// let pomeloApp = null;
// var ipInfo = {
//   host: '1.1.1',
//   port: 3050,
//   log: true
// }
//
// var pomeloInit = function() {
//   // var pomelo = window.pomelo;
//   //请求连接gate服务器
//   pomelo.init({
//     host: ipInfo.host,
//     port: 3050,
//     log: true
//   }, function() {
//     global.pomeloApp = pomelo;
//     console.log("pomelo 初始化成功");
//     initPomeloListen();
//   });
//
// };
// pomeloInit();
//
// function initPomeloListen() {
//   console.log("开始监听");
//   pomelo.on("event", (evenObj)=>{
//     console.log("evenObj", evenObj);
//   });
// }
// export default pomeloApp