import axios from "axios";
const BASE = "eval/";

const EvalService = {
    evaluate: (userId, problemId, code, lang) => {
        return axios.post(BASE, {userId, problemId, code, lang})
    }
}

export default EvalService;