import { FileContent } from "src/app/models/FileContent";

const project11: FileContent = {
  id: 11,
  name: "project11",
  contentHTML: `
    <div class="main">
      <h1 id="solar-system-in-opengl">Solar System in OpenGL</h1>
      <p>This project focuses on creating an interactive 3D solar system using C++ and OpenGL. Below is a detailed overview of the development process and key features implemented.</p>

      <p>It was created during the 3D class under the instruction of Dr. Kiwon Um at Telecom Paris. I would like to express my appreciation to Dr. Um for his guidance during the course and for sharing valuable file templates.</p>

      <h2 id="1-the-first-spheres">1. The First Spheres</h2>
      <p>I began by using the Mesh class to generate a sphere mesh with a specific resolution. The goal of <code>genSphere</code> was to divide the sphere into sectors, with each point expressed through its parametric equation:</p>

      <pre>
        <code>
          x = r * cos(phi) * cos(theta)
          y = r * cos(phi) * sin(theta)
          z = r * sin(phi)
        </code>
      </pre>

      <p>The points were gradually placed by incrementing both phi and theta by <code>π * i / resolution</code> and <code>2 * π * j / resolution</code>, respectively. Triangulating adjacent vertices required complex computations between two horizontal divisions.</p>

      <p>For the normals, it was straightforward since, for a sphere, it is the line from the center to the vertex. Triangulation involved computing triangles between two horizontal divisions.</p>

      <p>At this point, I successfully rendered a correct sphere and added color using a color vector in the fragment shader.</p>

      <h2 id="2-rotations-and-orbits">2. Rotations and Orbits</h2>
      <p>Transformation was applied to celestial objects using <code>glm::translate</code> and <code>glm::rotate</code>. Planets were moved away from the sun, and rotations around the sun were implemented. The position of the planet was computed based on orbit radius and period.</p>

      <h2 id="3-textures">3. Textures</h2>
      <p>Texture implementation presented challenges, especially in computing vertex texture coordinates. The 2D texture image was divided into square sectors of the length of the resolution. Textures for Earth, the sun, and the moon were added, fixing lighting issues caused by neglecting transformations in vertex shaders.</p>

      <h2 id="4-further-features">4. Further Features</h2>
      <p>Additional features included zoom control with the mouse wheel, camera movement with arrow keys, and the incorporation of a skybox for a captivating space background.</p>

      <h2 id="5-notes-and-usage">5. Notes and Usage</h2>
      <p>The project utilizes three main classes:</p>

      <ul>
        <li><strong>CelestialObject:</strong> Represents a Planet or a Star with properties like orbit period, radius, rotation period, parent star, and texture.</li>
        <li><strong>Camera:</strong> Controls camera movement and handles keyboard/mouse inputs.</li>
        <li><strong>Skybox:</strong> Generates the space background.</li>
      </ul>

      <p>The <code>main.cpp</code> file orchestrates the program execution.</p>

      <h3 id="commands">Commands:</h3>
      <ul>
        <li><strong>Mouse Scroll:</strong> Adjust zoom.</li>
        <li><strong>Arrow Keys:</strong> Move the camera.</li>
      </ul>

      <h3 id="images">Images</h3>
      <img class="image" src="/assets/images/project11/image1.webp" alt="With skybox">
      <p><em>With skybox</em></p>

      <img class="image" src="/assets/images/project11/image2.webp" alt="With skybox">
      <p><em>With skybox</em></p>

      <img class="image" src="/assets/images/project11/image3.webp" alt="In the dark">
      <p><em>In the dark</em></p>
    </div>
  `,
};

export default project11;
