import axios from 'axios';

const BASE = 'problems/';

const ProblemService = {
    getAll: ()=> {
        return axios.get(BASE);
    }
}

export default ProblemService;