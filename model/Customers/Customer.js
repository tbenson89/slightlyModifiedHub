let Customer = {
  'customerId': Number, // this is a field after the generic mongo objectID
  'firstName': String,
  'middleName': String,
  'lastName': String,
  'created': Date(),
  'modified': Date(),
  'email': String,
  'defaultEmail': Boolean,
  'vendor': Boolean,
  'registrationSource': String,
  'street-address': String,
  'checkMultipleAddresses': Boolean,
  'state': String,
  'city': String,
  'zip-postal': String,
  'companyName': String,
  'paymentType': {
    'paypal': String,
    'CC': {
      'type': String,
      'nameOnCard': String,
    },
    'cash-deposit': String,
    'e-coin': String
  },
  'customerNotes': String
}
