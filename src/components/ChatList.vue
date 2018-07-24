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
                    <p class="chat-name">小泽玛利亚</p>
                    <p class="last-chat">你好，我是小泽玛利亚</p>
                </span>
            </li>
                        <li>
                <span class="avatar">
                    <img src="https://cdn.v2ex.com/avatar/b85a/80bb/72762_normal.png?m=1463386137">
                </span>
                <span class="name">
                    <p class="chat-name">苍井空</p>
                    <p class="last-chat">你好，我是苍井空</p>
                </span>
            </li>
                        <li>
                <span class="avatar">
                    <img src="https://cdn.v2ex.com/avatar/b85a/80bb/72762_normal.png?m=1463386137">
                </span>
                <span class="name">
                    <p class="chat-name">吴彦祖</p>
                    <p class="last-chat">你好，我是吴彦祖</p>
                </span>
            </li>
                        <li>
                <span class="avatar">
                    <img src="https://cdn.v2ex.com/avatar/b85a/80bb/72762_normal.png?m=1463386137">
                </span>
                <span class="name">
                    <p class="chat-name">明星聊天室</p>
                    <p class="last-chat">大家出来聊天啊</p>
                </span>
            </li>
                        <li>
                <span class="avatar">
                    <img src="https://cdn.v2ex.com/avatar/b85a/80bb/72762_normal.png?m=1463386137">
                </span>
                <span class="name">
                    <p class="chat-name">莹莹</p>
                    <p class="last-chat">对不起，你是个好人</p>
                </span>
            </li>
                        <li>
                <span class="avatar">
                    <img src="https://cdn.v2ex.com/avatar/b85a/80bb/72762_normal.png?m=1463386137">
                </span>
                <span class="name">
                    <p class="chat-name">刘亦菲</p>
                    <p class="last-chat">我是假的</p>
                </span>
            </li>
                        <li>
                <span class="avatar">
                    <img src="https://cdn.v2ex.com/avatar/b85a/80bb/72762_normal.png?m=1463386137">
                </span>
                <span class="name">
                    <p class="chat-name">聊天名字</p>
                    <p class="last-chat">聊天内容</p>
                </span>
            </li>
                        <li>
                <span class="avatar">
                    <img src="https://cdn.v2ex.com/avatar/b85a/80bb/72762_normal.png?m=1463386137">
                </span>
                <span class="name">
                    <p class="chat-name">聊天名字</p>
                    <p class="last-chat">聊天内容</p>
                </span>
            </li>
                        <li>
                <span class="avatar">
                    <img src="https://cdn.v2ex.com/avatar/b85a/80bb/72762_normal.png?m=1463386137">
                </span>
                <span class="name">
                    <p class="chat-name">聊天名字</p>
                    <p class="last-chat">聊天内容</p>
                </span>
            </li>
                        <li>
                <span class="avatar">
                    <img src="https://cdn.v2ex.com/avatar/b85a/80bb/72762_normal.png?m=1463386137">
                </span>
                <span class="name">
                    <p class="chat-name">聊天名字</p>
                    <p class="last-chat">聊天内容</p>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'chat-list'
    }
</script>

<style lang="scss" scoped="" type="text/css">
    .app-head{
        height: 1.6rem;
        position: fixed;
        background: #4267b2;
        width: 100%;

        h2{
            color: white;
            line-height: 1.6rem;
            font-size: .7rem;
        }
    }

    .chat-list{
        text-align: left;
        font-size: .4rem;
        padding-top: 1.6rem;
        
        li{
            padding: .4rem;

            .avatar{
                height: 1.2rem;
                width: 1.2rem;
                display: inline-block;
                float: left;
                
                img{
                    height: 100%;
                    width: 100%;
                }
            }

            .name{
                display: inline-block;
                height: 1.2rem;
                padding: 0 .25rem;

                .chat-name{
                    font-size: .48rem;
                    margin-top: .08rem;
                }

                .last-chat{
                    font-size: .36rem;
                    color: #999;
                    margin-top: .3rem;
                }
            }
        }
    }
</style>

