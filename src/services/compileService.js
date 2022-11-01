import axios from 'axios';

const BASE = "compile/";

const CompileService = {
    
    compile: (lang = "javascript", code = "console.log('hello world')") => {
        return axios.post(
            BASE, {lang, code}
        );
    }
}

export default CompileService;