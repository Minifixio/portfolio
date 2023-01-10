import { FileContent } from "src/app/models/FileContent";

const project1: FileContent = {
   id: 1,
   name: "project1",
   contentHTML: 
      `<div class="main">
      <h1 id="unlask">Unlask</h1>
      <p><img class="image" src="https://github.com/Minifixio/unlask-app/blob/master/.screenshots/preview_5.png?raw=true" alt=""> </p>
      <p>An app that asks you questions every time you unlock your phone...</p>
      <br>
      <h2 id="background">Background</h2>
      <p>The number of times we turn on our phone just to look at the screen or to unthinkingly consult social networks is countless...
         Unlask&#39;s goal is to transform these little moments into smarter ones and to also, push you to reduce the use of your smartphone.
         <br>
      </p>
      <h2 id="features">Features</h2>
      <p>You can :</p>
      <ul>
         <li>Create unlimited question sets with text questions</li>
         <li>Edit easily your question sets to add, remove and edit questions</li>
         <li>Select time range during which the application will ask you questions</li>
         <li>Disable or enable any question set</li>
         <li>Disable the application or disable the notification</li>
      </ul>
      <br>
      <h2 id="usage">Usage</h2>
      <p>It is a <a href="https://ionicframework.com/">Ionic</a> app and it runs only on Android.
         To run it, just run <code>ionic cordova platform add android</code> and then <code>ionic cordova run android</code>. 
      </p>
      <p>I edited the plugin <code>cordova-plugin-screenevents</code> in order to catch the device wake up event, all the others plugins are unchanged.</p>
      <br>
      <h2 id="visuals">Visuals</h2>
      <table>
         <thead>
            <tr>
               <th align="center">The question page</th>
               <th align="center">The question sets page</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td align="center"><img class="image" src="https://github.com/Minifixio/unlask-app/blob/master/.screenshots/preview_1.png?raw=true" alt=""></td>
               <td align="center"><img class="image" src="https://github.com/Minifixio/unlask-app/blob/master/.screenshots/preview_2.png?raw=true" alt=""></td>
            </tr>
         </tbody>
      </table>
      <br>
      <table>
         <thead>
            <tr>
               <th align="center">The preference page</th>
               <th align="center">The set editing page</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td align="center"><img class="image" src="https://github.com/Minifixio/unlask-app/blob/master/.screenshots/preview_3.png?raw=true" alt=""></td>
               <td align="center"><img class="image" src="https://github.com/Minifixio/unlask-app/blob/master/.screenshots/preview_4.png?raw=true" alt=""></td>
            </tr>
         </tbody>
      </table>
      <br>
      </div>`
}

export default project1;
