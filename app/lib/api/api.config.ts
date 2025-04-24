import axios from "axios";

const baseUrl =
	"https://raw.githubusercontent.com/mrkendrick/soar/refs/heads/dev/app/lib/data";

const headers = {
	"Content-Type": "application/json; charset=utf-8",
};

export const api = axios.create({
	baseURL: baseUrl,
	headers,
	timeout: 60000,
});
