export const getAllHomes = async (req, res) => {
	res.send(
		'Hello, My name is Jastine!  I am creating and watching Node API.',
	);
};

export const createHome = async (req, res) => {
	res.status(200).json({
		message: 'Create home route!',
	});
};

export const getOneHome = async (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		message: `Get one home route! id: ${id}`,
	});
};
