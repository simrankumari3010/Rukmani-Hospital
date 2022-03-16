class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `  <nav class="navbar ">
        <div class="head">
        <i class="fa-solid fa-hospital" style="font-size:48px;color:rgb(192, 168, 168)">&nbsp;<span class="h1">Rukmani Hospital</span></i>
                </div>
                <div class="Items">
                <button class="btn"><a href="../index.html">HOME</a></button>
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
        
       

    <footer class="page-footer font-small blue pt-4 text-white bg-dark">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
              <div class="col-md-12 py-5">
                <div class="mb-5 flex-center">

                
                <a class="fb-ic">
                  <i class="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                
                <a class="tw-ic">
                  <i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                
                <a class="gplus-ic">
                  <i class="fa fa-google fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <!--Linkedin -->
                <a class="li-ic">
                  <i class="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <!--Instagram-->
                <a class="ins-ic">
                  <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <!--Pinterest-->
                <a class="pin-ic">
                  <i class="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                </a>
              </div>
      </div>
      <!-- Grid column -->

    </div>
    
  </div>
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/"> RukmaniHospital.com</a>
  </div>
 </footer>
         `
    }
}
customElements.define('my-footer',MyFooter)