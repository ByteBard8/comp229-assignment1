/*
 * Created on Sun Jan 28 2024
 *
 * Sandeep, ID 301400662
 */

export default function Projects() {
    return (
    <div className="container container-fluid m-1 p-1 mx-auto">
        <h5 className="text-muted">Projects</h5>
        <p className="lead">"In the realm of technical projects, innovation is the compass, collaboration is the fuel, and perseverance is the engine that propels us towards success."</p>
   <div className="">
        <h2>Project: Quantum Harmony</h2>
    <img src="project_music.jpg" className="rounded border border-dark"></img>
        <p>An experimental music synthesis project leveraging quantum computing principles. Dive into the unique sounds of the quantum realm!</p>
        <p><a href="https://example.com/quantum-harmony" target="_blank">View Project</a></p>
    </div>

    <div>
        <h2>Project: Nebula Notes</h2>
        <img src="project_notes.jpg" className="rounded border border-dark"></img>
        <p>Nebula Notes is a minimalist note-taking app that lets you capture your thoughts with ease. Simple, sleek, and perfect for your daily ideas.</p>
        <p><a href="https://example.com/nebula-notes" target="_blank">View Project</a></p>
    </div>

    <div class="project">
        <h2>Project: RoboChef</h2>
        <img src="project_recipe.jpg" className="rounded border border-dark"></img>
        <p>RoboChef is an AI-powered cooking assistant that suggests recipes based on your available ingredients. Never wonder what to cook again!</p>
        <p><a href="https://example.com/robochef" target="_blank">View Project</a></p>
        <br />
        <br />
    </div>
      </div>
    );
}