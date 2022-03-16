class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `  <nav class="navbar ">
        <div class="head">
        <i class="fa-solid fa-hospital" style="font-size:48px;color:rgb(192, 168, 168)">&nbsp;<span class="h1">Rukmani Hospital</span></i>
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
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-4 ml-4 mt-md-0 mt-3">
                <h5 class="text-uppercase  text-info">Rukmani Hospital</h5>
                <p class="text-justify">Rukamin Hospital is a very good and proper manage hospital. 
                Proper facilities are provide in our hospital. Everyone wants to fit and health in a 
                better way. So Rukmani hospital is best in every field of patient requirement and expectation.You can join with us.</p>
        
              </div>
              <!-- Grid column -->
        
              <hr class="clearfix w-100 d-md-none pb-3">
        
              <!-- Grid column -->
              <div class="col-md-3 ml-5 mb-md-0 mb-3">
        
                <!-- Links -->
                <h5 class="text-uppercase  text-info">Official Contacts</h5>
        
                <ul class="list-unstyled">
                  <li>
                    <a class="text-white" href="#">1800-321-678</a>
                  </li>
                  <li>
                    <a class="text-white" href="#">r.hospital@gmail.com</a>
                  </li>
                  
                </ul>
        
              </div>
              <!-- Grid column -->
        
              <!-- Grid column -->
              <div class="col-md-3 ml-5 mb-md-0 mb-3">
        
                <!-- Links -->
                <h5 class="text-uppercasetext-info">Follow Us <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-flag fa-stack-1x fa-inverse"></i>
              </span>
              fa-flag on fa-circle<br> </h5>
        
                <ul class="list-unstyled">
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#">Link 2</a>
                  </li>
                  <li>
                    <a href="#">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
        
              </div>
              <!-- Grid column -->
        
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