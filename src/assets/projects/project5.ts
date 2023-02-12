import { FileContent } from "src/app/models/FileContent";

const project5: FileContent = {
   id: 5,
   name: "project5",
   contentHTML: 
      `<div class="main">
         <h1 id="a-personal-dashboard-for-raspberry-pi">A personal dashboard for Raspberry Pi</h1>
         <h2 id="a-quick-preview-">A quick preview ?</h2>
         <p><img class="image-bigger" src="/assets/images/project5/preview1.webp" alt="Preview"></p>
         <p>You can display your agendas, the meteo and your TODO tasks. Then, up to you to add anything else!</p>
         <br>
         <h2 id="how-to-setup-">How to setup ?</h2>
         <p>The ready-to-use app is in the <code>/out</code> directory.</p>
         <h3 id="1-meteo-setup">1. Meteo setup</h3>
         <p>In order to access meteo data, you need to use a Weather API. The dashbaord is configured to deal with the OpenWeather&#39;s one. Follow this steps to setup your own meteo access :</p>
         <ol>
            <li>Go to <a href="https://openweathermap.org/">OpenWeather</a> and create an API key (<a href="https://openweathermap.org/appid">see this</a>)</li>
         </ol>
         <p>You should get it here : <br>
            <img class="image-bigger" src="/assets/images/project5/openweatherAPI.webp" alt="OpenWeather API key">
         </p>
         <ol start="2">
            <li>Create a file called <code>meteo_config.json</code> in <code>/out/app/assets/config/</code> and add the following content :</li>
         </ol>
         <pre><code class="language-json">{
            &quot;openWeatherMapApiKey&quot;: &quot;YOUR API KEY&quot;,
            &quot;myLon&quot;: 23.71701,
            &quot;myLat&quot;: 2.223130
         }
         </code></pre>
         <p>where <code>myLon</code> and <code>myLat</code> propreties are the longitude and latitude of the place where you want to get weather informations. You can use <a href="https://www.latlong.net/">this tool</a> to find your own.</p>
         <br>
         <h3 id="2-calendars-setup">2. Calendars setup</h3>
         <p>Most of the caledar are stored as <a href="https://en.wikipedia.org/wiki/ICalendar">iCalendar</a> format. You can easily find a way to get your favorites calendars in this very format. In most calendars app, you can do it using sharing tools. For instance, for Google Calendar see : <a href="https://support.google.com/calendar/answer/37648?hl=en#:~:text=On%20your%20computer%2C%20open%20Google%20Calendar.&text=Settings.,Click%20Integrate%20calendar.">this link</a>.
            You should get a link to an <code>.ics</code> or <code>.ical</code> file.
         </p>
         <p>For every calendar you wish to add to your dashboard, get this <code>.ics</code> or <code>.ical</code> file and add a file called <code>cal-YOUR_AGENDA_NAME</code> to <code>/out/backend/config/</code> where <code>YOUR_AGENDA_NAME</code> isn&#39;t significant, it is up to you to choose. In this file, add the following content :</p>
         <pre><code class="language-json">{
            &quot;name&quot;: &quot;YOUR AGENDA NAME&quot;,
            &quot;icalUrl&quot;: &quot;your calendar ics or ical file link&quot;
         }
         </code></pre>
         <p>where the <code>name</code> proprety isn&#39;t relevant and only use for debug (you can choose a different name than the one used for the file name) and <code>icalUrl</code> is the link to your <code>.ics</code> or <code>.ical</code> file.</p>
         <br>
         <h3 id="3-tasks-calendar-setup">3. Tasks calendar setup</h3>
         <p>You can see on the dashboard, there is a <strong>TASK</strong> panel. It is used to retreive certain events marked as important from the calendars registered previously to prompt them on the dashboard.</p>
         <p>How to identify those events ? In order for the app to find those important events in your calendars, you need to add a <strong>Task word identifier</strong> at the begining of an event title. </p>
         <p>For instance if you choose <em>TODO:</em> as your identifier, for an event you want to add to the <strong>TASK</strong> panel, you should name it <em>TODO: Clean my room</em>.</p>
         <p>Example : <br>
          <img class="image-bigger" src="/assets/images/project5/task_keyword_example.webp" alt="Task keyword example"></p>
         <p>Then the app will retreive all the events with this identifier in your agendas to prompt them on the <strong>TASK</strong> panel.</p>
         <p>To choose your own <strong>Task word identifier</strong> edit the <code>/out/backend/config/agendas-config.json</code> file and the <code>tasks_word</code> proprety.</p>
         <p>Example: </p>
         <pre><code class="language-json">{
            &quot;tasks_word&quot;: &quot;TODO:&quot;
         }
         </code></pre>
         <br>
         <h3 id="4-instal-dependencies">4. Instal dependencies</h3>
         <p>Go to <code>/out</code> and run <code>npm install</code> to add dependencies.</p>
         <br>
         <h2 id="how-to-run-for-production-">How to run for production ?</h2>
         <p>Now you have your app ready to use. 
            You can start it by running <code>npm run start</code> in <code>/out</code>.
            The dashboard should be running at <code>localhost:3000</code>.
         </p>
         <p>If you want to start it in the background you can use <a href="https://pm2.keymetrics.io/">pm2</a>. Install it globally and then run <code>pm2 start npm --name &quot;WewDashboard&quot; -- start</code> in <code>/out</code>.</p>
         <br>
         <p><img class="image-bigger" src="/assets/images/project5/preview2.webp" alt="Preview in situ"></p>
         <h2 id="customize-it">Customize it</h2>
         <h3 id="the-frontend-app">The frontend app</h3>
         <p>The app is made using Angular. You can find it in <code>/WewDashboardWeb</code>.
            You should add the config files mentionned previously and then you can edit the Angular app as you wish.
         </p>
         <p>You can then build it using <code>ng build</code> and copy the outputs to <code>/out</code> using <code>npm start postbuild</code> (make sure to install <a href="https://www.npmjs.com/package/copyfiles">copyfiles</a> globally before).</p>
         <h3 id="the-backend-app">The backend app</h3>
         <p>The backend is made using nodeJS and express. You can as well edit it and use the same <code>npm start postbuild</code> to copy outputs to <code>/out</code>. I used the TypeScript to develop the nodeJS app as well as live-reloading processes.</p>
         <br>
         <h2 id="troubleshooting">Troubleshooting</h2>
         <p>At first, I made this app for my own personal use so many things may differ from your own use. If you have any issues, make sure to details them in the issues section, I&#39;ll be happy to work with you on it to make the dashbaord progress.</p>
      </div>`
}

export default project5;
