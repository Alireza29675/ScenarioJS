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
        if (this.isError) console.error(content);
        if (this.isWarning) console.warn(content);
        if (this.isSuccess) console.log(content)
    }
}

export default Report