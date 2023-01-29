
import React from 'react';
  
const front = () => {
  return (
    <div class="container-fluid">
		
    <div class="card card-inverse text-left" style="">
    
    <img class="card-img-top" src="/images/bgimage.jpg" alt="Photo of earth">
    
    <div class="card-img-overlay">
    <h4 class="card-title display-3 text-white align-middle">
        <br>
        <br>
        <div class="row">
            <div class="col-md-7">Communicate with your community, communicate with the world</div>
            <!-- <div class="col-md-5 text-right">$42</div> -->
        </div>
    </h4>
    <div class="row">
        <div class="col-md-4">
            <h5 class="card-text text-white">
                Global Chat is a chat based application that allow users to connect with people within their city and beyond.
            </h5>
        </div>
    </div>
    <br>
    <br>
    <div class="card-text">
        <div class="row">
          <div class="col">
            <button class="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div>
    
    </div>
    
    <div class="card-body">
        <div class="container">
            <div class="row">
              <div class="col-sm">
                <div class="container-fluid bg-dark">
                    <h1 class="display-3 text-white text-center"> About Us</h1>
                </div>              
              </div>

              <div class="col-sm">
                <div class="container-fluid bg-dark">
                    <h1 class="display-3 text-white text-center"> Goals</h1>
                </div>
              </div>

              <div class="col-sm">
                <div class="container-fluid bg-dark">
                    <h1 class="display-3 text-white text-center"> Github</h1>
                </div>              
              </div> 
            </div>
          </div>
    </div>
    </div>
</div>
  );
};
  
export default front;