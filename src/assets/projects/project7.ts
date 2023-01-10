import { FileContent } from "src/app/models/FileContent";

const project7: FileContent = {
   id: 7,
   name: "project7",
   contentHTML: 
      `<div class="main">
      <h1 id="ionic-version-of-sportify-app">Ionic version of Sportify app</h1>
      <p>Android application that adjust your music to your heartbeat. <br> 
         This project won the <strong><em>Science &amp; Vie Junior &quot;Innovez&quot;</em></strong> contest (innovation contest), <a href="https://junior.science-et-vie.com/innovez">see here</a>.<br> 
         <strong>The video explaining the project (in french) : <a href="https://youtu.be/Iybsk5PmKsU">Sportify</a></strong>
      </p>
      <p>A new version of Sportify&#39;s app using Ionic. See <a href="https://github.com/Minifixio/Sportify/">old version here</a>. <br> 
         Reworked mainly design, made playlist selection easier and improved connectivity via Bluetooth.
      </p>
      <h2 id="want-to-try-it-">Want to try it ?</h2>
      <h3 id="steps-for-ionic">Steps for Ionic:</h3>
      <ol>
         <li>Download the project</li>
         <li>Install Ionic CLI : <a href="https://ionicframework.com/docs/installation/cli">https://ionicframework.com/docs/installation/cli</a></li>
         <li>Install dependencies via <code>npm install</code></li>
         <li>
            Install Ionic plugins : (see <a href="https://ionicframework.com/docs/cli/commands/cordova-plugin">how to install plugins</a>)
            <ul>
               <li>BLE : <a href="https://ionicframework.com/docs/v3/native/ble/">https://ionicframework.com/docs/v3/native/ble/</a></li>
               <li>Ble Serial : <a href="https://ionicframework.com/docs/v3/native/bluetooth-serial/">https://ionicframework.com/docs/v3/native/bluetooth-serial/</a></li>
               <li>Spotify OAuth : <a href="https://github.com/Festify/cordova-spotify-oauth">https://github.com/Festify/cordova-spotify-oauth</a></li>
               <li>Spotify Cordova : <a href="https://github.com/Festify/cordova-spotify">https://github.com/Festify/cordova-spotify</a></li>
               <li>For Spotify Cordova, make sure to run <code>fix-cordova-spotify.sh</code> after installing the plugin (fixing Android compatibility)</li>
            </ul>
         </li>
         <li>
            Make sure to add your how <strong><em>Constants.ts</em></strong> file <code>/src/app/services/</code> and add the following code :
            <pre><code class="language-js">export class Constants {
      static readonly clientId = &#39;your client id&#39;;
      static readonly clientSecret = &#39;your client secret&#39;;
      static readonly config = {
         clientId: &#39;your client id&#39;,
         redirectUrl: &#39;festify-spotify://callback&#39;,
         scopes: [&#39;streaming&#39;], // see Spotify Dev console for all scopes
         tokenExchangeUrl: &#39;your token exchange url&#39;,
         tokenRefreshUrl: &#39;your token refresh url&#39;,
      };
      }
      </code></pre>
         </li>
      <ul>
         <li>see <a href="https://github.com/Festify/cordova-spotify-oauth">https://github.com/Festify/cordova-spotify-oauth</a> to see how it works. You aslo actually needs to sign in an Spotify app via their API.</li>
      </ul>
         <li>Add platfrom (currently working only on Android) : <a href="https://ionicframework.com/docs/cli/commands/cordova-platform">see how</a></li>
         <li>Run the app and enjoy !</li>
      </ol>
      <h3 id="if-you-want-to-connect-your-arduino-">If you want to connect your Arduino :</h3>
      <p>Actually the apps work via Bluetooth serial with a special Arduino configuration. <br> 
         See : <a href="https://github.com/Minifixio/sportify_arduino">https://github.com/Minifixio/sportify_arduino</a> to download the project and see which components are used. You can also edit it as you wish !
         <br>
      </p>
      <p>Any suggestions are highly appreciated :) </p>
      <br>
      <h2 id="some-pictures-of-the-app">Some pictures of the app</h2>
      <p><img src="https://i.imgur.com/u2MsIUJ.jpg" width="250"> <img src="https://i.imgur.com/KrzO0qK.jpg" width="250"> <img src="https://i.imgur.com/3oRcYrb.jpg" width="250"></p>
      </div>`
}

export default project7;
