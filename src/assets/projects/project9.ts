import { FileContent } from "src/app/models/FileContent";

const project9: FileContent = {
   id: 9,
   name: "project9",
   contentHTML: 
      `<div class="main">
         
      <h1 id="paris-catacombs-scan-using-an-iphone-14-lidar">Paris catacombs scan using an iPhone 14 LiDAR</h1>
      <p>You can find the demo <a href="https://emile.le-gallic.com/catacombs/">here</a></p>

      <p>You can find the project poster here :</p>
      <ul>
         <li><a href="/assets/images/project9/project-poster-en.webp">English version</a> (EN)</li>
         <li><a href="/assets/images/project9/project-poster-fr.webp">Version française</a> (FR)</li>
      </ul>
      <p>You can find the project explanation slides here :</p>
      <ul>
         <li><a href="https://github.com/Minifixio/catacombs-scan/blob/master/previews/project-slides-en.pdf">English version</a> (EN)</li>
         <li><a href="https://github.com/Minifixio/catacombs-scan/blob/master/previews/project-slides-fr.pdf">Version française</a> (FR)</li>
      </ul>
      <h2 id="project-steps">Project steps</h2>
      <h3 id="1-manual-scans-of-3d-data">1. Manual scans of 3D data</h3>
      <p>Using the Lidar sensor and the cameras of an iPhone and the Polycam application.</p>
      <h3 id="2-treatment-and-fusion-of-3d-scans">2. Treatment and fusion of 3D scans</h3>
      <p>Assembly of scans on CloudCompare, cleaning on Meshlab, rendering and compression on Blender.</p>
      <h3 id="3-creation-of-a-visualization-webapp">3. Creation of a visualization Webapp</h3>
      <p>Coded in Three.js to explore and analyze the Catacombs network and the surrounding places.</p>
      <table>
         <thead>
            <tr>
                  <th></th>
                  <th></th>
                  <th></th>
            </tr>
         </thead>
         <tbody>
            <tr>
                  <td><img class="image"src="/assets/images/project9/preview-13.webp" alt="Merge between catacombs and actual map"> Merge between catacombs and actual map
                  </td>
                  <td><img class="image"src="/assets/images/project9/preview-14.webp" alt="Independent scans exploration"> Independent scans exploration
                  </td>
                  <td><img class="image"src="/assets/images/project9/preview-11.webp" alt="FPV view and controls"> FPV view and controls</td>
            </tr>
         </tbody>
      </table>
      <h3 id="4-implementation-of-a-vr-visit-of-scans">4. Implementation of a VR visit of scans</h3>
      <p>Using an OCULUS Quest VR headset and the Sketchfab platform to configure the 3D scene.</p>
      <p><img class="image"src="/assets/images/project9/preview-12.webp" alt="Oculus view"></p>
      <h2 id="project-progress">Project progress</h2>
      <h3 id="1-manual-scans">1. Manual scans</h3>
      <table>
         <thead>
            <tr>
                  <th></th>
                  <th></th>
            </tr>
         </thead>
         <tbody>
            <tr>
                  <td><img class="image"src="/assets/images/project9/preview-1.webp" alt=""></td>
                  <td><img class="image"src="/assets/images/project9/preview-2.webp" alt=""></td>
            </tr>
         </tbody>
      </table>
      <p>Specific equipment:</p>
      <ul>
         <li>iPhone equipped with a lidar</li>
         <li>Polycam app</li>
         <li>Scan support equipped with battery lamps </li>
         <li>physical landmark</li>
      </ul>
      <table>
         <thead>
            <tr>
                  <th></th>
                  <th></th>
            </tr>
         </thead>
         <tbody>
            <tr>
                  <td><img class="image"src="/assets/images/project9/preview-5.webp" alt=""> Polycam scan</td>
                  <td><img class="image"src="/assets/images/project9/preview-4.webp" alt=""> Polycam settings</td>
            </tr>
         </tbody>
      </table>
      <h3 id="2-scans-processing">2. Scans processing</h3>
      <p>Steps :</p>
      <ul>
         <li>Alignment and fusion with CloudCompare</li>
         <li>Cleaning and filling with Meshlab</li>
         <li>Remailing and rendering with Blender</li>
      </ul>
      <table>
         <thead>
            <tr>
                  <th></th>
                  <th></th>
                  <th></th>
            </tr>
         </thead>
         <tbody>
            <tr>
                  <td><img class="image"src="/assets/images/project9/preview-6.webp" alt="CloudCompare"> CloudCompare</td>
                  <td><img class="image"src="/assets/images/project9/preview-7.webp" alt="MeshLab"> MeshLab</td>
                  <td><img class="image"src="/assets/images/project9/preview-8.webp" alt="Blender"> Blender</td>
            </tr>
         </tbody>
      </table>
      <p><em>8 merged scans, &gt;4M of triangles on all scans &amp; 5 3D formats treated: .glb, .obj., .Ply, .las and .xyz</em>
      </p>
      <h3 id="3-3d-visualization-of-the-surface-and-the-basement">3. 3D visualization of the surface and the basement</h3>
      <ul>
         <li>3D reconstruction of tracks and buildings on blender from satellite images, SRTM elevation data and OSM requests
         </li>
         <li>Fusion and display on a website of surface data and 3D scans</li>
      </ul>
      <p>Plugin used : <a href="https://github.com/domlysz/BlenderGIS">BlenderGIS</a></p>
      <table>
         <thead>
            <tr>
                  <th></th>
                  <th></th>
            </tr>
         </thead>
         <tbody>
            <tr>
                  <td><img class="image"src="/assets/images/project9/preview-9.webp" alt=""></td>
                  <td><img class="image"src="/assets/images/project9/preview-10.webp" alt=""></td>
            </tr>
         </tbody>
      </table>
      
      <h2 id="contributing">Contributing</h2>
      <h3 id="requirements">Requirements</h3>
      <p>This project relies on <a href="https://threejs.org/">Three.js</a> and <a href="https://vitejs.dev/">Vite</a></p>
      
      <h3 id="running-locally">Running locally</h3>
      <p>Clone the project :</p>

      <pre><code>git clone https://gitlab.com/minifixio/catacombs-scan.git</code></pre>
      
      <p>Install required packages :</p>
      
      <pre><code>npm install</code></pre>

      <p>Run the app in <em>staging</em> mode :</p>
      <pre><code>npx vite --mode staging</code></pre>      
      </div>`
}

export default project9;
