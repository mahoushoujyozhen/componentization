package cmn

import (
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"os"
)

var url = "localhost:4040"
var z *zap.Logger

func InitLogger() {
	if z != nil {
		return
	}
	//init logger
	writeSyncer, _ := os.Create("./zap_log/info.log") //日志文件存放目录
	encoderConfig := zap.NewProductionEncoderConfig() //指定时间格式
	encoderConfig.EncodeTime = zapcore.ISO8601TimeEncoder
	encoderConfig.EncodeLevel = zapcore.CapitalLevelEncoder
	encoder := zapcore.NewConsoleEncoder(encoderConfig)               //获取编码器,NewJSONEncoder()输出json格式，NewConsoleEncoder()输出普通文本格式
	core := zapcore.NewCore(encoder, writeSyncer, zapcore.DebugLevel) //第三个及之后的参数为写入文件的日志级别,ErrorLevel模式只记录error级别的日志
	z = zap.New(core, zap.AddCaller())                                //AddCaller()为显示文件名和行号

}
func GetLogger() *zap.Logger {
	if z == nil {
		InitLogger()
	}
	return z

}
