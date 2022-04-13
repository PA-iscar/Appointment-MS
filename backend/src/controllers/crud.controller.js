//* Create
const createOne = (model) => async (req, res) => {
    const item = await model.create(req.body);
    res.status(201).json(item);
  };
  
  //* Read Many
  const getAll = (model) => async (req, res) => {
    const items = await model.find();
    res.status(200).json(items);
  };
  
  //* Read One
  const getOne = (model) => async (req, res) => {
    const item = await model.findById(req.params.id);
    res.status(200).json(item);
  };
  
  //* Update
  const updateOne = (model) => async (req, res) => {
    const updatedItem = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedItem);
  };
  
  //* Delete
  const deleteOne = (model) => async (req, res) => {
    const deletedItem = await model.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedItem);
  };
  
  module.exports = (model) => ({
    post: createOne(model),
    getOne: getOne(model),
    getAll: getAll(model),
    updateOne: updateOne(model),
    deleteOne: deleteOne(model),
  });
  