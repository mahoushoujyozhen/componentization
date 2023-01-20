export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","smui.css"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-b2ac20c2.js","imports":["_app/immutable/start-b2ac20c2.js","_app/immutable/chunks/index-698f7898.js","_app/immutable/chunks/singletons-ea28172e.js","_app/immutable/chunks/index-9b857929.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "chat",
				pattern: /^\/chat\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "filemanage",
				pattern: /^\/filemanage\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "msgmanage",
				pattern: /^\/msgmanage\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "sverdle",
				pattern: /^\/sverdle\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "sverdle/how-to-play",
				pattern: /^\/sverdle\/how-to-play\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
