export default function Home() {
    return (
    <div className="container container-fluid m-1 p-1 mx-auto">
      <h5 className="text-muted">Home</h5>

      <div class="jumbotron jumbotron-fluid">
  <h1 class="display-4">Nice to meet you!</h1>
  <p class="lead">I am <strong>Ralph G. Davidson</strong></p>
  <hr class="my-4"/>
  <img src="src\assets\headshot.png" className="border border-info rounded" width="20%"></img> 
  <p class="lead bg-light">
        "Driven by a passion for technology, my mission is to craft innovative solutions that elevate experiences and empower positive change, connecting individuals in a world where endless possibilities await."
  </p>
</div>
<h3>
  <small class="text-muted">I am currently working as a </small>
  Software Developer
  <small class="text-muted"> at </small>
      <mark>d.e.m.o</mark>
</h3>       
<hr />   
<blockquote className="blockquote">
        <p className="text-center lead mb-0">I drive a <strong>2009 Land Rover Discovery</strong> and love all cars!</p>
  </blockquote>     
        <img src="src\assets\dirt_road.jpg" className="rounded" width="30%"></img> <br/><br/>
        <p>Got questions? Head over to <a href="/contact">Contact me</a></p>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
}