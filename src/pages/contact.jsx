import {useNavigate} from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Your logic here
        alert('Form submitted!');
        navigate('/');
      };

    return (
        <div className="container container-fluid m-1 p-1 mx-auto">
        <h5 className="text-muted">Contact</h5>
        <div class="card m-2" style={{width: "18rem"}}>
  <img class="card-img-top" src="src\assets\shiba_inu_generated.png" alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Contact Info</h5>
    <p class="card-text">Address <address>350 rue Levy Montreal, QC H3C 5K4</address></p>
    <p className='card-text'>Cell: (123) 456-7890</p>
    <p className='card-text'>Email: RalphGDavidson@teleworm.us</p>
  </div>
</div>
  <p>Or, please fill out the form below</p>
        <form action="/" method="get" onSubmit={handleSubmit}>
        <div class="form-row">
        <div className="form-group col">
        <label for="firstName">First Name:</label>
        <input className="form-control" type="text" id="firstName" name="firstName" placeholder="John" required />
        </div>
        <div className="form-group col">
        <label for="lastName">Last Name:</label>
        <input  className="form-control" type="text" id="lastName" name="lastName" placeholder="Smith" required />
        </div>
        </div>
        <div className="form-group">
        <label for="contactNumber">Contact Number:</label>
        <input  className="form-control" type="tel" id="contactNumber" name="contactNumber" placeholder="+1(XXX) XXX-XXXX" required />
        </div>
        <div className="form-group">
        <label for="email">Email Address:</label>
        <input  className="form-control" type="email" id="email" name="email"  placeholder="name@example.com" required />
        </div>
        <div className="form-group">
        <label for="message">Message:</label>
        <textarea  className="form-control" id="message" name="message" rows="4" placeholder="Enter your message here" required ></textarea>
        </div>
        <button type="submit" class="m-4 btn btn-primary">Submit</button>
    </form>
<br />
<br />

      </div>
    );
}