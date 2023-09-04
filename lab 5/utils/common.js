//模拟新闻数据
const news = [
  {id: '264698',
  title: '一见·从服贸会，领会习近平主席高水平对外开放的战略思考',
  poster: 'https://imgpolitics.gmw.cn/attachement/jpg/site2/20230904/f44d305ea48e265fa16630.jpg',
  content: ' 自2019年以来，每逢服贸会，习近平主席都会发表视频致辞或致贺信。聚焦全球服务贸易，着眼于中国与世界、机遇与挑战、现在与未来，有判断、有倡议、有行动，体现着中国扩大高水平对外开放的坚定决心，彰显着不断以中国新发展为世界提供新机遇的大国担当。通过三组词，一起来领会习近平主席对高水平对外开放的战略思考。',
  add_date: '2023-09-04'},
  {id: '304083',
  title: '宁波：当“老制造”邂逅“新亚运”',
  poster: 'https://imgpolitics.gmw.cn/attachement/jpg/site2/20230904/f44d305ea6dd265fc6bf2b.jpg',
  content: ' 新华社宁波9月3日电（记者顾小立、邱世杰）走进浙江省宁波市宁海县深甽镇兴达旅游用品有限公司的生产车间，刚被搬下流水线的运动杖在操作台上堆得满满当当，工人们正在进行最后的组装检查，将所有货品打包完成后，发往客户手中。',
  add_date: '2023-09-04'},
  {id: '305670',
  title: '挥好科技创新“指挥棒” 筑牢“防”的屏障',
  poster: 'https://imgpolitics.gmw.cn/attachement/png/site2/20230904/18c04d00990c265fb3eb08.png',
  content: '在广东省应急管理厅指挥中心，一网统管信息化系统显示每个工业园区的实时图像，搭配人工智能技术，可识别危险动作和明火冒烟等事故苗头。广东开展重大隐患专项整治行动，防控矿山、危化品、工贸等重点行业领域风险，筑牢“防”的屏障。',
  add_date: '2023-09-4'}
 ];
//  获取新闻列表函数
 //获取新闻列表
 function getNewsList() {
  let list = [];
  for (var i = 0; i < news.length; i++) {
  let obj = {};
  obj.id = news[i].id;
  obj.poster = news[i].poster;
  obj.add_date = news[i].add_date;
  obj.title = news[i].title;
  list.push(obj);
  }
  return list; //返回新闻列表
 }
//  获取新闻内容函数
 //获取新闻内容
 function getNewsDetail(newsID) {
  let msg = {
  code: '404', //没有对应的新闻
  news: {}
  };
  for (var i = 0; i < news.length; i++) {
  if (newsID == news[i].id) { //匹配新闻id编号
  msg.code = '200'; //成功
  msg.news = news[i]; //更新当前新闻内容
  break;
  }
  }
  return msg; //返回查找结果
 }
//  对外暴露接口
 // 对外暴露接口
 module.exports = {
  getNewsList: getNewsList,
  getNewsDetail: getNewsDetail
 }
 