<script lang="ts">
	import { json } from "@sveltejs/kit";
	import { writable } from "svelte/store";
    import{onMount} from "svelte"
    import Button from '@smui/button'
    import Textfield from '@smui/textfield';
    import Snackbar, { Label } from '@smui/snackbar';
    let snackbarWithoutClose: Snackbar;
    let message :string
    let form = writable({
        username:"张三",
        pw:"123456",
        id:0
    })
    onMount(()=>{
        // window.localStorage.clear()
    })

    function login(){
        // window.localStorage.clear()
         let url ="http://175.178.106.176:7070/api/login";
        // let url ="http://localhost:7070/api/login";
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
                username : $form.username,
                pw : $form.pw,
            }),
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
            console.log(v.msg)
            // alert(v.msg)
            message = v.msg
            snackbarWithoutClose.open()
            console.log(v.data.id)
            $form.id = v.data.id
            window.localStorage.setItem("id",v.data.id)   
            window.localStorage.setItem("username",v.data.username)  
        })
    }
</script>

<div class="Container">
    <div class="input">
        <Textfield 
            bind:value={$form.username}
            class="shaped-outlined"
            variant='outlined'
            label="username"
        ></Textfield>
    </div>
    <div class="input">
        <Textfield 
            bind:value={$form.pw}
            type='password'
            class="shaped-outlined"
            variant='outlined'
            label="password"
        ></Textfield>
    </div>
    <div class="btnWrapper">
        <Button color='primary' on:click={login} variant='raised'>login</Button>
    </div>
    <Snackbar class="demo-success" bind:this={snackbarWithoutClose}>
        <Label>{message}</Label>
      </Snackbar>
</div>

<style>
.Container{
    width: 300px;
    height: 300px;
    margin: auto;
    border: solid 1px #cccccc;
    border-radius: 5px;
    box-shadow: 1px 3px 5px 3px #cccccc;   
}
.input{

    margin-top: 45px;
    width: 100%;
    margin-left: 45px;
}
.btnWrapper{
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

</style>