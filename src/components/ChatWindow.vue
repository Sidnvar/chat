<template>
    <div>
        <header class="app-head">
            <h2>小泽玛利亚</h2>    
        </header>

        <div class="chat-content">
            <!-- 他人对话 -->
            <div class="content-item">
                <span class="avatar">
                    <img src="https://cdn.v2ex.com/avatar/b85a/80bb/72762_normal.png?m=1463386137"/>
                </span>
                <span class="content ">
                    <p class="left-arrow">你好，我是小泽玛利亚</p>
                </span>
            </div>
            <!-- 自己对话 -->
            <div class="content-item self">
                <span class="avatar">
                    <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1990453139,2666337591&fm=58&bpow=407&bpoh=529"/>
                </span>
                <span class="content">
                    <p class="right-arrow">我不信，你发个作品看一看</p>
                </span>
            </div>
        </div>

        <div class="chat-input">
            <input />
            <button>发送</button>
        </div>
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

    .chat-content{
        padding-top: 1.6rem;

        .content-item{
            padding: .3rem;
            text-align: left;
            clear: both;

            .avatar{
                float: left;
                height: 1.2rem;
                display: inline-block;
                width: 1.2rem;

                img{
                    width: 100%;
                    height: 100%;
                }
            }

            .content{
                display: inline-block;
                float: left;

                p{
                    background: white;
                    font-size: .4rem;
                    padding: .4rem;
                    border-radius: .1rem;
                    margin: 0 .4rem;
                    text-align: left;
                    max-width: 6rem;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                        // line-height: .5rem;
                    /* min-height: 1.2rem; */
                }
            }

            .left-arrow:before{
                display:block;
                content:'';
                border-width:4px 4px 4px 4px;
                border-style:solid;
                border-color:transparent white transparent transparent;
                
                /* 定位 */
                position: absolute;
                left: 1.65rem;
                // top:-16px;
            }

            .right-arrow:before{
                display: block;
                content: '';
                border-width: 4px 4px 4px 4px;
                border-style: solid;
                border-color: transparent transparent transparent #9eea6a;
                position: absolute;
                left: 8.92rem;
            }

            &.self{
                text-align: right;
                
                p{
                    background: #9eea6a;
                }
                .avatar{
                    float: right;
                }

                .content{
                    float: right;
                }
            }
        }
    }

    .chat-input{
        position: fixed;
        background: white;
        width: 100%;
        bottom: 0;

        input{
            width: 8rem;
            height: .8rem;
            border: none;
            border-bottom: 1px solid #ccc;
            margin: 0 .4rem;
            margin-bottom: .2rem;
            outline: none;
        }

        button{
            border: 1px solid #179e16;
            background: #1aad19;
            color: white;
            height: .8rem;
            outline: none;
            border-radius: .05rem;
        }
    }
</style>

