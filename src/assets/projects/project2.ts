import { FileContent } from "src/app/models/FileContent";

const project2: FileContent = {
   id: 2,
   name: "project2",
   contentHTML: 
      `<div class="main">
      <h1 id="blackboard-collaborate-bot">Blackboard Collaborate BOT</h1>
      <p><em>Voir la <a href="https://github.com/Minifixio/blackboard-collab-bot-js/blob/master/README.fr.md">version française</a> de la documentation</em></p>
      <h2 id="background">Background</h2>
      <p>During the lockdown, some schools, such as mine, decided to use <a href="https://www.blackboard.com/teaching-learning/collaboration-web-conferencing/blackboard-collaborate">Blackboard Collaborate</a> to provide online classes.
         The app delivers many options such as chatting, using the mic to speak, drawing on the board, etc... 
      </p>
      <p>The whole idea of this BOT is to let you control a phamtom user over the classroom to play with the different tools of the app.
         I first used Python to build a light version of this BOT and quickly switched over NodeJS especially because of the better compatibility with browser control related tools such as <a href="https://github.com/puppeteer/puppeteer">Pupperteer</a>
      </p>
      <br/>
  
      <table>
         <thead>
            <tr>
               <th align="center"><img class="image-bigger" src="/assets/images/project2/bot_connected.webp"></th>
               <th align="center"><img class="image-bigger" src="/assets/images/project2/loutre_drawing.webp"></th>
            </tr>
         </thead>
      </table>
      <p>The main dashboard page where you can send messages to the class and an example of drawing on the class board :</p> 

      <br/>
      <h1 id="usage-">Usage ?</h1>
      <h2 id="requirements-">Requirements :</h2>
      <p>In order to run it you need :</p>
      <ul>
         <li>NodeJS and npm (installed with Node) : <a href="https://nodejs.org/en/">download</a></li>
         <li>
            A virtual audio driver such as :
            <ul>
               <li>MacOS : <a href="https://github.com/ExistentialAudio/BlackHole">Blackhole</a></li>
               <li>Windows : <a href="https://www.vb-audio.com/Cable/index.htm">VB-Audio Virtual Cable</a></li>
               <li>Linux : <a href="https://gitlab.freedesktop.org/pulseaudio/pulseaudio">PulseAudio</a></li>
            </ul>
         </li>
      </ul>
      <br/>
      <h1 id="setup-the-audio-virutal-server-">Setup the audio virutal server :</h1>
      <p>In order to let the BOT use the microphone input in Chromium to play sounds you need to setup a virtual audio server.
         Then you need to bind <strong>your sound output directly to your microphone input</strong> such as a loop. 
      </p>
      <p>Here is the <em>workflow diagram</em> :</p>
      <p><img class="image" src="/assets/images/project2/sound_workflow.webp" alt="Workflow explanation"></p>
      <p><br/><br/>
         To redirect the sound output to both your own user&#39;s audio output and mic input, you can use multi-output devices. 
         Here is an <a href="https://support.apple.com/guide/audio-midi-setup/ams7c093f372/mac">example</a> on MacOS<br/><br/>
      </p>
      <br/>
      <h1 id="optional-setup-your-google-translate-api-key-for-the-translate-command-"><em>(optional)</em> Setup your Google Translate API Key for the /translate command :</h1>
      <p>In order to turn on the /translate command, you need to add your own Google Translate API Key in the <code>bot/commands/translate.js</code><br>See <a href="https://github.com/eddiesigner/sketch-translate-me/wiki/Generate-a-Google-API-Key">https://github.com/eddiesigner/sketch-translate-me/wiki/Generate-a-Google-API-Key</a> for further informations.</p>
      <br/>
      <h1 id="run-it-">Run it !</h1>
      <h2 id="locally-using-node-"><strong>Locally using Node</strong> :</h2>
      <p>Open your terminael, go to the <strong><code>/bot</code></strong> folder. Run <strong><code>npm install</code></strong>. It should install all the dependencies the project needs to work.</p>
      <p>Then run <strong><code>node main.js</code></strong>, open your browser and go to <strong><code>http://localhost:3000/main</code></strong>.</p>
      <p>You should see the dashboard. You can then start the BOT using it.
         If the node process dies, the dashboard also quits.
      </p>
      <p><strong>Important notes for MacOS et Windows</strong></p>
      <p>When you start the BOT for the first time, you may have small bugs which will be fixed at the second use :  </p>
      <ul>
         <li>
            <p>On <strong>MacOS</strong>, if you start the BOT using the Terminal app, it may asks you the permission to access to the audio and video control. It is just in order to let Chromium play sound via NodeJS. Once you allowed the permission, restart the BOT.</p>
         </li>
         <li>
            <p>On <strong>Windows</strong>, in the same way, the Bash app may requires the audio permission. Once again, when you allowed the permission, restart the BOT.</p>
         </li>
         <li>
            <p>During the <strong>audio setup</strong> : if the BOT is stuck on the input audio device selection when connecting to the classroom, you can click on the &quot;Skip audio setup&quot; or &quot;Everything is working well&quot; button on the BOT control image in the dashboard.</p>
         </li>
      </ul>
      <br/>

      <table>
         <tbody>
            <tr>
               <td align="center">
                  <img class="image-bigger"  src="/assets/images/project2/bot_connecting.webp" alt="The Thug drawing">
               </td>
               <td align="center">
                  <img class="image-bigger"  src="/assets/images/project2/bot_connecting.webp" alt="The drawings panel">
               </td>
            </tr>
         </tbody>
      </table>
      <p>The BOT let you select the audio input that it will use</p>

      <br/>
      <h2 id="using-docker-">Using <strong>Docker</strong> :</h2>
      <p><em>Having problems with PulseAudio config, any help is welcomed!</em></p>
      <p><br/><br/></p>
      <h1 id="common-issues-">Common issues :</h1>
      <ul>
         <li>
            <p><strong>Chromedriver missing</strong> : </p>
            <ul>
               <li>if you have problems with Chromium see <a href="https://github.com/puppeteer/puppeteer">Pupperteer</a> wiki to find out how to propely setup your environment.</li>
            </ul>
         </li>
         <li>
            <p><strong>Right access for <a href="https://github.com/marak/say.js/">Say.js</a></strong> :</p>
            <ul>
               <li>If you are launching your app in VSCode for example, the app may require the rights to use your system voices (on MacOS). Make sure to grant them.</li>
               <li>If you are using Windows, you may have an issue with Powershell. See the <a href="https://github.com/Marak/say.js/issues/75">issue</a></li>
            </ul>
         </li>
         <li>
            <p><strong>The BOT stuck on the mic setup page</strong> :</p>
            <ul>
               <li>Sometimes, even if you setup correctly your audio interface, the BOT struggles to get arround the mic selection page during the initialization<br>What you need to do is to manually click on the <em>&quot;Mic is working&quot;</em> button on the setup page to skip this step.</li>
            </ul>
         </li>
      </ul>
      <p>Make sure to report any other issues.</p>
      <p><br/><br/></p>
      <h1 id="customizing-">Customizing :</h1>
      <p>Adding <strong>your own commands</strong> : </p>
      <ul>
         <li>See how commands are built in the <code>bot/commands</code> folder</li>
      </ul>
      <p>Adding <strong>your own sounds</strong> : </p>
      <ul>
         <li>To add your own sound effects, you just need to drop your <code>.mp3</code> file in the <code>bot/commands/files/sounds</code> folder. The files will be automatically referenced at the launch of the BOT.</li>
      </ul>
      <p>Adding <strong>your own drawings</strong> : </p>
      <ul>
         <li>You can add any custom drawings since they are <code>.svg</code> files. You just have to drop them in the <code>bot/files/drawings/svg</code> folder and they will be automatically referenced at the launch of the BOT.</li>
      </ul>
      <p><em>If you have issues when adding your own drawings :</em> :</p>
      <ul>
         <li>Try using tools such as <a href="https://spotify.github.io/coordinator/">Coordinator</a> to convert <code>.svg</code> files of your own to coordinates and add the <code>.svg</code> file in the <code>bot/files/drawings/svg</code> folder and the <code>.json</code> file from Coordinator in the <code>bot/files/drawings/path</code> folder</li>
      </ul>
      <br/>
      <p>If you want to edit the dashboard, you can play with the Angular project inside the <code>/dashboard</code> folder.<br>Then, make sure to run <code>ng build --outputPath=&quot;../bot/dist&quot;</code> to replace the actual dashboard.</p>
      <br/>
      <p>I&#39;m really open to any suggestions / remarks / contributions :)</p>
      <br/>
      <h1 id="screenshots-">Screenshots :</h1>

      <br/>

      <table>
         <tbody>
            <tr>
               <td align="center">
                  <img class="image-bigger"  src="/assets/images/project2/soundboard.webp" alt="The Thug drawing">
               </td>
               <td align="center">
                  <img class="image-bigger" src="/assets/images/project2/drawings.webp" alt="The drawings panel">
               </td>
            </tr>
         </tbody>
      </table>
      <p>The Soundboard page and Drawings panel</p>


      <br/>

      <table>
         <thead>
            <tr>
               <th align="center">The commands selection &amp; launch page</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td align="center">
                  <img class="image-bigger"  src="/assets/images/project2/bot_setup_page.webp" alt="The Thug drawing">
               </td>
            </tr>
         </tbody>
      </table>

      <br/>
 
      <table>
         <thead>
            <tr>
               <th align="center">Some other examples of drawings</th>
               <th align="center">Some other examples of drawings</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td align="center">
                  <img class="image-bigger"  src="/assets/images/project2/thug_drawing.webp" alt="The Thug drawing">
               </td>
               <td align="center">
                  <img class="image-bigger"  src="/assets/images/project2/lol_face_drawing.webp" alt="The lolface drawing">
               </td>
            </tr>
         </tbody>
      </table>
      <br/>
      </div>`
}

export default project2;
