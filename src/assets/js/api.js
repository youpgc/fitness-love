var api = {
    // customList: require("@/assets/json/customList.json")
}

const Mock = require("mockjs");

Mock.mock(/getCodeNum/, function(option) {
    //获取数字验证码
    return Mock.mock({
        status: true,
        data: Mock.Random.cword("0123456789", 5),
        msg: "获取数据成功",
        code: 1
    });
});

Mock.mock(/customList/, api.customList); //用户列表