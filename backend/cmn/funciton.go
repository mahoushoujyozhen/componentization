package cmn

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"sync"
)

var (
	Services     = make(map[string]*ServeEndPoint)
	serviceMutex sync.Mutex
	err          error
)

func AddService(ep *ServeEndPoint) (err error) {

	if ep == nil {
		err = errors.New("ep is null")
		//break/**/
		return err
	}

	if err != nil {
		fmt.Println(err)
		return
	}
	serviceMutex.Lock()
	defer serviceMutex.Unlock()

	Services[ep.Path] = ep
	return
}

func Resp(w http.ResponseWriter, msg *ReplyProto) {
	if w == nil || msg == nil {
		fmt.Println("null msg,invalid response!!!")
		return
	}
	buf, err := json.Marshal(msg)
	if err != nil {
		//将错误信息返回
		w.Write([]byte(fmt.Sprintf(`{"code":-300,"msg":"%s"}`, err.Error())))
		fmt.Println(err.Error())
		return
	}
	w.Write(buf)
}
