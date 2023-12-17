import { FileContent } from "src/app/models/FileContent";

const project13: FileContent = {
  id: 13,
  name: "project13",
  contentHTML: `
    <div class="main">
      <h1 id="decision-trees-project">Decision Trees Project</h1>

      <p>This Python project builds decision trees from CSV files following a specific format. The data files should be in CSV format, where each line represents a data point. The first column is the label of the point, and the following columns are features. The first line indicates the types of the data, where 'l' is for "label", 'b' is for "binary", 'c' is for "categorical", and 'r' is for "real".</p>

      <h2 id="usage">Usage</h2>

      <h3 id="installation">Installation</h3>

      <ol>
        <li>Clone the repository:
          <pre><code>git clone https://github.com/Minifixio/decision-trees.git</code></pre>
        </li>
        <li>Navigate to the project directory:
          <pre><code>cd decision-trees</code></pre>
        </li>
      </ol>

      <h3 id="running-the-algorithm">Running the Algorithm</h3>

      <p>Use the following commands to run the algorithm:</p>

      <pre><code>python main.py file_path [-hgt HEIGHT] [-msp MIN_SPLIT_POINTS] [-tsp TREE_SIZE_PROPORTION] [-fudyadt]</code></pre>

      <ul>
        <li><code>file_path</code>: Path to the CSV file.</li>
      </ul>

      <p>Optional arguments:</p>

      <ul>
        <li><code>-hgt</code>, <code>--height</code>: Height of the decision tree (optional).</li>
        <li><code>-msp</code>, <code>--min_split_points</code>: Minimum split points (optional).</li>
        <li><code>-tsp</code>, <code>--tree_size_proportion</code>: Tree size proportion (optional).</li>
        <li><code>-fudyadt</code>: Use the FuDyADT method (optional).</li>
      </ul>

      <h3 id="file-format">File Format</h3>

      <p>Ensure that your CSV file follows the specified format, where the first line denotes the types of the data, and subsequent lines represent data points.</p>

      <p>Example:</p>

      <pre><code>b,r,r,c,c,c,c,c,c,c,r,r,r,c,c,l,b,b,b,b,b,b
1,5000,1,0,0,0,5,1,2,2,100,5,5,0,0,1,1,1,1,0,1,0
...</code></pre>

      <p>I have included some example files in the examples folder.</p>

      <h2 id="project-structure">Project Structure</h2>

      <ul>
        <li><code>main.py</code>: Main script for running the algorithm.</li>
        <li><code>PointSet.py</code>: Module for the PointSet object, which handles labels, features, and partitions.</li>
        <li><code>Tree.py</code>: Module implementing decision trees.</li>
        <li><code>evaluation.py</code>: Module for computing F1 scores.</li>
      </ul>

      <h2 id="credits">Credits</h2>

      <p>This project is based on the Data Mining class at Télécom Paris by Professor Mauro Sozio.</p>

      <h2 id="references">References</h2>

      <ul>
        <li><a href="https://arxiv.org/pdf/2212.00778.pdf">FuDyADT Algorithm Paper</a> by Gabriel Damay, Marco Bressan, and Mauro Sozio.</li>
      </ul>
    </div>
  `,
};

export default project13;
