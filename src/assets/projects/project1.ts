import { FileContent } from "src/app/models/FileContent";

const project1: FileContent = {
   id: 1,
   name: "project1",
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
               <td align="center"><img class="image" src="https://github.com/Minifixio/TIPE_2021/blob/master/assets/poles_example.png?raw=true" alt=""></td>
               <td align="center"><img class="image" src="https://github.com/Minifixio/TIPE_2021/blob/master/assets/poles1.png?raw=true" alt=""></td>
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
               <td align="center"><img class="image" src="https://github.com/Minifixio/TIPE_2021/blob/master/assets/fortune1.png?raw=true" alt=""></td>
               <td align="center"><img class="image" src="https://github.com/Minifixio/TIPE_2021/blob/master/assets/app1.png?raw=true" alt=""></td>
               <td align="center"><img class="image" src="https://github.com/Minifixio/TIPE_2021/blob/master/assets/app2.png?raw=true" alt=""></td>
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
               <td align="center"><img class="image" src="https://github.com/Minifixio/TIPE_2021/blob/master/assets/medial1.png?raw=true" alt=""></td>
               <td align="center"><img class="image" src="https://github.com/Minifixio/TIPE_2021/blob/master/assets/medial2.png?raw=true" alt=""></td>
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
               <td align="center"><img class="image" src="https://github.com/Minifixio/TIPE_2021/blob/master/assets/bretagne1.png?raw=true" alt=""></td>
               <td align="center"><img class="image" src="https://github.com/Minifixio/TIPE_2021/blob/master/assets/bretagne2.png?raw=true" alt=""></td>
               <td align="center"><img class="image" src="https://github.com/Minifixio/TIPE_2021/blob/master/assets/bretagne3.png?raw=true" alt=""></td>
            </tr>
         </tbody>
      </table>
      <p>You can found the slides describing the project <a href="https://github.com/Minifixio/TIPE_2021/blob/master/assets/Diapo_TIPE_export.pdf">here</a></p>
      </div>`
}

export default project1;
