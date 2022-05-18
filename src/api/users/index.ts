import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
	return res.json([{ id: 1 }, { id: 2 }]);
});

router.get('/:userId', (req, res) => {
	return res.json({ id: req.params.userId });
});

export default router;