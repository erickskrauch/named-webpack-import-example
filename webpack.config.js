module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|gif|jpg|svg)$/,
                loader: 'file-loader',
                query: {
                    name: 'assets/[name]-[folder].[ext]?[hash]',
                },
            },
        ],
    },
};
