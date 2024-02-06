import axios from "axios";

const axiosWithAuth = () => {
	const token = localStorage.getItem("token");
	const instance = axios.create({
		headers: {
			Authorization: token,
		},
	});

	return instance;
};

export default axiosWithAuth;
