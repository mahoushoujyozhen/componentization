<script lang="ts" >
    import {onMount} from "svelte"
    import Button from '@smui/button'
    import Textfield from '@smui/textfield';
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
    })

    let test = function(){
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
            
            alert("token refresh success")
        })
    }
    let url = ""
    let file:FileList | null = null
    let filepath:string
    // let localHost = "http://175.178.106.176:7070/static"
    // 只能上传一个文件
    function uploadfile(){
        let formData = new FormData()
        if (window.localStorage.getItem("id") != null){
            var id = window.localStorage.getItem("id")
            
        }else{
            alert("用户未登录，请先登录")
            return
        }
        formData.append("userId",id)
        formData.append("type","post")
        formData.append("file",file[0])
        console.log(file)
        // let url ="http://175.178.106.176:7070/api/filemanage";
        let url ="http://localhost:7070/api/filemanage";
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
            alert(v.msg)
            console.log(v.data)
            filepath ="http://175.178.106.176:7070"+v.data.filepath
            // filepath =v.data.filepath
            console.log(filepath)  
        })
    }

    function deletefile (){
        let formData = new FormData()
        if (window.localStorage.getItem("id") != null){
            var id = window.localStorage.getItem("id")
            
        }else{
            alert("用户未登录，请先登录")
            return
        }
        formData.append("userId",id)
        formData.append("type","delete")
        // let url ="http://175.178.106.176:7070/api/filemanage";
        let url ="http://localhost:7070/api/filemanage";
        fetch(url,{
            method:"POST",
            mode:"cors",
            cache:"no-cache",
            credentials:"same-origin",
            // headers: {
            // //    "Content-Type": "multipart/form-data"?,
            // },
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
            alert(v.msg)
            filepath=""
            console.log(filepath)  
        })
    }
 
</script>

<div class="form">
    <div class="hide-file-ui">
        <Textfield bind:files={file} label="File" type="file" />
    </div>
    <div class="btnWrapper ">
        <!-- <button on:click={uploadfile}>上传文件</button>
        <button on:click={deletefile}>删除文件</button> -->
        <Button on:click={uploadfile} variant='raised'>upload</Button>
        <Button on:click={deletefile} variant='raised'>delete</Button>
        <div>FilePath:{filepath}</div>
        <img src={filepath} alt="xxx">
        <Button on:click={test}>Refresh</Button>
    </div>  
  
</div>


<style>
.btnWrapper{
    
    width: 200px;
    margin: auto;
    margin-top: 30px;
}
.hide-file-ui :global(input[type='file']::file-selector-button) {
    display: none;
  }
 
.hide-file-ui
    :global(:not(.mdc-text-field--label-floating) input[type='file']) {
    color: transparent;
  }
.form{
    margin: auto;
}
</style>