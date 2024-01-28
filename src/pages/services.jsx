/*
 * Created on Sun Jan 28 2024
 *
 * Sandeep, ID 301400662
 */

export default function Services() {
    return (
    <div className="container container-fluid m-1 p-1 mx-auto" style={{height:"90vh"}}>
        <h5 className="text-muted">Services</h5>
        <table className="table table-striped table-bordered table-hover">
            <thead>
            <th scope="col">Service type</th>
            <th scope="col">Service description</th>
            </thead>
        <tr>
  </tr>
  <tbody>
        <tr>
            <td><strong>Web Development:</strong></td>
            <td>Crafting responsive and user-friendly websites using HTML, CSS, and JavaScript to provide an exceptional online experience.</td>
        </tr>
        <tr>
            <td><strong>Mobile App Development:</strong></td>
            <td>Designing and developing cross-platform mobile applications using frameworks like React Native for seamless user interaction on the go.</td>
        </tr>
        <tr>
            <td><strong>Database Management:</strong></td>
            <td>Building and optimizing databases to ensure efficient data storage, retrieval, and management for scalable applications.</td>
        </tr>
        <tr>
            <td><strong>Software Architecture:</strong></td>
            <td>Designing robust and scalable software architectures to meet the unique needs and demands of your projects.</td>
        </tr>
        <tr>
            <td><strong>Code Review and Optimization:</strong></td>
            <td>Conducting thorough code reviews and optimizing existing codebases for improved performance and maintainability.</td>
        </tr>
        <tr>
            <td><strong>Technical Consultation:</strong></td>
            <td>Providing expert guidance and consultation on technical aspects, helping you make informed decisions for your projects.</td>
        </tr>
        </tbody>
    </table>

      </div>
    );
}