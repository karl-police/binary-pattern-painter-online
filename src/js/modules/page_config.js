var b_isDevelopment = (process.env.NODE_ENV == "development")


const PAGE_CONFIG = {
    /**
     * @type string
     */
    home_url: (!b_isDevelopment) ? "https://karl-police.github.io/binary-pattern-painter-online" : "../",
}


export default PAGE_CONFIG;