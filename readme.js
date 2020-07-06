class ReadMe {

        title = "";
        badges = [];
        snapshot = "";
        description = "";
        tableofcontents = [];
        installation = "";
        tests = [];
        license = 0;
        license_cat = [];
        contributing = "";
        questions = [];

    constructor (id) {
        this.id = id;
        //https://www.slant.co/topics/1141/~best-open-source-licenses
        this.license_cat = [
            "MIT",
            "ISC",
            "Apache-2.0",
            "GPLv3",
            "GPLv2",
            "BSD3",
            "LGPLv2.1",
            "BSD2",
            "Microsoft Public",
            "Eclipse 1.0",
            "BSD"];
    }

    getId() {
        return this.id;
    }

    setProperty(targetProperty,value) {
        this[targetProperty] = value;
    }

    getProperty(targetProperty) {
        return this[targetProperty];
    }

}

module.exports = { 
    ReadMe 
};