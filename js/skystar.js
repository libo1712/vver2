// poem
var words=[
    '你好呀 VV',
    '第一次见面 11.6 下酒烧烤小酒馆',
    '我用漂亮的押韵形容被掠夺一空的爱情',
    '我想就这样牵着你的手不放开',
    '爱能不能够永远单纯没有悲哀',
    '你不等了说好的幸福呢',
    '我错了泪干了放手了后悔了',
    '只是回忆的音乐盒还旋转着',
    '要怎么停呢',
    '你说不该再相见只为了瞬间',
    '谢谢你让我听见',
    '好想回到那个夏天',
    '趴在桌子上偷偷看你',
    '不爱吃不爱吃香菜',
    '请不要把分手当作你的请求',
    '我知道坚持要走是你受伤的藉口',
    '南风知不知',
    '我见青山多妩媚',
    '因为我在等待永远',
    '雨下整夜我的爱溢出就像雨水',
    '窗台蝴蝶像诗里纷飞的美丽章节',
    '第二次见面 望京',
    '风筝在阴天搁浅',
    '想念还在等待救援',
    '我拉着线复习',
    '你给我的温柔',
    '你说不该再相见只为了瞬间',
    '谢谢你让我听见',
    '因为我在等待永远',
    '翻着我们的照片',
    '想念若隐若现',
    '去年的冬天',
    '一起长大的约定',
    '那样真心与你聊不完的曾经',
    '而我已经分不清',
    '你是友情还是错过的爱情',
    '我知道坚持要走是你受伤的藉口',
    '请你回头',
    '我会陪你一直走到最后',
    '转身离开',
    '分手说不出来',
    '海鸟跟鱼相爱',
    '只是一场意外',
    '我接着写把永远爱你写进诗的结尾',
    '你是我唯一想要的了解',
    '两行来自秋末的眼泪',
    '让爱渗透了地面',
    '我要的只是你在我身边',
    '我一路向北',
    '离开有你的季节',
    '你说你好累',
    '已无法再爱上谁',
    '如果我遇见你是一场悲剧',
    '我可以让生命就这样毫无意义',
    '我想就这样牵着你的手不放开',
    '爱能不能够永远单纯没有悲哀',
    '再说我爱你',
    '可能雨也不会停',
    '黑色毛衣藏在哪里',
    '就让回忆永远停在那里',
    '如果能让我重新再来一次',
    '我希望我不曾出现你的生命里',
    '从前从前有个人爱你很久',
    '但偏偏风渐渐地把距离吹得好远',
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
		  textone.innerHTML = '每日更新 -.-';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
		  textone.style.fontSize = '25px';
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
		  texttwo.style.fontSize = '25px';
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
		  textthree.style.fontSize = '25px';
          texttwo.innerHTML = '天天要有好心情~';
		  textthree.innerHTML = '祝你周末愉快 (๑*◡*๑)';
      },10000)
	  
	  	setTimeout(function(){
        textone.innerHTML = '';
        texttwo.innerHTML = '';
        textthree.innerHTML = '';

      },20000)
	  



 
