const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    service: req.body.service,
    message: req.body.message,
  });
  
  try {
   
    await contact.save();
  
   
    res.status(200).json({ message: 'Contact successfully saved' });
  } catch (error) {
   
    res.status(500).json({ error });
  }