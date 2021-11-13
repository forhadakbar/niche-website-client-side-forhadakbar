import React from 'react';
import './Subscription.css'

const Subscription = () => {
    return (
        <div id="subscription">

            <section className="container d-flex justify-content-center background my-5 p-5 border-5 rounded-3"
                id="subscribe">
                <div>
                    <h1>LET'S STAY IN TOUCH</h1>
                    <p>Get updates on sales, specials and more</p>
                    <div class="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div><br />
                    <button type="button" className="btn btn-tour">SEND</button>
                </div>

            </section>
        </div>
    );
};

export default Subscription;