import apiInstance from "./apiInstance";


const CompileService = {
    
    compile: (lang = "javascript", code = "console.log('hello world')") => {
        return apiInstance.post(
            '/compile', {lang, code}
        );
    }
}

export default CompileService;