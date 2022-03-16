class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `  <nav class="navbar ">
              <a class="navbar-brand " href="#">
                    <i class="fa fa-hospital-o text-danger font-weight-solid font-italic " aria-hidden="true">RUKMANI HOSPITAL</i>

                    </a>
              <div class="head">
              
               </div>
                <div class="Items">
                <button class="btn"><a href="index.html">HOME</a></button>
                <button class="btn "><a href="gallery.html">GALLERY</a></button>
                <button class="btn"><a href="Headoffice.html">OUR OFFICES</a></button>
                <button class="btn"><a href="health.html">HEALTH TIPS</a></button>
                <button class="btn"><a href="login.html">LOGIN</a></button>
                <button class="btn"><a href="register.html">REGISTER</a></button>

                </div>

                <div class="Items"> 
                <button class="btn btn-light"><a href="#" data-toggle="modal" data-target="#contact">Contact Us</a></button>
                </div>

                <div id = "contact"  class="modal fade" data-keyboard = 'false' data-backdrop = 'static' role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div class="modal-dialog modal-md modal-dialog-centered ">
                    <div class="modal-content">
                        <div class="modal-header bg-dark">
                            <h4 class="modal-title float-left text-primary " id="myModalLabel">Contact Us</h4>
                            <button class="close text-white" data-dismiss = 'modal' aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label >Name</label>
                                    <input type="number" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label >Email</label>
                                    <input type="text" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label >Phone No.</label>
                                    <input type="number" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="message">Your message :</label>
                                <textarea class="form-control"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer bg-dark">
                            <button type="button" class="btn btn-danger mx-auto" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success mx-auto">
                                Save 
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                </nav>
                        
                        `
    }
}
customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        
        <footer class="page-footer font-small bg-dark text-white pt-4">
        <h2 class="text-center text-danger font-italic">WE CARE ABOUT YOU & YOUR HEALTH</h2>
          <div class="container-fluid text-center mt-4 text-md-left">
            <div class="row">
              
              <!-- Grid column -->
              <div class="col-3">
        
                <!-- Links -->
                <h5 class="text-uppercase  text-info">Official Contacts</h5>
        
                <ul class="list-unstyled">
                <li>
                   
                   <p>Address: Head Office Rukmani Hospital <br>
                    Sector-67 ,Jubilee hills <br>
                    Hydrabad <br>
                    State :- Telangana<br>
                    Pin code-500095</p> 
                  </li>
                  <li>
                    <a class="text-white" href="#">Phone- 1800-321-678</a>
                  </li>
                  <li>
                    <a class="text-white" href="#">Gmail- r.hospital@gmail.com</a>
                  </li>
                  
                </ul>
        
              </div>
              <!-- Grid column -->
        
              <!-- Grid column -->
              <div class="col-3">
        
                <!-- Links -->
                <h5 class="text-uppercase text-info">Follow Us </h5>
        
                <ul class="list-unstyled">
                  <li>
                    <a class="text-white" href="#">Facebook</a>
                  </li>
                  <li>
                    <a class="text-white" href="#">Twitter</a>
                  </li>
                  <li>
                    <a class="text-white" href="#">Linkdin</a>
                  </li>
                  <li>
                    <a class="text-white" href="#!">Pinrest</a>
                  </li>
                </ul>
        
              </div>
              <!-- Grid column -->
              <div class="col-3">
              <h5 class="text-uppercase text-info">Department </h5>
              <ul class="list-unstyled">
                  <li>
                    <a class="text-white" href="#">Outpatient</a>
                  </li>
                  <li>
                    <a class="text-white" href="#">Medical</a>
                  </li>
                  <li>
                    <a class="text-white" href="#">Pharmacy</a>
                  </li>
                  <li>
                    <a class="text-white" href="#!">Radiology</a>
                  </li>
                  <li>
                    <a class="text-white" href="#!">Blood</a>
                  </li>
                </ul>
              </div>
              <div class="col-3">
        
                <!-- Links -->
                <h5 class="text-uppercase  text-info">COMMUNITY</h5>
        
                <ul class="list-unstyled">
                  <li>
                    <a class="text-white" href="#">Community</a>
                  </li>
                  <li>
                    <a class="text-white" href="#">Blogs</a>
                  </li>
                  <li>
                    <a class="text-white" href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a class="text-white" href="#">Authors</a>
                  </li>
                </ul>
        
              </div>
            </div>
            <!-- Grid row -->
        
          </div>
          <!-- Footer Links -->
        
          <!-- Copyright -->
          <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="/"> Rukmani Hospital.com</a>
          </div>
          <!-- Copyright -->
        
        </footer>
        <!-- Footer -->
         `
    }
}
customElements.define('my-footer',MyFooter)