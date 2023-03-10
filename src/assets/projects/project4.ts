import { FileContent } from "src/app/models/FileContent";

const project4: FileContent = {
   id: 4,
   name: "project4",
   contentHTML: 
      `<div class="main">
      <h1 id="biggest-circle-inscribed-in-a-polygon">Biggest Circle Inscribed In A Polygon</h1>
      <p><em>A year project carried during my last year of &quot;Classe préparatoire&quot; meant to deal with Mathematics and Computer Science related topics.</em></p>
      <h2 id="first-method--based-on-the-approximation-of-poles-of-inaccessibility">First method : based on the approximation of poles of inaccessibility</h2>
      <p>The method follows <a href="https://arxiv.org/ftp/arxiv/papers/1212/1212.3193.pdf">this paper</a> which refers to <a href="https://www.researchgate.net/publication/232984998_Poles_of_inaccessibility_A_calculation_algorithm_for_the_remotest_places_on_Earth">this paper</a>.</p>
      <table>
         <thead>
            <tr>
               <th align="center">Example of pole of inaccessibility</th>
               <th align="center">The method of the paper</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td align="center"><img class="image" src="/assets/images/project4/poles_example.webp" alt=""></td>
               <td align="center"><img class="image" src="/assets/images/project4/poles1.webp" alt=""></td>
            </tr>
         </tbody>
      </table>
      <br>
      <br>
      <h2 id="second-method--using-the-medial-axis-approximation-of-a-polygon-using-voronoi-diagrams">Second method : using the medial axis approximation of a polygon using Voronoi diagrams</h2>
      <p>The method follows <a href="https://link.springer.com/article/10.1007/BF01840357">this paper</a> by Steven Fortune.</p>
      <table>
         <thead>
            <tr>
               <th align="center">An example of our Fortune algorithm</th>
               <th align="center">A first application to a polygon with an interior</th>
               <th align="center">A second application to a polygon with an interior</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td align="center"><img class="image" src="/assets/images/project4/fortune1.webp" alt=""></td>
               <td align="center"><img class="image" src="/assets/images/project4/app1.webp" alt=""></td>
               <td align="center"><img class="image" src="/assets/images/project4/app2.webp" alt=""></td>
            </tr>
         </tbody>
      </table>
      <table>
         <thead>
            <tr>
               <th align="center">An approximation of the medial axis 1</th>
               <th align="center">An approximation of the medial axis 2</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td align="center"><img class="image" src="/assets/images/project4/medial1.webp" alt=""></td>
               <td align="center"><img class="image" src="/assets/images/project4/medial2.webp" alt=""></td>
            </tr>
         </tbody>
      </table>
      <h2 id="final-step--to-apply-theses-methods-to-a-real-map-bretagne">Final step : to apply theses methods to a real map (Bretagne)</h2>
      <table>
         <thead>
            <tr>
               <th align="center">The map used</th>
               <th align="center">The algorithm applied in every county</th>
               <th align="center">A zoom</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td align="center"><img class="image" src="/assets/images/project4/bretagne1.webp" alt=""></td>
               <td align="center"><img class="image" src="/assets/images/project4/bretagne2.webp" alt=""></td>
               <td align="center"><img class="image" src="/assets/images/project4/bretagne3.webp" alt=""></td>
            </tr>
         </tbody>
      </table>
      <p>You can found the slides describing the project <a href="/assets/images/project4/Diapo_TIPE_export.pdf">here</a></p>
      </div>`
}

export default project4;
