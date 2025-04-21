import axios from "axios";

const baseUrl = "https://soartask.free.beeceptor.com/api/v1";

const headers = {
	"Access-Control-Allow-Origin": true,
	"Access-Control-Allow-Credentials": "include",
	"Content-Type": "application/json; charset=utf-8",
};

export const api = axios.create({
	baseURL: baseUrl,
	headers,
	timeout: 60000,
	withCredentials: true,
});
