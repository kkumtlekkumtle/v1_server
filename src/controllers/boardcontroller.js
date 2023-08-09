const {board} = require('../models');

module.exports = {
  async getAllBoards(req, res) {
    console.log(board);
    try {
      const boards = await board.findAll();
      res.json(boards);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
