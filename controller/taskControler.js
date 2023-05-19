// const Task = require("../file/taskModel");

// const create_task = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

// //get all task
// const getall_task = async (req, res) => {
//   try {
//     const task = await Task.find();
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

// // get single task
// const get_single_task = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const task = await Task.findById(id);
//     // res.send('get single task')
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

// //delete  task
// const delete_single_task = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const task = await Task.findByIdAndDelete(id);
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

// //update task

// const update_task = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!task) {
//       return res.status(500).json(`no task found: ${id}`);
//     }
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

// module.exports = {
//   create_task,
//   getall_task,
//   get_single_task,
//   delete_single_task,
//   update_task,
// };
