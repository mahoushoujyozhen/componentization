package cmn

import (
	"backend/zap_log"
	"fmt"
	"github.com/tidwall/pretty"
	"github.com/tidwall/sjson"
	"os"
)

// JsonWrite set json key/value to file by path
// if fn doesn't exist then create it
var log = zap_log.Log

func JsonWrite(fn string, path string, value interface{}) (err error) {
	switch {
	case fn == "":
		err = fmt.Errorf("call JsonWrite with empty fn")
	case path == "":
		err = fmt.Errorf("call JsonWrite with empty path")
	case value == nil:
		err = fmt.Errorf("call JsonWrite with nil value")
	}

	if err != nil {
		log.Error(err.Error())
		return
	}

	buf, err := os.ReadFile(fn)
	if os.IsNotExist(err) {
		err = nil
	}

	if err != nil {
		log.Error(err.Error())
		return
	}
	if len(buf) == 0 {
		buf = []byte("{}")
	}

	rsl, err := sjson.Set(string(buf), path, value)
	if err != nil {
		log.Error(err.Error())
		return
	}

	err = os.WriteFile(fn, pretty.Pretty([]byte(rsl)), 0644)
	if err != nil {
		log.Error(err.Error())
	}
	return
}
