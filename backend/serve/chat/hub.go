package chat

import "fmt"

// Hub maintains the set of active clients and broadcasts messages to the
// clients.
type Hub struct {
	// Registered clients.
	clients map[*Client]bool

	// Inbound messages from the clients.
	broadcast chan Message

	// Register requests from the clients.
	register chan *Client

	// Unregister requests from clients.
	unregister chan *Client
}

func newHub() *Hub {
	return &Hub{
		broadcast:  make(chan Message),
		register:   make(chan *Client),
		unregister: make(chan *Client),
		clients:    make(map[*Client]bool),
	}
}

// 整体聊天室
func (h *Hub) run() {
	for {
		select {
		case client := <-h.register:
			h.clients[client] = true
		case client := <-h.unregister:
			if _, ok := h.clients[client]; ok {
				delete(h.clients, client)
				close(client.send)
			}
		case message := <-h.broadcast:
			for client := range h.clients {
				select {
				case client.send <- message.msg:
				default:
					close(client.send)
					delete(h.clients, client)
				}
			}
		}
	}
}

// 1v1 chat room
func (h *Hub) run2() {
	for {
		select {
		case client := <-h.register:
			h.clients[client] = true
		case client := <-h.unregister:
			sendId := client.Id
			if _, ok := chatRoom[sendId]; ok {
				delete(chatRoom, sendId)
			}
			if _, ok := h.clients[client]; ok {
				delete(h.clients, client)
				close(client.send)
			}

		//	broadcast to specific user
		case message := <-h.broadcast:
			receiveid := chatRoom[message.sendid].receiveId
			msgTemp1 := message.msg
			msgTemp2 := message.msg
			for client := range h.clients {
				if client.Id != receiveid && client.Id != message.sendid {
					continue
				}
				//send to receiver,wrap msg
				if client.Id == receiveid {
					temp := string(msgTemp1)
					temp = fmt.Sprintf("%s说 :%s", chatRoom[message.sendid].sendName, temp)
					message.msg = []byte(temp)
				}
				//send to sender,wrap msg
				if client.Id == message.sendid {
					temp := string(msgTemp2)
					temp = fmt.Sprintf("我说 :%v", temp)
					message.msg = []byte(temp)
				}
				select {
				case client.send <- message.msg:
					fmt.Println(fmt.Sprintf("%s发送了消息%s", message.sendid, receiveid))
				default:
					close(client.send)
					delete(h.clients, client)

				}
			}

		}

	}
}
