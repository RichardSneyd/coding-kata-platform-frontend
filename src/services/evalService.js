import axios from "axios";
import GlobalConfig from "../config/GlobalConfig";

const EvalService = {
    evaluate: (userId, problemId, code, lang) => {
        return axios.post(GlobalConfig.getApiOrigin + '/eval', {userId, problemId, code, lang})
    }
}

export default EvalService;