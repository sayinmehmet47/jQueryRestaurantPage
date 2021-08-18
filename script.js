$(document).ready(function () {
  $('#content').append(`
  <nav>
  <ul class="d-flex justify-content-evenly fs-5 text-warning bg-dark py-3 style="margin-top:40px;"">
      <li id="home">Home</li>
      <li id="menu">Menu</li>
      <li id="contact">Contact</li>
  </ul>
</nav>
<div class='box'>
<div id='text'>
<div class="home-text">    
<h1 >Meat, Eat & Enjoy the true taste</h1>
  <h3>Making a reservation at Delicious restaurant is easy and takes just a couple of minutes</h3>
  <button class="btn btn-danger text-white mt-3">Our Menu</button>
</div>

</div>
</div>



    `);

  $('#home').on('click', () => {
    $('.box').empty();
    $('.box').append(`
    <div id='text' style="margin-top:40px;">
    <div class="home-text">    
    <h1 >Meat, Eat & Enjoy the true taste</h1>
    <h3>Making a reservation at Delicious restaurant is easy and takes just a couple of minutes</h3>
    <button class="btn btn-danger text-white mt-3">Our Menu</button>
  </div>
    
    </div>

      `);
  });

  $('#menu').on('click', () => {
    $('.box').empty();
    $('.box').append(`
    <div class="home-text text-dark" style="margin-top:40px;">    
    <h1 >What will your verse be?</h1>
      <h3>Everyone has something to share.See how people are using IPad in their unique ways to add to the world's story</h3>
      <h5>Watch the "Your Verse" film and explore the stories</h5>
    </div>
    
       `);
  });

  $('#contact').on('click', () => {
    $('.box').empty();
    $('.box').append(`
    <div class="container contact-form text-dark" style="margin-top:40px;">
    <div class="contact-image">
        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
    </div>
    <form method="post">
        <h3>Leave a Message</h3>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" name="txtName" class="form-control" placeholder="Name *" value="" />
                </div>
                <div class="form-group">
                    <input type="text" name="txtEmail" class="form-control" placeholder="Mail Address *"
                        value="" />
                </div>
                <div class="form-group">
                    <input type="text" name="txtPhone" class="form-control" placeholder="Phone Number *"
                        value="" />
                </div>
                <div class="form-group my-3">
                    <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <textarea name="txtMsg" class="form-control" placeholder="Your Message *"
                        style="width: 100%; height: 150px;"></textarea>
                </div>
            </div>
        </div>
    </form>
</div>


    
    `);
  });
});
