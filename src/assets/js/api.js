import Mock from 'mockjs';

Mock.mock(/getCodeNum/, function() {
    return Mock.mock({
        status: true,
        data: Mock.Random.cword('0123456789', 5),
        msg: '获取数据成功',
        code: 1
    });
});
