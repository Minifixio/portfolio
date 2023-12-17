import { FileContent } from "src/app/models/FileContent";

const project12: FileContent = {
  id: 12,
  name: "project12",
  contentHTML: `
    <div class="main">
      <h1 id="java-hexagonal-maze-solving-app">Java Hexagonal Maze Solving App</h1>

      <p>Lire la documentation en Français : <a href="README.md">Documentation</a></p>

      <p><strong>Warning:</strong> This project uses an <strong>OpenJDK version 19</strong></p>

      <h2 id="how-to-use">How to Use</h2>
      <ol>
        <li>Download or clone this repository (e.g., <code>$git clone https://github.com/Minifixio/hexagonal-maze-solving-app.git</code>)</li>
        <li>Go to <code>/out/production/hexagonal-maze-solver</code> using <code>$cd hexagonal-maze-solving-app/out/production/hexagonal-maze-solver</code></li>
        <li>Use a Java version <code>>=19.0</code></li>
        <li>Run <code>$java Main</code></li>
      </ol>

      <h1 id="how-it-works">How It Works</h1>
      <p>Click on a tile to change its type. You can set the departure point represented by the traveler and the arrival point with the flag.</p>
      <p>You can change the labyrinth size with the size inputs.</p>
      <p>You can generate a random maze using the Randomize button.</p>
      <p>You can load your own Labyrinth files as long as they respect the <strong>file format</strong>.</p>

      <h2 id="file-format">File Format</h2>
      <p>You can load and export your labyrinths according to a specific format:</p>
      <ol>
        <li>You must write it in a <code>txt</code> file</li>
        <li>Each line must be the same length</li>
        <li>You can only write characters among <code>{'E', 'W', 'A', 'D'}</code> with the corresponding match: <code>{'E' => Empty Maze Box, 'W' => Wall, 'A' => Arrival, 'D' => Departure}</code></li>
        <li>You must have only one Departure case and only one Arrival.</li>
      </ol>

      <h2 id="preview">Preview</h2>
      <img class="image" src="/assets/images/project12/preview1.webp" alt="Preview 1">
      <p><em>Preview 1</em></p>

      <img class="image" src="/assets/images/project12/preview2.webp" alt="Preview 2">
      <p><em>Preview 2</em></p>

      <img class="image" src="/assets/images/project12/preview3.webp" alt="Preview 3">
      <p><em>Preview 3</em></p>

      <img class="image" src="/assets/images/project12/preview4.webp" alt="Preview 4">
      <p><em>Preview 4</em></p>
    </div>
  `,
};

export default project12;
