<template>
    <div>
        <header class="app-head">
            <h2>聊天列表</h2>    
        </header>

        <ul class="chat-list">
            <li>
                <span class="avatar">
                    <img src="https://cdn.v2ex.com/avatar/b85a/80bb/72762_normal.png?m=1463386137">
                </span>
                <span class="name">
                    名字
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped="" type="text/css">
    .app-head{
        height: 1.6rem;
        background: #4267b2;

        h2{
            color: white;
            line-height: 1.6rem;
            font-size: .7rem;
        }
    }

    .chat-list{
        text-align: left;
        font-size: .4rem;
        
    }
</style>

