var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //input: aa bb , words will get aa and bb 
    console.log(req.query.words);
    var str = req.query.words;   // do not process the string , pass it to lucene directly


    var exec = require('child_process').exec;
    // older version we have to  specify the fileds, now we do not 
    //var cmd = 'java -jar luceneQuery.jar -fields faultDesc -values '+str.toString()+'  -return fileName';

    var cmd = 'java -jar luceneQuery.jar  -values '+str.toString()+'  -return fileName';
    console.log(cmd);


    exec(cmd, function(error, stdout, stderr) {
	console.log('---');
	//console.log(stdout);
	var result=stdout.toString();
	//console.log(result);
	//var arrResult = result.split('\n');
// old format 
//20110630JFM120R2.xls
//20110722SFI100R2.xlsx
//20110801ESOR6.xlsx
//20110810 SUR080R1.xls
//20110810SUR080R1.xls
//20110825ESOL2.xlsx
//20111205EMC60L1.xls
//20120114SFI100L1.xlsx
//20120702JRL050L1.xls
//20120703JRL070R3.xlsx


// new format
//fileName	Summary	
//20130126SFI060U1.xlsx	隔离接触器故障，东昌现场无备件；机器人控制柜24V电源线接线差异，ICOM板CSTOP##报警##，造成备用焊机隔离接触也无法吸合 ... 生产反映SFI60 U1机器人无法焊接，工程师到场后发现焊机有##报警##； ... 检测发现焊机内焊接控制器##报警##、隔离接触器未吸合； ... 焊机更换后依旧有##报警##，检查发现ICOM板CSTOP指示灯异常，与机器人控制柜连接的24V电源无输入； ... 使用短接排短接，消除##报警##，焊机可正常焊接； ... 1.启用BACKUP焊机，使用短接排清除##报警##，临时维持生产 ... 为什么SFI60U1工位HMI##报警## ... 为什么U1焊接##报警## ... 	
//20120328JRL040.xlsx	JRL机运线##报警##030工位升降滚床下降不到位 ... JRL机运线##报警##030工位升降滚床下降不到位，手动进行下降操作，滚床下降运行正常； ... 检查030工位下降传感器，已经到位，但故障##报警##未消除，通知控制确认状态； ... 检查##报警##代码发现是040滚床下降不到位，手动操作，没有动作； ... 运行一段时间后相同##报警##又出现，热保护器复位后检查接触器状态，发现并联端子有些松； ... 更改HMI##报警##信息 ... 对主线##报警##信息进行核对 ... 为什么工位##报警##？因为040工位升降滚床下降不到位； ... 	
//	

	res.send(stdout);  
	//res.redirect(303,'/');
	//res.render('search_advance', { title:stdout });
    });
});

module.exports = router;
