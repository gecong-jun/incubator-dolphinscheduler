import axios from 'axios';

const getStorageConfig = () => {
    let config = sessionStorage.getItem("serverConfig");
    if (config) {
        return JSON.parse(config);
    } else {
        return null;
    }
};

export default {
    // async getConfig () {
    //     let config = getStorageConfig();
    //     if (!config) {
    //         const res = await axios.get('/config.json');
    //         config = res.data;
    //         sessionStorage.setItem("serverConfig", JSON.stringify(config));
    //     }
    //     return config;
    // },

    getConfig () {
        return getStorageConfig() || window.$config;
    }    
};