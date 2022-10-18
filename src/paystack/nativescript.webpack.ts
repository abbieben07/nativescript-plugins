/**
 * @param {typeof import("@nativescript/webpack")} webpack
 */
module.exports = webpack => {
    webpack.Utils.addCopyRule({
        from: '@abbieben/paystack/www',
        to: 'paystack/',
        context: webpack.Utils.project.getProjectFilePath('node_modules')
    })
}
