<script>
	import { navigating, page } from '$app/stores';
	import {goto} from "$app/navigation"
	import Tab, { Label } from '@smui/tab';
  	import TabBar from '@smui/tab-bar';
	  let active = 'Home';
	function toChat(tab){
		switch (tab){
			case '登录':
				goto('login');
				break;
			case '信息管理':
				goto('msgmanage');
				break;
			case '文件管理':
				goto('filemanage');
				break;
			case '用户聊天':
				goto('chat');
				break;
		}
	}

</script>

<header class="header">
	<!-- <div class="corner">
		<div class="logo">
			<img src={apple} alt="RedApple" />
		</div>
	</div> -->

	
	<div class="nav">
		<!-- <div class="item text" on:click={toMsgManage}>信息管理</div>
		<div class='separeteLine text' >|</div>
		<div class="item text" on:click={toChat}>用户聊天</div>
		<div class='separeteLine text'>|</div>
		<div class="item text"on:click={toFileManage}>文件管理</div> -->
		<TabBar tabs={['登录', '信息管理', '文件管理','用户聊天']} let:tab bind:active>
			<!-- Note: the `tab` property is required! -->
			<Tab {tab}on:click={toChat(tab)}> 
			  <Label>{tab}</Label>
			</Tab>
		</TabBar>
	</div>	

	<!-- <div class="corner">
		<div class="loginWrapper"on:click={toLogin} >
			<div class="icon"  >
				<img src={loginIcon} alt="登录">
			</div>
			<div >登录</div>
		</div>
	</div> -->
</header>

<style>
.header{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding:0px 10px;
}


.nav{
	width: 500px;
	height: 60px;
	margin: auto;
}



</style>
