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
        this.message = options.message
    }
}

export default Report