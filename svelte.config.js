import nodeAdapter from "@sveltejs/adapter-node";

export default {
	kit: {
		adapter: nodeAdapter({
			// default options are shown
			out: "build", // the directory to write the output to
			precompress: true // use brotli to precompress static assets
		}),
		target: "#svelte"
	}
};
