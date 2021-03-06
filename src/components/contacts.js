import React from 'react';

const Contacts = ({ contacts }) => {

  return (

    <div>
      <div class="text-center py-3 mb-2 text-white bg-primary">
        <h1>Contact List</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {
              contacts.map((contact) => (
                
                <div class="card">

                    <div class="card-body">

                        <h5 class="card-title">{contact.name}</h5>

                        <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>

                        <p class="card-text">{contact.company.catchPhrase}</p>

                    </div>

                </div>
              ))
            }
        </div>
        </div>
      </div>
    </div>
    
  )

};

export default Contacts