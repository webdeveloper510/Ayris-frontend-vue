(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a9d82b4"],{ab6d:function(t,e,i){},c3de:function(t,e,i){"use strict";i.r(e);var c=i("7a23");function n(t,e,i,n,l,s){const a=Object(c["G"])("Music",!0);return Object(c["z"])(),Object(c["f"])(a)}const l={class:"music-container"},s={class:"menu menu-left"},a={class:"text-left"},o={class:"audioPlayer",id:"app"},u=Object(c["i"])("span",null,null,-1),r=Object(c["i"])("span",null,null,-1),d=Object(c["i"])("span",null,null,-1),b=[u,r,d],j=["onClick"],O={class:"title"},h={class:"artist"},g={class:"albumImage"},m=["src"],p={class:"albumDetails"},y={class:"playerButtons"},v=Object(c["i"])("i",{class:"zmdi zmdi-skip-previous"},null,-1),f=[v],k=Object(c["i"])("i",{class:"zmdi zmdi-skip-next"},null,-1),S=[k],P={class:"currentProgressBar"},_={class:"menu menu-right"},A={class:"text-right"};function C(t,e,i,n,u,r){const d=Object(c["G"])("HeaderComponent"),v=Object(c["G"])("router-link"),k=Object(c["G"])("FooterComponent");return Object(c["z"])(),Object(c["h"])(c["a"],null,[Object(c["l"])(d),Object(c["i"])("div",l,[Object(c["i"])("div",s,[Object(c["i"])("div",a,[Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Year")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Era/Style")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Location")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Medium")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:"/mythology"},{default:Object(c["N"])(()=>[Object(c["k"])("Mythology")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Empresses")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Philosophy")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Dream Engine")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Etherith")]),_:1})])])]),Object(c["i"])("main",o,[Object(c["i"])("a",{class:Object(c["t"])(["nav-icon",{isActive:u.isPlaylistActive}]),onClick:e[0]||(e[0]=t=>u.isPlaylistActive=!u.isPlaylistActive),title:"Music List"},b,2),Object(c["i"])("div",{class:Object(c["t"])(["audioPlayerList",{isActive:u.isPlaylistActive}])},[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(u.musicPlaylist,(t,e)=>(Object(c["z"])(),Object(c["h"])("div",{class:Object(c["t"])(["item",{isActive:r.isCurrentSong(e)}]),key:t.id,onClick:t=>(r.changeSong(e),u.isPlaylistActive=!u.isPlaylistActive)},[Object(c["i"])("p",O,Object(c["J"])(t.title),1),Object(c["i"])("p",h,Object(c["J"])(t.artist),1)],10,j))),128)),Object(c["i"])("p",{class:"debugToggle",onClick:e[1]||(e[1]=t=>r.toggleDebug())},"debug: "+Object(c["J"])(u.debug),1)],2),Object(c["i"])("div",{class:Object(c["t"])(["audioPlayerUI",{isDisabled:u.isPlaylistActive}])},[Object(c["i"])("div",g,[Object(c["l"])(c["c"],{name:"ballmove","enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutDown",mode:"out-in"},{default:Object(c["N"])(()=>[(Object(c["z"])(),Object(c["h"])("img",{onLoad:e[2]||(e[2]=t=>r.onImageLoaded()),src:u.musicPlaylist[u.currentSong].image,key:u.currentSong,ondragstart:"return false;",id:"playerAlbumArt"},null,40,m))]),_:1}),(Object(c["z"])(),Object(c["h"])("div",{class:"loader",key:u.currentSong},"Loading..."))]),Object(c["i"])("div",p,[Object(c["l"])(c["c"],{name:"slide-fade",mode:"out-in"},{default:Object(c["N"])(()=>[(Object(c["z"])(),Object(c["h"])("p",{class:"title",key:u.currentSong},Object(c["J"])(u.musicPlaylist[u.currentSong].title),1))]),_:1}),Object(c["l"])(c["c"],{name:"slide-fade",mode:"out-in"},{default:Object(c["N"])(()=>[(Object(c["z"])(),Object(c["h"])("p",{class:"artist",key:u.currentSong},Object(c["J"])(u.musicPlaylist[u.currentSong].artist),1))]),_:1})]),Object(c["i"])("div",y,[Object(c["i"])("a",{class:Object(c["t"])(["button",{isDisabled:0==u.currentSong}]),onClick:e[3]||(e[3]=t=>r.prevSong()),title:"Previous Song"},f,2),Object(c["i"])("a",{class:"button play",onClick:e[4]||(e[4]=t=>r.playAudio()),title:"Play/Pause Song"},[Object(c["l"])(c["c"],{name:"slide-fade",mode:"out-in"},{default:Object(c["N"])(()=>[(Object(c["z"])(),Object(c["h"])("i",{class:Object(c["t"])(["zmdi",[u.currentlyStopped?"zmdi-stop":u.currentlyPlaying?"zmdi-pause-circle":"zmdi-play-circle"]]),key:1},null,2))]),_:1})]),Object(c["i"])("a",{class:Object(c["t"])(["button",{isDisabled:u.currentSong==u.musicPlaylist.length-1}]),onClick:e[5]||(e[5]=t=>r.nextSong()),title:"Next Song"},S,2)]),Object(c["i"])("div",P,[Object(c["i"])("div",{class:"currentProgress",style:Object(c["v"])({width:u.currentProgressBar+"%"})},null,4)])],2)]),Object(c["i"])("div",_,[Object(c["i"])("div",A,[Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Banners")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Heaven")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:"/music"},{default:Object(c["N"])(()=>[Object(c["k"])("Music")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Library")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Court")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Empire")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Army")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Market")]),_:1})]),Object(c["i"])("p",null,[Object(c["l"])(v,{to:""},{default:Object(c["N"])(()=>[Object(c["k"])("Treasury")]),_:1})])])])]),Object(c["l"])(k)],64)}var N=i("80f7"),E=i("3c94"),T={name:"MusicComponent",data(){return{loading:!1,myBuild:null,selectedObjName:null,audio:"",imgLoaded:!1,currentlyPlaying:!1,currentlyStopped:!1,currentTime:0,checkingCurrentPositionInTrack:"",trackDuration:0,currentProgressBar:0,isPlaylistActive:!1,currentSong:0,debug:!1,musicPlaylist:[{title:"Service Bell",artist:"Daniel Simion",url:"https://soundbible.com/mp3/service-bell_daniel_simion.mp3",image:"https://source.unsplash.com/crs2vlkSe98/400x400"},{title:"Meadowlark",artist:"Daniel Simion",url:"https://soundbible.com/mp3/meadowlark_daniel-simion.mp3",image:"https://source.unsplash.com/35bE_njbG9E/400x400"},{title:"Hyena Laughing",artist:"Daniel Simion",url:"https://soundbible.com/mp3/hyena-laugh_daniel-simion.mp3",image:"https://source.unsplash.com/Esax9RaEl2I/400x400"},{title:"Creepy Background",artist:"Daniel Simion",url:"http://soundbible.com/mp3/creepy-background-daniel_simon.mp3",image:"https://source.unsplash.com/j0g8taxHZa0/400x400"}],audioFile:""}},components:{FooterComponent:E["a"],HeaderComponent:N["a"]},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.changeSong(),this.audio.loop=!1},methods:{togglePlaylist:function(){this.isPlaylistActive=!this.isPlaylistActive},nextSong:function(){this.currentSong<this.musicPlaylist.length-1&&this.changeSong(this.currentSong+1)},prevSong:function(){this.currentSong>0&&this.changeSong(this.currentSong-1)},changeSong:function(t){var e=this.currentlyPlaying;this.imageLoaded=!1,void 0!==t&&(this.stopAudio(),this.currentSong=t),this.audioFile=this.musicPlaylist[this.currentSong].url,this.audio=new Audio(this.audioFile);var i=this;this.audio.addEventListener("loadedmetadata",(function(){i.trackDuration=Math.round(this.duration)})),this.audio.addEventListener("ended",this.handleEnded),e&&this.playAudio()},isCurrentSong:function(t){return this.currentSong==t},getCurrentSong:function(t){return this.musicPlaylist[t].url},playAudio:function(){1==this.currentlyStopped&&this.currentSong+1==this.musicPlaylist.length&&(this.currentSong=0,this.changeSong()),this.currentlyPlaying?this.stopAudio():(this.getCurrentTimeEverySecond(!0),this.currentlyPlaying=!0,this.audio.play()),this.currentlyStopped=!1},stopAudio:function(){this.audio.pause(),this.currentlyPlaying=!1,this.pausedMusic()},handleEnded:function(){this.currentSong+1==this.musicPlaylist.length?(this.stopAudio(),this.currentlyPlaying=!1,this.currentlyStopped=!0):(this.currentlyPlaying=!1,this.currentSong++,this.changeSong(),this.playAudio())},onImageLoaded:function(){this.imgLoaded=!0},getCurrentTimeEverySecond:function(){var t=this;this.checkingCurrentPositionInTrack=setTimeout(function(){t.currentTime=t.audio.currentTime,t.currentProgressBar=t.audio.currentTime/t.trackDuration*100,t.getCurrentTimeEverySecond(!0)}.bind(this),1e3)},pausedMusic:function(){clearTimeout(this.checkingCurrentPositionInTrack)},toggleDebug:function(){this.debug=!this.debug,document.body.classList.toggle("debug")}},watch:{currentTime:function(){this.currentTime=Math.round(this.currentTime)}},beforeUnmount:function(){this.audio.removeEventListener("ended",this.handleEnded),this.audio.removeEventListener("loadedmetadata",this.handleEnded),clearTimeout(this.checkingCurrentPositionInTrack)}},z=(i("ced5"),i("6b0d")),L=i.n(z);const D=L()(T,[["render",C]]);var M=D,w={name:"MusicView",components:{Music:M}};const x=L()(w,[["render",n]]);e["default"]=x},ced5:function(t,e,i){"use strict";i("ab6d")}}]);
//# sourceMappingURL=chunk-7a9d82b4.54e4d2fd.js.map