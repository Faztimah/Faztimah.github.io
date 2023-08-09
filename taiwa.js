    // 応答の定義（ハッシュ）
    var response = {
        "こんにちは": {
            keywords: ["こんにちは"],
            response: "ハローハローようこそ！"
        },
        "名前は": {
            keywords: ["あなたの名前は"],
            response: "榎木淳弥ボット、えのきゅんといいます！よろしく！"
        },
        "何歳": {
            keywords: ["何歳"],
            response: "今年、榎木淳弥さんは35歳です！"
        },
        "誰": {
            keywords: ["誰ですか"],
            response: "日本の声優さん！血液A型、東京出身で、最近人気になっています。"
				},
				"声優": {
            keywords: ["声優"],
            response: "顔を出さずに、キャラに声を当てるやナレーションをする役者です。日本の声優技術、本当に世界トップですよ！"
        },
        "事務所": {
            keywords: ["事務所"],
            response: "彼はアトミックモンキー所属です。事務所プロフィールみせますね～",
						webpage : "https://www.atomicmonkey.jp/talent/enokijunya"
        },
        "サンプルボイス": {
            keywords: ["サンプルボイス"],
						response : "サンプルボイスはこちらですね！　注意： 途中停止できないので、最後まで聞いてください。",
            audioSource : "enojun.mp3"
        },
				"好きな食べ物": {
            keywords: ["好きな", "食べ物"],
            response: "ラーメンです。東京のラーメン屋、ほとんど把握してたと言いました。そして、ハンバーグも好きです。"
        },
        "嫌いな食べ物": {
            keywords: ["嫌いな", "食べ物"],
            response: "名前は榎木なのに、全種類のキノコだそうですよ！"
        },
        "朗読": {
            keywords: ["朗読"],
            response: "朗読といえば、よまにゃちゃんねるですね！",
            webpage: "https://youtu.be/F-I8UNBQEK8"
        },
        "音楽": {
            keywords: ["音楽"],
            response: "じゃ、この曲お勧めですかね！",
						webpage : "https://youtu.be/mwcX3YqY32E"
        },
				"役": {
            keywords: ["役"],
            response: "彼は色々なジャンルやっていますが、最近だと主に主人公キャラがおおいですね",
        },
				"主人公キャラ": {
            keywords: ["主人公"],
            response: "呪術廻戦の虎杖悠仁や、映画の吹き替えだったら、スパイダーマンですね！",
        }
    };

const startButton = document.getElementById("startButton"); // 開始ボタン
const stopButton = document.getElementById("stopButton"); // 停止ボタン
const resultOutput = document.querySelector('#resultOutput'); // 結果出力エリア
const audioPlayer = document.querySelector('#audioPlayer');

if (!'SpeechSynthesisUtterance' in window) {
    alert("あなたのブラウザはSpeech Synthesis APIに未対応です。");
}
const tts = new SpeechSynthesisUtterance(); // TTSインスタンスを生成
tts.lang = "ja-JP"; // 言語(日本語)```javascript
const asr = new webkitSpeechRecognition(); // 音声認識インスタンスを生成
asr.lang = "ja-JP"; // 言語(日本語)
asr.continuous = true; // 連続認識モードに設定
asr.interimResults = true; // 途中結果を取得するよう設定

// 変数の初期化
let output = '';

// 認識結果が出力されたときのイベントハンドラ
asr.onresult = function(event) {
        let transcript = event.results[event.resultIndex][0].transcript; // 結果文字列

        let output_not_final = '';
        if (event.results[event.resultIndex].isFinal) { // 結果が確定（Final）のとき
            asr.abort(); // 音声認識を停止

            let matchedResponse = null;
            for (let key in response) {
                let keywords = response[key].keywords;
                let isMatch = keywords.every(function(keyword) {
                    return transcript.includes(keyword);
                });

                if (isMatch) {
                    matchedResponse = response[key];
                    break;
                }
            }

            // Update the code that handles the response
let answer;
let webpage;
let audioSource;

if (matchedResponse === null) {
  answer = "ごめんなさい。わかりません。";
} else {
  answer = matchedResponse.response;
  webpage = matchedResponse.webpage;
  audioSource = matchedResponse.audioSource;
}

output += transcript + ' => ' + answer + '<br>';

if (typeof audioSource !== 'undefined') {
  // Play audio response
  const audioPlayer = new Audio(audioSource);
  audioPlayer.play();
  audioPlayer.onended = function(event) {
    asr.stop(); // Restart speech recognition
  };
} else {
  // Handle text response
  tts.text = answer;
  tts.onend = function(event) {
    if (typeof webpage !== 'undefined') {
      const webpageFrame = document.querySelector('#webpageFrame');
      webpageFrame.src = webpage;
      webpageFrame.style.display = 'block';
			asr.stop();
    }
      asr.start(); // Restart speech recognition
    }
  };
  speechSynthesis.speak(tts); // 再生
  } else { // 結果がまだ未確定のとき
  output_not_final = '<span style="color:#ddd;">' + transcript + '</span>';
  }
  resultOutput.innerHTML = output + output_not_final;
	asr.start();
}

startButton.addEventListener('click', function() {
            asr.start();
        })
// 停止ボタンのイベントハンドラ
stopButton.addEventListener('click', function() {
            asr.abort();
            asr.stop();
         })