<script lang="ts">
import {onMount} from "svelte"
import Textfield from '@smui/textfield';
import Button from '@smui/button'
import List, {
    Item,
    Graphic,
    Meta,
    Text,
    PrimaryText,
    SecondaryText,
  } from '@smui/list';
	import { append, identity, merge_ssr_styles } from "svelte/internal";
    
let userList:Object[] = []
let currentId:Number
let currentName:String
let connTargetId:Number
let targetName:String
let conn:any    
let msg:any
let log:any
let username:string
let selectionIndex: number | undefined = undefined;
let selection = 'Stephen Hawking';
let locationHost = "175.178.106.176:7070/api/chat"

onMount(()=>{
    fetch("http://localhost:7070/api/login/welcome",{
            method:"POST",
            cache:"no-cache",
            credentials:"include",
        })
        .then((v)=>{
            return v.json()
        })
        .then((v)=>{
            if (v.status != 0 ){
                console.log(v.msg)
                alert("用户尚未登录，请先登录")
                return
            }
            alert("token check success")
            
        })

    if (window.localStorage.getItem("id") == null){
        alert("请先登录再进行聊天")
        return
    }
    username = window.localStorage.getItem("username")
    let id = window.localStorage.getItem("id")
    let formData = new FormData()
    formData.append("userid",id)
    let url ="http://175.178.106.176:7070/api/userlist";
        fetch(url,{
            method:"POST",
            mode:"cors",
            cache:"no-cache",
            credentials:"same-origin",
            redirect:"follow",
            body: formData
        })
        .then((v)=>{
            return v.json();
        })
        .then((v)=>{
            if(v.status != 0){
                console.log(v.msg);
                return
            }
            console.log("success");
            alert("用户列表展示成功")
            userList = v.data
            // console.log(userList)
        })

})
function Connect(e:any){
    currentId = Number(window.localStorage.getItem("id"))
    currentName = window.localStorage.getItem("username")
    console.log("currentId",currentId)
    // var index = e.target.childNodes[0].nodeValue
    // connTargetId = userList[index].id
    // targetName = userList[index].username
    connTargetId = userList[(selectionIndex+1)].id
    targetName = userList[(selectionIndex+1)].username
    // selection = targetName
    console.log("connectTargetId",connTargetId,targetName)
    // websocket connect
    if (conn != null){
        conn.close()
        console.log("conn close!")
    }
    conn = new WebSocket("ws://"+locationHost+"?currentId="+currentId+"&currentName="+currentName+"&connTargetId="+connTargetId+"&targetName="+targetName)
    console.log(conn.url)
    conn.onclose = function(evt:any) {
        // clear log
        let logtemp = document.getElementById("log")
        let childs = log?.childNodes
        for (var i = childs.length - 1; i>=0; i--){
            logtemp?.removeChild(childs[i])
        }
    }
    conn.onmessage = function (evt:any) {
            var messages = evt.data.split('\n');
            console.log(messages)
            for (var i = 0; i < messages.length; i++) {
                var item = document.createElement("div");
                item.innerText = messages[i];
                appendLog(item);
            }
    };
    
}
function appendLog(item) {
    log = document.getElementById("log")    
    var doScroll = log.scrollTop > log.scrollHeight - log.clientHeight - 1;
    
    log.appendChild(item);
    if (doScroll) {
        log.scrollTop = log.scrollHeight - log.clientHeight;
    }
}
function submit(){
    msg = document.getElementById("msg")
    conn.send(msg.value);
    console.log(msg.value)
    msg.value = ""
    // conn.send(msg)
    // msg = ""
    return
}

</script>

<div class="Container">
    <div class="userlist">
        <!-- {#each userList as user,i}
        <div class="item" on:click={Connect}>{i}:{user.username}</div>
        {/each} -->
        <List
            class="demo-list"
            twoLine
            avatarList
            singleSelection
            bind:selectedIndex={selectionIndex}
        >
            {#each userList as user,i}
            <Item
                on:SMUI:action={Connect}
                on:SMUI:action={() => (selection = user.username)}
                selected={selection === user.username}
            >
            
                <Text>
                <PrimaryText>{user.username}</PrimaryText>
                <SecondaryText>{user.id}</SecondaryText>
                </Text>
            </Item>
            {/each}
        </List>
    </div>
    <div class="chatPlace">
        <div id="title">{username}聊天框</div>
        <div id="log"></div>
        <div class="inputWrapper">
            <input id="msg" class="inputField" type="text">
            <!-- <button id="btn" on:click={submit}>send</button> -->
            <Button  on:click={submit} variant='raised'>send</Button>
        </div>
    </div>
</div>



<style>
.Container {
    width: 900px;
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: auto;
    border: 1px solid #cdcdcd;
    border-radius: 10px;
}
.chatPlace{
    width: 700px;
    height: 100%;
}
.userlist{
    width: 200px;
    height: 100%;
    overflow-y: scroll;   
}
/* 滚动条样式 */
.userlist::-webkit-scrollbar{
    width: 4px;
}
.userlist::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(134, 133, 133, 0.2);
}
.userlist::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(243, 240, 240, 0.1);
}

#title{
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #cdcdcd;
    
}
#log{
    width: 100%;
    height: 80%;
    /* border: 1px solid salmon; */
    overflow-y: scroll;
    border-bottom: 1px solid #cdcdcd;
    /* background-color: red; */
}
#log::-webkit-scrollbar{
    width: 4px;
}
#log::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(134, 133, 133, 0.2);
}
#log::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(243, 240, 240, 0.1);
}
.inputWrapper{
    width: 100%;
    height: 10%;
}
.inputField{
    width: 80%;
    height: 50%;
    /* padding-top: 20px; */
    margin-top: 15px;
    margin-left:20px;
    margin-right: 10px;
    border-radius: 5px;
    border: none;
    /* background-color: yellow; */
}
#btn{
    margin-left:20px ;
    background-color: #e9e9e9;
    color: #0cc266;
    border: 0px;
    border-radius: 10px;
}

</style>