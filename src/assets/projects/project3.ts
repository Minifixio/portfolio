import { FileContent } from "src/app/models/FileContent";

const project3: FileContent = {
   id: 3,
   name: "project3",
   contentHTML: 
      `<div class="main">
      <p><img class="image-bigger" src="/assets/images/project3/logo.webp" alt="Highlit"></p>
      <h1 id="highlit--whats-is-it-">Highlit ? Whats is it ?</h1>
      <p><strong><a href="https://highlit.me">HIGHLIT.ME</a></strong> (<strong>currently unavailable</strong>) is an <strong>open sourced</strong> web application running under Angular which allows you to easily rewatch <strong>Counter-Strike Global Offensive</strong> esport matches when you missed them live. <br>
         Match highlights videos are often quite long. Highlit offers a visual and interactive timeline of the match and let you navigate through the best moments of the match and access to them quickly.
      </p>
      <p>See <a href="https://www.youtube.com/watch?v=JRLpymSlAX4">this video</a> for a quick showcase !</p>
      <br>
      <p>Here is some screenshot of the App :

      <table>
         <thead>
            <tr>
               <th align="center"><em>The menu page where the mathes are listed</em></th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td align="center"><img class="image-bigger"  src="/assets/images/project3/menu.webp" alt=""></td>
            </tr>
         </tbody>
      </table>

      <br>

      <table>
         <thead>
            <tr>
               <th align="center"><em>Watching a match</em></th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td align="center"><img class="image-bigger"  src="/assets/images/project3/match1.webp" alt=""></td>
            </tr>
         </tbody>
      </table>
      <table>
         <thead>
            <tr>
               <th align="center"><img class="image-bigger"  src="/assets/images/project3/match1.webp" alt=""></th>
            </tr>
         </thead>
      </table>
      <p>You can click on the round you want to watch on the right panel. This right panel highlights the main events for each round (multi-kills, clutch...) but also the hype of the round (based on the number of Twitch comments written during the round) so you can decide which round is worth watching.</p>
      <p><br><br></p>
      <h1 id="how-it-works-">How it works ?</h1>
      <p>There are two parts to the project :</p>
      <h2 id="the-backend-server-nodejs">The backend server (nodejs)</h2>
      <p>The backend server is takes care of getting matches datas, downloading the demos and parsing them. There are several steps to create a demo parsing file :</p>
      <p><strong>1. The Cron Task :</strong><br></p>
      <ul>
         <li>Each 30 mins, the server retrieves all the recent matches from <a href="https://www.hltv.org/results">HLTV&#39;s results page</a> and add them to the database.
            Then, the older unparsed match is selected to be analyzed. The match demo&#39;s are then downloaded and the files are ready to be parsed.
         </li>
      </ul>
      <p><strong>2. The Demo Reader :</strong><br></p>
      <ul>
         <li>The demo reader takes the demo (.dem) file extracted from the downloaded and start analyzing it using <a href="https://github.com/saul/demofile">Demofile</a>
            Round timings, tactical pauses, kills, multi-kills and others datas are listed from the analysis.
         </li>
      </ul>
      <p><strong>3. The Demo Manager :</strong><br></p>
      <ul>
         <li>When the parsing ends, the match datas are formatted into a JSON file.
            A file is also created referencing all the twitch streams links associated to the match.
         </li>
      </ul>
      <p><strong>4. The Twitch Analyser :</strong><br></p>
      <ul>
         <li>The HLTV&#39;s result page refers twitch streams links of the match. The Twitch Analyser will anaylse those streams and count the number of comments sent during each round duration using <a href="https://github.com/Minifixio/twitch-video-comments-analyser">Twitch comments anaylser</a>
            A rating is then generated for each round of the match. A round with a high Twitch rating means many comments have been sent during the round on the live stream.
         </li>
      </ul>
      <p>Files are then sorted in folders named after match id&#39;s. These folders are also sorted by date for an easier management.
         The backend server also hosts the databse.
      </p>
      <br>
      <h2 id="the-web-app-angular">The web app (Angular):</h2>
      <p>There are two main pages on the app :</p>
      <p><strong>1 - The match selection page :</strong><br></p>
      <ul>
         <li>This pages gathers all matches from the database. Matches are sorted by date.
            The page indicates if a match is downloaded or not.
            When selecting a match, a menu appears. It lets you select the map you want.
            There is also a input field to add your desired link from HLTV&#39;s result page if the match you are looking for is not avaible on the app.
         </li>
      </ul>
      <p><strong>2 - The match watching page :</strong><br></p>
      <ul>
         <li>The page contains a Twitch player of the match and a scrolling menu of the rounds.
            You can see the most importants datas of each round on the left pannel : kills count, multi-kills (triple, quad, aces) and the Twitch rating. I&#39;m currently working on adding new datas.
            You can select the round you want to play by clicking on it in the menu.
            You can also directly jump into an important action by clicking on the name of the player.
            When you select a specific action or round, the player automatically goes to the desired part of the video.
         </li>
      </ul>
      <p><br><br></p>
      <h1 id="contributing">Contributing</h1>
      <p>Highlit is an open sourced project. Feel free to download the sources and try it on your own.<br>
         Also, any thoughts, advices, issues, fixes, improvements, etc... are really strongly appreciated :)<br>
         I&#39;m not very talented in UI design. If you have any skills in the subject it would be great !<br>
         Finally, I&#39;m not a very experienced developper so sometimes my code is quite draft...<br>
         Enjoy !
      </p>
      </div>`
}

export default project3;
