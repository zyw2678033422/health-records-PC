/**
 * 初始化用户(user)模拟数据
 *
 */
const Users = [];
Users.push({
  id: 1,
  username: 'wujj', //用户名
  name: "吴俊杰", //姓名
  password: '123456', //密码
  email: '798595965@qq.com', //邮箱
  nickname: '超级管理员', //昵称
  sex: 1, //性别
  addr: '杭州市萧山区杭州湾信息港'
});

Users.push({
  id: 2,
  username: 'patient01',
  name: "患者一号", //姓名
  password: '123456',
  email: '798595965@qq.com',
  nickname: '患者',
  sex: 1, //性别
  addr: '杭州市萧山区'
});

Users.push({
  id: 3,
  username: 'patient02',
  name: "患者二号", //姓名
  password: '123456',
  email: '798595965@qq.com',
  nickname: '患者',
  sex: 1, //性别
  addr: '杭州市萧山区'
});

Users.push({
  id: 4,
  username: 'organization01',
  name: "机构一号", //姓名
  password: '123456',
  email: '798595965@qq.com',
  nickname: '组织机构',
  sex: 1, //性别
  addr: '杭州市萧山区'
});

Users.push({
  id: 5,
  username: 'doctor01',
  name: "医生一号", //姓名
  password: '123456',
  email: '798595965@qq.com',
  nickname: '医生',
  sex: 1, //性别
  addr: '杭州市萧山区'
});

module.exports = Users;
