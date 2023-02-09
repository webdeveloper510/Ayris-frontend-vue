<template>
    <div class="manual">
        <div class="content manual-container">
            <div class="top-header">
                <p>Ayris MAchine Manual</p>
                <p>Software Manual</p>
                <p>Ayris Academy</p>
            </div>
            <div class="manual-content">
                <h2>Manual</h2>
                <p>Next to a great forest there lived a poor woodcutter with his wife and his two children. The boy's name was
                    Hansel and the girl's name was Gretel. He had but little to eat, and once, when a great famine came to the 
                    land, he could no longer provide even their daily bread.
                </p>
                <p>
                    One evening as he was lying in bed worrying about his problems, he sighed and said to his wife, 
                    "What is to become of us? How can we feed our children when we have nothing for ourselves?"
                </p>
                <p>
                    "Man, do you know what?" answered the woman. "Early tomorrow morning we will take the two children 
                    out into the thickest part of the woods, make a fire for them, and give each of them a little piece of bread, 
                    then leave them by themselves and go off to our work. They will not find their way back home, and we will
                    be rid of them."
                </p>
                <p>Next to a great forest there lived a poor woodcutter with his wife and his two children. The boy's name was
                    Hansel and the girl's name was Gretel. He had but little to eat, and once, when a great famine came to the 
                    land, he could no longer provide even their daily bread.
                </p>
                <p>
                    One evening as he was lying in bed worrying about his problems, he sighed and said to his wife, 
                    "What is to become of us? How can we feed our children when we have nothing for ourselves?"
                </p>
                <p>
                    "Man, do you know what?" answered the woman. "Early tomorrow morning we will take the two children 
                    out into the thickest part of the woods, make a fire for them, and give each of them a little piece of bread, 
                    then leave them by themselves and go off to our work. They will not find their way back home, and we will
                    be rid of them."
                </p>
            </div>
            <div class="bottom-header">
                <p><router-link to="/">Backward</router-link></p>
                <p><router-link to="/home">Home</router-link></p>
                <p><router-link to="/">Forward</router-link></p>
            </div>
        </div>
    </div>
  </template>
  
  <style lang="scss">
  .manual {
    display: flex;
    background-image: url(../../../assets/manual-bg2.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-height: 90vw;
    width: 98.792vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .top-header {
        position: absolute;
        top: 5.1vw;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        p {
            color: #fff;
            font-family: "Trajan-Bold";
            margin-bottom: 0vw;
            &:nth-child(1) {
                margin-top: 0.3vw;
            }
            &:nth-child(2) {
                margin-top: 0.8vw;
            }
            &:nth-child(3) {
                margin-top: 0.7vw;
            }
        }
    }
    .manual-content {
        background-color: #d6b46f82;
        max-width: 70vw;
        margin: 0 auto;
        border: 2px solid #8b3a16;
        h2 {
            color: #fff;
            font-family: "Old London";
            font-size: 6vw;
        }
        p {
            padding: 0 5vw;
            font-size: 1.5vw;
        }
    }
    .bottom-header {
        display: flex;
        justify-content: space-between;
        width: 91vw;
        max-width: 65vw;
        margin: 0 auto;
        position: absolute;
        bottom: 2vw;
        left: 0;
        right: 0;
        p {
            a {
                color: #fff;
                font-family: "Trajan-Bold";
                font-size: 1.2vw;
                text-decoration: none;
            }
            &:nth-child(2) {
                margin-left: -6px;
            }
        }
    }
    
  }
  
    .content {
      width: 98vw;
    }
  
  </style>
  
  <script>
  export default {
    name: "ManualComponent",
    components: {},
    data() {},
    computed: {},
    created() {},
    methods: {},
  };
  </script>
  