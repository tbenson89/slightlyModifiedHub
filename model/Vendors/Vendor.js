let Vendor = {
  'vendorId': Number, // this is a field after the generic mongo objectID
  'created': Date(),
  'modified': Date(),
  'email': String,
  'defaultEmail': Boolean,
  'vendor': Boolean,
  'registrationSource': String,
  'street-address': String,
  'state': String,
  'city': String,
  'zip-postal': String,
  'checkMultipleAddresses': Boolean,
  'secondary-address': String,
  'secondary-state': String,
  'secondary-city': String,
  'secondary-zip-postal': String,
  'companyName': String,
  'VendorNotes': String,
}