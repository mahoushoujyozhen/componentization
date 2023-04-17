<script lang="ts">
	import { writable } from "svelte/store";
    import {onMount} from "svelte"
    import Button from '@smui/button'
    import Textfield from '@smui/textfield';
    import Snackbar, { Label } from '@smui/snackbar';
    let snackbar: Snackbar;
    let message :string
    export let user = writable({
        id:0,
        username:"未登录",
        gender:"男",
        age:18,
        phone:"18401111111",
    })
    const refreshToken = function(){
    fetch("http://localhost:7070/api/login/refresh",{
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
                return
            }
            console.log("token refresh success")
        })
} 
        onMount(()=>{

            $user.id = window.localStorage.getItem("id")
            $user.username = window.localStorage.getItem("username")
            console.log($user.id)
            console.log($user.username)
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
                alert("用户尚未登录，请先登录(调用了refresh函数)")
                // refreshToken()
                // return
            }
            alert("token check success")
        })
        })
    function update(){
        // let url ="http://175.178.106.176:7070/api/msgmanage";
        let url ="http://localhost:7070/api/msgmanage"
        fetch(url,{
            method:"POST",
            mode:"cors",
            cache:"no-cache",
            credentials:"same-origin",
            headers: {
               "Content-Type": "application/json",
            },
            redirect:"follow",
            body: JSON.stringify({
                id :$user.id,
                username : $user.username,
                gender:$user.gender,
                age: $user.age,
                phone :$user.phone 
            }),
        })
        .then((v)=>{
            return v.json();
        })
        .then((v)=>{
            if(v.status != 0){
                console.log(v.msg);
                message = v.msg
                snackbar.open()
                return
            }
            console.log("success");
            console.log(v.msg)
            alert(v.msg)
            message = v.msg
            snackbar.open()
        })
    }
</script>

<div class="Container">
    <div class="input">
        <Textfield 
            bind:value={$user.username}
            variant='outlined'
            label="username"
        ></Textfield>
    </div>
    <div class="input">
        <Textfield 
            bind:value={$user.gender}
            variant='outlined'
            label="gender"
        ></Textfield>
    </div>
    <div class="input">
        <Textfield 
            bind:value={$user.age}
            variant='outlined'
            label="age"
        ></Textfield>
    </div>
    <div class="input">

        <Textfield 
            bind:value={$user.phone}
            variant='outlined'
            label="phone"
        ></Textfield>
    </div>
    <div class="btnWrapper">
        <Button on:click={update} variant='raised'>update</Button>
    </div>
    <Snackbar class="demo-success" bind:this={snackbar}>
        <Label>{message}</Label>
      </Snackbar>
</div>

<style>
.Container{
    width: 300px;
    height: 450px;
    margin: auto;
    border: solid 1px #cccccc;
    border-radius: 5px;
    box-shadow: 1px 3px 5px 3px #cccccc; ;    
}
.input{
    margin-left: 45px;
    margin-top: 35px;
}
.btnWrapper{
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

</style>