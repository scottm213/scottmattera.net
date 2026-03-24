
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/bbhood" | "/demos" | "/fumo" | "/museum" | "/otherprojects" | "/other" | "/payload" | "/work";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/bbhood": Record<string, never>;
			"/demos": Record<string, never>;
			"/fumo": Record<string, never>;
			"/museum": Record<string, never>;
			"/otherprojects": Record<string, never>;
			"/other": Record<string, never>;
			"/payload": Record<string, never>;
			"/work": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/bbhood" | "/bbhood/" | "/demos" | "/demos/" | "/fumo" | "/fumo/" | "/museum" | "/museum/" | "/otherprojects" | "/otherprojects/" | "/other" | "/other/" | "/payload" | "/payload/" | "/work" | "/work/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/file/bbhoodtheme.ptf" | "/image/LinkedIn_icon.svg" | "/image/bbtheme.jpeg" | "/image/bgcand1.jpg" | "/image/bishop.png" | "/image/fortnite_command_gif.gif" | "/image/fumoHi.png" | "/image/mark-github.svg" | "/image/povray.png" | "/image/reflectiveOrbs.png" | "/image/reimu.PNG" | "/image/saturn.png" | "/image/tuxPC.gif" | "/image/webBG.png" | "/image/websitebackground.png" | "/robots.txt" | string & {};
	}
}