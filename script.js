/* Reset some basic styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Body and general layout */
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
  }
  
  /* Header styles */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #333;
    padding: 20px;
    color: white;
  }
  
  header .logo h1 {
    font-size: 2rem;
  }
  
  header nav ul {
    list-style: none;
  }
  
  header nav ul li {
    display: inline;
    margin: 0 15px;
  }
  
  header nav ul li a {
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
  }
  
  /* Hero section */
  .hero {
    background: url('images/hero-bg.jpg') no-repeat center center/cover;
    color: white;
    text-align: center;
    padding: 100px 20px;
  }
  
  .hero h2 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  .hero p {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .hero .btn {
    padding: 10px 20px;
    background-color: #e53946;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.1rem;
  }
  
  /* About Section */
  .about {
    padding: 50px 0;
    background: #fff;
    text-align: center;
  }
  
  .about p {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  /* Classes Section */
  .classes {
    padding: 50px 0;
    background: #f4f4f4;
  }
  
  .classes h2 {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .class-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .card {
    background: white;
    width: 30%;
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 15px;
  }
  
  .card h3 {
    margin-bottom: 10px;
  }
  
  .card p {
    font-size: 1rem;
    color: #666;
  }
  
  /* Contact Section */
  .contact {
    background: #333;
    color: white;
    padding: 50px 20px;
  }
  
  .contact form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  
  .contact form input,
  .contact form textarea {
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
  }
  
  .contact form button {
    background-color: #e53946;
    color: white;
    padding: 10px;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .contact form button:hover {
    background-color: #c62828;
  }
  
  /* Footer */
  footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 10px;
  }
  