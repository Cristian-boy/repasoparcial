const carros = [
  { id: '1', marca: 'Toyota' },
  { id: '2', marca: 'Ford' }
];
//Los comandos aquí renderizan la vista en el listado, el formulario y reciben los datos del formulario.
module.exports = {
  index(req, res) {
    res.render('index34', { carros });
  },


  createForm(req, res) {
    res.render('create34');
  },

 
  create(req, res) {
    const { id, marca } = req.body;
    if (!id || !marca) {
      return res.status(400).send('Se requiere id y marca');
    }
//aqui evita que se repita el mismo ID
    const exists = carros.find(c => c.id === id);
    if (exists) {
      return res.status(400).send('Ya existe un carro con ese id');
    }
    carros.push({ id, marca });
    return res.redirect('/');
  },

  show(req, res) {
    const id = req.params.id || req.query.id;
    if (!id) {
      return res.render('show34', { carro: null, id: null });
    }
    //Buscar el carro  con el vector.
    const carro = carros.find(c => c.id === id);
    return res.render('show34', { carro: carro || null, id });
  }
};
