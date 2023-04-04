import { FileContent } from "src/app/models/FileContent";

const project6: FileContent = {
   id: 6,
   name: "project6",
   contentHTML: 
      `<div class="main">
      <h1 id="sportify-app">Sportify App</h1>
      <h2 id="new-version-here--httpsgithubcomminifixiosportify_ionic"><strong>New version here : <a href="https://github.com/Minifixio/sportify_ionic">https://github.com/Minifixio/sportify_ionic</a></strong><br></h2>
      <p>A Cordova application that adjust your music to your heartbeat.</p>
      <p>The application works with an Arduino assembly with a Flora V3, a Bluefruit LE (for the bluetooth communication) and a Pulse Sensor from <a href="https://pulsesensor.com">pulsesensor.com</a>.</p>
      <p>The video explaining the project (in french) : <a href="https://youtu.be/Iybsk5PmKsU">Sportify</a></p>
      <h2 id="want-to-try-it-">Want to try it ?</h2>
      <p>First you need to setup a Cordova application. Find more informations here : <a href="https://cordova.apache.org/">Apache Cordova</a></p>
      <p>You also need to install some plugins : </p>
      <ul>
         <li><a href="https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist/">Cordova plugin whitelist</a></li>
         <li><a href="https://www.npmjs.com/package/cordova-plugin-browsersync">Cordova plugin browsersync</a> (to debug easly)</li>
         <li><a href="https://github.com/Festify/cordova-spotify-oauth">Cordova Spotify OAuth</a></li>
         <li><a href="https://github.com/Festify/cordova-spotify">Cordova Spotify</a></li>
         <li><a href="https://github.com/don/cordova-plugin-ble-central">Cordova Ble Central</a> (bluetooth compatibility)</li>
      </ul>
      <p>You also nned to setup your own Serverless service for AWS Lambda for the Spotify OAuth plugin as mentionned <a href="https://github.com/Festify/cordova-spotify-oauth">here</a> 
         Then, you need to connect your own Bluetooth device and connect it to the app !
      </p>
      <p><b>OTHER USAGE :</b> Now, you can simply download the <i>/cordova_app</i> folder and then run the command <code>cordova platform add android</code> and then <code>cordova run android --device</code> to start the app on your Android device !</p>
      <h1 id="images-of-the-project">Images of the project</h1>
      <h2 id="the-flora-v3-and-the-bluefruit-le">The Flora V3 and the Bluefruit LE</h2>
      <img class="image-bigger" src="/assets/images/project6/preview1.webp" width="500">
      <br/>
      <h2 id="the-pulse-sensor">The Pulse Sensor</h2>
      <img class="image-bigger" src="/assets/images/project6/preview2.webp" width="500">
      <br/>
      <h2 id="application-preview">Application preview</h2>
      <table>
         <thead>
            <tr>
               <th align="center">Adding a Bluetooth device</th>
               <th align="center">The BPM gauge</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td align="center"><img class="image" src="/assets/images/project6/preview3.webp" alt=""></td>
               <td align="center"><img class="image" src="/assets/images/project6/preview4.webp" alt=""></td>
            </tr>
         </tbody>
      </table>
      <table>
         <thead>
            <tr>
               <th align="center">Starting the app</th>
               <th align="center">Adding your own playlist</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td align="center"><img class="image" src="/assets/images/project6/preview5.webp" alt=""></td>
               <td align="center"><img class="image" src="/assets/images/project6/preview6.webp"" alt=""></td>
            </tr>
         </tbody>
      </table>
      </div>`
}

export default project6;
