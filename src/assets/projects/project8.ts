import { FileContent } from "src/app/models/FileContent";

const project8: FileContent = {
   id: 8,
   name: "project8",
   contentHTML: 
      `<div class="main">
      <h1 id="dhom">DHOM</h1>
      <p>The name <strong>DHOM</strong> which refers to the begining of the french word <strong><em>domotique</em></strong> (meaning home automation) and also to the word <strong><em>home</em></strong> is the name of the infrastructure connecting all connected objects in my family&#39;s house.</p>
      <p>This <strong>DHOM app</strong> is meant to be a way to facilitate any kind of household chores such as manage washing machine cycles in order to make sure everyone get his clothes washed on time.</p>
      <p>The app was made using Ionic and the backend server, running on Heroku, using NodeJS.</p>
      <br>
      <h2 id="features-">Features :</h2>
      <ul>
         <li>Add several profiles corresponding to the members of the family.</li>
         <li>Schedule a washing machine and select the type of washing (sport, white...), the schedule time and day, and add a personalized message.</li>
         <li>View the machine currently planned and join it by adding your own laundry.</li>
      </ul>
      <br>
      <h2 id="screenshot-">Screenshot :</h2>
      <table>
         <thead>
            <tr>
               <th align="center"><img class="image" src="/assets/images/project8/main_page.webp" alt="The main page"></th>
               <th align="center"><img class="image" src="/assets/images/project8/adding_machine_page.webp" alt="The adding page"></th>
            </tr>
         </thead>
      </table>
      <table>
         <thead>
            <tr>
               <th align="center"><img class="image" src="/assets/images/project8/washing_machine_page.webp" alt="The washing machine page"></th>
               <th align="center"><img class="image" src="/assets/images/project8/profiles.webp" alt="The profile selection page"></th>
            </tr>
         </thead>
      </table>
      <table>
         <thead>
            <tr>
               <th align="center"><img class="image" src="/assets/images/project8/joining_machine.webp" alt="Joining a washing machine"></th>
               <th align="center"><img class="image" src="/assets/images/project8/loading_page.webp" alt="The loading page"></th>
            </tr>
         </thead>
      </table>
      </div>`
}

export default project8;
