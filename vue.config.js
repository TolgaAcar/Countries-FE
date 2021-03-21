module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/styles/globals.scss";
					@import "@/styles/variables.scss";
        		`,
			},
		},
	},
};
