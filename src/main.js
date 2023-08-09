window.onload = function() {
      setTimeout(function() {
        // Hide the warning element after a delay (e.g., 3 seconds)
        const warningElement = document.getElementById('warning');
        warningElement.style.display = 'none';
      }, 4000); // Change the delay as needed (in milliseconds)
    }

document.querySelector('#app').innerHTML = `
      <div>
          <img src="/src/enokyun.png" class="logo" alt="enokyun logo" style="width: 135px; height: auto;" /></div>
						<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
						<strong style="padding: 10px" id="drag2" draggable="true" ondragstart="drag(event)">誕生日</strong>
						<strong style="padding: 10px" id="drag2" draggable="true" ondragstart="drag(event)">出身</strong>
						<strong style="padding: 10px" id="drag2" draggable="true" ondragstart="drag(event)">事務所</strong>
						<strong style="padding: 10px" id="drag3" draggable="true" ondragstart="drag(event)">朗読</strong>
						<strong style="padding: 10px" id="drag4" draggable="true" ondragstart="drag(event)">食べ物</strong>
						<strong style="padding: 10px" id="drag5" draggable="true" ondragstart="drag(event)">音楽</strong>
						<strong style="padding: 10px" id="drag6" draggable="true" ondragstart="drag(event)">サンプルボイス</strong>
						<strong style="padding: 10px" id="drag7" draggable="true" ondragstart="drag(event)">役</strong>
						<strong style="padding: 10px" id="drag8" draggable="true" ondragstart="drag(event)">主人公</strong>
            </div>

            <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
						
						<div style="clear: both;"></div>
						
          <h1>榎木淳弥bot, えのきゅんです！</h1>
          <p class="read-the-docs">
              人気マトモ声優の榎木淳弥さんについて、たくさん紹介します!<br>
							左の箱にあるのは、お勧めテーマですよ！聞いてみてね～<br>
							終わったら、右の箱に移動してください。<br>
              下のstartボタンをクリックして挨拶で始めましょう♪<br>
							<br>
							例: 榎木淳弥は誰ですか？
          </p>
      </div>
`