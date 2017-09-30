import chalk from 'chalk'

const generateErrorMessage = (title, message) => {
    return chalk`
    {bgRed  }{bgRedBright.white  ${title} }
    {redBright ${message}}
    `
};
const generateWarningMessage = (title, message) => {
    return chalk`
    {bgYellow  }{bgYellowBright.black  ${title} }
    {yellowBright ${message}}
    `
};
const generateSuccessMessage = (title, message) => {
    return chalk`
    {bgGreen  }{bgGreenBright.black  ${title} }
    {greenBright ${message}}
    `
};

class Report {
    /**
     * Report constructor
     * @param options
     */
    constructor (options = {type: 'error', message: ''}) {
        this.isReport = true;
        this.type = options.type.toLowerCase();
        this.isSuccess = this.type === 'success';
        this.isWarning = this.type === 'warning';
        this.isError = this.type === 'error';
        this.message = options.message;
        this.onCreated()
    }
    onCreated () {
        const content = {
            type: this.type,
            message: this.message
        };
        if (this.isError) console.log(generateErrorMessage(`Error`, content.message));
        if (this.isWarning) console.log(generateWarningMessage(`Warning`, content.message));
        if (this.isSuccess) console.log(generateSuccessMessage(`Success`, content.message));
    }
}

export default Report